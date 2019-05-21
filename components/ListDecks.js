import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { fetchDecks } from '../utils/api'
import { getDecks } from '../actions'
import { AppLoading } from 'expo'

class ListDecks extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { getDecks } = this.props

    //fetch decks from AsyncStorage
    fetchDecks()
    .then((decks) =>
      //add decks to Redux store
      getDecks(JSON.parse(decks)))
    .then(() => this.setState({
      ready: true,
    }))
  }

  render() {
    const { ready } = this.state
    const { decks } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={{flex: 1}}>
        {Object.keys(decks).map((deck) => {
          return (
            <Deck key={deck} title={deck} />
          )
        })}
      </View>

    )
  }
}

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps, { getDecks })(ListDecks)
