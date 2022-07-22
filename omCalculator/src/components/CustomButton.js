import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import styles from '../styles'

export default props => {

    const styleButton = [styles.button]
    const styleTextOpButton = !props.operation ? [styles.textButton] : [styles.textOperationButton]
    if (props.double) styleButton.push(styles.buttonDouble)
    if (props.operation) styleButton.push(styles.operationButton)

    const digit = !isNaN(props.label) ? props.label : props.keyboard

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <View style={styleButton}>
                <Text style={styleTextOpButton}>
                    {digit}
                </Text>
            </View>
        </TouchableHighlight>
    )
}