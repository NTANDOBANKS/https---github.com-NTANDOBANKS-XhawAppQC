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
        <Text style={{ color: 'white', fontSize: 20 }}>Short Course</Text>
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
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Garden Maintence</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Cost: R750</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 10 }}>
      The short course provides basic knowledge of watering, pruning, and
      planting in a domestic garden.
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>What you will learn:</Text>

        <Text style={{ marginBottom: 5 }}>- Watering restrictions and the water requirements of indigenous and exotic plants</Text>
        <Text style={{ marginBottom: 5 }}>- Pruning and propagation of plants</Text>
        <Text style={{ marginBottom: 5 }}>- Planting techniques for different plant types</Text>

       
     
        
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
        <Text style={{ color: 'grey' }}>Empowering the Nation</Text>
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
