import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import landingImage from '../../assets/images/landing.png'


function Landing(){

  const {navigate} = useNavigation();

  function handleNavigateToGiveClassesPage(){
    navigate('GiveClasses');
  }

  function handlenavigateStudyPages() {
    navigate('Study');
  }

  return(
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlenavigateStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />          
          
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />          
          
          <Text style={styles.buttonText}>Dar aula</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de 200 conexões já realizado {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing;