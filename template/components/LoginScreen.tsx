import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomTextInput from "./CustomTextInput";
import PrimaryButton from "./PrimaryButton";
import SocialButton from "./SocialButton";
import HelpText from "./HelpText";

type LoginScreenState = {
  email: string;
  password: string;
};

export default class LoginScreen extends Component<{}, LoginScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (text: string) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text: string) => {
    this.setState({ password: text });
  };

  handleEmailLogin = () => {
    alert("Login with email clicked");
  };

  handleFacebookLogin = () => {
    alert("Login with Facebook clicked");
  };

  handleGoogleLogin = () => {
    alert("Login with Google clicked");
  };

  handleSignUp = () => {
    alert("Sign up clicked");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>E-mail</Text>
            <CustomTextInput
              placeholder="Enter your e-mail"
              value={this.state.email}
              onChangeText={this.handleEmailChange}
            />
            <HelpText text="Please enter a valid email e.g. user@example.com" />

            <Text style={styles.label}>Password</Text>
            <CustomTextInput
              placeholder="Enter your password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
            />
            <HelpText
              text="Please enter a valid password.&#10;• Minimum 8 characters&#10;• At least one uppercase letter, one lowercase letter, one number and one special character."
            />

            <PrimaryButton
              title="🔓 Login with E-mail"
              onPress={this.handleEmailLogin}
            />

            <SocialButton
              title="Login with Facebook"
              backgroundColor="#1877F2"
              icon="👤"
              onPress={this.handleFacebookLogin}
            />

            <SocialButton
              title="Login with Google"
              backgroundColor="#DB4437"
              icon="🔴"
              onPress={this.handleGoogleLogin}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
              <Text style={styles.linkText} onPress={this.handleSignUp}>
                {" "}
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 15,
  },
  footer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  linkText: {
    color: "#007AFF",
    fontWeight: "500",
  },
});
