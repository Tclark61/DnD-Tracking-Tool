import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';


 const StatField = props => {
    // UI form for all stats and notes
    // if(props.autoRoll) InitiateRoll()
    // if (props.player) only show name and initiative field

    // InitiateRoll()
        // roll 1d20 + initiative
        // add to form->Initiative

    // < Button "Confirm" />
        // makes a Character component which is Player || Monster
        // adds class to CharacterCreator -> state -> CharacterQueueArr
    const addCharacter = () => {
        props.add(55);
    }
    return (
        <View>
            <Text>New {props.type}</Text>
            <Button title="cancel" onPress={props.cancel}/>
            <Button title="add" onPress={addCharacter}/>
        </View>
    )

}

export default StatField;