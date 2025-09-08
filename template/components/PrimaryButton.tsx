import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
};

export default class PrimaryButton extends Component<PrimaryButtonProps> {
  render() {
    const { backgroundColor = "#000", textColor = "#fff" } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {this.props.title}
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
  },
});
