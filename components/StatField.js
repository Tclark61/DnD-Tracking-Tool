import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { MONSTER_SCHEMA } from '../db/schema';
import Character from '../utils/character';

 const StatField = props => {
     const [stats,addStat] = useState(MONSTER_SCHEMA);
    // UI form for all stats and notes
    // <NumberInput/>
    // if(props.autoRoll) InitiateRoll()
    // if (props.player) only show name and initiative field

    // InitiateRoll()
        // roll 1d20 + initiative
        // add to form->Initiative

    // < Button "Confirm" />
        // makes a Character component which is Player || Monster
        // adds class to CharacterCreator -> state -> CharacterQueueArr
    const addCharacter = () => {
        let c = new Character(stats)
        props.add(c);
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