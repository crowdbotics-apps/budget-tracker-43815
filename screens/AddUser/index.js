import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

const UserCard = ({
  name,
  phone,
  onDelete
}) => <View style={styles.card}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Delete" color="#E3242B" onPress={() => console.log("Delete")} />
    </View>
  </View>;

const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([{
    name: "John Doe",
    phone: "123-456-7890"
  }, {
    name: "Jane Doe",
    phone: "098-765-4321"
  }, {
    name: "Alice Smith",
    phone: "111-222-3333"
  }, {
    name: "Bob Johnson",
    phone: "444-555-6666"
  }, {
    name: "Charlie Brown",
    phone: "777-888-9999"
  }]);

  const addUser = () => {
    setUsers([...users, {
      name,
      phone
    }]);
    setName("");
    setPhone("");
  };

  const deleteUser = phone => {
    setUsers(users.filter(user => user.phone !== phone));
  };

  const dispatch = useDispatch();
  return <SafeAreaView style={styles.container}>
      <FlatList data={users} keyExtractor={item => item.phone} renderItem={({
      item
    }) => <UserCard name={item.name} phone={item.phone} onDelete={() => deleteUser(item.phone)} />} />
      <View style={styles.form}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone" />
        <Button title="Add" onPress={addUser} color="#000" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
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
  }
});
export default AddUser;