import React, { useState, useEffect } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { budgetconnector_get_api_v1_items_list } from "../../store/budgetConnector/budgetconnector_response_get_Listitems.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { budgetconnector_delete_api_v1_items_id_delete } from "../../store/budgetConnector/budgetconnector_response_patch_Updateitems.slice.js";
import { budgetconnector_post_api_v1_items_create } from "../../store/budgetConnector/budgetconnector_response_post_Createitems.slice.js";

const Items = ({
  route
}) => {
  const {} = route.params || {};
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const {
    entities
  } = useSelector(state => state.Budgetconnector_response_get_Listitems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(budgetconnector_get_api_v1_items_list());
  }, []);

  const deleteItem = id => {
    dispatch(budgetconnector_delete_api_v1_items_id_delete({
      id
    })).then(() => {
      dispatch(budgetconnector_get_api_v1_items_list());
    });
  };

  const addUser = () => {
    dispatch(budgetconnector_post_api_v1_items_create({
      name,
      price
    })).then(() => {
      dispatch(budgetconnector_get_api_v1_items_list());
      setName("");
      setPrice("");
    });
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.table}>
        {entities?.map((item, index) => <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.price}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Delete" color="#E3242B" onPress={() => deleteItem(item?.id)} />
            </View>
          </View>)}
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Item Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} />
        <Button title="Add" color="black" onPress={addUser} disabled={name && price ? false : true} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: "#333"
  },
  buttonContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 5
  },
  form: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
});
export default Items;