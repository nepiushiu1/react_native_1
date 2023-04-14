import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const initialValue = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [stateForm, setStateForm] = useState(false);
  const [state, setState] = useState(initialValue);

  console.log(Platform.OS);

  const sendData = () => {
    setStateForm(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialValue);
  };

  // const keyboardHide = () => {
  //   setStateForm(false);
  //   Keyboard.dismiss();
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.form, marginBottom: stateForm ? 0 : 0 }}>
        <Text style={styles.name}>Войти</Text>

        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
          onFocus={() => setStateForm(true)}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          value={state.password}
          onFocus={() => setStateForm(true)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
        />
        <TouchableOpacity style={styles.button} onPress={sendData}>
          <Text style={styles.textbBtn}>Войти</Text>
        </TouchableOpacity>
        <Text style={styles.login}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },

  name: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 17,
  },

  input: {
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    marginHorizontal: 16,
    marginTop: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginHorizontal: 16,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  textbBtn: { color: "#ffffff", fontSize: 16, lineHeight: 19 },

  login: {
    marginTop: 16,
    marginBottom: 144,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
