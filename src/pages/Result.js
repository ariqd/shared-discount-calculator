import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductResult from '../components/ProductResult';
import numeral from 'numeral';
import Context from '../context/Context';

export default function Result(props) {
  const {
    // productsCount,
    // peopleCount,
    deliveryFee,
    discount,
    isPercent,
    tax,
    products,
    productsKeys,
    people,
  } = props.route.params;

  const [grossTotal, setGrossTotal] = useState(0);
  const {setCurrentPosition} = useContext(Context);
  const [allDiscounts, setAllDiscounts] = useState([]);
  let count = 0;
  let hello = [];

  useEffect(() => {
    setGrossTotal(countGrossTotal());
    setCurrentPosition(3);

    return () => {
      setGrossTotal(0);
      setCurrentPosition(2);
    };
  }, []);

  const countGrossTotal = () => {
    let gross = 0;

    Object.values(products).map((product) => {
      product.map((item) => {
        gross += item.price;
      });
    });

    return gross;
  };

  const productsCount = () => {
    let productsCount = 0;

    productsKeys.map((key) => {
      productsCount += products[key].length;
    });

    return productsCount;
  };

  const ppnTotal = () => {
    let ppn = 0;

    if (tax > 0) {
      ppn = price * (tax / 100);
    }

    return ppn;
  };

  const countGrandTotal = (price) => {
    const ppn = ppnTotal();
    const discRatio = price / grossTotal;
    const discountType = isPercent ? discount / 100 : discount;
    const discTotal = discRatio * discountType;
    const delivery = deliveryFee / productsCount();
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, {width: '30%'}]}>
          <Text style={styles.label}>Gross Total</Text>
          <Text style={styles.primaryText}>
            Rp{numeral(grossTotal).format()}
          </Text>
        </View>
        <View style={[styles.box, {width: '40%'}]}>
          <Text style={styles.label}>Diskon</Text>
          {isPercent ? (
            <Text style={styles.primaryText}>{discount} %</Text>
          ) : (
            <Text style={styles.primaryText}>
              Rp{numeral(discount).format()} (
              {((discount / grossTotal) * 100).toFixed(2)}%)
            </Text>
          )}
        </View>
        <View style={[styles.box, {width: '30%'}]}>
          <Text style={styles.label}>Total PPN</Text>
          <Text style={styles.primaryText}>
            Rp{numeral(grossTotal * (tax / 100)).format()}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.box, {width: '100%'}]}>
          <Text style={styles.label}>Net Total</Text>
          <Text style={{fontSize: 24, marginBottom: 0, paddingBottom: 0}}>
            Rp
            {numeral(
              grossTotal + grossTotal * (tax / 100) - discount + deliveryFee,
            ).format()}
          </Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        {Object.keys(products).map((key, index) => {
          const owner = people.find((arr) => arr.id === Number(key));
          const sum = products[key].reduce((a, {price}) => a + price, 0);
          let sumDiscount = 0;
          console.log(sumDiscount);
          // let finalDiscount = 0;
          // console.log(allDiscounts);
          // let count = 0;
          // console.log(hello)

          return (
            <View key={key} style={styles.ownerCard}>
              <View style={styles.ownerHeader}>
                <Text style={{fontWeight: 'bold'}}>
                  {owner?.name ? owner?.name : 'Pembeli ' + (index + 1)}
                </Text>
                <Text style={{color: '#212121', marginLeft: 3}}>
                  cuma bayar {sumDiscount} dari Rp{numeral(sum).format()}
                </Text>
              </View>
              {products[key].map((product, index) => {
                const total = countGrandTotal(product.price);
                sumDiscount += total.grandTotal;

                return (
                  <ProductResult
                    key={index}
                    index={index}
                    product={product}
                    total={total}
                  />
                );
              })}
              {setAllDiscounts((prevState) => [...prevState, sumDiscount])}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
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
    padding: 15,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  primaryText: {
    fontSize: 18,
  },
  ownerCard: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 5,
  },
  ownerHeader: {
    // padding: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    // justifyContent: 'space-between',
  },
});
