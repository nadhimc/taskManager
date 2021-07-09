import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from "react-native"


const CategoriesHome = ({navigation}:any)=>{

    const categoriesRender = ({ item }:any)=>{
        if(item.id == '-7777'){
            return(
                <TouchableOpacity onPress={()=>{navigation.navigate('AddCategory')}} style={styles.addCategoriesCard}>
                    <View style={{flexDirection: "row", justifyContent:'space-around', alignItems:'center'}}>
                        <Text style={{color:'#f9f9f9', fontWeight:'bold', fontSize: 16}}>Create New List</Text>
                        <Text style={{color:'#f9f9f9', fontWeight:'bold', fontSize: 24}}>+</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <TouchableOpacity onPress={()=>{console.log('press')}} style={{...styles.card, width: "47%", backgroundColor:item.color}}>
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

    const additem = [
        {
            id: '-7777',
            title: 'Add',
            color: 'transparent'
        }
    ]

    return(
        <View style={{paddingTop: 30,flex:1, alignItems:'center', backgroundColor:'#181a20'}}>
            <FlatList ItemSeparatorComponent={()=><View style={styles.separator} />} columnWrapperStyle={{justifyContent:'space-between'}} numColumns={2} horizontal={false} data={[...categories,...additem]} renderItem={categoriesRender} keyExtractor={item=>item.id} />
            <TouchableOpacity onPress={()=>{navigation.navigate('AddCategory')}} style={{position:"absolute",right:20, bottom: 20}}>
                <Image source={require('../../img/icon/add.png')} />
            </TouchableOpacity>
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

export default CategoriesHome