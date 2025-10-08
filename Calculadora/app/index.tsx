import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculadoraApp = () => {
  return (
    <View style={globalStyles.calculatorContainer }>        
      <ThemeText variant = 'h1'>50 x 5000</ThemeText>
      <ThemeText variant='h2'>250</ThemeText>
    </View>
  )
}

export default CalculadoraApp