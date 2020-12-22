import React from 'react';
import { StyleSheet,View, Button, FlatList, TextInput,Text } from 'react-native';


  const NumberInput = props => {
    const onButtonPress = type => {
        let num = parseInt(props.value);
        if (type === 'up') {
            num++;
        } else {
            num--;
        }
        props.changeStat(props.type,num.toString())
    }
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontWeight:'500'}}>{props.type}</Text>
            <Button title="up" onPress={()=>onButtonPress('up')}/>
            <TextInput
                style={{textAlign:'center'}}
                onChangeText={(val)=>props.changeStat(props.type,val)}
                value={props.value}/>
            <Button title="down" onPress={()=>onButtonPress('down')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12,
        paddingLeft:40,
        paddingRight:40
    }
})

export default NumberInput;