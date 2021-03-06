import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Paint from "../../assets/svg/SvgPaint";

const PaintButton = ({
  buttonText,
  primaryColor,
  secundaryColor,
  onPress,
  style,
}) => {
  const [buttonColor, setButtonColor] = useState(primaryColor);

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        onPressIn={() => setButtonColor(secundaryColor)}
        onPressOut={() => setButtonColor(primaryColor)}
        activeOpacity={0.7}
        delayPressOut={200}
        delayPressIn={50}>
        <Paint fill={buttonColor} style={styles.paint} />
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    color: "white",
    fontSize: 24,
  },
});

export default PaintButton;
