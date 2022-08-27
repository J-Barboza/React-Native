import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Calcular from './Components/Calcular'

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            bomba: require('./img/logo.png'),
            valorAlcool: '',
            valorGasolina: '',
            melhorOpcao: '',
        }

        this.calcular = this.calcular.bind(this)
        this.sair = this.sair.bind(this)
    }

    calcular() {
        const vAlcool = parseFloat(this.state.valorAlcool)
        const vGasolina = parseFloat(this.state.valorGasolina)
        const melhoropcao = vAlcool / vGasolina

        if (melhoropcao.toFixed(2) <= 0.70){
            this.setState({melhorOpcao: 'Álcool'})
        } else {
            this.setState({melhorOpcao: 'Gasolina'})
        }
        this.setState({modalVisible: true})
    }

    sair(visible){
        this.setState({modalVisible: visible})
    }
    
    render(){
        return (
            <View style={styles.container}>
               <Calcular isVisible={ this.state.modalVisible } 
                    result={this.state.melhorOpcao}
                    vAlcool={parseFloat(this.state.valorAlcool).toFixed(2)}
                    vGasolina={parseFloat(this.state.valorGasolina).toFixed(2)}
                    onCancel={ () => this.setState({ modalVisible: false,
                                                    valorAlcool: '',
                                                    valorGasolina: '',
                                                })}
               />
               <View>
                <Text style={styles.textTitle}>Álcool ou Gasolina?</Text>
               </View>
               <View style={styles.boxTop}>
                    <Image
                        source={this.state.bomba}
                        style={styles.image}
                    />
                    <Text style={styles.textMiddle}>Qual melhor opção</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Álcool (preço por litro):</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
                        placeholder='preço do álcool'
                        onChangeText={ (valorA) => this.setState({valorAlcool: valorA})} 
                        value={this.state.valorAlcool} >
                    </TextInput>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Gasolina (preço por litro):</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
                        placeholder='preço da gasolina'
                        onChangeText={ (valorG) => this.setState({valorGasolina: valorG})} 
                        value={this.state.valorGasolina} >
                    </TextInput>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button} onPress={this.calcular} >
                        <Text style={styles.textButton}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
    },
    boxTop: {
        alignItems: 'center',
    },
    box: {
        height: 70,
    },
    image: {
        marginTop: 10,
        width: 110,
        height: 110,
    },
    text: {
        fontSize: 12,
        color: '#fff',
        marginLeft: 15,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EF6C00',
        margin: 20,
    },
    textMiddle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f9a825',
        margin: 20,
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#999999',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        height: 35,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    button:{
        height: 30,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF6C00',
        borderRadius: 4,
        marginHorizontal: 15,
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})