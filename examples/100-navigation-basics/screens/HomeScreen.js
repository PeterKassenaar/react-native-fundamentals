import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/globalStyles";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>
                Home Screen
            </Text>
        </View>
    );
};

export default HomeScreen;
