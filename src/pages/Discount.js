import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Context from '../context/Context';

const Discount = (props) => {
  const {people, products} = props.route.params;
  const {setCurrentPosition} = useContext(Context);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    setCurrentPosition(2);
    return () => {
      setCurrentPosition(1);
    };
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <View style={styles.inputContainer}>
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
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          title="Finish - See Results"
        //   onPress={() => onSubmit()}
          backgroundColor="#1AAE48"
          color="#ffffff"
        />
      </View>
    </>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
