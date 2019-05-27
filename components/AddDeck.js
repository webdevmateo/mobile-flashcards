import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { addNewDeck } from '../utils/api'

function formatDeck (title) {
  return ({
    [title]: {
      title,
      questions: [],
    }
  })
}

class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (value) => {
    this.setState({
      title: value,
    })
  }

  addDeck = () => {
    const { navigate } = this.props.navigation
    const { addDeck } = this.props
    const { title } = this.state
    const deck = formatDeck(title)

    if (title !== '') {
      //Add deck to AsyncStorage
      addNewDeck(deck)

      //Todo: Add deck to store
      addDeck(deck)

      this.setState({
        title: '',
      })

      navigate('DeckContainer', {
        title,
      })
    } else {
      alert('Please enter a title.')
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={this.handleChange}
        />
        <TouchableOpacity
          onPress={this.addDeck}
        >
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { addDeck } )(AddDeck)
