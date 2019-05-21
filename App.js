import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import StatusBarComponent from './components/StatusBarComponent'
import MainNavigatorContainer from './components/MainNavigatorContainer'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarComponent
          backgroundColor='purple'
          barStyle='light-content'
        />
        <MainNavigatorContainer />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default App
