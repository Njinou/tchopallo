/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import 'react-native-gesture-handler';
import MyTabs from './src/navigations/Bottom/MyTabs';
import { NavigationContainer } from '@react-navigation/native'; 
function EntrtyPoint() {
    return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    );
  }

AppRegistry.registerComponent(appName, () => EntrtyPoint);
