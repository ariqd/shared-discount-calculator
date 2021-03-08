import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Context from '../context/Context';

const Product = () => {
  const {setCurrentPosition} = useContext(Context);

  useEffect(() => {
    setCurrentPosition(1);
    return () => {
      setCurrentPosition(0);
    };
  }, []);

  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
