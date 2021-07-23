/**
 * @format
 */

import {AppRegistry, ImageBackground, Pressable} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React,{useState,createContext,useContext} from 'react';
import {Text,Image,View} from 'react-native';
import cart from './src/ressources/images/cart.png';

import 'react-native-gesture-handler';
import Keys from './src/ressources/database/Keys';

import BottomNavigation from './src/navigations/Bottom/BottomNavigation';

import { NavigationContainer } from '@react-navigation/native'; 
import ThingsContext, { ThingsProvider } from './thingsContext';

const things = [
  {id: 1, name: 'thing 1', length: 5},
  {id: 2, name: 'thing 2', length: 2},
  {id: 3, name: 'thing 3', length: 6},
  {id: 4, name: 'thing 4', length: 10},
  {id: 5, name: 'thing 5', length: 1}
]
//toggleTheme: () => {},
let result =[];
export function EntrtyPoint(props) {
    const [ order, setOrder ] = useState({});
    const [ groupList, setGroupList] = useState([]);
    
    const  filterObjects = (objects) =>{
      var filtered = {};
      var keys = Object.keys(objects);
      for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (objects.hasOwnProperty(key)) {
              var object = objects[key];
              if (object.quantite >0)
              {
                filtered[key] = object;
              }
          }
      }
      return filtered;
    }

    const toggleTheme = (val) => {
      setOrder(val);
      let valeur = Object.values(val);

      hash = valeur.reduce((p,c) => (p[c.category] ? p[c.category].push(c) : p[c.category] = [c],p) ,{}),
       newData = Object.keys(hash).map(k => ({title: k, data: hash[k]}));
       setGroupList(newData);
    }
    return (
      <NavigationContainer>
        <Pressable onPress={() => console.log('in props from index... ',order)}>
          <View styl={{justifyContent:'flex-end',alignItems:'flex-end',flex:1}}>
              <Text style={{color:'red',textAlign:'right',marginRight:25,marginTop:15}}>{Object.keys(order).length}</Text>
              <ImageBackground source={cart}  style={{width:20,height:20,alignSelf:'flex-end',marginRight:25,marginBottom:5}}/>
          </View>
        </Pressable>
        <ThingsProvider value={{order,groupList,toggleTheme,Keys}}>
          <BottomNavigation />
        </ThingsProvider>
      </NavigationContainer>
    );
  }

AppRegistry.registerComponent(appName, () => EntrtyPoint);
