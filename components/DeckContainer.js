import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Deck from './Deck'

class DeckContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    //Todo: populate title dynamically
    return {
      title: 'Deck Title'
    }
  }

  toQuiz = () => {
    const { navigate } = this.props.navigation

    navigate('Quiz')
  }

  deleteDeck = () => {
    const { navigate } = this.props.navigation

    navigate('Home')
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Deck />
        <View style={{flex: 1, alignItems: 'center'}}><TouchableOpacity
          onPress={() => navigate('AddCard')}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.toQuiz}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.deleteDeck}
        >
          <Text>Delete Deck</Text>
        </TouchableOpacity></View>
      </View>
    )
  }
}

export default DeckContainer
