import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Pressable, Alert } from "react-native";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../config/FirebaseConfig";

const Faves = ({ navigation, route }) => {
	const [eventList, setEventList] = useState([]);

	const getEvents = async () => {
		try {
			const collectionRef = collection(FirebaseDB, "events");

			const eventDocs = await getDocs(collectionRef);
			const localEvents = [];
			eventDocs.forEach((doc) => {
				const Event = {
					id: doc.id,
					...doc.data(),
				};

				localEvents.push(Event);
			});

			const faves = localEvents.filter((e) => e.favourite === true);

			setEventList(faves);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getEvents();
	}, []);

	const removeAllFaves = async () => {
		try {
			const collectionRef = collection(FirebaseDB, "events");
			const eventDocs = await getDocs(collectionRef);

			eventDocs.forEach((docu) => {
				const eventRef = doc(FirebaseDB, "events", docu.id);
				setDoc(eventRef, { favourite: false }, { merge: true });
			});
		} catch (error) {
			console.log(error);
		}
	};

	const EventItem = ({ item }) => (
		<Pressable
			style={styles.buttonStyle}
			onPress={() => {
				const startDate = new Date(item.start.seconds * 1000);
				const endDate = new Date(item.end.seconds * 1000);
				navigation.navigate("EventDetails", { id: item.id, name: item.name, location: item.location, start: startDate, end: endDate, favourite: item.favourite });
			}}
		>
			<Text style={styles.buttonText}>
				{item.name} at {item.location}
			</Text>
		</Pressable>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: StatusBar.currentHeight }}>
				<Pressable
					style={[styles.buttonStyle, { backgroundColor: "red" }]}
					onPress={() => {
						Alert.alert("Delete all Favorites?", "", [
							{ text: "No", style: "cancel" },
							{
								text: "Yes",
								onPress: () => {
									removeAllFaves();
									navigation.popToTop();
								},
							},
						]);
					}}
				>
					<Text style={styles.buttonText}>Delete All Faves</Text>
				</Pressable>
				<FlatList keyExtractor={(item) => item.id} data={eventList} renderItem={({ item }) => <EventItem item={item} />} />
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "left",
		justifyContent: "center",
	},
	buttonStyle: {
		margin: 10,
		padding: 10,
		alignItems: "left",
		justifyContent: "center",
		width: "75%",
		height: 45,
		borderRadius: 5,
		backgroundColor: "#10ac84",
	},
	buttonText: {
		fontSize: 15,
		color: "white",
	},
});

export default Faves;
