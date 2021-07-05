import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';


import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";
import { TouchableOpacity, Button } from "react-native";

const Stack = createStackNavigator();

export const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="productOverview">
            <Stack.Screen
                name="productOverview"
                component={ProductsOverviewScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: "white",
                    headerTitle: "All Products",
                    headerTitleAlign: "center",

                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                            <AntDesign name="shoppingcart" style={{ marginRight: 15 }} size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen
                name="productDetail"
                component={ProductDetailScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: "white",
                    headerTitle: "All Products",
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="cart"
                component={CartScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: "white",
                    headerTitle: "All Products",
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    )
}