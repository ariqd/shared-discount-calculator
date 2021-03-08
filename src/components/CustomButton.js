import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({title, color, backgroundColor, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]} {...rest}>
      <Text style={[styles.buttonText, {color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
