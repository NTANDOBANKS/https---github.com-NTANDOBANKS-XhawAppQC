import React, { useState, useRef } from 'react';
import { View, Text, Button, Animated, StyleSheet, TextInput, Alert, Linking } from 'react-native';

const App: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    outputRange: [0, -5],
  });

  const handleContact = () => {
    // Basic validation
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    // In a real app, you'd send this data to your backend or use a service like EmailJS
    console.log('Contact Form Data:', { name, email, message }); 

    Alert.alert(
      'Message Sent!',
      'Thank you for your message. We will be in touch soon.',
      [{ text: 'OK', onPress: () => {
        setName('');
        setEmail('');
        setMessage('');
      }}]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'brown' }}>
      {/* ... (Header and Navigation Bar remain the same) ... */}

      <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { height: 100 }]} // Increase height for message
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline={true} // Allow multiple lines of text
        />

        <Button title="Send Message" color="brown" onPress={handleContact} />

        {/* Add contact information below the form */}
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>You can also reach us at:</Text>
          <Text style={{ marginBottom: 5 }} onPress={() => Linking.openURL('tel:+27123456789')}>Phone: +27 12 345 6789</Text> 
          <Text onPress={() => Linking.openURL('mailto:info@empoweringthenation.com')}>Email: info@empoweringthenation.com</Text>
        </View>
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
