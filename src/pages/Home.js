import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';
import ProductInput from '../components/ProductInput';

export default function App(props) {
  const [productsCount, setProductsCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // setProducts([]);
    return () => {
      setProducts([]);
    };
  }, []);

  const loopProducts = () => {
    let content = [];
    for (let i = 0; i < productsCount; i++) {
      content.push(
        <ProductInput
          key={i}
          count={i + 1}
          onProductUpdate={onProductUpdate}
        />,
      );
    }
    return content;
  };

  const onProductUpdate = (index, value) => {
    if (value.price > 0) {
      setProducts((prevState) => ({...prevState, [index]: value}));
    }
  };

  const onSubmit = () => {
    // console.log({
    //   productsCount,
    //   peopleCount,
    //   deliveryFee,
    //   discount,
    //   tax,
    //   products,
    // });

    props.navigation.navigate('Result', {
      productsCount,
      peopleCount,
      deliveryFee,
      discount,
      tax,
      products,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <View style={{flexGrow: 1}}>
        <Text style={styles.header}>Shared Discount Calculator</Text>
        <View style={styles.hr} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jumlah Orang Pesan</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setPeopleCount(text)}
            defaultValue="1"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Diskon (Rp)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setDiscount(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ongkos Kirim (Rp)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setDeliveryFee(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Total PPN (%)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setTax(text)}
            defaultValue="0"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jumlah Produk</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setProductsCount(text)}
          />
        </View>
        {loopProducts()}
        <View style={styles.inputContainer}>
          <Button
            title="Hitung Harga Produk Setelah Diskon"
            onPress={() => onSubmit()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Button title="Reset" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header2: {
    fontSize: 20,
  },
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
  hr: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginVertical: 15,
  },
});
