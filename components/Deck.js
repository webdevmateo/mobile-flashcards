import React, { Component } from 'react'
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  }

  onPress = () => {
    const { bounceValue } = this.state
    const { navigate } = this.props.navigation
    const { deck } = this.props
    const title = deck.title

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.5}),
      Animated.spring(bounceValue, {toValue: 1, friction: 4})
    ]).start()

    setTimeout(() => {
      navigate('DeckContainer', {
        title,
      })
    }, 350)
  }

  render() {
    const { bounceValue } = this.state
    const { deck, questions } = this.props

    return (
      <Animated.View style={{flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{scale: bounceValue}]}}>
          <TouchableOpacity
            onPress={this.onPress}
          >
            <Text>{deck.title}</Text>
            <Text>{questions} cards</Text>
          </TouchableOpacity>
      </Animated.View>
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
