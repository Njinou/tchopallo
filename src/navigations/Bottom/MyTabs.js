import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text,Image,StyleSheet,ScrollView,Pressable,Modal,Platform,Button} from 'react-native';
import {View} from 'react-native';

import React,{useState} from 'react';
import pdj from '../../ressources/images/pdj.png';
import entree from '../../ressources/images/entree.jpeg';
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

import DateTimePicker from '@react-native-community/datetimepicker';
//changer l'icone de plats chauds..
// on peut regrouper dans raffraichissement  cocktail et jus/ biere ou liqueur 
//amuse gueule... vienoiserie,....
//repas; on met entree plats chauds.... desserts 
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
  }
});

const Tab = createBottomTabNavigator();

function PdjScreen (){
  const [itemAdded,addItem] = useState (false);
  const [modalVisible, setModalVisible] = useState(false);
  const [command,setCommand] = useState({});
  const [quantite,setQuantite]= useState(0);

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

  return  (
    <View style={{justifyContent: 'space-between',flex:1}}>
    <ScrollView>
    <View style={{flex:0.80,marginTop:5}}>
        <View style={{backgroundColor:'transparent',flex:1,paddingLeft:22, paddingRight:22
        }}>
          <Image style={{width: undefined, height: 50, flex:1,marginTop:20,borderTopLeftRadius:8,borderTopRightRadius:8,
          
          }} resizeMode="cover" source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} 
          />
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
              Vegan Lentil Quinoa Broth Bowl
            </Text>
            <Text style={{fontSize:17, color:'#A4A726',marginBottom:10,paddingLeft:17,paddingRight:15}}>
                $10.00
            </Text>
            <Text style={{fontSize:12,color:'#3F4D5F',paddingRight:45,paddingBottom:20,paddingLeft:17,paddingRight:15}}>
            Organic quinoa and brown rice, lentil blend, tomato sofrito, fresh kale and spinach with a lemon wheel in our umami soy-miso broth.
            </Text>
            <Pressable onPress={() => {addItem(!itemAdded);
                                        itemAdded ? setModalVisible(false): setModalVisible(true);
                                        setQuantite(1);
              }}>
              <View style={{backgroundColor:itemAdded?'#D5D952':'#F2AE30',borderBottomEndRadius:8,borderBottomStartRadius:8,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Image source={itemAdded?addedgreen:  Shape} style={{marginRight:6}}/>
                <Text style={{fontSize:12,color:itemAdded? '#585B00': '#FFF',paddingTop:14,paddingBottom:15}}>{itemAdded? 'item added to order':  'Add to order' } </Text>
              </View> 
            </Pressable>
          </View>
    </View>
  </ScrollView> 

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
            <Text style={styles.modalText,{fontSize:16,color:'#3F4D5F',textAlign:'center',marginTop:29,marginBottom:31}}>Choisis la  Quantite!</Text>
            <View style={{flexDirection:'row',backgroundColor:'#EAEAEA',marginBottom:40}}>
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
              <Pressable onPress={() => {let qte= quantite; qte++; setQuantite(qte);}}>
                <View style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:17,paddingRight:17,paddingTop:15, paddingBottom:15,borderStyle:'solid',borderColor:'#EAEAEA',borderWidth:1.5,borderTopStartRadius:3,borderBottomStartRadius:3}}>
                  <Image source={plus}/>
                </View>
              </Pressable>
          </View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
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
      <View style={{marginTop:'auto'}}>
   <Pressable
        onPress={() => {
          console.log("pressed");
        }}
        style={[
          {
            backgroundColor: '#F23445'
          },
          styles.wrapperCustom
        ]}>
          <Text style={{fontSize:18, color:'#FFF',paddingTop:14,paddingBottom:12}}>
            {'(1) or number of items '}Continue to Order
          </Text>
      </Pressable>
   </View> 
  </View>
  );
}
function OrderDelivery (){
  return (
    <Text> Les entrees seront une specialite.......</Text>
  );

}

