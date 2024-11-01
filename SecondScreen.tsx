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
        <Button title="Home" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Learnership" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Short Courses" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Booking" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
        <Button title="Contact Us" color="brown" onPress={startAnimation} titleStyle={{ color: 'black' }} />
      </Animated.View>

      {/* Main Content */}
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>First Aid</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 10 }}>
        This learnership teaches first aid awareness and basic life support:
        </Text>
        <Text style={{ marginBottom: 5 }}>- Wounds and bleeding</Text> 
        <Text style={{ marginBottom: 5 }}>- Burns and fractures</Text> 
        <Text style={{ marginBottom: 5 }}>- Emergency scene management</Text>
        <Text style={{ marginBottom: 5 }}>- Cardio-Pulmonary Resuscitation</Text> 
        <Text style={{ marginBottom: 5 }}>- Respiratory distress e.g.</Text> 
        <Text style={{ marginBottom: 5 }}>- Choking, blocked airway</Text>
         
      
          <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%' }} />
      </View>

      {/* Footer */}
      <View style={{ backgroundColor: 'black', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'grey' }}>Empowering the Nation</Text>
      </View>
    </View>
  );
};

export default App;
