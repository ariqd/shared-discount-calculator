import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Context from '../context/Context';

const Discount = (props) => {
  const {people, products} = props.route.params;
  const {setCurrentPosition} = useContext(Context);

  useEffect(() => {
    setCurrentPosition(2);
    return () => {
      setCurrentPosition(1);
    };
  }, []);

  //   useEffect(() => {
  //     console.log({people, products});
  //   }, []);

  return (
    <View>
      <Text>discount page</Text>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({});
