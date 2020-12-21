/**
 * Outer most component for encounters.
 * will house the views and will import 
 * the appropriate classes upon initialization
 * */
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{Component} from 'react';

 class Encounter extends Component{

    state = {
        activeCharacters:null,
        dequeuedCharacters:null,
        removedCharacters:null
    }

    // on componentdidMount, addCharacters()

    // addCharacters()
        // initialize component CharacterCreator
        // embedd component in a modal

    //startEncounter()
        // hides CharacterCreator
        // saves only monsters to active session
        // initialize component FightMode
    

    // endEncounter()
        // re-saves all characters to DB
        // redirects to Home
    render() {
        return (
            <View>
                <Text>Encounter MODE</Text>
                <Button title="Cancel" onPress={this.props.cancel}/>
            </View>
        )
        
    }
 }


 export default Encounter;
 
