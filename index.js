/**
 * @format
 */

import {AppRegistry, ImageBackground} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React,{useState,createContext} from 'react';
import {Text,Image,View} from 'react-native';
import cart from './src/ressources/images/cart.png';

import 'react-native-gesture-handler';
import MyTabs from './src/navigations/Bottom/MyTabs';
import { NavigationContainer } from '@react-navigation/native'; 
const MyContext = createContext('Voixi la valeur du context......');
function EntrtyPoint() {
    const [nberItem,setNberItems] = useState(0);
    const addingItems = () =>{
     console.log("voici la valeur du tableau...")
    }

    return (
      <NavigationContainer>
        <MyContext.Provider value='SOME VALUE IN PROVIDER....'>
        <View styl={{justifyContent:'flex-end',alignItems:'flex-end',flex:1}}>
            <Text style={{color:'red',textAlign:'right',marginRight:25,marginTop:15}}>{nberItem>0 ? nberItem: 1}</Text>
            <ImageBackground source={cart}  style={{width:20,height:20,alignSelf:'flex-end',marginRight:25,marginBottom:5}}/>
            <Text style={{color:'red',fontSize:20, fontWeight:'bold'}}>{this.context}</Text>
        </View>
        
        <MyTabs func={addingItems}/>
        </MyContext.Provider>
      </NavigationContainer>
    );
  }

AppRegistry.registerComponent(appName, () => EntrtyPoint);
