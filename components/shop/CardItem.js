import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";


const CardItem = props => {
    return (
        <View style={styles.CardItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    CardItem: {
        padding: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center",

    },
    quantity: {
        fontFamily: "sofia",
        color: "#888",
        fontSize: 16
    },
    mainText: {
        fontFamily: "sofiaBold",
        color: "#888",
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CardItem;