import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

class AddCard extends Component {

  state = {
    questionText: '',
    answerText: '',
  }

  handleChange = (text) => {
    alert(text)
  }

  submit = () => {
    alert('working')
  }

  render() {
    return (
      <View>
        <TextInput
          id='question'
          placeholder='Question'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.questionText}
        />
        <TextInput
          id='Answer'
          placeholder='Answer'
          onChangeText={this.handleChange}
          value={this.state.answerText}
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
