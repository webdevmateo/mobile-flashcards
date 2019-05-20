import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListDecks from './components/ListDecks'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
