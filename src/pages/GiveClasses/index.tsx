import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

function GiveClasses(){

  const { goBack } = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImage } style={styles.content}>
        <Text style={styles.title}>
          Quer ser um Proffy?
        </Text>

        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>
          Tudo bem
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default GiveClasses;