import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductResult from '../components/ProductResult';
import numeral from 'numeral';

export default function Result(props) {
  const {
    productsCount,
    // peopleCount,
    deliveryFee,
    discount,
    tax,
    products,
  } = props.route.params;

  const [grossTotal, setGrossTotal] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

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
    let ppn = 0;
    if (tax > 0) {
      ppn = price * (tax / 100);
    }
    const discRatio = price / grossTotal;
    const discTotal = discRatio * discount;
    const delivery = deliveryFee / productsCount;
    const subtotal = price - discTotal;
    const grandTotal = Math.ceil(subtotal + delivery + ppn);

    return {
      discRatio,
      discTotal,
      delivery,
      subtotal,
      grandTotal,
      ppn,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, {width: '100%'}]}>
          <Text style={styles.label}>Net Total</Text>
          <Text style={{fontSize: 24}}>
            Rp
            {numeral(
              grossTotal + grossTotal * (tax / 100) - discount + deliveryFee,
            ).format()}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.box, {width: '30%'}]}>
          <Text style={styles.label}>Gross Total</Text>
          <Text style={styles.primaryText}>
            Rp{numeral(grossTotal).format()}
          </Text>
        </View>
        <View style={[styles.box, {width: '40%'}]}>
          <Text style={styles.label}>Diskon</Text>
          <Text style={styles.primaryText}>
            Rp{numeral(discount).format()} ({(discount / grossTotal) * 100}%)
          </Text>
        </View>
        <View style={[styles.box, {width: '30%'}]}>
          <Text style={styles.label}>Total PPN</Text>
          <Text style={styles.primaryText}>
            Rp{numeral(grossTotal * (tax / 100)).format()}
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{padding: 15}}>
        {Object.entries(products).map(([key, value]) => (
          <ProductResult
            key={key}
            index={key}
            value={value}
            countGrandTotal={countGrandTotal}
            netTotal={netTotal}
            setNetTotal={setNetTotal}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  row: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'stretch',
    backgroundColor: 'white',
  },
  box: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingTop: 15
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  primaryText: {
    fontSize: 18,
  },
});
