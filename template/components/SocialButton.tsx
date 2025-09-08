import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type SocialButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  icon: string;
};

export default class SocialButton extends Component<SocialButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.backgroundColor }]}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.icon} {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
