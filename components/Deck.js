import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
  onPress = () => {

    const { navigate } = this.props.navigation

    const { deck } = this.props
    const title = deck.title

    navigate('DeckContainer', {
      title,
    })
  }

  render() {
    const { deck } = this.props
    const questions = deck.questions.length

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.onPress}
          >
            <Text>{deck.title}</Text>
            <Text>{questions && `${questions} cards`}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks, { title }) {
  const deck = decks[title] ? decks[title] : null

  return {
    deck
  }
}

export default withNavigation(connect(mapStateToProps)(Deck))
