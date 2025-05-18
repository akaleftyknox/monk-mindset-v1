import 'expo-dev-client';                 // improves native-module error reporting
import * as React from 'react';
import { Alert, Button, View } from 'react-native';
import * as DeviceActivity from 'react-native-device-activity';           // Screen Time bridge

export default function App() {
  const askPermission = async () => {
    const status = await DeviceActivity.requestAuthorization();          // returns "authorized" | ...
    Alert.alert('Screen Time status', JSON.stringify(status));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Request Screen Time" onPress={askPermission} />
    </View>
  );
}
