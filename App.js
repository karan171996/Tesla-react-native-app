import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import FadeInView from "./components/screen/LandingPage";

export default function App() {
  const onPressHandler = () => {
    console.log("Button Press");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FadeInView>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </FadeInView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPressHandler}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
