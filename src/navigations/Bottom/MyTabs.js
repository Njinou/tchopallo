import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {EntrtyPoint} from '../../../index';
import {Text,Image,StyleSheet,ScrollView,Pressable,Modal,Platform,Button,TextInput,Linking,FlatList, useColorScheme,SectionList} from 'react-native';
import {View} from 'react-native';

import React,{useState,useEffect,useContext} from 'react';
import pdj from '../../ressources/images/pdj.png';
import entree from '../../ressources/images/entree.jpeg';
import guiness from '../../ressources/images/menu/guiness.jpeg';
import cocaglass from '../../ressources/images/menu/cocaglass.jpeg';

import raffraichissement from  '../../ressources/images/raffraichissement.jpeg';
import cocktail from  '../../ressources/images/cocktail.jpeg';
import desserts from  '../../ressources/images/desserts.jpeg';
import vienoiserie from  '../../ressources/images/vienoiserie.jpeg';
import Shape  from '../../ressources/Appicon/Shape.png';
import addedgreen from '../../ressources/Appicon/addedgreen.png';
import moins from '../../ressources/Appicon/moins.png';
import plus from '../../ressources/Appicon/plus.png';
import radio from '../../ressources/Appicon/radio.png';
import radioSelected from '../../ressources/Appicon/radio-selected.png';
import addRed from '../../ressources/Appicon/addRed.png';
import confirmationGreen from '../../ressources/Appicon/confirmationGreen.png';
import arrowupgrey from '../../ressources/Appicon/arrowupgrey.png';
import arrowdowgrey from '../../ressources/Appicon/arrowdowgrey.png';
import checkgreen from '../../ressources/Appicon/checkgreen.png';
import line10 from '../../ressources/Appicon/line10.png';
import Line10grey from '../../ressources/Appicon/Line10grey.png';
import statuschecked from '../../ressources/Appicon/statuschecked.png';

import ThingsContext from '../../../thingsContext';


import MapView, { PROVIDER_GOOGLE,Marker, Polyline,Polygon } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import { createStackNavigator } from '@react-navigation/stack';

import * as Location from 'expo-location';

import { WebView } from 'react-native-webview';

import donnee,{pdjeuner,dessertsKeys,grillKeys,platsKeys,drinkKeys} from '../../ressources/database/Keys.js'

//PDJ => cocktail when checking out.... => Entrees => Vienoiserie tracking... => Plats pour le tracking et le temps....  => Dessert if maps...
//  PdjScreen EntreeScreen VienoiserieScreen PlatScreen DessertScreen RaffraichissementScreen CocktailScreen

//upload picture of payment... 
import DateTimePicker from '@react-native-community/datetimepicker';
import { exp } from 'react-native/Libraries/Animated/Easing';
import { CommonActions } from '@react-navigation/routers';

import { useNavigation } from '@react-navigation/native';

const TopNavigator = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf:'stretch',
    maxHeight:'100%',
    maxWidth:'100%'
  },
  logo: {
    width: 66,
    height: 58,
  },
  wrapperCustom: {
    padding: 6,
    backgroundColor:'#F23445',
    alignItems:'center',
    marginBottom:5
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  containera: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
  centeredText: { textAlign: 'center' },
  
});

