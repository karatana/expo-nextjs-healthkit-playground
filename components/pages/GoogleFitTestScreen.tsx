import GoogleFit, { Scopes } from 'react-native-google-fit';
import { View, Text } from 'react-native';
import React from 'react';
import { Platform } from 'react-native';

// from https://github.com/StasDoskalenko/react-native-google-fit
export const GoogleFitTestScreen: React.FC = () => {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      // The list of available scopes inside of src/scopes.js file
      const options = {
        scopes: [
          Scopes.FITNESS_ACTIVITY_READ,
          Scopes.FITNESS_ACTIVITY_WRITE,
          Scopes.FITNESS_BODY_READ,
          Scopes.FITNESS_BODY_WRITE,
        ],
      };
      GoogleFit.authorize(options)
        .then((authResult) => {
          if (authResult.success) {
            console.log('AUTH_SUCCESS');
          } else {
            if (authResult.success === false) {
              console.log('AUTH_DENIED', authResult);
            }
          }
        })
        .catch(() => {
          console.log('AUTH_ERROR');
        });
    }
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};
