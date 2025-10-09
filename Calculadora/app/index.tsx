import { View} from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/logica/useCalculator'

const CalculadoraApp = () => {

  const {
    formula,
    prevNumber,
    builNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer }> 
      
      <View style={{paddingHorizontal:30, marginBottom:20}}>
      <ThemeText variant = 'h1'>{formula}</ThemeText>

        {
          formula === prevNumber ? (
            <ThemeText variant='h2'> </ThemeText>
          ) : (
            <ThemeText variant='h2'>{prevNumber}</ThemeText>
          )
        }
      </View>       

      <View style={globalStyles.row}>
          <CalculatorButton 
          label = 'C' 
          blackText 
          color={Colors.lightGray}
          onPress={clean}
          />
          <CalculatorButton 
          label = '+/-' 
          blackText 
          color={Colors.lightGray}
          onPress={toggleSign}/>

          <CalculatorButton 
          label = 'del' 
          blackText 
          color={Colors.lightGray}
          onPress={deleteLast}/>

          <CalculatorButton 
          label = '÷'  
          color={Colors.orange}
          onPress={divideOperation}/>
      </View>

      <View style={globalStyles.row}>
          <CalculatorButton 
          label = '7' 
          onPress={()=> builNumber('7')}
          />
          <CalculatorButton 
          label = '8' 
          onPress={()=> builNumber('8')}/>

          <CalculatorButton 
          label = '9' 
          onPress={()=> builNumber('9')}/>

          <CalculatorButton 
          label = 'x'  
          color={Colors.orange}
          onPress={multiplyOperation}/>
      </View>

      <View style={globalStyles.row}>
          <CalculatorButton 
          label = '4' 
          onPress={()=> builNumber('4')}
          />
          <CalculatorButton 
          label = '5' 
          onPress={()=> builNumber('5')}/>

          <CalculatorButton 
          label = '6' 
          onPress={()=> builNumber('6')}/>

          <CalculatorButton 
          label = '-'  
          color={Colors.orange}
          onPress={subtractOperation}/>
      </View>
      <View style={globalStyles.row}>
          <CalculatorButton 
          label = '1' 
          onPress={()=> builNumber('1')}
          />
          <CalculatorButton 
          label = '2' 
          onPress={()=> builNumber('2')}/>

          <CalculatorButton 
          label = '3' 
          onPress={()=> builNumber('3')}/>

          <CalculatorButton 
          label = '+'  
          color={Colors.orange}
          onPress={addOperation}/>
      </View>
      <View style={globalStyles.row}>
          <CalculatorButton 
          label = '0' 
          doubleSize 
          onPress={()=> builNumber('0')}
          />
          <CalculatorButton 
          label = '.' 
          onPress={()=> builNumber('.')}/>

          <CalculatorButton 
          label = '='  
          color={Colors.orange}
          onPress={calculateResult}/>
      </View>
    </View>

  )
}

export default CalculadoraApp