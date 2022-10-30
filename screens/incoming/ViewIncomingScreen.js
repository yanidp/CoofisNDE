import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpenIncomingScreen from './OpenIncomingScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoTitle from '../../components/LogoTitle';

function ViewLetters({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>View Incoming Letters</Text>
      <Button
        title='Open Incoming Letter'
        onPress={() => navigation.navigate('OpenIncomingLetter')}
      />
    </View>
  );
}

const LettersStack = createNativeStackNavigator();

const ViewIncomingScreen = () => {
  const { colors } = useTheme();

  return (
    <LettersStack.Navigator
      screenOptions={{ headerRight: (props) => <LogoTitle {...props} /> }}
    >
      <LettersStack.Screen
        name='ViewIncomingLetters'
        component={ViewLetters}
        options={(props) => {
          const { toggleDrawer } = props.navigation;
          return {
            title: 'Incoming Letters',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={toggleDrawer}
                style={{ width: 26, height: 26, marginLeft: -5, marginTop: 4 }}
              >
                <MaterialIcon
                  name='menu'
                  size={24}
                  style={{ color: colors.primary }}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <LettersStack.Screen
        name='OpenIncomingLetter'
        component={OpenIncomingScreen}
        options={{ title: 'Letter' }}
      ></LettersStack.Screen>
    </LettersStack.Navigator>
  );
};

export default ViewIncomingScreen;
