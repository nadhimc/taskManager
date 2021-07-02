import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { View, Text } from "react-native"
import Login from "./Login";
import Register from "./Register";

const Stack = createStackNavigator();

const Home = () => {
    console.log("home")
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}

const Utama = () => {
    console.log("Utama")
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Utama