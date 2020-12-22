import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,SafeAreaView } from 'react-native';

const AutoRoller = props => {
    const [rollNum,setRollNum] = useState(0)

    const roll = ()=> {
        let num = Math.floor((Math.random() * (20 - 1) + 1));
        setRollNum(num);
        props.changeStat(props.type,num)
    }
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center'}}>Initiative</Text>
            <Button title="ROLL" onPress={roll}/>
            <Text style={{textAlign:'center'}}>{rollNum}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:12,
        margin:10,
        paddingLeft:40,
        paddingRight:40,
        borderWidth:2,
        borderColor:'black'
    }
})

export default AutoRoller;