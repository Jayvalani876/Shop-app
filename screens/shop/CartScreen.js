import React from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";


const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotalAmount}</Text></Text>
                <Button
                    title="Order Now"
                />
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
            {/* <FlatList /> */}
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
        color: Colors.accent,
    }
});

export default CartScreen;