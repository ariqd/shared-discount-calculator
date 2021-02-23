import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) {
  const {
    productsCount,
    peopleCount,
    deliveryFee,
    discount,
    tax,
    products,
  } = props.route.params;

  const [grossTotal, setGrossTotal] = useState(0);

  useEffect(() => {
    setGrossTotal(countGrossTotal());
    return () => {
      setGrossTotal(0);
    };
  }, []);

  const countGrossTotal = () => {
    let gross = 0;

    Object.values(products).map((product) => {
      gross += product.price;
    });

    return gross;
  };

  return (
    <View>
      <Text>Discount: {discount}</Text>
      <Text>Tax: {tax}</Text>
      <Text>Jumlah Orang Pesan: {peopleCount}</Text>
      <Text>Ongkir: {deliveryFee}</Text>
      <Text>Jumlah Produk: {productsCount}</Text>
      {Object.entries(products).map(([key, value]) => {
        return (
          <View key={key}>
            <Text>{value.name}</Text>
            <Text>{value.price}</Text>
            <Text>
              Rasio diskon = {((value.price / grossTotal) * 100).toFixed(2)} %
            </Text>
          </View>
        );
      })}
      <Text>Gross Total = {grossTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
