import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const backButtonImage = require('../imagenes/volver.png');

export const CalendarioHospital = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const calendarRef = useRef(null);
  const [markedDates, setMarkedDates] = useState({});
  const todayString = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    setSelectedDate(dateString);
    setCurrentDate(dateString);
    setMarkedDates({
      [todayString]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#A4161A',
        selectedTextColor: 'white',
        dotColor: 'white',
        dotOpacity: 0.5,
        dotRadius: 5,
      },
    });
  }, []);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const goToToday = () => {
    setSelectedDate(todayString);
    setCurrentDate(todayString);
    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [todayString]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#A4161A',
        selectedTextColor: 'white',
        dotColor: 'white',
        dotOpacity: 0.5,
        dotRadius: 5,
      },
    }));
    calendarRef.current?.setNativeProps({ markedDates });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToToday} style={styles.backButton}>
          <Image source={backButtonImage} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendario de Turnos</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Calendar
          ref={calendarRef}
          current={currentDate}
          minDate={'2021-01-01'}
          maxDate={'2022-12-31'}
          onDayPress={(day) => onDayPress(day)}
          monthFormat={'MMMM yyyy'}
          hideExtraDays
          markedDates={markedDates}
        />
      </View>

      <TouchableOpacity onPress={goToToday} style={styles.todayButton}>
        <Text style={styles.todayButtonText}>Hoy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    padding: 5,
  },
  backButtonImage: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#A4161A',
  },
  todayButton: {
    backgroundColor: '#A4161A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  todayButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default CalendarioHospital;
