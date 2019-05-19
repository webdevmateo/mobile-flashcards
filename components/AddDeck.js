import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class AddDeck extends Component {
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck Title'
        />
        <TouchableOpacity>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddDeck
