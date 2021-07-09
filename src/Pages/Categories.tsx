import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
// import { View, Text } from "react-native"
import AddCategory from "./Categories/AddCategory"
import CategoriesHome from "./Categories/CategoriesHome"
 
const Categories = ()=>{

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
        <Stack.Navigator  screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Home">
            <Stack.Screen name="Home" options={{...headers,title:"To Do List"}} component={CategoriesHome} />
            <Stack.Screen name="AddCategory" options={{...headers,title:"Add Categories"}} component={AddCategory} />
        </Stack.Navigator>
    )
}

export default Categories