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
        <Text style={{ color: 'white', fontSize: 30 }}>Welcome To </Text>
        <Text style={{ color: 'white', fontSize: 40 }}>Empowering the Nation</Text>
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
        <Button title="HOME" color="brown" onPress={startAnimation} />
        <Button title="Booking" color="brown" onPress={startAnimation} />
        <Button title="Contact Us" color="brown" onPress={startAnimation} />

   
      </Animated.View>

      <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}> </Text>
        <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 5 }}>About Us:</Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'darkbrown', width: '100%', marginBottom: 10 }} />
        <Text style={{ marginBottom: 3 }}>
     
        </Text>
       
        <Text style={{ marginBottom: 100,  fontSize: 20, }}>Empowering the Nation was founded in 2018 and provides courses in
            Johannesburg. Numerous domestic workers and gardeners have received
            training through both the six-month Learnerships and the six-week
            Short Skills Training Programmes to enhance their skills and
            increase their marketability.</Text>

            

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
        <Button title="Learnerships" color="brown" onPress={startAnimation} />
        <Button title="" color="brown" onPress={startAnimation} />
        <Button title="Short Courses" color="brown" onPress={startAnimation} />
        
   
      </Animated.View>
       

       
     
        
        {/* Added Buttons with Spacing and Alignment */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="" color="brown" onPress={startAnimation} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="" color="brown" onPress={startAnimation} />
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
