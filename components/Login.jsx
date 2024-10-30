// Login.js
import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Login() {
  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{ width: "100%", height: 460 }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.subtitle}>
          "Uncover your next journey with ease. Enjoy personalized itineraries
          right at your fingertips and travel smarter with insights powered by
          AI."
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In With Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontFamily: "outfit",
    fontSize: 17,
    textAlign: "center",
    color: Colors.GRAY,
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "15%",
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit",
    fontSize: 17,
  },
});
