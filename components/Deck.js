import React, { Component } from 'react'
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

const DeckBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: bold;
`

const CardsText = styled.Text`
  margin-top: 7px;
  font-size: 14px;
  font-weight: bold;
  color: #7E7B85;
`

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
    const { deck, numberOfCards } = this.props

    return (
      <Animated.View style={[styles.container, {transform: [{scale: bounceValue}]}]}>
          <DeckBtn
            onPress={this.onPress}
          >
            <TitleText>{deck.title}</TitleText>
            <CardsText>{numberOfCards} {numberOfCards === 1 ? 'card' : 'cards'}</CardsText>
          </DeckBtn>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})

function mapStateToProps (decks, { title }) {
  const deck = decks[title] ? decks[title] : null
  const numberOfCards = deck ? deck.questions.length : 0
  return {
    deck,
    numberOfCards,
  }
}

export default withNavigation(connect(mapStateToProps)(Deck))
