const { RefreshControl, ImageBackground, StyleSheet } = require("react-native");

import React from "react";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles}
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
  },
});

export default WelcomeScreen;
