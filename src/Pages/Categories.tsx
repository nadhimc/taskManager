import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { View, Text } from "react-native"

const CategoriesHome = ()=>{
    return(
        <View style={{flex:1, backgroundColor:'#181a20'}}>
            <Text>Categories</Text>
        </View>
    )
}
 
const Categories = ()=>{

    const Stack = createStackNavigator();

    const headers = {
        headerStyle:{
            backgroundColor: "#181a20",
            shadowColor: "transparent"
        },
        headerTintColor: '#f9f9f9',
        headerTitleStyle:{
            color: "#f9f9f9"
        }
    }

    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{...headers,title:"To Do List"}} component={CategoriesHome} />
        </Stack.Navigator>
    )
}

export default Categories