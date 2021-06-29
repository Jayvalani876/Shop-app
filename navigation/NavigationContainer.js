import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { ShopNavigator } from "./ShopNavigator";


export const NavContainer = () => {
    return (
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
    );
}