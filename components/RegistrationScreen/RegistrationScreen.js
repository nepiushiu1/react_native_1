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
  Image,
  // Button,
} from "react-native";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
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
        <View style={styles.userImage}>
          <Image
            style={styles.image}
            // source={require("../../assets/icon.png")}
          />
          <TouchableOpacity style={styles.userBtn}></TouchableOpacity>
        </View>
        <Text style={styles.name}>Регистрация</Text>

        <TextInput
          style={styles.input}
          placeholder="Логин"
          onFocus={() => setStateForm(true)}
          value={state.login}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, login: value }))
          }
        />

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
          <Text style={styles.textbBtn}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.login}>Уже есть аккаунт? Войти</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: { backgroundColor: "#FFFFFF", borderRadius: 25 },

  userImage: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },

  image: {
    left: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    top: -60,
    position: "absolute",
  },
  userBtn: {
    // left: 107,
    top: 21,
    left: 46,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    position: "absolute",
    // right: -25 / 2,
  },

  name: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
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
    marginBottom: 78,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
