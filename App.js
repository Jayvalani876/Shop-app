import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';


import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import { NavContainer } from "./navigation/NavigationContainer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);


export default function App() {
  const [loaded] = useFonts({
    sofia: require('./assets/fonts/SofiaProRegular.ttf'),
    sofiaBold: require('./assets/fonts/SofiaProBold.ttf'),
    sofiaLight: require('./assets/fonts/SofiaProLight.ttf'),
    sofiaMedium: require('./assets/fonts/SofiaProMedium.otf'),
  });

  if (!loaded) {
    return null;
  }


  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
};