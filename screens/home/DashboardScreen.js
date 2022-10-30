import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.dashboardCard}>
        <View style={{ ...styles.dashboardHeader, backgroundColor: '#34c759' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Need Follow Up
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles.dashboardButton, backgroundColor: '#34c759' }}
            onPress={() => navigation.navigate('Details')}
          >
            <MaterialIcon
              name='arrow-top-right'
              size={32}
              color='white'
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.dashboardCounter}>32</Text>
        </View>
      </View>
      <View style={styles.dashboardCard}>
        <View style={{ ...styles.dashboardHeader, backgroundColor: '#0f6eb5' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Incoming Letters
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles.dashboardButton, backgroundColor: '#0f6eb5' }}
            onPress={() => navigation.navigate('Details')}
          >
            <MaterialIcon
              name='arrow-top-right'
              size={32}
              color='white'
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.dashboardCounter}>164</Text>
        </View>
      </View>
      <View style={styles.dashboardCard}>
        <View style={{ ...styles.dashboardHeader, backgroundColor: '#b00020' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Disposition
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles.dashboardButton, backgroundColor: '#b00020' }}
            onPress={() => navigation.navigate('Details')}
          >
            <MaterialIcon
              name='arrow-top-right'
              size={32}
              color='white'
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.dashboardCounter}>59</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dashboardCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  dashboardHeader: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#b00020',
  },
  dashboardCounter: {
    flex: 1,
    textAlign: 'right',
    padding: 20,
    fontSize: 60,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  dashboardButton: {
    margin: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    width: 52,
    height: 52,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default DashboardScreen;
