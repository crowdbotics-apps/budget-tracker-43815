import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { api_v1_users_list } from "../../store/budgettrackerAPI/users.slice.js";
import { budgetconnector_post_api_v1_signup_create } from "../../store/budgetConnector/budgetconnector_response_post_CreateUsers.slice.js";
import { budgetconnector_delete_api_v1_users_id_delete } from "../../store/budgetConnector/budgetconnector_response_get_Getuserdetails.slice.js";

const UserCard = ({
  name,
  email,
  onDelete
}) => <View style={styles.card}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{email}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Delete" color="#E3242B" onPress={onDelete} />
    </View>
  </View>;

const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(budgetconnector_post_api_v1_signup_create({
      name,
      email: phone,
      password: "Pass@123"
    })).then(() => {
      dispatch(api_v1_users_list());
      setName("");
      setPhone("");
    });
  };

  const deleteUser = id => {
    dispatch(budgetconnector_delete_api_v1_users_id_delete({
      id
    })).then(() => {
      dispatch(api_v1_users_list());
    });
  };

  const {
    entities
  } = useSelector(state => state.Users);
  useEffect(() => {
    dispatch(api_v1_users_list());
  }, []);
  return <SafeAreaView style={styles.container}>
      <FlatList data={entities} keyExtractor={item => item.phone} renderItem={({
      item
    }) => <UserCard name={item.name} email={item.email} onDelete={() => deleteUser(item.id)} />} />
      <View style={styles.form}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone" />

        <Pressable style={styles.addButtonStyles} onPress={addUser} disabled={name && phone ? false : true}>
          <Text style={styles.addButtonTitle}>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  addButtonTitle: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 16
  },
  addButtonStyles: {
    marginHorizontal: 20,
    backgroundColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center"
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  phone: {
    fontSize: 16,
    color: "#888"
  },
  form: {
    padding: 10,
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  icon: {
    width: 20,
    height: 20
  },
  SBCoIlGo: {
    position: "absolute"
  }
});
export default AddUser;