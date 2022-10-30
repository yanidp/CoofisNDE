import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import HomeScreen from './screens/home/HomeScreen';
import ViewIncomingScreen from './screens/incoming/ViewIncomingScreen';

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function CustomDrawerContent(props) {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#CF0A0A', padding: 16 }}>
        <Image
          source={require('./assets/images/bod-yanidp-150.png')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 3,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 10,
            color: 'white',
          }}
        >
          Yani Dama Putera
        </Text>
        <Text
          style={{
            paddingTop: 4,
            color: 'white',
          }}
        >
          720461
        </Text>
      </View>

      <Animated.View style={{ flex: 1, transform: [{ translateX }], backgroundColor: 'white' }}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Help'
          onPress={() => alert('Link to help')}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: '#CF0A0A' }
      }}
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='home'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='IncomingLetters'
        component={ViewIncomingScreen}
        options={{
          title: 'Incoming Letters',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='file-import-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Disposition'
        component={ViewIncomingScreen}
        options={{
          title: 'Disposition',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='file-multiple-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Inprogress'
        component={ViewIncomingScreen}
        options={{
          title: 'Need Follow Up',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='file-edit-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Tracking'
        component={ViewIncomingScreen}
        options={{
          title: 'Tracking',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='file-eye-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Submitted'
        component={ViewIncomingScreen}
        options={{
          title: 'Submitted',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='file-check-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Delegation'
        component={ViewIncomingScreen}
        options={{
          title: 'Delegation',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='human-male-male'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Secretary'
        component={ViewIncomingScreen}
        options={{
          title: 'Secretary',
          drawerIcon: ({ color, size }) => (
            <MaterialIcon
              name='human-male-boy'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
