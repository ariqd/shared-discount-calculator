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
  // const [peopleCount, setPeopleCount] = useState(1);
  // const [deliveryFee, setDeliveryFee] = useState(0);
  // const [discount, setDiscount] = useState(0);
  // const [tax, setTax] = useState(0);
  const [people, setPeople] = useState([
    {
      id: 1,
      name: '',
    },
  ]);

  useEffect(() => {
    // setPeople({
    // });
    // return () => {
    //   setPeople({});
    // };
  }, []);

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

  // const onPeopleAdd = (value) => {
  //   const parsedQty = Number.parseInt(value);
  //   if (Number.isNaN(parsedQty)) {
  //     setPeopleCount(0); //setter for state
  //   } else if (parsedQty > 10) {
  //     setPeopleCount(10);
  //   } else {
  //     setPeopleCount(parsedQty);
  //   }
  // };

  const loopPeople = () => {
    let content = [];

    if (people.length > 10) {
      content.push(
        <Text
          style={{color: 'red', marginBottom: 20, textAlign: 'center'}}
          key="maxExceeded">
          Maksimal 10 orang!
        </Text>,
      );
    } else {
      people.map((item, index) => {
        content.push(
          <PeopleInput
            key={item.id}
            peopleIndex={index}
            item={item}
            onPeopleUpdate={onPeopleUpdate}
            onPeopleDelete={onPeopleDelete}
          />,
        );
      });
    }

    return content;
  };

  const onPeopleAdd = () => {
    setPeople((prevState) => [
      ...prevState,
      {id: prevState.slice(-1).pop().id + 1, name: ''},
    ]);
  };

  const onPeopleUpdate = (id, name) => {
    const peopleIndex = people.findIndex((value) => value.id == id);
    let newArr = [...people];
    newArr[peopleIndex] = {id, name};
    setPeople(newArr);
  };

  const onPeopleDelete = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };

  const onSubmit = () => {
    if (people.length <= 0) {
      Alert.alert(
        'Tidak Bisa Melanjutkan',
        'Jumlah Orang Pesan minimal 1 orang',
      );
    } else {
      props.navigation.navigate('Product', {
        // productsCount,
        // peopleCount,
        people,
        fromPageOne: true,
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
          {loopPeople()}

          {people.length >= 10 ? (
            <Text style={{color: 'gainsboro', textAlign: 'center'}}>
              Maksimal 10 orang
            </Text>
          ) : (
            <View style={styles.inputContainer}>
              <CustomButton
                title="Tambah Pembeli"
                onPress={onPeopleAdd}
                color="#03A9F4"
              />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {people.length} Pembeli
        </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
