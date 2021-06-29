import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons"


import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton"

const Stack = createStackNavigator();


export const ShopNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="productOverview">
            <Stack.Screen
                name="productOverview"
                component={ProductsOverviewScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: "white",
                    headerTitle: "All Products",
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Cart"
                                iconName="md-cart"
                                onPress={() => 'cartScreen'}
                            />
                        </HeaderButtons>
                    )
                }}
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
                name="cartScreen"
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