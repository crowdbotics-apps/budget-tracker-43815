import { api_v1_items_list } from "../../store/budgettrackerAPI/items.slice.js";
import { api_v1_users_list } from "../../store/budgettrackerAPI/users.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_users_list());
    dispatch(api_v1_items_list());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled4;