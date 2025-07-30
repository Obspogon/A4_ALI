import { StyleSheet, Text, View, Button } from "react-native";

const EventDetails = ({ navigation, route }) => {
	const { id, name, location, start, end, favourite } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ paddingTop: StatusBar.currentHeight }}>
				<Text>Name</Text>
				<Text>Location</Text>
				<Text style={styles.buttonText}>
					{start.getMonth()}-{start.getDate()} to {end.getMonth()}-{end.getDate()}
				</Text>
				<Button>Favourite</Button>
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
});

export default EventDetails;
