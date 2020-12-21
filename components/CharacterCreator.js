import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

class CharacterCreator extends Component{
    // MODAL
    
    // <StatField/>
    // <Button "add Player" />
        // <StatField/>
        // onPress= hide button

    // <Button "add Monster"/>
        // <StatField AutoRoll />
        // onPress= hide button

    // <Button "finished" />
        // onPress = sorts queue by initiative, add Character to binary heap called CharacterQueue
        render() {
            return (
                <Modal visible={this.props.visible} animationType="slide">
                    <View>
                        <Text>Character creator</Text>
                        <Button title="go Back" onPress={this.props.end}/>
                    </View> 
                </Modal>
            )
        }
}


export default CharacterCreator;