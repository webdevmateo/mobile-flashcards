import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
  onPress = () => {
    const { navigate } = this.props.navigation
    navigate('DeckContainer')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.onPress}
          >
            <Text>Deck Title</Text>
            <Text># of cards</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Deck)
