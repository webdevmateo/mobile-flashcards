import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { removeDeck } from '../actions'

class DeckContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')

    return {
      title,
    }
  }

  toQuiz = () => {
    const { navigate } = this.props.navigation

    navigate('Quiz')
  }

  deleteDeck = () => {
    const { navigate } = this.props.navigation
    const { removeDeck } = this.props
    const id = this.props.navigation.getParam('title')
    removeDeck(id)
    navigate('Home')
  }

  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(null, { removeDeck })(DeckContainer)
