import React, { Component } from 'react'
import { AsyncStorage, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import TextInputComponent from './TextInputComponent'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {
  state = {
    questionText: '',
    answerText: '',
  }

  handleChange = (id, value) => {
    id === 'question'
    ? this.setState({
      questionText: value
    })
    : this.setState({
      answerText: value
    })
  }

  submit = () => {
    const { navigate } = this.props.navigation
    const { deck, addCard } = this.props
    const title = deck.title
    const { questionText, answerText } = this.state
    const card = {
      question: questionText,
      answer: answerText,
    }

    if (questionText !== '' && answerText !== '') {
      //Update Redux
      addCard(title, card)

      //Update AsyncStorage
      addCardToDeck(title, card)

      this.setState({
        questionText: '',
        answerText: '',
      })

      navigate('DeckContainer', {
        title,
      })
    } else {
      alert('Please enter a question and an answer.')
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInputComponent
          id='question'
          placeholder='Question'
          value={this.state.questionText}
          onChangeText={this.handleChange}
        />
        <TextInputComponent
          id='Answer'
          placeholder='Answer'
          value={this.state.answerText}
          onChangeText={this.handleChange}
        />
        <TouchableOpacity
          onPress={this.submit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {

  const title = navigation.state.params.title
  const deck = decks[title]

  return {
    deck,
  }
}

export default connect(mapStateToProps, { addCard })(AddCard)
