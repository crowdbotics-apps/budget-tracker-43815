import React from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const users = [{
    name: "User 1",
    pendingAmount: "100"
  }, {
    name: "User 2",
    pendingAmount: "200"
  }, {
    name: "User 3",
    pendingAmount: "300"
  }];
  const expenses = [{
    month: "January",
    persons: "3",
    cost: "300"
  }, {
    month: "February",
    persons: "2",
    cost: "200"
  }, {
    month: "March",
    persons: "4",
    cost: "400"
  }];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Total Cost: 1000</Text>
      <View style={styles.buttonContainer}>
        <Button title="Item List" onPress={() => {}} />
        <Button title="Add User" onPress={() => {}} />
      </View>
      <FlatList data={users} renderItem={({
      item
    }) => <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>
              Pending Amount: {item.pendingAmount}
            </Text>
          </View>} keyExtractor={item => item.name} />
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.tableHeader}>Month</Text>
          <Text style={styles.tableHeader}>Persons</Text>
          <Text style={styles.tableHeader}>Cost</Text>
        </View>
        {expenses.map(expense => <View style={styles.row} key={expense.month}>
            <Text style={styles.cell}>{expense.month}</Text>
            <Text style={styles.cell}>{expense.persons}</Text>
            <Text style={styles.cell}>{expense.cost}</Text>
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F8FC"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  cardText: {
    fontSize: 18,
    color: "#333"
  },
  table: {
    marginTop: 20
  },
  tableHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  cell: {
    fontSize: 18,
    color: "#333",
    flex: 1,
    textAlign: "center"
  }
});
export default WelcomeScreen;