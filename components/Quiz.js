import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Quiz extends Component {
  render() {
    return (
      <View>
        <Text># correct/total # of questions</Text>
        <Text>Question Text</Text>
        <TouchableOpacity>
          <Text>Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Quiz