import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'

export default props => {
    return (
    <Text style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </Text>
    )
}