function EntreeScreen (){
  return (
    <Text> Les entrees seront une specialite.......</Text>
  );

}
function VienoiserieScreen (){
  return <Text> bakery is my shit .........</Text>
}

function PlatScreen (){
  return <Text> kouakoukou got me stuck into something......</Text>
}
function DessertScreen (){
  return <Text> dessert is good for digestion... deal with it .........</Text>
}

function RaffraichissementScreen (){
  return <Text> Douala is too hot... i need some drinks...... deal with it .........</Text>
}

function CocktailScreen (){

  const [quantite,setQuantite]= useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
              <View style={{flexDirection:'row',marginBottom:13}}>
                <Image source={radioSelected} style={{marginRight:12}}/> 
                <Text style={{color:'#A3A1A1'}}>A Emporter</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:13}}>
               <Image source={radio} style={{marginRight:12}}/> 
               <Text style={{color:'#A3A1A1'}}>Livraison A Domicile</Text>
              </View>

              <View style={{flexDirection:'row',marginBottom:13}}>
               <Image source={radio} style={{marginRight:12}}/> 
               <Text style={{color:'#A3A1A1'}}>A consommer sur place...</Text>
              </View>
            </View>
            <View style={{flex:1,borderColor:'#F2F2F2',borderTopWidth:2,borderStyle:'solid',paddingBottom:35,paddingLeft:24,paddingTop:29, paddingRight:19,backgroundColor:'#FAFAFA',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                <Text style={{fontSize:16,color:'#3F4D5F',paddingBottom:5}}> Livrer a l'addresse suivante </Text>
                <Text style={{fontSize:12,color:'#3F4D5F',paddingBottom:17}}> Chapallo de Deido 416 Rue Essaka ...</Text>
               
               <View style={{flexDirection:'row',paddingBottom:29}}>
                  <Image source={addRed} style={{marginRight:6}}/> 
                  <Text style={{color:'#F23445',fontSize:12,flex:1}}>Add New Address</Text>
                </View>
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
              <Pressable onPress={() => {let qte= quantite; qte++; setQuantite(qte);}}>
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
        <Text style={{color:'#3F4D5F',paddingBottom:21}}>Quand et A Quelle Heure souhaiteriez vous etre livres votre commande ? </Text>

        <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>


    </View>

    <Pressable
        onPress={() => {
          console.log("pressed");
        }}
        style={[
          {
            backgroundColor: '#F23445'
          },
          styles.wrapperCustom
        ]}>
          <Text style={{fontSize:18, color:'#FFF',paddingTop:14,paddingBottom:12}}>
            {'(1) or number of items '}Continue to Order
          </Text>
      </Pressable>
      
    </ScrollView>
</View>
    
  );
}


function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions ={{
        borderRadius:5
      }}
      initialRouteName="Pdj"
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
    
      <Tab.Screen name="Pdj" component={PdjScreen}  
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
      />
      <Tab.Screen name="Entrees" component={EntreeScreen} 
        options={{
          tabBarLabel: 'Entrees',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={entree}
            />
          ),
        }}
      />
      <Tab.Screen name="Vienoiserie" component={VienoiserieScreen} 
        options={{
          tabBarLabel: 'Vienoiserie',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={vienoiserie}
            />
          ),
        }}
      />
      <Tab.Screen name="Plat Chauds" component={PlatScreen}  
        options={{
          tabBarLabel: 'Plats Chauds',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={vienoiserie}
            />
          ),
        }}
      />
      <Tab.Screen name="Desserts" component={DessertScreen}  
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
      />
      <Tab.Screen name="Raffraichissement" component={RaffraichissementScreen}  
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
      <Tab.Screen
        name="Cocktail"
        component={CocktailScreen}
        options={{
          tabBarLabel: 'Cocktail',
          tabBarIcon: () => (
            <Image
              fadeDuration={0}
              style={{width: 22, height: 22}}
              source={cocktail}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;