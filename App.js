import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import * as SQLite from 'expo-sqlite';
import { addTables, seedMonstersTable} from './db/seed';
import Encounter from './components/Encounter';
import { StyleSheet,View, Button, FlatList } from 'react-native';


const db = SQLite.openDatabase("dnd_tracker.db");
// DB test [START]
// const showTestResult = () => {
//   db.transaction( tx => {
//     tx.executeSql(
//       "SELECT * FROM monsters LIMIT 1",
//       [],
//       (tx,resultSet) => console.log(resultSet))
//   })
// };

// if(db) {
//   // addTables(db);
//   // seedMonstersTable(db);
//   showTestResult();
// } else {
//   console.log('db not found!')
// }
// DB test [END]

class App extends Component {

    state = {
      encounter:false
    }

    endEncounter = () => {
      this.setState({encounter:false})
    }

  render() {
    let encounter = null;
    if (this.state.encounter) {
      encounter = <Encounter cancel={this.endEncounter}/>
    } else {
      encounter = (
        <Button title="Start Encounter" onPress={()=> this.setState({encounter:true})}/>
      )
    }
    return (
      <View style={styles.container}>
        {encounter}
        <StatusBar style="auto" />
      </View>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;