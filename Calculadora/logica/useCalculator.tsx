import { useEffect, useRef, useState } from "react";

enum Operator{
    add = '+',
    subtract = '-',
    mutiply ='x',
    divide = '÷',
}


export const useCalculator = () => {

    const [formula,setFormula]=useState('0')
    const [number,setNumber]=useState('0')
    const [prevNumber,setPrevNumber]=useState('0')

    const [lastWasEqual, setLastWasEqual] = useState(false);

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() =>{
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number)
        }
        
    },[number]);

    useEffect(() =>{
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    },[formula]);

    const clean = () => {

        setNumber ('0')
        setPrevNumber('0')
        setFormula('0')

        lastOperation.current = undefined;

    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }

    const deleteLast = () => {
        
        let currentSign ='';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1)
        }

        if (temporalNumber.length > 1) {
            return setNumber (currentSign + temporalNumber.slice(0,-1));
        }
        setNumber('0');

    };

    const setLasNumber =() => {
        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0,-1))
        }
        setPrevNumber(number)
        setNumber('0')
    }

    const divideOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.divide;
        setLastWasEqual(false);
    }

    const multiplyOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.mutiply;
        setLastWasEqual(false);
    }

    const subtractOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.subtract;
        setLastWasEqual(false);
    }

    const addOperation = () => {
        setLasNumber();
        lastOperation.current = Operator.add;
        setLastWasEqual(false);
    }

    const calculateSubResult = () => {

        const[firstValue, operation, secondValue] = formula.split(' ')

        const num1 = Number(firstValue)
        const num2 = Number(secondValue)

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2
            case Operator.subtract:
                return num1 - num2
            case Operator.mutiply:
                return num1 * num2
            case Operator.divide:
                return num1 / num2
        
            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    }

    const calculateResult = () => {

        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');

        setNumber(`${result}`);

        setLastWasEqual(true);

    }

    const builNumber = ( numberString: string ) => {


        if (lastWasEqual) {
            setNumber(numberString);
            setFormula(numberString);
            setLastWasEqual(false);
            return;
        }


        if (number.includes('.')&& numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            
        }

        setNumber(number + numberString);
    };


    return{
        formula,
        number,
        prevNumber,

        divideOperation,
        deleteLast,
        toggleSign,
        builNumber,
        clean,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    };


   

};