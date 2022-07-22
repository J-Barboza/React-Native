import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'

export default props => {
    return (
        <View style={styles.display}>
            <Text style={[styles.displayText, {textAlign: 'right'}]} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}