import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,SafeAreaView } from 'react-native';
import { MONSTER_SCHEMA } from '../db/schema';
import Character from '../utils/character';
import NumberInput from './NumberInput';
import AutoRoller from './AutoRoller';

 const StatField = props => {
     const [stats,changeStat] = useState(MONSTER_SCHEMA);
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
        let c = new Character(stats,props.type)
        props.add(c);
    }

    const onchangeNumStat = (stat,val) => {
        
        changeStat(currentStats=>{
            return {
                ...currentStats,
                [stat]:parseInt(val) || 0
            }

        })
    }

    const onChangeTextStat = (stat,string) => {
        changeStat(currentStats => {
            return {
                ...currentStats,
                [stat]:string
            }
        })
    }

    const createMonsterFields = () => {
      return (
          <View>
              <TextInput style={styles.input} placeholder="enter name" value={stats.name} onChangeText={(val)=>onChangeTextStat("name",val)}/>
              <NumberInput type="health" value={stats.health.toString()} changeStat={onchangeNumStat}/>
              <AutoRoller type="initiative" changeStat={onchangeNumStat}/>
              <NumberInput type="armor_class" value={stats.armor_class.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="strength" value={stats.strength.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="dexterity" value={stats.dexterity.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="constitution" value={stats.constitution.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="intelligence" value={stats.intelligence.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="wisdom" value={stats.wisdom.toString()} changeStat={onchangeNumStat}/>
              <NumberInput type="charisma" value={stats.charisma.toString()} changeStat={onchangeNumStat}/>
              <TextInput style={styles.input} placeholder="notes" value={stats.notes} onChangeText={(val)=>onChangeTextStat("notes",val)}/>
          </View>
      )

    }

    const createPlayerFields = () => {
        return (
            <View>
                <TextInput style={styles.input} placeholder="enter name" value={stats.name} onChangeText={(val)=>onChangeTextStat("name",val)}/>
                <NumberInput type="initiative" value={stats.initiative.toString()} changeStat={onchangeNumStat}/>
            </View>
        )
    }

    let fields;
    if(props.type === 'monster') {
        fields = createMonsterFields() 
    } else {
        fields = createPlayerFields()
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>New {props.type}</Text>
                {fields}
                <Button title="cancel" onPress={props.cancel}/>
                <Button title="Confirm" onPress={()=>{
                    addCharacter();
                    props.cancel();
                }}/>
            </ScrollView>
        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({
    container: {
        paddingBottom:40,
    },
    input:{
        margin:12
    }
    
})

export default StatField;