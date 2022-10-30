import { View, Text, Button } from 'react-native'
import React from 'react'

const TodoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todo Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default TodoScreen