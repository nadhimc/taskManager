import React from 'react';
import { Image, View, Text, TouchableOpacity, Pressable } from 'react-native';
import icon from '../img/navbar/icon';

function TabContent( {state, descriptors, navigation}:any ) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route:any, index:any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          var images = {
              Categories:icon.categories,
              Tasks: icon.tasks,
              Calendar: icon.calendar,
              Profile: icon.profile
            }
  
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ 
                  flex: 1,
                  backgroundColor: '#181a20',
                }}
              key={index}
            >
            <View style={{alignItems:'center', paddingVertical: 10, backgroundColor: isFocused?'rgba(0,0,0,.3)':'transparent'}}>
                <Image style={{width:24, height: 24, marginBottom: 3}} source={images[label]} />
                <Text style={{ color: isFocused ? '#f9f9f9' : 'lightblue', textAlign:'center' }}>
                    {label}
                </Text>
            </View>
              
            </Pressable>
          );
        })}
      </View>
    );
  }

export default TabContent;