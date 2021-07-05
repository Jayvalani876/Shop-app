import React from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";
import CardItem from "../../components/shop/CardItem";


const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems;
        // return;
    });
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
                <Button
                    title="Order Now"
                    color={Colors.accent}
                    disabled={cartItems.length === 0}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData =>
                    <CardItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        onRemove={() => { }}
                    />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        margin: 20,
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        elevation: 13,
        borderRadius: 13,
        backgroundColor: "white",
    },
    summaryText: {
        fontFamily: "sofiaBold",
        fontSize: 18,
    },
    amount: {
        color: Colors.primary,
    },
    cart: {
        fontFamily: "sofiaBold",
        fontSize: 18,
    }

});

export default CartScreen;