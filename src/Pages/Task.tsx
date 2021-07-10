import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import { View, Text } from "react-native"
import AddTask from "./Task/AddTask";
import TaskByCategory from "./Task/TaskByCategory";
import TaskHome from "./Task/TaskHome";

const Task = ()=>{
    const Stack = createStackNavigator();

    const headers = {
        headerStyle:{
            backgroundColor: "#181a20",
            shadowColor: "transparent",
        },
        headerTintColor: '#f9f9f9',
        headerTitleStyle:{
            color: "#f9f9f9",
        },
    }

    return(
        <Stack.Navigator  screenOptions={{...headers,headerTitleAlign: 'center'}} initialRouteName="Home">
            <Stack.Screen name="Home" options={{title:"Select Category"}} component={TaskHome} />
            <Stack.Screen name="TaskByCategory" options={({ route }:any) => ({ title: route.params.name })} component={TaskByCategory} />
            <Stack.Screen name="AddTask" options={{title:"Add Task"}} component={AddTask} />
        </Stack.Navigator>
    )
}

export default Task