import React, { useState } from "react";
import { View, ScrollView, Text, Image, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";

const ProductDetailScreen = props => {
    const [myText, setMyText] = useState("Add to Cart");
    // const [perviousValue, setPreviousValue] = useState(myText);
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(
        state => state.products.availableProducts.find(prod => prod.id === productId)
    )
    const dispatch = useDispatch();

    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
            <View style={styles.button}>
                <Button
                    title={myText}
                    onPress={() => {
                        if (myText == "Add to Cart") {
                            setMyText("Go to Cart", dispatch(cartActions.addtocart(selectedProduct)))
                        }
                        else if (myText == "Go to Cart") {
                            props.navigation.navigate('cart')
                        }
                    }}

                    color={Colors.primary}
                >
                    {myText}
                </Button>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    button: {
        padding: 40,
        paddingHorizontal: 50,
    },
    price: {
        fontSize: 20,
        color: "#888",
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "sofiaMedium"
    },
    description: {
        fontSize: 17,
        textAlign: "center",
        marginHorizontal: 20,
        fontFamily: "sofiaMedium"
    }
});

export default ProductDetailScreen;