import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import numeral from 'numeral';

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
      <View style={styles.row}>
        <Text style={{fontSize: 20}}>
          {name === '' ? 'Product ' + props.index : name}
        </Text>
        <View>
          <Text style={{fontSize: 12, color: 'gray', textAlign: 'right'}}>Grand Total</Text>
          <Text style={{fontSize: 18}}>
            Rp{numeral(state.grandTotal).format()}
          </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Harga Sebelum PPN</Text>
        <Text>Rp{numeral(price).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Harga Setelah PPN</Text>
        <Text>Rp{numeral(price + state.ppn).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Rasio Diskon</Text>
        <Text>{(state.discRatio * 100).toFixed(2)}%</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Total Diskon</Text>
        <Text>Rp{numeral(state.discTotal).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Subtotal</Text>
        <Text>Rp{numeral(state.subtotal).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Ongkir</Text>
        <Text>Rp{numeral(state.delivery).format()}</Text>
      </View>
    </View>
  );
};

export default ProductResult;

const styles = StyleSheet.create({
  product: {
    marginVertical: 8,
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  row: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'stretch',
    alignItems: 'center',
  },
  hr: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginVertical: 15,
  },
});
