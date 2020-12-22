/**
 * Outer most component for encounters.
 * will house the views and will import 
 * the appropriate classes upon initialization
 * */
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{Component} from 'react';
import CharacterCreator from './CharacterCreator';
import MaxBinaryHeap from '../utils/binaryHeap';

 class Encounter extends Component{
   
     state = {
        activeCharacters: new MaxBinaryHeap(),
        dequeuedCharacters:[],
        removedCharacters:[],
        characterCreationMode:false
    }


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
    onCharacterCreationStart () {
        this.setState({
            ...this.state,
            characterCreationMode:true
        })
    }
    onCharacterCreationEnd () {
        this.setState({
            ...this.state,
            characterCreationMode:false
        })
    }
        
    render() {
        return (
            <View>
                <Text>Encounter MODE</Text>
                <CharacterCreator 
                    visible={this.state.characterCreationMode}
                    end={this.onCharacterCreationEnd.bind(this)}
                    queue={this.state.activeCharacters}
                    />
                <Button 
                    title="add Characters" 
                    onPress={this.onCharacterCreationStart.bind(this)}
                />
                <Button 
                    title="Cancel" 
                    onPress={this.props.cancel}
                />
            </View>
        )
        
    }
 }


 export default Encounter;
 
