import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';


const App= ()=>
{
  return(
    <ImageBackground source={require('./assets/2.jpg')} style={styles.img}>

     <View  style={styles.vw}>
       <Image style={styles.img1} source={require('./assets/1280px-React-icon.svg.png')}></Image>

      <Text style={styles.txt}> Hello React Native </Text>
      <View style={{marginTop:10}}>
        
      
      <TextInput title='User Name' placeholder='User Name' style={styles.txtinput} ></TextInput>
      
      
      
        <TextInput title='Password' placeholder='Password' style={styles.txtinput} ></TextInput>
        

      </View>
      <View style={styles.btn}>
        <Button title="SUBMIT" color='#070707
'/>
      </View>

      </View>

    </ImageBackground>
  );
}
const styles= StyleSheet.create({

  img:{

    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
    

  },

  txt:{
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
    
  },

  vw:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },

  img1:{
    height: 120,
    width:120,

  },

  txtinput:{

    
    height: 40,
    width: 200,
    
    
    borderBottomColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#a7a5ca'
     },

     btn:{
       marginTop: 15,
       borderRadius: 60,
       width: 150


     }
  

  

});


export default App;

