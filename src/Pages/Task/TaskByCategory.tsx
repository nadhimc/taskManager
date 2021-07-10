import React, { useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native"
import { Swipeable } from "react-native-gesture-handler"

const TaskByCategory = ({route, navigation}:any)=>{

    const TaskRender = ({item}:any)=>{

        const date = new Date(item.timestamp)

        const rightSwipe = ()=>{
            return(
                <View>
                    <TouchableOpacity onPress={()=>console.log('delete')} style={styles.deleteBox}>
                        <Text style={{color: '#f9f9f9'}}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return(
            <Swipeable renderRightActions={rightSwipe}>
                <Pressable onPress={()=>console.log('details')} style={styles.taskRender}>
                    <Pressable onPress={()=>{
                        // setTasks()
                        setTasks(Tasks.map(k=>
                            k.id===item.id?
                            {...k, completed: !item.completed}
                            : k
                        ))
                    }} >
                        {item.completed?
                        <Image style={{width: 24, height: 24}} source={require("../../img/icon/taskchecked.png")} />
                        :<Image style={{width: 24, height: 24}} source={require("../../img/icon/taskunchecked.png")} />
                        }
                    </Pressable>
                    <Text style={{marginLeft: 10 ,color:'#f9f9f9'}} >{item.title}</Text>
                    <Text style={{textAlign: 'right', flex: 1, color: '#f9f9f9'}}>
                        {date.getHours()<10?"0"+date.getHours():date.getHours()}:{date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}
                    </Text>
                </Pressable>
            </Swipeable>
        )
    }

    const [Tasks, setTasks] = useState(
        [
            {
                id: '1',
                title: 'Feed The Cat',
                completed: true,
                timestamp: 1615174872
            },
            {
                id: '2',
                title: 'Order Water',
                completed: false,
                timestamp: 1628874472
            },
            {
                id: '3',
                title: 'Walking With The Dog',
                completed: true,
                timestamp: 1661878072
            },
        ]
    )

    return(
        <View style={{paddingTop: 30,flex:1, alignItems:'center', backgroundColor:'#181a20'}}>
            <FlatList style={{width:"90%"}} renderItem={TaskRender} data={Tasks} keyExtractor={(item)=>item.id} />
            <TouchableOpacity onPress={()=>{navigation.push('AddTask')}} style={{position:"absolute",right:20, bottom: 20}}>
                <Image source={require('../../img/icon/add.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskRender:{
        backgroundColor:"#252834",
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 8,
        borderRadius: 5,
        alignItems:'center'
    },
    deleteBox:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red',
        width: 50,
        height: 50,
        marginTop: 10
    }
})

export default TaskByCategory