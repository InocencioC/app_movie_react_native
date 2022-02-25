import React, {Component} from "react";
import { View, Text,Image, StyleSheet} from "react-native";

export default class Filme extends Component {
    render(){
        return(
            <View>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
                <Image style={styles.capaFilme} source={{uri: this.props.data.foto}}/>
            </View>
        )
    }
}
const styles =  StyleSheet.create({
    container:{
        
    },
    nomeFilme:{
        color:'white',
        fontSize: 18,
        fontWeight: 'bold' 
    },
    capaFilme:{
        width: 120,
        height: 150,
    }
});