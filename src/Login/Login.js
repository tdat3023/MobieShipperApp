import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import { isValidEmail, isValidPassword } from "../utilies/Validations";
// import { auth, db } from "../../firebase/firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { firebaseConfig } from "../../firebase/firebase";
// import { initializeApp } from "firebase/app";

// Khởi tạo Firebase
// const firebaseApp = initializeApp(firebaseConfig);

export default function Login({ navigation }) {
  const [getPassWordVisible, setPassWordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const isValidationOK = () => {
    email.length > 0 &&
      password.length > 0 &&
      isValidEmail(email) == true &&
      isValidPassword(password) == true;
    // console.log(firebaseDatabase);
  };

  // Khởi tạo đối tượng auth của Firebase
  // const auth = getAuth();
  // // Hàm kiểm tra xác thực đăng nhập
  // const handleSignIn = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Đăng nhập thành công
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigation.navigate("HomeTabs");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //       // Xử lý lỗi đăng nhập
  //     });
  // };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* top */}
        <View style={styles.topView}>
          <Image resizeMode="center" style={styles.image}></Image>
        </View>

        {/* down */}
        <View style={styles.downView}>
          {/* input login*/}
          <View style={styles.input}>
            {/* email */}
            <Text style={{ fontSize: 30, marginBottom: 10, font: "urbanist" }}>
              Đăng Nhập
            </Text>
            <View style={styles.viewInput}>
              <TextInput
                style={{ paddingLeft: 10 }}
                onChangeText={(text) => {
                  setErrorEmail(
                    isValidEmail(text) == true
                      ? "ok"
                      : "Số điện thoại không chính xác "
                  );
                  setEmail(text);
                }}
                placeholder="Số điện thoại"
              ></TextInput>
            </View>

            {/* password */}
            <View style={styles.viewInputPass}>
              <TextInput
                style={{ paddingLeft: 10, flex: 1 }}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                placeholder="Nhập mật khẩu"
                secureTextEntry={getPassWordVisible ? false : true}
              ></TextInput>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "5%",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setPassWordVisible(!getPassWordVisible);
                  }}
                >
                  {getPassWordVisible ? (
                    <Ionicons
                      style={styles.imageEye}
                      name="eye"
                      size={24}
                      color="black"
                    />
                  ) : (
                    <Ionicons
                      style={styles.imageEye}
                      name="eye-off"
                      size={24}
                      color="black"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* btn login */}
            <View>
              <TouchableOpacity
                style={styles.btn}
                disabled={isValidationOK() == false}
                onPress={() => {
                  console.log("email:" + email);
                  console.log("errorEmail:" + errorEmail);
                  console.log("password:" + password);
                  navigation.navigate("HomeTabs");
                  // handleSignIn;
                }}
              >
                <Text>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* more */}
          <View style={styles.downMore}>
            <Text style={{ marginBottom: 10 }}>
              Đăng nhập bằng tài khoản khác
            </Text>
            <View style={styles.downMoreHelp}>
              <TouchableOpacity>
                <Entypo name="google--with-circle" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Entypo name="facebook-with-circle" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Recover");
              }}
            >
              <Text style={{ color: "#FFD658", fontSize: 20 }}>
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F9",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  downView: {
    flex: 2,

    alignItems: "center",
  },

  input: {
    width: "80%",
    justifyContent: "center",
  },

  viewInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    borderRadius: 5,
  },

  viewInputPass: {
    flexDirection: "row",
    height: 50,
    marginBottom: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    borderRadius: 5,
  },

  btn: {
    height: 50,
    marginBottom: 10,
    backgroundColor: "#FFD658",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
  },
  recoverPassword: {
    flexDirection: "row",
  },

  downMore: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  downMoreHelp: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-around",
    marginBottom: 10,
  },
});
