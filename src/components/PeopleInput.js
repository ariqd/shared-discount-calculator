import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const PeopleInput = (props) => {
  const [name, setName] = useState('');
  //   const [price, setPrice] = useState(0);

    useEffect(() => {
      props.onPeopleUpdate(props.count, {name});
    }, [name]);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.header2, {marginBottom: 10}]}>
        Pembeli {props.count}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nama (Opsional)"
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

export default PeopleInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gainsboro',
    backgroundColor: '#fefefe',
    marginBottom: 5,
  },
});