//reset context at any component instead of continuing.... 
//
export function HomeScreen (props){
  const {order} = useContext(ThingsContext);
  const {toggleTheme} = useContext(ThingsContext);
  const navigation = useNavigation();

  const [itemAdded,addItem] = useState (false);
  const [modalVisible, setModalVisible] = useState(false);
  const [command,setCommand] = useState(order);
  const [quantite,setQuantite]= useState(0);
  const [itemSelected,setItemSelected] = useState({});
  const [tester,setTester] = useState('JE ne crois pas ');
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

  const  CustomModal = ({item}) => (
  
 <View style={styles.centeredView}>
 <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        if (itemAdded)  setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText,{fontSize:16,color:'#3F4D5F',textAlign:'center',marginTop:29,marginBottom:31}}>Choisissez la  Quantite!</Text>
          <View style={{flexDirection:'row',backgroundColor:'#EAEAEA',marginBottom:40}}>
            <Pressable onPress={async () => {
              //let qte= quantite; qte>0? qte-- : console.log('la quantite est nulle'); setQuantite(qte);
                
                let commandTemp = command ? command : {};
                let elmt = commandTemp[item.code] || {quantite:  0 , picked: false,  supplement:"",creation:Date.now(),client:'CLIENT'}; //??????????????? METTRE LE UID DE CELUI QUI A ETE RETENU DANS LA LISTE DE RECHERCHE
                
                let NOUVELLEValue =  {quantite:  commandTemp[item.code] && commandTemp[item.code].quantite && commandTemp[item.code].quantite>1 ? commandTemp[item.code].quantite - 1 : 0  , picked: commandTemp[item.code] &&  commandTemp[item.code].picked,  supplement:"",creation: elmt.creation? elmt.creation: Date.now(),client: elmt.client? elmt.client: "Chapallo"}; 
               //NOUVELLEValue.picked ? setModalVisible(true): setModalVisible(false);
               if (NOUVELLEValue.quantite <1)  setModalVisible(false);
                commandTemp[item.code] = NOUVELLEValue;
                setCommand(filterObjects(commandTemp));
                toggleTheme(filterObjects(commandTemp));
               // console.log(item.code);
            }}>
              <View style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:17,paddingRight:17,paddingTop:15, paddingBottom:15,borderStyle:'solid',borderColor:'#EAEAEA',borderWidth:1.5,borderTopStartRadius:3,borderBottomStartRadius:3}}>
                <Image source={moins}/>
              </View>
              </Pressable>

            <View style={{backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center',borderStyle:'solid',borderWidth:1,borderColor:'#EAEAEA'}}>
                <Text style={{flex:1,fontWeight:'bold',color:'#3F4D5F',fontSize:16,paddingRight:17,paddingLeft:17,paddingBottom:10, paddingTop:11}}>
                 {command[item.code]  &&   command[item.code].quantite}
                </Text>
            </View>
            <Pressable onPress={ async () => {
              //let qte= quantite; qte++; setQuantite(qte);
              let commandTemp = command ? command : {};
              let elmt = commandTemp[item.code] || {quantite:  0 , picked: false,  supplement:"",creation:Date.now(),client:'CLIENT'}; //??????????????? METTRE LE UID DE CELUI QUI A ETE RETENU DANS LA LISTE DE RECHERCHE //commandTemp[item.code] &&  commandTemp[item.code].picked
              
              let NOUVELLEValue =  {quantite:  commandTemp[item.code] && commandTemp[item.code].quantite ? commandTemp[item.code].quantite + 1 : 1  , picked: true,  supplement:"",creation: elmt.creation? elmt.creation: Date.now(),client: elmt.client? elmt.client: "Chapallo"}; 
             //setTimeout(function(){ alert("Hello"); }, 3000);
             setModalVisible(false);

              // NOUVELLEValue.picked ? setModalVisible(true): setModalVisible(false);
              commandTemp[item.code] = NOUVELLEValue;
             // console.log('nouvelle command value...', command);
              let result = filterObjects(commandTemp);
              setCommand(result);
              toggleTheme(result);
              setTimeout(function(){  setModalVisible(true);}, 0);
            }}>
              <View style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:17,paddingRight:17,paddingTop:15, paddingBottom:15,borderStyle:'solid',borderColor:'#EAEAEA',borderWidth:1.5,borderTopStartRadius:3,borderBottomStartRadius:3}}>
                <Image source={plus}/>
              </View>
            </Pressable>
        </View>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{backgroundColor:'#F2AE30',borderBottomEndRadius:8,borderBottomStartRadius:8,alignItems:'center',justifyContent:'center',flexDirection:'row',paddingLeft:112,paddingRight:124}}>
                <Image source={Shape} style={{marginRight:6}}/>
                <Text style={{fontSize:12,color: '#FFF',paddingTop:14,paddingBottom:15}}>{ 'Add to order' } </Text>
            </View> 
          </Pressable>
        </View>
      </View>
    </Modal> 
    </View>
  );

