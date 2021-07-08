/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

  import Utama from './src/home';

 const Section: React.FC<{
   title: string;
 }> = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };

 const Splash = ()=>{

   return(
     <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
       <Text>Splash</Text>
     </View>
   )
 }

 const App = () => {

  const [splash, setSplash] = useState(true)

   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   setTimeout(()=>{
     setSplash(false)
   },3000)

   const Stack = createStackNavigator();
   
   if(splash){
     return (
       <Splash />
     )
   }
   return(
     <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Utama} />
      </Stack.Navigator>
     </NavigationContainer>
   )

  //  return (
  //    <SafeAreaView style={backgroundStyle}>
  //      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //      <ScrollView
  //        contentInsetAdjustmentBehavior="automatic"
  //        style={backgroundStyle}>
  //        <Header />
  //        <View
  //          style={{
  //            backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //          }}>
  //          <Section title="Step One">
  //            Edit <Text style={styles.highlight}>App.js</Text> to change this
  //            screen and then come back to see your edits.
  //          </Section>
  //          <Section title="See Your Changes">
  //            <ReloadInstructions />
  //          </Section>
  //          <Section title="Debug">
  //            <DebugInstructions />
  //          </Section>
  //          <Section title="Learn More">
  //            Read the docs to discover what to do next:
  //          </Section>
  //          <LearnMoreLinks />
  //        </View>
  //      </ScrollView>
  //    </SafeAreaView>
  //  );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
