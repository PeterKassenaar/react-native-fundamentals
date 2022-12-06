// 0. Import navigation stuff
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// 1. Import our screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            {/*Set the navigator and the initial screen*/}
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="About" component={AboutScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

