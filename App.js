import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { addTables, seedMonstersTable} from './db/seed';

const db = SQLite.openDatabase("dnd_tracker.db");

const showTestResult = () => {
  db.transaction( tx => {
    tx.executeSql(
      "SELECT * FROM monsters LIMIT 1",
      [],
      (tx,resultSet) => console.log(resultSet))
  })
};

if(db) {
  // addTables(db);
  // seedMonstersTable(db);
  showTestResult();
} else {
  console.log('db not found!')
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
