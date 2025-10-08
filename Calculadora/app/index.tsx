import { View} from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'

const CalculadoraApp = () => {
  return (
    <View style={globalStyles.calculatorContainer }> 
      
      <View style={{paddingHorizontal:30, marginBottom:20}}>
      <ThemeText variant = 'h1'>50 x 5000</ThemeText>
      <ThemeText variant='h2'>250</ThemeText>
      </View>       

      <View style={globalStyles.row}>
          <CalculatorButton label = 'C' />
          <CalculatorButton label = '+/-' />
          <CalculatorButton label = 'del' />
          <CalculatorButton label = '÷' />
      </View>
    </View>

  )
}

export default CalculadoraApp