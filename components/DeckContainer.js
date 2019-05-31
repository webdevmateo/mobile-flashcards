import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { removeDeck } from '../actions'
import { deleteDeck } from '../utils/api'
import styled from 'styled-components/native'

const ContainerView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #DFDBE5;
`

const TitleView = styled.View`
  margin-top: 150px;
  margin-bottom: 100px;
`

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
const CardsText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #93909A;
`
const AddCardBtn = styled.TouchableOpacity`
  background-color: #fff;
  height: 37px;
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const StartQuizBtn = styled.TouchableOpacity`
  background-color: #000;
  height: 37px;
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const StartQuizText = styled.Text`
  color: #fff;
`

const DeleteDeckText = styled.Text`
  color: #A07B92;
  font-weight: bold;
`

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
    const title = this.props.navigation.getParam('title')
    const { numberOfCards } = this.props

    return (
      <ContainerView>
        <TitleView>
          <TitleText>{title}</TitleText>
          <CardsText>{numberOfCards} {numberOfCards === 1 ? 'card' : 'cards'}</CardsText>
        </TitleView>
        <AddCardBtn
          onPress={this.toAddCard}
        >
          <Text>Add Card</Text>
        </AddCardBtn>
        <StartQuizBtn
          onPress={this.toQuiz}
        >
          <StartQuizText>Start Quiz</StartQuizText>
        </StartQuizBtn>
        <TouchableOpacity
          onPress={this.deleteDeck}
        >
          <DeleteDeckText>Delete Deck</DeleteDeckText>
        </TouchableOpacity>
      </ContainerView>
    )
  }
}

function mapStateToProps (decks, { navigation } ) {
  const title = navigation.state.params.title
  const deck = decks[title]
  const numberOfCards = deck ? deck.questions.length : 0

  return {
    numberOfCards,
  }
}

export default connect(mapStateToProps, { removeDeck })(DeckContainer)