const renderItem = ({ item }) => (
  <>
  <ScrollView>
  <View style={{flex:0.80,marginTop:5}}>
      <View style={{backgroundColor:'transparent',flex:1,paddingLeft:22, paddingRight:22
      }}>
        <Image source={cocaglass} style={{width: undefined, height:170, flex:1,marginTop:20,borderTopLeftRadius:8,borderTopRightRadius:8,}}/>
      </View>
      <View style={{flex:1,paddingLeft:22, paddingRight:22,
      // shadowOffset: {width:0, height: '2px'}, shadowRadius:'10px', shadowOpacity:10 , shadowColor: 'rgba(170,170,170,0.5)',elevation:5
      shadowColor: 'rgba(170,170,170,0.5)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5,
     // marginLeft:39,
      //marginRight:36,
      borderBottomEndRadius:8,borderBottomStartRadius:8
      }}>
        <Text style={{fontSize:16, color:'#3F4D5F',marginBottom:10,marginTop:20,paddingLeft:17,paddingRight:15}}>
            {item.name} 
          </Text>
          <Text style={{fontSize:17, color:'#A4A726',marginBottom:10,paddingLeft:17,paddingRight:15}}>
              {item.prix} Franc CFA
          </Text>
          <Text style={{fontSize:12,color:'#3F4D5F',paddingRight:45,paddingBottom:20,paddingLeft:17,paddingRight:15}}>
            {item.description}
          </Text>
          <Pressable onPress={ () => {
            let commandTemp = command ? command : {};
            let elmt = commandTemp[item.code] || {quantite:  0 , picked: false,  supplement:"",creation:Date.now(),client:'CLIENT'}; //??????????????? METTRE LE UID DE CELUI QUI A ETE RETENU DANS LA LISTE DE RECHERCHE
            //"item": {"category": "pdj", "code": "bhb", "description": "Beignets + Haricot + Bouilie", "name": "Beignets-Haricots-Bouillie", "prix": 500, "souscategory": "local", "stock": 7}
            let NOUVELLEValue =  {quantite:  elmt.quantite ? 0: 1 , picked: command[item.code]? !command[item.code].picked: true,  supplement:"",creation: elmt.creation? elmt.creation: Date.now(),client: elmt.client? elmt.client: "Chapallo",category: item.category, code:  item.code, description:item.description, name: item.name, prix: item.prix, souscategory:item.souscategory,}; 
            commandTemp[item.code] = NOUVELLEValue;
            setItemSelected(item);
             setCommand(filterObjects(commandTemp));
            NOUVELLEValue.picked   && NOUVELLEValue.quantite? setModalVisible(true): setModalVisible(false);
            toggleTheme(filterObjects(commandTemp));
            }}>
            <View style={{backgroundColor: command[item.code] ?'#D5D952':'#F2AE30',borderBottomEndRadius:8,borderBottomStartRadius:8,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
              <Image source={command[item.code]?addedgreen:  Shape} style={{marginRight:6}}/>
              <Text style={{fontSize:12,color:command[item.code]? '#585B00': '#FFF',paddingTop:14,paddingBottom:15}}>{command[item.code]? 'item added to order':  'Add to order' } </Text>
            </View> 
          </Pressable>
        </View>
  </View>
</ScrollView> 
 </>
);
/*
your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. {"contentLength": 8218.6669921875, "dt": 41488, "prevDt": 54931}

*/
const renderItemSectionList = ({data}) => (
  <>
  <Text>{JSON.stringify(data)}</Text>
  <SectionList
  sections={data}
  keyExtractor={(item, index) => item + index}
  renderItem={renderItem}
   renderSectionHeader={({section}) => <Text  style={{fontSize: 32,
    backgroundColor: "lightgray",textAlign:'center',fontWeight:'bold',color:'#585B00'}}>{section.title}</Text>}
/>
</>
);

  return  (
    <View style={{justifyContent: 'space-between',flex:1}}>
     <SectionList
      sections={props.data?props.data :platsKeys}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={({section}) => <Text  style={{fontSize: 32,
        backgroundColor: "lightgray",textAlign:'center',fontWeight:'bold',color:'#585B00'}}>{section.title}</Text>}
    />
    
      <CustomModal item={itemSelected} />
    <View style={{marginTop:'auto'}}>
 <Pressable
      onPress={() => {
        console.log('Les elements props... ',props);
        navigation.navigate('Detail de la Commande');
      // props.navigation.navigate('Drinks');
        console.log("pressed");
      }}
      style={[
        styles.wrapperCustom,
        {
          backgroundColor: quantite<1?'#C3C1C1':'#F23445'
        },
        
      ]}>
        {quantite<1? <Text style={{fontSize:18, color:'#FFF',paddingTop:14,paddingBottom:12}}> Selectionnez un plat</Text>:
        <Text style={{fontSize:18, color:'#FFF',paddingTop:14,paddingBottom:12}}>
          {'(1) or number of items '}Continue to Order 
        </Text>}
    </Pressable>
 </View> 
  </View>
  );
}



export function CartScreen (){
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{typeof(title) ==='string'? title:title.name + " here is the name"}</Text>
    </View>
  );
  const {groupList} = useContext(ThingsContext);
  
  return (
    <SectionList
    sections={groupList}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Item title={item} />}
     renderSectionHeader={({section}) => <Text  style={{fontSize: 32,
      backgroundColor: "#fff"}}>{section.title}</Text>}
  />
  );
}

