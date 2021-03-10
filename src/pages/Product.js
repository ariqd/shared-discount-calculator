import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import ProductInput from '../components/ProductInput';
import Context from '../context/Context';

const Product = (props) => {
  const {setCurrentPosition} = useContext(Context);
  const {people} = props.route.params;
  const [products, setProducts] = useState([]);
  const [productsKeys, setProductsKeys] = useState([]);

  useEffect(() => {
    setCurrentPosition(1);
    return () => {
      setCurrentPosition(0);
    };
  }, []);

  useEffect(() => {
    let array = {};

    people.map((item) => {
      array[item.id] = [
        {
          id: 1,
          name: '',
          price: 0,
        },
      ];
    });

    setProducts(array);
    setProductsKeys(Object.keys(array));
    return () => {
      setProducts([]);
      setProductsKeys([]);
    };
  }, []);

  const onProductAdd = (key) => {
    let currentProducts = products[key];

    const newProduct = {
      id: currentProducts.slice(-1).pop().id + 1,
      name: '',
      price: 0,
    };

    currentProducts.push(newProduct);
    let newProducts = {...products};
    newProducts[key] = currentProducts;
    setProducts(newProducts);
  };

  const onProductDelete = (key, id) => {
    let currentProducts = products[key];

    let filteredProducts = currentProducts.filter(
      (product) => product.id !== id,
    );

    let newProducts = {...products};

    newProducts[key] = filteredProducts;

    setProducts(newProducts);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <View style={{flexGrow: 1}}>
          {productsKeys.length > 0
            ? productsKeys.map((key, index) => {
                const owner = people.find((arr) => arr.id === Number(key));

                return (
                  <View
                    key={key}
                    style={{
                      backgroundColor: '#ffffff',
                      marginBottom: 10,
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        padding: 15,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontWeight: 'bold'}}>
                        {owner?.name ? owner?.name : 'Pembeli ' + (index + 1)}
                      </Text>
                      <TouchableOpacity onPress={() => onProductAdd(key)}>
                        <Text style={{color: '#03A9F4', fontWeight: 'bold'}}>
                          Tambah Produk
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {products[key].map((product, index) => (
                      <View style={styles.productContainer} key={index}>
                        <ProductInput
                          productIndex={index}
                          product={product}
                          peopleKey={key}
                          // onProductUpdate={onProductUpdate}
                          onProductDelete={onProductDelete}
                        />
                      </View>
                    ))}
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          title="Next"
          // onPress={() => onSubmit()}
          backgroundColor="#1AAE48"
          color="#ffffff"
        />
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
    // backgroundColor: '#fafafa',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  productContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  bottomView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
