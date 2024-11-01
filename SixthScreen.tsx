import React, { useRef } from 'react';
import { View, Text, Button, Animated } from 'react-native';

const App: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

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

  return (
    <View style={{ flex: 1, backgroundColor: 'brown' }}>
      <View style={{ backgroundColor: 'brown', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 30 }}>Empowering the Nation</Text>
      </View>

      {/* Navigation Bar */}
      <Animated.View
        style={{
          backgroundColor: 'brown',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          transform: [{ translateY }],
        }}
        onLayout={startAnimation}
      >
        <Button title="Home" color="brown" onPress={startAnimation} />
        <Button title="Learnership" color="brown" onPress={startAnimation} />
        <Button title="Short Courses" color ="brown" onPress={startAnimation} />
        <Button title="Booking" color="brown" onPress={startAnimation} />
        <Button title="Contact Us" color="brown" onPress={startAnimation} />
      </Animated.View>

      <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Cooking</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Cost: R750</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 10 }}>
        The short course teaches you how to prepare and cook nutritious family meals.
        </Text>
        <Text style={{ marginBottom: 5 }}>- Nutritional requirements for a healthy body</Text>
        <Text style={{ marginBottom: 5 }}>- Types of protein,carbohydrates and vegetables</Text>
        <Text style={{ marginBottom: 5 }}>- Planning meals</Text>
        <Text style={{ marginBottom: 5 }}>- Preparation and cooking of meals</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginTop: 10 }} />
       
      </View>

      {/* Footer */}
      <View style={{ backgroundColor: 'black', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'grey' }}>Empowering the Nation</Text>
      </View>
    </View>
  );
};

export default App;
