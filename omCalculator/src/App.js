import React, { Component } from 'react'
import { Dimensions, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import CustomButton from './components/CustomButton'
import Display from './components/Display'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'

const initialState = {
  displayValue: '0',
  clearMemory: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {
  state = { ...initialState }

  addDigit = n => {
      const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
      
      if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
          return
      }

      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n
      this.setState({ displayValue, clearDisplay: false })

      if (n !== '.'){
          const newValue = parseFloat(displayValue)
          const values = [...this.state.values]
          values[this.state.current] = newValue
          this.setState({ values })
      }
  }

  clearMemory = () => {
      this.setState({ ...initialState })
  }

  setPositiveNegative = () => {
    const currentValue = this.state.displayValue
    const operation = this.state.operation
    const values = [...this.state.values]

    let newValue = parseFloat(currentValue)

    if (currentValue > 0) {
      newValue = -currentValue
    } else if (currentValue < 0) {
      newValue = Math.abs(currentValue)
    }
    
    if (operation){
      values[1] = newValue
    } else {
      values[0] = newValue
    }

    this.setState({
      displayValue: `${newValue}`,
      values: values,
    })
  }

  setPercente = () => {

    const operation = this.state.operation

    if (!operation) {
      this.clearMemory() 
      return
    }

    const values = this.state.values
    const valuePercente = parseFloat(this.state.displayValue/100)
    const ctrlPercente = !operation ? 0 : 1
    const percentage = eval(`${values[0]} ${'*'} ${valuePercente}`)
    const calculus = ['+', '-'].includes(operation) ? percentage : valuePercente

    try {
      values[0] = parseFloat(eval(`${values[0]} ${operation} ${calculus}`).toFixed(3))
    } catch (e){
      values[0] = this.state.values[0]
    }

    values[1] = 0
    this.setState({
        displayValue: `${values[0]}`,
        operation: ctrlPercente ? null : operation,
        current: ctrlPercente ? 0 : 1,
        clearDisplay: true,
        values: values,
    })
  }

  setBackSpace = () => {
    const values = this.state.values
    const current = this.state.current
    const value = this.state.displayValue.slice(0, -1)
    const valueBack= value.length === 0 ? 0 : value
    
    values[current] = parseFloat(valueBack)
    this.setState({
      displayValue: `${valueBack}`,
      values: values,
    })
  }

  setOperation = operation => {
    
    if (this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      if (this.state.values[1] === 0 ){
        this.setState({ operation, current: 1, clearDisplay: true})
      } else {
        const equals = operation === '='
        const values = [...this.state.values]
        
        try {
          values[0] = parseFloat(eval(`${values[0]} ${this.state.operation} ${values[1]}`).toFixed(3))
        } catch (e) {
          values[0] = this.state.values[0]
        }
        
        values[1] = 0
        this.setState({
          displayValue: `${values[0]}`,
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: true,
          values: values,
        })
      }
    }
  }
    
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.container} colors={['#121826', '#141c31', '#14223c']}>
          <View style={[styles.container]}>
            <Display value={this.state.displayValue} />
          </View>
          <View style={styles.buttons}>
            <CustomButton label="AC" keyboard="C" onClick={this.clearMemory}/>
            <CustomButton label="+/-" keyboard='+/-' onClick={this.setPositiveNegative} />
            <CustomButton label="%" keyboard={<Icon name="percentage" size={25} />} onClick={this.setPercente} />
            <CustomButton label="/" keyboard={<Icon name="divide" size={25} />} operation onClick={this.setOperation} />
            <CustomButton label="7" onClick={this.addDigit} />
            <CustomButton label="8" onClick={this.addDigit} />
            <CustomButton label="9" onClick={this.addDigit} />
            <CustomButton label="*" keyboard={<Icon name="times" size={25} />} operation onClick={this.setOperation} />
            <CustomButton label="4" onClick={this.addDigit} />
            <CustomButton label="5" onClick={this.addDigit} />
            <CustomButton label="6" onClick={this.addDigit} />
            <CustomButton label="-" keyboard={<Icon name="minus" size={25} />} operation onClick={this.setOperation} />
            <CustomButton label="1" onClick={this.addDigit} />
            <CustomButton label="2" onClick={this.addDigit} />
            <CustomButton label="3" onClick={this.addDigit} />
            <CustomButton label="+" keyboard={<Icon name="plus" size={25} />} operation onClick={this.setOperation} />
            <CustomButton label="0" onClick={this.addDigit} />
            <CustomButton label="." keyboard='.' onClick={this.addDigit} />
            <CustomButton label="bs" keyboard={<Icon name="backspace" size={25} />} onClick={this.setBackSpace} />
            <CustomButton label="=" keyboard={<Icon name="equals" size={25} />} operation onClick={this.setOperation} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}