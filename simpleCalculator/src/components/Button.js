import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styles from '../styles'

export default props => {

    const styleButton = [styles.button]
    if (props.double) styleButton.push(styles.buttonDouble)
    if (props.triple) styleButton.push(styles.buttonTriple)
    if (props.operation) styleButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}