import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function LetterScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 6,
          padding: 10,
          borderRadius: 4,
          backgroundColor: 'white',
        }}
      >
        <Text style={styles.textLabel}>Perihal Surat</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textValue}>Test NDE</Text>
          <TouchableOpacity>
            <MaterialIcon
              name='content-copy'
              size={14}
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.textLabel}>Tgl Terima</Text>
            <Text style={styles.textValue}>21 Sept 2022</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.textLabel}>Lampiran</Text>
            <Text style={styles.textValue}>3 (tiga) berkas</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.textLabel}>Kode Masalah</Text>
            <Text style={styles.textValue}>HK 000</Text>
          </View>
        </View>

        <Text style={styles.textLabel}>Nomor Agenda</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textValue}>DIT-11B10000/254/2022</Text>
          <TouchableOpacity>
            <MaterialIcon
              name='content-copy'
              size={14}
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textLabel}>Nomor Surat</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textValue}>
            C.Tel.346/HK 000/DIT-11B40000/2022
          </Text>
          <TouchableOpacity>
            <MaterialIcon
              name='content-copy'
              size={14}
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textLabel}>Kepada</Text>
        <Text style={styles.textValue}>
          Sdr. MANAGER DECISION SUPPORT & EIS DEVELOPMENT
        </Text>

        <Text style={styles.textLabel}>Dari</Text>
        <Text style={styles.textValue}>
          PGS MANAGER DIGITAL LIFE & COLLABORATION DEVELOPMENT
        </Text>

        <Text style={styles.textLabel}>Tembusan</Text>
        <Text style={styles.textValue}>-</Text>

        <Text style={styles.textLabel}>Isi Surat</Text>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#000',
            alignItems: 'center',
            paddingVertical: 6,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white' }}>View Document</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function AttachmentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Attachments Screen</Text>
    </View>
  );
}

function DispositionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Disposition Screen</Text>
    </View>
  );
}

function ForwardScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Forward Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const OpenIncomingScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Letter'
        component={LetterScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcon
              name='file-outline'
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Attachments'
        component={AttachmentScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcon
              name='attachment'
              size={24}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name='Disposition'
        component={DispositionScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcon
              name='file-multiple-outline'
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Forward'
        component={ForwardScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcon
              name='file-send-outline'
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  textLabel: { fontSize: 12, color: '#636363', paddingBottom: 2 },
  textValue: { fontSize: 12, paddingBottom: 6 },
});

export default OpenIncomingScreen;
