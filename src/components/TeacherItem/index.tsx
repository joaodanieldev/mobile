import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher{
  id: number;
  avatar: string;
  bio: string;
  cost: Number;    
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps{
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: teacher.avatar}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}> {teacher.subject} </Text>
        </View>
      </View>

      <Text style={styles.bio}> {teacher.bio} </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost} </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* {<Image source={heartOutLineIcon} />} */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>          
        </View>
      </View>
    </View>
  )
}


export default TeacherItem;