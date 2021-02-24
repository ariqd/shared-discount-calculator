import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductResult = (props) => {
  const [state, setState] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setName(props.value.name);
    setPrice(props.value.price);
    return () => {
      setName('');
      setPrice(0);
    };
  }, []);

  useEffect(() => {
    setState(props.countGrandTotal(price));
    return () => {
      setState({});
    };
  }, [price]);

  return (
    <View style={styles.product}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>Rasio diskon = {state.discRatio}</Text>
      <Text>Total diskon = Rp{state.discTotal}</Text>
      <Text>Subtotal = Rp{state.subtotal}</Text>
      <Text>Ongkir = Rp{state.delivery}</Text>
      <Text>Grand Total = Rp{state.grandTotal}</Text>
    </View>
  );
};

export default ProductResult;

const styles = StyleSheet.create({
  product: {
    marginVertical: 10,
  },
});
