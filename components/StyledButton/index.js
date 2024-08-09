import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, onPress, content } = props;
  const backgroundColor = type === "primary" ? "black" : "white";
  const textColor = type === "primary" ? "white" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          { fontSize: 60 },
          { backgroundColor: backgroundColor },
        ]}
        onPress={() => {
          console.warn((data = "Not Available Yet"));
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
