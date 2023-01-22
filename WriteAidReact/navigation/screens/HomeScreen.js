import { useState } from 'react';
import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Modal, Dimensions, StyleSheet, Image} from 'react-native';
//import {WhatTypeStencil} from '../Components/WhatTypeStencil';

import UploadImageScreen from './UploadImageScreen';
 

export default function HomeScreen({navigation}) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const ChangeModalVisible = (bool) => {
    setIsModalVisible(bool);
  }

  

const WhatTypeStencil = (props) => {

  closeModal = (bool) => {
    props.ChangeModalVisible(bool);
  }

    return(
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
        <View style={styles.modal}>
            <View style={styles.textView}>
                <Text style={[styles.text, {fontSize:20}]}> Stencil Type </Text>
                <Text style={[styles.text, {fontWeight:'normal', paddingTop: 20}]}> How do you want to create a stencil?</Text>
            </View>

            <View style={styles.buttonsView}>
              <TouchableOpacity style={ styles.touchableOpacity}
              onPress={() => [closeModal(false), navigation.navigate('UploadImage')]}
              >
                <Text style={ [styles.text, {color: 'blue'}]}>
                  Upload Image
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={ styles.touchableOpacity}
              onPress={() => closeModal(false)}
              >
                <Text style={ [styles.text, {color: 'blue'}]}>
                  Enter Text/Speak
                </Text>
              </TouchableOpacity>
            </View>

        </View>
        

        </TouchableOpacity>
    )
}

  return (
    <SafeAreaView
      style={{margin: 10 }}>
      <TouchableOpacity 
        style={{ backgroundColor: '#00A89D', padding: 10, borderRadius: 15, height:'60%',  alignItems:'center', justifyContent: 'center' }}
        onPress={() => ChangeModalVisible(true)}
        
      >
        <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 40, fontWeight:'bold' }}>+</Text>
        <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 20 }}>New Stencil</Text>
      </TouchableOpacity>
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => ChangeModalVisible(false)}
      >
        <WhatTypeStencil
          ChangeModalVisible={ChangeModalVisible}
        />

      </Modal>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "url_for('video')"}}
        />
        {/* add image here */}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  modal: {
      height: 150,
      width: Dimensions.get('window').width - 80,
      paddingTop: 10,
      backgroundColor:'#A8A8A8',
      borderRadius: 10,
  },
  textView: {
      flex: 1,
      alignItems: 'center',
  },
  text: {
      margin:5,
      fontSize:16,
      fontWeight:'bold'
  },
  buttonsView: {
    width:'100%',
    flexDirection: 'row',
  },
  touchableOpacity: {
    flex:1,
    paddingVertical:10,
    alignItems: 'center',
  }
})

