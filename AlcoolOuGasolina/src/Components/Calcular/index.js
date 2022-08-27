import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import img from '../../img/gas.png'

class App extends Component {
            
    render(){
        return (
            <Modal 
                transparent={true} 
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <View style={styles.background}>
                    <View style={styles.overlay}>
                        <View style={styles.box}>
                            <Image
                                source={img}
                                style={styles.image}/>
                            <View style={ styles.box }>
                                <Text style={styles.textResult}>Compensa usar {this.props.result}</Text>
                            </View>
                        </View>
                        <View style={ styles.box }>
                            <Text style={styles.textFix}>Com os preços</Text>
                            <Text style={styles.textNormal}>Álcool: R$ {this.props.vAlcool}</Text>
                            <Text style={styles.textNormal}>Gasolina: R$ {this.props.vGasolina}</Text>
                        </View>
                        <TouchableWithoutFeedback
                            onPress={this.props.onCancel}>
                                <View style={ styles.button }>
                                    <Text style={ styles.textButton }>Calcular novamente</Text>
                                </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default App

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    overlay: {
        flex: 1,
        backgroundColor: '#263238',
        marginHorizontal: 30,
        marginVertical: 70,
    },
    image: {
        width: 110,
        height: 110,
    },
    textResult: {
        fontSize: 20,
        color: '#43a047',
        fontWeight: 'bold',
    },
    textFix: {
        fontSize: 18,
        color: '#fff',
        padding: 10,
    },
    textNormal: {
        fontSize: 14,
        color: '#fff',
        padding: 5,
    },
    box: {
        padding: 20,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#EF6C00',
    },
    button: {
        marginTop: 40,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.4,
        borderColor: '#EF6C00',
        borderRadius: 4,
        marginHorizontal: 90,
    },
})
