import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from "react-native";

const EventDetails = ({ navigation, route }) => {
	const { id, name, location, start, end, favourite } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: StatusBar.currentHeight }}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.location}>{location}</Text>
				<Text style={styles.date}>
					{start.getMonth()}-{start.getDate()} to {end.getMonth()}-{end.getDate()}
				</Text>
				<Button title="Favourite" />
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
});

export default EventDetails;
