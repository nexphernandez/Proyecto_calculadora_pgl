import { Text, Pressable } from 'react-native'
import React from 'react'

interface Props {
    label:string;

}

const CalculatorButton = ({ label }: Props) => {
  return (
    <Pressable>

        <Text style={{color:'white'}}>{ label }</Text>

    </Pressable>
  )
}

export default CalculatorButton