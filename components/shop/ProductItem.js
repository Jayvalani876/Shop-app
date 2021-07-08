import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = props => {
    console.log(props)
    const cartProduct = useSelector(state => state.cart.items[props.id])


    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <TouchableCmp onPress={props.onViewDetail} useForeground >
            <View style={styles.product}>
                <View style={{ overflow: "hidden", borderRadius: 10 }}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: props.image }} style={styles.image} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price}</Text>
                    </View>
                    <View style={styles.actions}>
                        <Button title="View Details" color={Colors.primary} onPress={props.onViewDetail} />
                        <Button title={cartProduct ? "Go To Cart" : "Add To Cart"} color={Colors.primary} onPress={cartProduct ? props.onGoToCart : props.onAddToCart} />
                    </View>
                </View>
            </View>
        </TouchableCmp>
    );
}

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        elevation: 13,
        borderRadius: 13,
        backgroundColor: "white",
        height: 300,
        margin: 20,
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: "90%"
    },
    details: {
        alignItems: "center",
        height: '15%',
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: "sofiaMedium"
    },
    price: {
        fontSize: 14,
        color: "#888",
        fontFamily: "sofiaMedium"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
        paddingHorizontal: 20,
    }
});

export default ProductItem;