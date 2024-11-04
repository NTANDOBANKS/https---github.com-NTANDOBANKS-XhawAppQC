import React, { useState, useRef } from 'react';
import { View, Text, Button, Animated, StyleSheet, TextInput, Alert } from 'react-native';

const App: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Cooking'); // Default course

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5], // Move up by 5 units
  });

  const handleBooking = () => {
    // Basic validation - you can enhance this
    if (!name || !email || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    // Here you would typically send the booking data (name, email, phoneNumber, selectedCourse)
    // to your backend for processing. 
    // For now, we'll just show an alert.
    Alert.alert(
      'Booking Successful',
      `Thank you, ${name}! Your booking for ${selectedCourse} has been received. We will contact you shortly at ${email} or ${phoneNumber}.`,
      [{ text: 'OK' }]
    );

    // Reset the form fields (optional)
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'brown' }}>
      {/* ... (Header and Navigation Bar remain the same) ... */}

      <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Book Your Course</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" // For showing appropriate keyboard
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad" // For showing appropriate keyboard
        />

        {/* Course Selection (You can replace this with a dropdown or other UI) */}
        <Text style={{ fontSize: 18, marginTop: 20 }}>Selected Course: {selectedCourse}</Text>
        {/* Add UI for course selection here if needed */}

        {/* Booking Button */}
        <Button title="Book Now" color="brown" onPress={handleBooking} />

        <Button title="Book Now" color="brown" onPress={handleBooking} />
      </View>

      {/* ... (Footer remains the same) ... */}
    </View>
  );
};

// Separate StyleSheet for better organization
const styles = StyleSheet.create({
  // ... (other styles) ...
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default App;
