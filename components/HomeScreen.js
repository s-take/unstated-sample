import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World!</Text>
      <Button
        title="Go to InvoiceEdit"
        onPress={() => navigation.navigate("InvoiceEdit")}
      />
      <Button
        title="Go to Summary"
        onPress={() => navigation.navigate("Summary")}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
