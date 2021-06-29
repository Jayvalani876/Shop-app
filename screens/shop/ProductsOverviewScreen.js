import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as cartActions from "../../store/actions/cart";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onViewDetail={() => props.navigation.navigate("productDetail", {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })}
                        onAddToCart={() => { dispatch(cartActions.addtocart(itemData.item)) }}
                    />}
            />
        </View>
    );
};



const styles = StyleSheet.create({

});

export default ProductOverviewScreen;