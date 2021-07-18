import React from 'react';
import {View,Text} from 'react-native';

import MyTabs from  './MyTabs';

import cocktail from  '../../ressources/images/cocktail.jpeg';
import desserts from  '../../ressources/images/desserts.jpeg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function Check (){
    return (
        <View>
            <Text>
                JE vais avancer que sauf..... 
            </Text>
        </View>
    );
}
function BottomNavigation() {
    return (
      <Tab.Navigator 
        screenOptions ={{
          borderRadius:5
        }}
        initialRouteName="Home"
        tabBarOptions={{
          activeColor :"#f0edf6",
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
            inactiveColor: "#3e2465",
            tabStyle : { backgroundColor: 'rebeccapurple'},
          style :  { backgroundColor: 'blue'},
          labelStyle: {color:'white'},
        }}
      > 
        <Tab.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            tabBarLabel: 'MyTabs',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={cocktail}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Check"
          component={Check}
          options={{
            tabBarLabel: 'Check',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={desserts}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    );
  }
  export default BottomNavigation;
  