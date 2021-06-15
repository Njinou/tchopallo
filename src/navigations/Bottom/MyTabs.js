import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text,Image,StyleSheet,ScrollView,Pressable,Modal,Platform,Button,TextInput} from 'react-native';
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
import confirmationGreen from '../../ressources/Appicon/confirmationGreen.png';
import arrowupgrey from '../../ressources/Appicon/arrowupgrey.png';
import arrowdowgrey from '../../ressources/Appicon/arrowdowgrey.png';
import checkgreen from '../../ressources/Appicon/checkgreen.png';
import line10 from '../../ressources/Appicon/line10.png';
import Line10grey from '../../ressources/Appicon/Line10grey.png';
import statuschecked from '../../ressources/Appicon/statuschecked.png';


/*
2.5 farine... 1000 
levure 400
sucre 500
sel 10 francs 
huile de friture 1500 
haricot 500
condiments 100 
Bouillie 300 
sucre bouillie 400 
Salaire (70+40)/(30*4) = ((70+40)/30 )/4 => 915
loyer 250 => 6000 francs.....  => 4000
10.5000]
*/
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
            <Text style={styles.modalText,{fontSize:16,color:'#3F4D5F',textAlign:'center',marginTop:29,marginBottom:31}}>Choisissez la  Quantite!</Text>
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
function OrderDelivery (){
  return (
    <Text> Les entrees seront une specialite.......</Text>
  );

}
//Choisir l'addresse  ou le lieu du restaurant a consommer u bien ou vous souhaitez porter votre met...
function EntreeScreen (){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image source={confirmationGreen} style={{marginBottom:29,marginTop:'auto'}}/>
      <Text style={{color:'#3F4D5F',fontSize:20, textAlign:'center',paddingBottom:10}} >Merci Pour votre Commande! </Text>
      <Text style={{color:'#3F4D5F',fontSize:12,textAlign:'center',paddingLeft:62,paddingRight:61,marginBottom:'auto'}}> Votre repas est en cours de preparation. Vous pouvez controller l'Etat de votre commande dans la rubique historique des commandes </Text>
      <View style={{alignItems:'flex-end'}}>
        <Text style={{paddingBottom:35,fontSize:18,color:'#C3C1C1'}}> Done</Text>
      </View>
      
    </View>
   
  );

}
function VienoiserieScreen (){
  return (
    <View style={{flex:1}}>
        <View style={{flex:1.20,backgroundColor:'#FAFAFA',borderBottomWidth:2,borderStyle:'solid',borderColor:'#F2F2F2',justifyContent:'center',}}>
            <View style={{marginLeft:24,marginRight:22,flexDirection:'row',marginTop:20}}>
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

        <View style={{flex:1,backgroundColor:'#FFF',borderBottomWidth:2,borderStyle:'solid',borderColor:'#F2F2F2',}}>
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
                  <Text style={{color:'#F23445',fontSize:12,textAlign:'center'}}>
                      Map View
                  </Text>
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
                      <Text style={{fontSize:12,color:'#3F4D5F',paddingBottom:12}}>
                          Cout Total: 2.500 Francs CFA
                      </Text>
                  </View>
                  <View style={{marginLeft:'auto'}}>
                    <Image source={arrowdowgrey}/>
                  </View>
                 
              </View>
              <View style={{marginTop:'auto',marginBottom:19,marginLeft:24,flexDirection:'row',alignItems:'center'}}>
                <Image source={checkgreen} style={{marginRight:2}}/>
                <Text style={{fontSize:12,color:'#A4A726'}}> Livré !</Text>
              </View>
              
        </View>

    </View>
  );
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
        
        <Pressable onPress={()=> setShow(true)}>
          <View style={{paddingBottom:33,alignItems:'center',flex:1}}>
          <Text style={{color:'#3F4D5F',paddingBottom:21,fontWeight:'bold',textAlign:'center'}}>Quand et A Quelle Heure souhaiteriez vous : {textCommand}</Text>
              <View style={{marginLeft:45}}>
                    <Pressable onPress= {()=> setTempsLivraison('AussiTot')} >
                      <View style={{flexDirection:'row',marginBottom:31}}>
                          <Image source={tempsLivraison === 'AussiTot'? radioSelected: radio} />
                          <Text style={{textAlign:'center',fontSize:14,color:tempsLivraison === 'AussiTot'? '#F23445': '#3F4D5F'}}> AussiTot Que Possible (estimee A 1 (Une) Heure de Temps </Text>
                      </View>
                    </Pressable>

                    <Pressable onPress={() => setTempsLivraison('Plus Tard')}>
                      <View style={{flexDirection:'row'}}>
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
    
    alignItems: "center",
    shadowColor: "rgba(170,170,170,0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 5}}>
        <Text style={{color:'#F23445',paddingBottom:20, paddingTop:25,marginLeft:-60,fontSize:16}}>Auriez vous des instrucstions Speciales pour la confection de votre plat?</Text>
        <TextInput multiline={true} placeholder="Entrez les instrutions ici" onChangeText={(val)=>console.log(val)} style={{opacity:0.6,borderRadius:3,backgroundColor:'#FFF', borderStyle:'solid',borderColor:'#DBDBDB',borderWidth:1.5,alignSelf:'stretch',marginLeft:45,marginRight:45,marginBottom:20,padding:10}}/>
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
             Continue to Menu Selection
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