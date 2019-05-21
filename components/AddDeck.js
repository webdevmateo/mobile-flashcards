import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class AddDeck extends Component {

  addDeck = () => {
    const { navigate } = this.props.navigation

    //Todo: Add deck to AsyncStorage
    //Todo: Add deck to store

    navigate('DeckContainer')
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck Title'
        />
        <TouchableOpacity
          onPress={this.addDeck}
        >
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddDeck
