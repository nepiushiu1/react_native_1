import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen";

export default function App() {
  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/photo.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    // resizeMode: "cover",
    // alignItems: "center",
  },
});
