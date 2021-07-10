import React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native"

const AddCategory = ()=>{

    const [colorPick, setColorPick] = useState('1')

    const colors=[
        {
            id: '1',
            color: '#4ca5ff'
        },
        {
            id: '2',
            color: '#53fff5'
        },
        {
            id: '3',
            color: '#4ca5ff'
        },
        {
            id: '4',
            color: '#5fff45'
        },
        {
            id: '5',
            color: '#fa4945'
        },
        {
            id: '6',
            color: '#ff8946'
        },
    ]

    const ColorRender = (item:any)=>{
        return(
            <TouchableOpacity key={item.id} onPress={()=>{setColorPick(item.id)}} style={{...styles.colorpick, backgroundColor:item.color}}>
                {colorPick==item.id?
                <Text>V</Text>
                :<Text></Text>
                }
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Category name</Text>
            <TextInput style={styles.textinput} placeholderTextColor="rgba(249,249,249,.3)" placeholder="Sport" />
            <Text style={{...styles.text, marginTop: 10, marginBottom: 20}}>Color</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {colors.map(ColorRender)}
            </View>
            <TouchableOpacity style={styles.confirmbutton}>
                <Text style={{textAlign:"center", color:"#f9f9f9", fontWeight:'bold', fontSize:16}}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#181a20',
        paddingTop: 30,
        paddingHorizontal: 20
    },
    text:{
        color: '#f9f9f9',
        fontSize: 16,
    },
    textinput:{
        color: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#f9f9f9',
        borderRadius: 8,
        marginVertical: 8,
        paddingHorizontal: 10
    },
    colorpick:{
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    separator:{
        width: 20,
        height: 20,
        backgroundColor: 'transparent'
    },
    confirmbutton:{
        marginTop: 36,
        backgroundColor:'#246bfd',
        paddingVertical: 14,
        borderRadius: 10
    }
})

export default AddCategory