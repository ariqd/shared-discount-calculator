import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import numeral from 'numeral';

const ProductResult = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.row}>
        <Text style={{fontSize: 20}}>
          {props.product.name === ''
            ? 'Product ' + (props.index + 1)
            : props.product.name}
        </Text>
        <View>
          <Text style={{fontSize: 12, color: 'gray', textAlign: 'right'}}>
            Grand Total
          </Text>
          <Text style={{fontSize: 18}}>
            Rp{numeral(props.total.grandTotal).format()}
          </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Harga Sebelum PPN</Text>
        <Text>Rp{numeral(props.product.price).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Harga Setelah PPN</Text>
        <Text>Rp{numeral(props.product.price + props.total.ppn).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Rasio Diskon</Text>
        <Text>{(props.total.discRatio * 100).toFixed(2)}%</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Total Diskon</Text>
        <Text>Rp{numeral(props.total.discTotal).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Subtotal</Text>
        <Text>Rp{numeral(props.total.subtotal).format()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: 'gray'}}>Ongkir</Text>
        <Text>Rp{numeral(props.total.delivery).format()}</Text>
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
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
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
