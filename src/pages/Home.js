import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import PeopleInput from '../components/PeopleInput';
// import ProductInput from '../components/ProductInput';

export default function App(props) {
  // const [productsCount, setProductsCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(1);
  // const [deliveryFee, setDeliveryFee] = useState(0);
  // const [discount, setDiscount] = useState(0);
  // const [tax, setTax] = useState(0);
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   if (productsCount === 0 || productsCount === '') {
  //     setProducts([]);
  //   }
  //   return () => {
  //     setProducts([]);
  //   };
  // }, [productsCount]);

  // const loopProducts = () => {
  //   let content = [];
  //   if (productsCount > 10) {
  //     content.push(
  //       <Text
  //         style={{color: 'red', marginBottom: 20, textAlign: 'center'}}
  //         key="maxExceeded">
  //         Maksimal 10 produk!
  //       </Text>,
  //     );
  //   } else {
  //     for (let i = 0; i < productsCount; i++) {
  //       content.push(
  //         <ProductInput
  //           key={i}
  //           count={i + 1}
  //           onProductUpdate={onProductUpdate}
  //         />,
  //       );
  //     }
  //   }
  //   return content;
  // };

  // const onProductUpdate = (index, value) => {
  //   if (value.price > 0) {
  //     setProducts((prevState) => ({...prevState, [index]: value}));
  //   }
  // };

  // const handlePeopleChange = (value) => {
  //   const parsedQty = Number.parseInt(value);
  //   if (Number.isNaN(parsedQty)) {
  //     setPeopleCount(0); //setter for state
  //   } else if (parsedQty > 10) {
  //     setPeopleCount(10);
  //   } else {
  //     setPeopleCount(parsedQty);
  //   }
  // };

  const handlePeopleChange = () => {
    console.log('Hello');

    setPeopleCount(peopleCount + 1)
  };

  const loopPeople = () => {
    let content = [];
    if (peopleCount > 10) {
      content.push(
        <Text
          style={{color: 'red', marginBottom: 20, textAlign: 'center'}}
          key="maxExceeded">
          Maksimal 10 orang!
        </Text>,
      );
    } else {
      for (let i = 0; i < peopleCount; i++) {
        content.push(
          <PeopleInput key={i} count={i + 1} onPeopleUpdate={onPeopleUpdate} />,
        );
      }
    }
    return content;
  };

  const onPeopleUpdate = (index, value) => {
    // if (value.price > 0) {
    setPeople((prevState) => ({...prevState, [index]: value}));
    // }
  };

  const onSubmit = () => {
    if (peopleCount <= 0) {
      Alert.alert(
        'Tidak Bisa Melanjutkan',
        'Jumlah Orang Pesan minimal 1 orang',
      );
    } else {
      props.navigation.navigate('Product', {
        // productsCount,
        peopleCount,
        people,
        // deliveryFee,
        // discount,
        // tax,
        // products,
      });
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <View style={{flexGrow: 1}}>
          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Jumlah Pembeli</Text>
            <TextInput
              style={[styles.input, {marginBottom: 0}]}
              keyboardType="number-pad"
              // onChangeText={(text) => setPeopleCount(text)}
              onChangeText={handlePeopleChange}
              defaultValue="1"
              maxLength={2}
              value={peopleCount.toString()}
            />
            <Text style={{color: '#909090'}}>Min. 1 orang, max. 10 orang</Text>
          </View> */}
          {loopPeople()}

          <View style={styles.inputContainer}>
            <CustomButton
              title="Tambah Pembeli"
              onPress={handlePeopleChange}
              backgroundColor="#FAFAFA"
              color="#03A9F4"
            />
          </View>
          {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Diskon (Rp)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setDiscount(Number(text))}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ongkos Kirim (Rp)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setDeliveryFee(Number(text))}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PPN (%)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setTax(Number(text))}
            defaultValue="0"
          />
        </View> */}
          {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Jumlah Produk</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setProductsCount(Number(text))}
          />
        </View>
        {loopProducts()} */}
          {/* <View style={styles.inputContainer}>
          <Button title="Reset" />
        </View> */}
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          title="Next"
          onPress={() => onSubmit()}
          backgroundColor="#1AAE48"
          color="#ffffff"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
    backgroundColor: '#fafafa',
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
  bottomView: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
