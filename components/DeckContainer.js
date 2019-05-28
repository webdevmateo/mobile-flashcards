import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { removeDeck } from '../actions'
import { deleteDeck } from '../utils/api'

class DeckContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')

    return {
      title,
    }
  }

  toAddCard = () => {
    const title = this.props.navigation.getParam('title')

    const { navigate } = this.props.navigation
    navigate('AddCard', {
      title,
    })
  }

  toQuiz = () => {
    const title = this.props.navigation.getParam('title')
    const { navigate } = this.props.navigation

    navigate('Quiz', {
      title,
    })
  }

  deleteDeck = () => {
    const { navigate } = this.props.navigation
    const { removeDeck } = this.props
    const id = this.props.navigation.getParam('title')
    //Update Redux
    removeDeck(id)
    //Update AsyncStorage
    deleteDeck(id)

    navigate('ListDecks')
  }

  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.toAddCard}
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
