import React, { Component } from 'react'
import { AsyncStorage, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import TextInputComponent from './TextInputComponent'
import { addCardToDeck } from '../actions'

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
    const { deck, addCardToDeck } = this.props
    const title = deck.title
    const card = {
      question: this.state.questionText,
      answer: this.state.answerText,
    }

    //Update Redux
    addCardToDeck(title, card)

    //Update AsyncStorage
    

    this.setState({
      questionText: '',
      answerText: '',
    })

    navigate('DeckContainer', {
      title,
    })
  }

  render() {
    return (
      <View>
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

export default connect(mapStateToProps, { addCardToDeck })(AddCard)
