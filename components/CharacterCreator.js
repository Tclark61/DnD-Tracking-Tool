import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import StatField from './StatField';

class CharacterCreator extends Component{
    // MODAL
    state = {
        addingCharacter:false,
        characterType:'monster'
    }

    // <StatField/>
    // <Button "add Player" />
        // <StatField/>
        // onPress= hide button

    // <Button "add Monster"/>
        // <StatField AutoRoll />
        // onPress= hide button

    // <Button "finished" />
        // onPress = sorts queue by initiative, add Character to binary heap called CharacterQueue
    
        onAddingInput(type) {
            this.setState({
                ...this.state,
                characterType:type,
                addingCharacter:true
            })
        }

        onStatFieldCancel() {
            this.setState({
                ...this.state,
                addingCharacter:false
            })
        }
        onCharacterAdd(character) {
            this.props.queue.insert(character);
            console.log(this.props.queue)
        }


        render() {

            let addMonster = null;

            if (this.state.addingCharacter) {
                if(this.state.characterType === 'monster') {
                    addMonster = <StatField type="monster" cancel={this.onStatFieldCancel.bind(this)} add={this.onCharacterAdd.bind(this)}/>
                } else {
                    addMonster = <StatField type="player" cancel={this.onStatFieldCancel.bind(this)} add={this.onCharacterAdd.bind(this)}/>
                }
                
            } else {
                addMonster = (
                    <View>
                        <Button 
                            title="add Player"
                            onPress={()=>this.onAddingInput("player")}
                        />
                        <Button 
                            title="add Monster"
                            onPress={()=>this.onAddingInput("monster")}
                        />
                        <Button title="go Back" onPress={this.props.end}/>
                    </View>                 
                )
            }
            return (
                <Modal visible={this.props.visible} animationType="slide">
                    <View>
                        <Text>Character creator</Text>
                        {addMonster}
                    </View> 
                </Modal>
            )
        }
}


export default CharacterCreator;