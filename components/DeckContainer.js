import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Deck from './Deck'

class DeckContainer extends Component {
  render() {
    return (
      <View>
        <Deck />
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckContainer
