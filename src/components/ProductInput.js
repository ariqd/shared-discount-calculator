import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ProductInput = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // console.log(props);
  }, []);

  return (
    <View style={styles.inputContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.header2, {marginBottom: 5}]}>
          Produk {props.productIndex + 1}
        </Text>
        {props.product.id > 1 ? (
          <TouchableOpacity
            onPress={() => props.onProductDelete(props.peopleKey, props.product.id)}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Hapus</Text>
          </TouchableOpacity>
        ) : null}
      </View>
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
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gainsboro',
    backgroundColor: '#fefefe',
    marginTop: 5,
  },
});
