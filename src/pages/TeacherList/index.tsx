import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import {Feather} from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';

function TeacherList() {

  const [teachers, setTeachers] = useState([]);
  const[isfiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFilterVisible(){
    setIsFiltersVisible(!isfiltersVisible);
  }

  async function handlerFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
    
    
  }

  return (
  <View style={styles.container}>
    <PageHeader 
      title="Proffys disponiveis" 
      headerRight={(
        <BorderlessButton onPress={handleToggleFilterVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}
    >
      { isfiltersVisible && (
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput  
            style={styles.input} 
            value={subject} 
            onChangeText={text => setSubject(text)} 
            placeholder="Qual a materia?" 
            placeholderTextColor="#c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput  
                style={styles.input} 
                value={week_day} 
                onChangeText={text => setWeekDay(text)} 
                placeholder="Qual o dia?" 
                placeholderTextColor="#c1bccc"
              />

            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horarios</Text>
              <TextInput  
                style={styles.input} 
                value={time} 
                onChangeText={text => setTime(text)}
                placeholder="Qual Horarios?" 
                placeholderTextColor="#c1bccc"
              />

            </View>
          </View>

          <RectButton onPress={handlerFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
      )}
    </PageHeader>

    <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      {teachers.map((teacher: Teacher ) => {
        return <TeacherItem key={teacher.id} teacher={teacher} />
      } )}

    </ScrollView>
  </View>
  );
}

export default TeacherList;