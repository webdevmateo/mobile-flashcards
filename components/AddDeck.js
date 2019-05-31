import React, { Component } from 'react'
import { Platform, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { addNewDeck } from '../utils/api'
import styled from 'styled-components/native'

const ContainerView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #DFDBE5;
`

const TitleText = styled.Text`
  margin: 75px 25px 25px 25px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

const TitleInput = styled.TextInput`
  background-color: #fff;
  height: 37px;
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 10px;
`

const CreateDeckBtn = Platform.OS === 'ios'
? styled.TouchableOpacity`
  margin-top: 300px;
  height: 37px;
  width: 250px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #000;
`
: styled.TouchableOpacity`
  margin-top: 200px;
  height: 37px;
  width: 250px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #000;
`

const CreateDeckText = styled.Text`
  color: #fff;
`

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
      <ContainerView>
        <TitleText>What is the title of your new deck?</TitleText>
        <TitleInput
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={this.handleChange}
        />
        <CreateDeckBtn
          onPress={this.addDeck}
        >
          <CreateDeckText>Create Deck</CreateDeckText>
        </CreateDeckBtn>
      </ContainerView>
    )
  }
}

export default connect(null, { addDeck } )(AddDeck)
