// Use next.js page for the mobile app
// export { default } from './pages/index';

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleFitTestScreen } from './components/pages/GoogleFitTestScreen';
import { CameraTestScreen } from './components/pages/CameraTestScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Go to GoogleFitTest"
        onPress={() => navigation.navigate('GoogleFitTest')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GoogleFitTest" component={GoogleFitTestScreen} />
        <Stack.Screen name="Camera" component={CameraTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
