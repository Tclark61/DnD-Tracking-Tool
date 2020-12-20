import React,{Component} from 'react';


class FightMode extends Component {
    // import fight queue from Ecounter component state
    // state
        // fightOver: <boolean>

    // componentwillUpdate() 
        // checks if all Players have been removed OR if all Monsters have been removed
        // if so, fightOver = true;
        // if fightOver, props.endEncounter()
    // render() {
        // will extract MAX from binary heap (based on initiative)
        // extracted Character rendered
        // <Button "remove"/> 
            // onPress = removes current character from activeCharacters, extracts, sends to removedCharcaters
        // <Button "next"/>
            // send current charcter to dequeuedCharacters, extracts new MAX from enqueuedCharacters
    // }
}


export default FightMode