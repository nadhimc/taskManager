import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { View, Text } from "react-native"
import Login from "./Login";
// import Register from "./Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabContent from "./Navigator/tabContent";
import Categories from "./Pages/Categories";
import Task from "./Pages/Task";
import Calendar from "./Pages/Calendar";
import Profile from "./Pages/Profile";


const Tab = createBottomTabNavigator();

const isLogin = false

const Utama = () => {
    console.log("Utama")
    return(
            <Tab.Navigator tabBar={props => <TabContent {...props} />} initialRouteName="Home">
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Tasks" component={Task} />
                <Tab.Screen name="Calendar" component={Calendar} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    )
}

export default Utama