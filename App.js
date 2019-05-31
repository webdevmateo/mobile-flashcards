import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import StatusBarComponent from './components/StatusBarComponent'
import MainNavigatorContainer from './components/MainNavigatorContainer'
import { setLocalNotification } from './utils/helpers'
import styled from 'styled-components/native'

const ContainerView = styled.View`
  flex: 1;
`

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const store = createStore(reducer, middleware)

    return (
      <Provider store={store}>
        <ContainerView>
          <StatusBarComponent
            backgroundColor='#261E5F'
            barStyle='light-content'
          />
          <MainNavigatorContainer />
        </ContainerView>
      </Provider>
    )
  }
}

export default App
