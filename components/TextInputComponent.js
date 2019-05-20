import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function TextInputComponent ({ value, onChangeText, id, ...rest }) {
  return (
    <TextInput
      id={id}
      value={value}
      onChangeText={(value) => onChangeText(id, value)}
      {...rest}
    />
  )
}
