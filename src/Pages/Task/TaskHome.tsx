import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native"

const TaskHome = ({navigation}:any)=>{

    const categoriesRender = ({ item }:any)=>{
        return(
            <TouchableOpacity onPress={()=>{navigation.navigate("TaskByCategory",{name:item.title})}} style={{...styles.card, width: "47%", backgroundColor:item.color}}>
                <View >
                    <Text style={{color: '#f9f9f9', fontWeight:'bold', fontSize: 16}}>{item.title}</Text>
                    <Text style={{textAlign: 'right' ,marginTop: 7,color: '#f9f9f9',  fontSize: 12}}>2 Tasks</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const categories=[
        {
            id: '1',
            title: 'Work',
            color: "#ed6a46"
        },
        {
            id: '2',
            title: 'Meet',
            color: "#428fe9"
        },
        {
            id: '3',
            title: 'Personal',
            color: "#ad63dc"
        },
        {
            id: '4',
            title: 'Home',
            color: "#45d04f"
        }
    ]

    return(
        <View style={{paddingTop: 30,flex:1, alignItems:'center', backgroundColor:'#181a20'}}>
            <FlatList ItemSeparatorComponent={()=><View style={styles.separator} />} columnWrapperStyle={{justifyContent:'space-between'}} numColumns={2} horizontal={false} data={categories} renderItem={categoriesRender} keyExtractor={item=>item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    separator:{
        height: 16
    },
    addCategoriesCard:{
        backgroundColor:'transparent',
        borderRadius: 5,
        paddingVertical: 14,
        borderColor: '#ad63dc',
        borderWidth: 2,
        width: "47%",
    }
})

export default TaskHome