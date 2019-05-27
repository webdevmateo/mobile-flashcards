import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
  onPress = () => {
    //Todo: Add animation

    const { navigate } = this.props.navigation

    const { deck } = this.props
    const title = deck.title

    navigate('DeckContainer', {
      title,
    })
  }

  render() {
    const { deck, questions } = this.props

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.onPress}
          >
            <Text>{deck.title}</Text>
            <Text>{questions} cards</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks, { title }) {
  const deck = decks[title] ? decks[title] : null
  const questions = deck ? deck.questions.length : 0
  return {
    deck,
    questions,
  }
}

export default withNavigation(connect(mapStateToProps)(Deck))
