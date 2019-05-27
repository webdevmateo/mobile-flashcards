import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    correct: 0,
    currentIndex: 0,
    currentQuestion: 1,
    showAnswer: false,
    showScore: false,
  }

  static navigationOptions = ({ navigation }) => {
      //Todo: populate title dynamically
      const title = `${navigation.getParam('title')} Quiz`

      return {
        title,
      }
    }

    showAnswer = () => {
      const { length } = this.props
      const { currentQuestion } = this.state
      const { showAnswer } = this.state

      this.setState({
        showAnswer: !showAnswer,
      })
    }

    handleCorrect = () => {
      const { length } = this.props
      const arrayLength = length - 1
      const { currentQuestion } = this.state

      this.setState((state) => ({
        correct: state.correct + 1,
        currentIndex: state.currentIndex === arrayLength ? state.currentIndex : state.currentIndex + 1,
        currentQuestion: state.currentQuestion + 1,
        showScore: state.currentQuestion >= length ? true : false,
        showAnswer: false,
      }))
    }

    handleIncorrect = () => {
      const { length } = this.props

      this.setState((state) => ({
        currentQuestion: state.currentQuestion + 1,
        showScore: state.currentQuestion >= length ? true : false,
        showAnswer: false,
      }))
    }

    restart = () => {
      this.setState({
        correct: 0,
        currentIndex: 0,
        currentQuestion: 1,
        showAnswer: false,
        showScore: false,
      })
    }

    toDeckContainer = () => {
      const { title } = this.props
      const { navigate } = this.props.navigation

      navigate('DeckContainer', {
        title,
      })
    }


  render() {
    const { deck, length } = this.props
    const { correct, currentIndex, currentQuestion, showAnswer, showScore } = this.state
    const questionText = length > 0 ? deck.questions[currentIndex].question : null
    const answerText = length > 0 ? deck.questions[currentIndex].answer : null

    if (length === 0) {
      return (
          <View>
            <Text>This deck doesn't have any questions yet.  In order to take a quiz on this deck, please add some questions.
            </Text>
          </View>
      )
    }

    if (showScore === true) {
      return (
        <View>
          <Text>Score: {correct <= 0 ? 0 : correct}/{length}</Text>
          <TouchableOpacity
            onPress={this.restart}
          >
            <Text>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toDeckContainer}
          >
            <Text>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>{currentQuestion <= length ? currentQuestion : length}/{length}</Text>
        <Text>{questionText}</Text>
        <TouchableOpacity
          onPress={this.showAnswer}
        >
          <Text>{showAnswer === false ? 'Answer' : answerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleCorrect}
        >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleIncorrect}
        >
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {
  const title = navigation.state.params.title
  const deck = decks[title]
  const length = deck.questions.length > 0
    ? deck.questions.length
    : 0

  return {
    title,
    deck,
    length,
  }
}

export default connect(mapStateToProps)(Quiz)
