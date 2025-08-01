import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EventList from "./screens/EventList";
import EventDetails from "./screens/EventDetails";
import Faves from "./screens/Faves";

const Stack = createNativeStackNavigator();
export default function App() {
	const headerOption1 = () => ({
		headerStyle: { backgroundColor: "#10ac84" },
		headerTintColor: "white",
		headerTitleStyle: { fontWeight: "bold" },
	});
	const headerOption2 = () => ({
		headerStyle: { backgroundColor: "brown" },
		headerTintColor: "white",
		headerTitleStyle: { fontWeight: "bold" },
	});

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="EventList">
				<Stack.Group screenOptions={headerOption1}>
					<Stack.Screen component={EventList} name="EventList" />
				</Stack.Group>
				<Stack.Group screenOptions={headerOption2}>
					<Stack.Screen component={EventDetails} name="EventDetails" />
					<Stack.Screen component={Faves} name="Faves" />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
