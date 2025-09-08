import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

type CustomTextInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export default class CustomTextInput extends Component<CustomTextInputProps> {
  render() {
    return (
      <TextInput
        style={styles.textInput}
        placeholder={this.props.placeholder}
        placeholderTextColor="#999"
        secureTextEntry={this.props.secureTextEntry || false}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 5,
  },
});
