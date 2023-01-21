import * as React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens

import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names

const homeName = 'Home';
const cameraName = 'Camera';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if ( rn === cameraName ) {
                            iconName = focused ? 'camera' : 'camera-outline';
                        } else if ( rn === settingsName ) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } 

                        return <Ionicons name = {iconName} size = {size} color = {color} />
                    }, 

                    tabBarActiveTintColor: 'lightsteelblue',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {paddingBottom:0, fontSize: 10},
                    tabBarStyle: {height:'10%'}
                })}

                // tabBarOptions={{
                //     activeTintColor: 'blue',
                //     inactiveTintColor: 'grey',
                //     labelStyle: {paddingBottom:10, fontSize: 10},
                //     style: {padding:10, height: 70}
                // }}
                >

                
                
                {/* <Tab.Screen name = {homeName} component = {HomeScreen} />
                <Tab.Screen name = {cameraName} component = {CameraScreen} />
                <Tab.Screen name = {settingsName} component = {SettingsScreen} />  */}


                <Tab.Screen name = {homeName} component = {HomeScreen} />
                <Tab.Screen name = {cameraName} component = {CameraScreen} />
                <Tab.Screen name = {settingsName} component = {SettingsScreen} /> 

            </Tab.Navigator>
        </NavigationContainer>
    );
}