import React, { useRef } from 'react';
import { View, Text, Button, Animated, StyleSheet } from 'react-native';

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
        <Text style={{ color: 'white', fontSize: 20 }}>Learnership</Text>
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
        <Button title="Exit to Home" color="brown" onPress={startAnimation} />
   
      </Animated.View>

      <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Life Skills</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Cost: R1 500</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 10 }}>
        The learnership provides the skills to navigate basic life
        necessities.
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>What you will learn:</Text>

        <View>
  <Text style={{ marginBottom: 5 }}>- Opening a bank account</Text>
  <Text style={{ marginBottom: 5 }}>- Basic labour law (know your rights)</Text>
  <Text style={{ marginBottom: 5 }}>- Basic reading and writing literacy</Text>
  <Text style={{ marginBottom: 5 }}>- Basic numeric literacy</Text>
</View>



     
        
        {/* Added Buttons with Spacing and Alignment */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Next Screen" color="brown" onPress={startAnimation} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Add to Cart" color="brown" onPress={startAnimation} />
          </View>
        </View>

        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginTop: 10 }} />
      </View>

      {/* Footer */}
      <View style={{ backgroundColor: 'black', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'grey' }}>Empowering the Nation,Empowering the Nation</Text>
      </View>
    </View>
  );
};

// Separate StyleSheet for better organization
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 30, 
    width: '100%', // Make buttons take full container width
    paddingHorizontal: 20, // Add padding to sides
  },
  buttonWrapper: {
    flex: 1, // Make buttons take equal width
  },
});

export default App;
