import React from 'react';
import {View,Text,Image} from 'react-native';

import MyTabs,{TrackingMapScreen} from  './MyTabs';
import  {WebViewScreen} from './MyTabs';
import {OrderStatusScreen} from './MyTabs'
import cocktail from  '../../ressources/images/cocktail.jpeg';
import desserts from  '../../ressources/images/desserts.jpeg';

import pdj from '../../ressources/images/pdj.png';
import entree from '../../ressources/images/entree.jpeg';
import platschaud from '../../ressources/images/platschaud.jpeg';

import raffraichissement from  '../../ressources/images/raffraichissement.jpeg';
import vienoiserie from  '../../ressources/images/vienoiserie.jpeg';
//raffraichissement
import grillsIcon from '../../ressources/images/grillsIcon.jpeg';


import {HomeScreen} from './MyTabs';
import {pdjeuner,dessertsKeys,entreesKeys,grillKeys,platsKeys,drinkKeys} from '../../ressources/database/Keys.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function PlatScreen (){
    return (
      <HomeScreen data={platsKeys} />
    );
    
  } 

  function DessertScreen (){
    return (
      <HomeScreen data={dessertsKeys} />
    );
    
  }
  function PdjScreen (){
    return (
      <HomeScreen data={pdjeuner} />
    );
    
  }
  function GrillScreen (){
    return (
      <HomeScreen data={grillKeys} />
    );
    
  }
//dessertsKeys

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
          name="Entree"
          options={{
            tabBarLabel: 'Entree',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width:  25 , height: 22,}}
                source={entree}
              />
            ),
          }}
        >
            {props => <MyTabs {...props} data={entreesKeys} />}
        </Tab.Screen>

        <Tab.Screen
          name="PlatScreen"
          options={{
            tabBarLabel: 'Plats Chauds',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={platschaud}
              />
            ),
          }}
        >
        
        {props => <MyTabs {...props} data={platsKeys} />}
        </Tab.Screen>

        <Tab.Screen
          name="DessertScreen"
          options={{
            tabBarLabel: 'Desserts',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={desserts}
              />
            ),
          }}
        >
             {props => <MyTabs {...props} data={dessertsKeys} />}
        </Tab.Screen>

        <Tab.Screen
          name="PdjScreen"
          options={{
            tabBarLabel: 'PDJ',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={pdj}
              />
            ),
          }}
        >
             {props => <MyTabs {...props} data={pdjeuner} />}
        </Tab.Screen>

        <Tab.Screen
          name="GrillScreen"
          options={{
            tabBarLabel: 'Grillade',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={grillsIcon}
              />
            ),
          }}
        >
             {props => <MyTabs {...props} data={grillKeys} />}
        </Tab.Screen>

        <Tab.Screen
          name="Order Status"
          component={TrackingMapScreen}
          options={{
            tabBarLabel: 'Statut de la Commande',
            tabBarIcon: () => (
              <Image
                fadeDuration={0}
                style={{width: 22, height: 22}}
                source={grillsIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  export default BottomNavigation;
  