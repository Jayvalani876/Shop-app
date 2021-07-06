import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Badge, } from "react-native-paper";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";
import { TouchableOpacity, Text } from "react-native";
import * as cartActions from "../store/actions/cart";

const Stack = createStackNavigator();


export const ShopNavigator = props => {
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
                        <>
                            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                                <Badge style={{ backgroundColor: Colors.primary, marginLeft: 20 }}>
                                    <Text style={{ color: "white", fontSize: 19, }}>{3}</Text>
                                </Badge>
                                <AntDesign
                                    name="shoppingcart"
                                    style={{ marginRight: 15 }}
                                    size={24}
                                    color="#FFFFFF"
                                />
                            </TouchableOpacity>

                        </>
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