import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const DrawerContent = (props:any) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={{alignItems:'center', paddingVertical: 50}}>
                <Text>Hi</Text>
                <Text>Nadhim</Text>
            </View>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Home" onPress={()=>console.log('a')} /> */}
        </DrawerContentScrollView>
    )
}

export default DrawerContent