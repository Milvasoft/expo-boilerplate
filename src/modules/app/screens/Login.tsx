/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";

export default function Login() {
  const dispatch = useDispatch();

  const goHomePage = useCallback(() => {
    showToast("Welcome");

    dispatch(SetUser({ name: "Ali Burhan Keskin" }));
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.welcome}>Welcome !</Text>
      <View style={styles.buttonStyle}>
        <Button onPress={goHomePage} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    fontFamily: "Bold",
    fontSize: 25,
  },
  buttonStyle: {
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 3,
    textAlign: "center",
    fontWeight: "bold",
  },
});
