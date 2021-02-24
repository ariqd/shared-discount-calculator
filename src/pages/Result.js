import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductResult from '../components/ProductResult';

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
  const [netTotal, setNetTotal] = useState(0);
  // let netTotal = 0;

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

  const countGrandTotal = (price) => {
    const discRatio = price / grossTotal;
    const discTotal = discRatio * discount;
    const delivery = deliveryFee / productsCount;
    const subtotal = price - discTotal;
    const grandTotal = Math.ceil(subtotal + delivery);
    // console.log(typeof grandTotal);
    setNetTotal(0);

    return {
      discRatio,
      discTotal,
      delivery,
      subtotal,
      grandTotal,
    };
  };

  return (
    <View>
      <Text>Discount: {discount}</Text>
      <Text>Tax: {tax}</Text>
      <Text>Jumlah Orang Pesan: {peopleCount}</Text>
      <Text>Ongkir: {deliveryFee}</Text>
      <Text>Jumlah Produk: {productsCount}</Text>
      <Text>Gross Total = {grossTotal}</Text>
      <Text>Net Total = {netTotal}</Text>
      {Object.entries(products).map(([key, value]) => (
        <ProductResult
          key={key}
          value={value}
          countGrandTotal={countGrandTotal}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    marginVertical: 10,
  },
});
