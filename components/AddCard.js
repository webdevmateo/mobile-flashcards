import React, { Component } from 'react'
import { AsyncStorage, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import TextInputComponent from './TextInputComponent'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import styled from 'styled-components/native'

const ContainerView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #DFDBE5;
`

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
      <ContainerView>
        <TextInputComponent
          id='question'
          placeholder='Question'
          placeholderTextColor='#969696'
          value={this.state.questionText}
          onChangeText={this.handleChange}
          style={styles.input}
        />
        <TextInputComponent
          id='Answer'
          placeholder='Answer'
          placeholderTextColor='#969696'
          value={this.state.answerText}
          onChangeText={this.handleChange}
          style={[styles.input, {marginTop: 0}]}
        />
        <TouchableOpacity
          onPress={this.submit}
          style={styles.submit}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </ContainerView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    marginBottom: 15,
    paddingLeft: 5,
    width: 325,
    height: 37,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    color: 'black',
    backgroundColor: '#fff'
  },
  submit: {
    marginTop: 250,
    width: 250,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 3,
  },
  text: {
    color: '#fff',
  }
})

function mapStateToProps (decks, { navigation }) {

  const title = navigation.state.params.title
  const deck = decks[title]

  return {
    deck,
  }
}

export default connect(mapStateToProps, { addCard })(AddCard)
