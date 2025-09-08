import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

type HelpTextProps = {
  text: string;
};

export default class HelpText extends Component<HelpTextProps> {
  render() {
    return <Text style={styles.helpText}>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  helpText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
    lineHeight: 16,
  },
});
