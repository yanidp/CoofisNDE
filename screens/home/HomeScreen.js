import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoTitle from '../../components/LogoTitle';
import DashboardScreen from './DashboardScreen';
import TodoScreen from './TodoScreen';
import SecretaryScreen from './SecretaryScreen';
import DelegationScreen from './DelegationScreen';
import DetailScreen from './DetailScreen';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
      }}
    >
      <Tab.Screen
        name='Dashboard'
        component={DashboardScreen}
      />
      <Tab.Screen
        name='Todo'
        component={TodoScreen}
      />
      <Tab.Screen
        name='Secretary'
        component={SecretaryScreen}
      />
      <Tab.Screen
        name='Delegation'
        component={DelegationScreen}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{ headerRight: (props) => <LogoTitle {...props} /> }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeTabs}
        options={(props) => {
          const { toggleDrawer } = props.navigation;
          return {
            title: 'Home',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={toggleDrawer} style={{ width: 26, height: 26, marginLeft: -5, marginTop: 4 }}>
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
      <Stack.Screen
        name='Details'
        component={DetailScreen}
        options={{
          title: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
