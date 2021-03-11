import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import CustomButton from '../components/CustomButton';
import Context from '../context/Context';

const Discount = (props) => {
  const {people, products} = props.route.params;
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [isPercent, setIsPercent] = useState(true);
  const [discPlaceholder, setDiscPlaceholder] = useState(
    'Masukkan diskon dalam %',
  );
  const {setCurrentPosition} = useContext(Context);

  useEffect(() => {
    setCurrentPosition(2);
    return () => {
      setCurrentPosition(1);
    };
  }, []);

  useEffect(() => {
    const newDiscPlaceholder = isPercent
      ? 'Masukkan diskon dalam %'
      : 'Masukkan diskon dalam Rp';

    if (discPlaceholder !== newDiscPlaceholder) {
      setDiscPlaceholder(newDiscPlaceholder);

      Snackbar.show({
        text: isPercent
          ? 'Jenis diskon diubah menjadi %'
          : 'Jenis diskon diubah menjadi Rp',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    return () => {
      setDiscPlaceholder('Masukkan diskon dalam %');
    };
  }, [isPercent]);

  const onSubmit = () => {
    props.navigation.navigate('Result', {
      people,
      products,
      discount,
      tax,
      deliveryFee,
      isPercent,
    });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Diskon ({isPercent ? '%' : 'Rp'})</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 2}}>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder={discPlaceholder}
                maxLength={isPercent ? 2 : 8}
                onChangeText={(text) => setDiscount(Number(text))}
              />
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setIsPercent(!isPercent)}>
                <Text
                  style={{
                    color: '#03A9F4',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Gunakan {isPercent ? 'Rp' : '%'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ongkos Kirim (Rp)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Ongkos kirim dalam Rupiah (Rp)"
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
          title="Finish "
          onPress={() => onSubmit()}
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
