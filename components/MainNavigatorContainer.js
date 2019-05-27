import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import ListDecks from './ListDecks'
import AddCard from './AddCard'
import AddDeck from './AddDeck'
import Quiz from './Quiz'
import DeckContainer from './DeckContainer'
import {
  createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer,
  createStackNavigator
} from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const TabRouteConfigs = {
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios"
      ? 'purple'
      : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios"
        ? 'white'
        : 'purple',
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
  }
}

const Tabs =
Platform.OS === "ios"
? createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfig)
: createMaterialTopTabNavigator(TabRouteConfigs, TabNavigatorConfig);

const TabsContainer = createAppContainer(Tabs)

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabsContainer,
    navigationOptions: {
      header: null,
    }
  },
  DeckContainer: {
    screen: DeckContainer,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      }
    }
  }
})

const MainNavigatorContainer = createAppContainer(MainNavigator)

export default MainNavigatorContainer
