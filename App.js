import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { addTables, seedMonstersTable} from './db/seed';

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

  render() {
    return (
      <View style={styles.container}>
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