import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../config/FirebaseConfig";

const EventList = ({ navigation, route }) => {
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
			setEventList(localEvents);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getEvents();
	}, []);

	const EventItem = ({ item }) => (
		<TouchableOpacity style={styles.buttonStyle}>
			<Text style={styles.buttonText}>
				{item.name} at {item.location}
			</Text>
			<Text style={styles.buttonText}>
				{item.start.getMonth()}-{item.start.getDate()} to {item.end.getMonth()}-{item.end.getDate()}
			</Text>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: StatusBar.currentHeight }}>
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

export default EventList;
