import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from "react-native";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../config/FirebaseConfig";

const EventDetails = ({ navigation, route }) => {
	const { id, name, location, start, end } = route.params;
	let { favourite } = route.params;

	const toggleFave = async () => {
		try {
			const docRef = doc(FirebaseDB, "events", id);
			setDoc(docRef, { favourite: !favourite }, { merge: true });
			favourite = !favourite;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: StatusBar.currentHeight }}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.location}>{location}</Text>
				<Text style={styles.date}>
					{start.getMonth()}-{start.getDate()} to {end.getMonth()}-{end.getDate()}
				</Text>
				<Text style={styles.fave}>{favourite ? "Favorited" : "Not Favorited"}</Text>
				<Button
					title="Toggle Favourite"
					onPress={() => {
						toggleFave();
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "left",
		justifyContent: "center",
	},
	name: { fontSize: 50 },
	location: { fontSize: 20 },
	date: { fontSize: 18 },
	fave: { fontSize: 16 },
});

export default EventDetails;
