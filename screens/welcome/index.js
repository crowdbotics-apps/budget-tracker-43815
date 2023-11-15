import React, { useEffect } from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { api_v1_users_list } from "../../store/budgettrackerAPI/users.slice.js";
import { budgetconnector_get_api_v1_items_list } from "../../store/budgetConnector/budgetconnector_response_get_Listitems.slice.js";

const WelcomeScreen = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const {
    entities: itemList
  } = useSelector(state => state.Budgetconnector_response_get_Listitems);
  const {
    entities: users
  } = useSelector(state => state.Users);
  const totalPrice = itemList && itemList?.reduce((accumulator, currentItem) => {
    const itemPrice = parseFloat(currentItem.price);
    return accumulator + itemPrice;
  }, 0);
  const indivisualPrice = Math.round(totalPrice / users?.length); // Group objects by the month they were created

  const groupedData = itemList && itemList.reduce((groups, item) => {
    const createdDate = new Date(item.created_at);
    const year = createdDate.getUTCFullYear();
    const month = createdDate.getUTCMonth() + 1; // Adding 1 to get the month as 1-based index

    const yyyyMM = `${year}-${month.toString().padStart(2, '0')}`;

    if (!groups[yyyyMM]) {
      groups[yyyyMM] = [];
    }

    groups[yyyyMM].push(item);
    return groups;
  }, {}); // Calculate the total price for each group and create a new array

  const totalExpenses = Object.keys(groupedData).map(month => {
    const items = groupedData[month];
    const total = items.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
    return {
      month,
      total
    };
  }); // Array of month names

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Function to convert date to month word

  function getMonthWord(dateString) {
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    return monthNames[monthIndex];
  }

  useEffect(() => {
    dispatch(api_v1_users_list());
    dispatch(budgetconnector_get_api_v1_items_list());
  }, []);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Total Cost: {totalPrice}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Item List" onPress={() => navigation.navigate("Items")} color="#000" />
        <Button title="Add User" onPress={() => navigation.navigate("AddUser")} color="#000" />
      </View>
      <FlatList data={users} renderItem={({
      item
    }) => <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>
              Pending Amount: {indivisualPrice}
            </Text>
          </View>} keyExtractor={item => item.name} />
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.tableHeader}>Month</Text>
          {
          /* <Text style={styles.tableHeader}>Persons</Text> */
        }
          <Text style={styles.tableHeader}>Cost</Text>
        </View>
        {totalExpenses && totalExpenses.map(expense => <View style={styles.row} key={expense.month}>
            <Text style={styles.cell}>{getMonthWord(expense.month)}</Text>
            {
          /* <Text style={styles.cell}>{expense.persons}</Text> */
        }
            <Text style={styles.cell}>{expense.total}</Text>
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