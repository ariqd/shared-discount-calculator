import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const ProductInput = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    props.onProductUpdate(props.count, {name, price});
  }, [name, price]);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.header2, {marginBottom: 10}]}>
        Produk {props.count}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Produk (Opsional)"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga sebelum PPN (Rp)"
        onChangeText={(text) => setPrice(Number(text))}
        keyboardType="numeric"
      />
    </View>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 15,
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
