import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import StatusBarComponent from './components/StatusBarComponent'
import MainNavigatorContainer from './components/MainNavigatorContainer'
import { setLocalNotification } from './utils/helpers'

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const store = createStore(reducer, middleware)

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBarComponent
            backgroundColor='purple'
            barStyle='light-content'
          />
          <MainNavigatorContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default App