function OrderDelivery (){
  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
  );
}
//Choisir l'addresse  ou le lieu du restaurant a consommer u bien ou vous souhaitez porter votre met...

function BiereScreen (){
  return (
    <HomeScreen data={drinkKeys.Biere} />
  );
  
}
function VinScreen (){
  return (
    <HomeScreen data={drinkKeys.Vin} />
  );
  
}
function EauScreen (){
  return (
    <HomeScreen data={drinkKeys.Eau} />
  );
  
}
function JusScreen (){
  return (
    <HomeScreen data={drinkKeys.Jus} />
  );
  
}

function LiqueurScreen (){
  return (
    <HomeScreen data={drinkKeys.Liqueur} />
  );
  
}

function Drinks() {
  return (
    <TopNavigator.Navigator>
      <TopNavigator.Screen name="Eau" component={EauScreen} />
      <TopNavigator.Screen name="Jus" component={JusScreen} />
      <TopNavigator.Screen name="Biere" component={BiereScreen} />
      <TopNavigator.Screen name="Vin" component={VinScreen} />
      <TopNavigator.Screen name="Liqueur" component={LiqueurScreen} />
    </TopNavigator.Navigator>
  );
}


function OrderConfirmationScreen (props){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image source={confirmationGreen} style={{marginBottom:29,marginTop:'auto'}}/>
      <Text style={{color:'#3F4D5F',fontSize:20, textAlign:'center',paddingBottom:10}} >Merci Pour votre Commande! </Text>
      <Text style={{color:'#3F4D5F',fontSize:12,textAlign:'center',paddingLeft:62,paddingRight:61,marginBottom:'auto'}}> Votre repas est en cours de preparation. Vous pouvez controller l'Etat de votre commande dans la rubique historique des commandes </Text>
      <View style={{alignItems:'flex-end'}}>
        <Pressable onPress={()=>props.navigation.navigate('Order Status')}>
          <Text style={{paddingBottom:25,fontSize:18,color:'#C3C1C1',paddingTop:10}}> Done</Text>
        </Pressable>
      </View>
      
    </View>
   
  );

}
////   Vienoiserie tracking... => Plats pour le tracking et le temps....  => Dessert if maps...
function OrderStatuScreen (props){
  return (
    <View style={{flex:1}}>
        <View style={{flex:1.20,backgroundColor:'#FAFAFA',borderBottomWidth:2,borderStyle:'solid',borderColor:'#F2F2F2',justifyContent:'center',}}>
            <View style={{marginLeft:24,marginRight:22,flexDirection:'row'}}>
                <View>
                    <Text style={{fontSize:16,color:'#3F4D5F',marginBottom:6}}>
                        Aujourd'hui
                    </Text>
                    <Text style={{fontSize:12,color:'#3F4D5F',marginBottom:3}}>
                        Banane Malaxee
                    </Text>
                    <Text style={{fontSize:12,color:'#3F4D5F',paddingBottom:12}}>
                        Cout Total: 2.500 Francs CFA
                    </Text>
                </View>
                <View style={{marginLeft:'auto'}}>
                  <Image source={arrowupgrey}/>
                </View>
            </View>
        </View>

        <View style={{flex:1.5,backgroundColor:'#FFF',borderBottomWidth:2,borderStyle:'solid',borderColor:'#F2F2F2',}}>
            <Text style={{marginLeft:24,marginRight:51,marginBottom:5,fontSize:16,color:'#3F4D5F'}}>
              Etat de la Commande
            </Text>
            <ScrollView containerStyle={{justifyContent:'center'}} style={{marginLeft:24,flex:0.7}}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={statuschecked} style={{marginRight:15}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}>Commande Reçue</Text>
               </View>
               <Image source={line10} style={{marginLeft:7}}/>

               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={statuschecked} style={{marginRight:15}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}>Votre Commande est la suivante</Text>
               </View>
               <Image source={line10} style={{marginLeft:7,resizeMode:"cover"}}/>

               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={statuschecked} style={{marginRight:15,resizeMode:"cover"}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}>Votre met est en cours de preparation</Text>
               </View>
               <Image source={Line10grey} style={{marginLeft:7,resizeMode:"cover"}}/>

               <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={radio} style={{marginRight:15,resizeMode:"cover"}}/>
                <View>
                  <Text style={{fontSize:12,color:'#3F4D5F'}}>Votre met est en cours de livraison.</Text>
                  <Text style={{fontSize:12,color:'#3F4D5F'}}>Temps de livraison estimee : 20h00</Text>
                </View>
               </View>
            </ScrollView>
            <View style={{borderTopWidth:2,borderStyle:'solid', borderColor:'#F2F2F2',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
             
              <View style={{borderRightWidth:1,borderStyle:'solid', borderColor:'#F2F2F2',flex:1,backgroundColor:'#FFF'}}>
                <Pressable onPress={()=> props.navigation.navigate('Tracking Order')}>
                  <Text style={{color:'#F23445',fontSize:12,textAlign:'center'}}>
                      Map View
                  </Text>
                  </Pressable>
              </View>
                
                <View style={{backgroundColor:'#FFF',flex:1}}>
                  <Text style={{color:'#3F4D5F',fontSize:12,textAlign:'center'}}>
                        Live Video
                    </Text>
                </View>
            </View>
        </View>
        <View style={{flex:1.2,backgroundColor:'#FAFAFA',borderWidth:2,borderStyle:'solid',borderColor:'#F2F2F2'}}>
          <View style={{marginLeft:24,marginRight:22,flexDirection:'row',justifyContent:'center',marginTop:20,paddingBottom:10}}>
                  <View>
                      <Text style={{fontSize:16,color:'#3F4D5F',marginBottom:6}}>
                          Aujourd'hui
                      </Text>
                      <Text style={{fontSize:12,color:'#3F4D5F',marginBottom:3}}>
                          Banane Malaxee
                      </Text>
                      <Text style={{fontSize:12,color:'#3F4D5F'}}>
                          Cout Total: 2.500 Francs CFA
                      </Text>
                  </View>
                  <View style={{marginLeft:'auto'}}>
                    <Image source={arrowdowgrey}/>
                  </View>
                 
              </View>
              <View style={{marginTop:'auto',marginBottom:19,marginLeft:'auto',marginRight:'auto',flexDirection:'row',alignItems:'center'}}>
                <Image source={checkgreen} style={{marginRight:2}}/>
                <Text style={{fontSize:12,color:'#A4A726'}}> Livré !</Text>
              </View>
        </View>

    </View>
  );
}

function TrackingMapScreen (){
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const [coordinates] = useState([
    {
      latitude: 4.057668 ,
      longitude: 9.737302,
    },
    {
      latitude: 4.057668,
      longitude:9.717302,
    },
  ]);

 const [userLocation,setUserLocation] = useState('');
 const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [polylines,setPolylines] = useState([]);
  const [editing,setEditing] = useState(null);
  const [id,setId] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {

        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
      console.log('location and location ',location)
      setLocation(location);

      let locationa = await Location.watchPositionAsync(
        {accuracy:Location.Accuracy.High, timeInterval: 500, distanceInterval: 0 },
        (loc) => {console.log('loc loc',loc);}
      );
      console.log('locationa',locationa);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location;
    
  }

  const   finish = () =>{
   setPolylines([...polylines, editing])    
   setEditing(null);
  }

  const onPanDrag = (e) =>{
    if (!editing) {
      let val =id;
      setEditing({
        id: val++,
        coordinates: [e.nativeEvent.coordinate],
      });
      console.log('editing',editing);
    } else {
      setEditing({
        ...editing,
        coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
      });
      console.log('editing',editing);
    }
  }

  return ( 
    <View style={{flex:1}}>
    <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
          
        }}
        scrollEnabled={true}
        onPanDrag={e => onPanDrag(e)}
        >

        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        {polylines.map(polyline => (
            <Polyline
              key={polyline.id}
              coordinates={polyline.coordinates}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          ))}
          {editing && (
            <Polyline
              key="editingPolyline"
              coordinates={editing.coordinates}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}

      </MapView>
      <View style={styles.buttonContainer}>
      {editing && (
        <Pressable
          onPress={() => finish()}
          style={[styles.bubble, styles.button]}
        >
          <Text>Finish</Text>
        </Pressable>
      )}
    </View>
    </View>
  );
}
export function OrderStatusScreen (){

  //google.navigation:q=latitude,longitude
  //http://maps.apple.com/?ll=37.484847,-122.148386%22
  //"geo:37.484847,-122.148386" 
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?daddr=' });
const latLng = `${37.3382082},${-121.8863286}`;
const label = 'Tchopallo';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`
});
Linking.addEventListener(url, (atl)=> console.log('console.logdadad ada dsda',atl));
Linking.openURL(url); 
  return <Text> dessert is good for digestion... deal with it .........</Text>
}

export function WebViewScreen (){
  return <WebView
  source={{ uri: 'https://infinite.red' 
}}
  style={{ marginTop: 20 }}
/> 
}

function OrderDetailScreen (props){
  const [quantite,setQuantite]= useState(0);
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [typeCommand,setTypeCommand] = useState('');
  const [textCommand,setTextCommand] = useState('');
  const [tempsLivraison,setTempsLivraison] = useState ('AussiTot');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const setText = () => {
    setTypeCommand('emporter');
    textChoose();
  }; 
  const textChoose = () => {
    switch (typeCommand)
   { 
     case 'emporter':  setTextCommand("Souhaitez recuperer votre paquet");
      break;
      case 'livraison':  setTextCommand('Souhaitez etre Livrer');
      break;
      default :  setTextCommand('Souhaitez Consommer sur Place');
      break;
    }
  };

  //box-shadow: 0 2px 10px 0 rgba(170,170,170,0.5)
  return  (
    <View style={{flex:1}}>
      <ScrollView>
      <View style={{
        flex:1 ,
        marginLeft: 16,
        marginRight:16,
        marginTop:19,
        marginBottom:20,
        backgroundColor: "white",
        borderRadius: 8,
        
       // alignItems: "center",
        shadowColor: "rgba(170,170,170,0.5)",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 5}}>
            <Text style={{paddingLeft:23,paddingTop:25,paddingRight:20,color:'#3F4D5F',fontSize:16,paddingBottom:19}}>Choisissez le type de commande!</Text>
            <View style={{flex:1,paddingLeft:46}}>
              <Pressable onPress={setText}>
                <View style={{flexDirection:'row',marginBottom:13,alignItems:'center'}}>
                  <Image source={typeCommand=== 'emporter'? radioSelected: radio} style={{marginRight:12}}/> 
                  <Text style={{color:typeCommand=== 'emporter' ? '#F23445' : '#A3A1A1'}}>A Emporter</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=> {setTypeCommand('livraison');
                  textChoose();
                }}>
                <View style={{flexDirection:'row',marginBottom:13,alignItems:'center'}}>
                <Image source={typeCommand=== 'livraison'? radioSelected: radio} style={{marginRight:12}}/> 
                <Text style={{color:typeCommand=== 'livraison' ? '#F23445' : '#A3A1A1'}}>Livraison A Domicile</Text>
                </View>
              </Pressable>
              <Pressable onPress={()=> {setTypeCommand('surplace');
                    textChoose();
              }}>
                <View style={{flexDirection:'row',marginBottom:13,alignItems:'center'}}>
                <Image source={typeCommand=== 'surplace'? radioSelected: radio} style={{marginRight:12}}/> 
                <Text style={{color:typeCommand=== 'surplace' ? '#F23445' : '#A3A1A1'}}>A consommer sur place...</Text>
                </View>
              </Pressable>
            </View>
            <View style={{flex:1,borderColor:'#F2F2F2',borderTopWidth:2,borderStyle:'solid',paddingBottom:35,paddingLeft:24,paddingTop:29, paddingRight:19,backgroundColor:'#FAFAFA',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                <Text style={{fontSize:16,color:'#3F4D5F',paddingBottom:5,textAlign:'center',fontWeight:'500'}}> Choisissez l'addresse à laquelle vous: {textCommand} </Text>

              <View style={{alignItems:'center',flexDirection:'row',paddingBottom:17,paddingLeft:25,marginTop:15}}>
                <Image source={typeCommand=== 'livraison'? radioSelected: radio} style={{marginRight:6}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}> Chapallo de Deido 416 Rue Essaka ...</Text>
              </View>
              
              <View style={{alignItems:'center',flexDirection:'row',paddingBottom:17,paddingLeft:25}}>
                <Image source={typeCommand=== 'livraison'? radioSelected: radio} style={{marginRight:6}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}>TchopAllo Tradex Rhones Poulenc...</Text>
              </View>
              
              <View style={{alignItems:'center',flexDirection:'row',paddingBottom:17,paddingLeft:25}}>
                <Image source={typeCommand=== 'livraison'? radioSelected: radio} style={{marginRight:6}}/>
                <Text style={{fontSize:12,color:'#3F4D5F'}}>A votre Position</Text>
              </View>

               
               <Pressable onPress={()=>alert('Je ne sais pas...')}>
               <View style={{flexDirection:'row',paddingBottom:29,paddingLeft:46,alignItems:'center'}}>
                  <Image source={addRed} style={{marginRight:6}}/> 
                  <Text style={{color:'#F23445',fontSize:12,flex:1}}>Add New Address</Text>
                </View>
                </Pressable>
            </View>
      </View>

    <View style={{
      flex:1 ,
      marginLeft: 16,
    marginRight:16,
      marginBottom:19,
     
    backgroundColor: "white",
    borderRadius: 8,
    
    alignItems: "center",
    shadowColor: "rgba(170,170,170,0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 5}}>
        <Text style={{color:'#3F4D5F',paddingBottom:20, paddingTop:25,marginLeft:-60}}>Couverts pour combien de Personnes ?</Text>

        <View style={{flexDirection:'row',backgroundColor:'#EAEAEA',marginBottom:40,alignSelf:'flex-start',marginLeft:24,marginBottom:34}}>
              <Pressable onPress={() => {let qte= quantite; qte>0? qte-- : console.log('la quantite est nulle'); setQuantite(qte);}}>
                <View style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:17,paddingRight:17,paddingTop:15, paddingBottom:15,borderStyle:'solid',borderColor:'#EAEAEA',borderWidth:1.5,borderTopStartRadius:3,borderBottomStartRadius:3}}>
                  <Image source={moins}/>
                </View>
                </Pressable>

              <View style={{backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center',borderStyle:'solid',borderWidth:1,borderColor:'#EAEAEA'}}>
                  <Text style={{fontWeight:'bold',color:'#3F4D5F',fontSize:16,paddingRight:17,paddingLeft:17,paddingBottom:10, paddingTop:11}}>
                    { quantite}
                  </Text>
              </View>
              <Pressable onPress={() => {let qte= quantite; qte++; setQuantite(qte);
              }}>
                <View style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:17,paddingRight:17,paddingTop:15, paddingBottom:15,borderStyle:'solid',borderColor:'#EAEAEA',borderWidth:1.5,borderTopStartRadius:3,borderBottomStartRadius:3}}>
                  <Image source={plus}/>
                </View>
              </Pressable>
          </View>

    </View>



    <View style={{
      flex:1 ,
      marginLeft: 16,
      paddingLeft:23,
      paddingTop:25,
      paddingRight:36,
    marginRight:16,
      marginBottom:19,
     
    backgroundColor: "white",
    borderRadius: 8,
    
    alignItems: "center",
    shadowColor: "rgba(170,170,170,0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 5}}>
        
        <Pressable onPress={()=> setShow(true)}>
          <View style={{paddingBottom:33,alignItems:'center',flex:1}}>
          <Text style={{color:'#3F4D5F',paddingBottom:21,fontWeight:'bold',textAlign:'center'}}>Quand et A Quelle Heure souhaiteriez vous : {textCommand}</Text>
              <View style={{marginLeft:45}}>
                    <Pressable onPress= {()=> setTempsLivraison('AussiTot')} >
                      <View style={{flexDirection:'row',marginBottom:31,alignItems:'center'}}>
                          <Image source={tempsLivraison === 'AussiTot'? radioSelected: radio} />
                          <Text style={{textAlign:'center',fontSize:14,color:tempsLivraison === 'AussiTot'? '#F23445': '#3F4D5F'}}> AussiTot Que Possible (estimee A 1 (Une) Heure de Temps </Text>
                      </View>
                    </Pressable>

                    <Pressable onPress={() => setTempsLivraison('Plus Tard')}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Image source={tempsLivraison === 'AussiTot'?  radio: radioSelected} />
                          <Text style={{textAlign:'center',fontSize:14,color:tempsLivraison === 'AussiTot'? '#3F4D5F' : '#F23445' }}> Choisir un jour et une heure de Livraison</Text>
                      </View>
                    </Pressable>
                  <View>

                  </View>

              </View>
              {show && (<View style={{alignSelf:'stretch',flexDirection:'row',justifyContent:'space-between',alignItems:'center',textAlign:'center',flex:1,marginLeft:30,marginTop:15}}>
                
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{alignSelf:'stretch',flex:1}}
            />

            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'time'}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{alignSelf:'stretch',flex:1}}
            />
            </View>
            )}
          </View>
         </Pressable>
    </View>
    

    <View style={{
      flex:1 ,
      marginLeft: 16,
    marginRight:16,
      marginBottom:19,
     
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent:'center',
    alignItems: "center",
    shadowColor: "rgba(170,170,170,0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 5}}>
        <Text style={{color:'#F23445',paddingBottom:20, paddingTop:25,fontSize:16,textAlign:'center',position:'relative'}}>Auriez vous des instrucstions Speciales pour la confection de votre plat?</Text>
        <TextInput multiline={true} placeholder="Entrez les instrutions ici" onChangeText={(val)=>console.log(val)} style={{opacity:0.6,borderRadius:3,backgroundColor:'#FFF', borderStyle:'solid',borderColor:'#DBDBDB',borderWidth:1.5,alignSelf:'stretch',marginLeft:45,marginRight:45,marginBottom:20,padding:10}}/>
    </View>

    <Pressable
        onPress={() => {
          props.navigation.navigate('Order Confirmation');
        }}
        style={[
          {
            backgroundColor: '#F23445'
          },
          styles.wrapperCustom
        ]}>
          <Text style={{fontSize:18, color:'#FFF',paddingTop:14,paddingBottom:12}}>
             Continue to Menu Selection
          </Text>
      </Pressable>
      
    </ScrollView>
</View>
    
  );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//Tab.Navigator
//Tab.Screen
function MyTabs(props) {
  return (
    <Stack.Navigator 
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
      <Stack.Screen 
      name="Home" 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={pdj}
            />
          ),
        }}
      >
        {() => <HomeScreen data={props.data? props.data:grillKeys} />}
      </Stack.Screen>

      <Stack.Screen name="Order Confirmation" component={OrderConfirmationScreen}  
        options={{
          tabBarLabel: 'Confirmation de la Commande ',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={entree}
            />
          ),
        }}
      />
      <Stack.Screen name="Order Status" component={OrderStatuScreen}
        options={{ 
          tabBarLabel: 'Etat de la Commande',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={vienoiserie}
            />
          ),
        }}
      />
      <Stack.Screen name="Tracking Order" component={TrackingMapScreen}  
        options={{
          tabBarLabel: 'Position de ma commande',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={vienoiserie}
            />
          ),
        }}
      />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen}  
        options={{
          tabBarLabel: 'Raffraichissements',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 52, maxHeight: '70%'}}
              source={raffraichissement}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail de la Commande"
        component={OrderDetailScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={cocktail}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Drinks"
        component={Drinks}
        options={{
          tabBarLabel: 'Drinks',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={cocktail}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Commande"
        component={CartScreen}
        options={{
          tabBarLabel: 'Commande',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={cocktail}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EntrtyPoint"
        component={EntrtyPoint}
        options={{
          tabBarLabel: 'EntrtyPoint',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={cocktail}
            />
          ),
        }}
      />
      
    </Stack.Navigator>
  );
}
export default MyTabs;