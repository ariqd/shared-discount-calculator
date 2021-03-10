import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Result from '../pages/Result';
import Discount from '../pages/Discount';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Discount" component={Discount} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default Router;
