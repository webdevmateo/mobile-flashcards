import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import TextInputComponent from './TextInputComponent'

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
    console.log(JSON.stringify(this.state))
    this.setState({
      questionText: '',
      answerText: '',
    })

    const { navigate } = this.props.navigation

    navigate('DeckContainer')
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

export default AddCard
