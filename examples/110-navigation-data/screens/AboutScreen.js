import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/globalStyles";

const AboutScreen = ({navigation, route}) => {
    const {name, location} = route.params;
    return (
        <View>
            <Text style={styles.bodyText}>
                About Screen
            </Text>
            <Text style={styles.bodyText}>
                We are at {name} in {location}
            </Text>
        </View>
    );
};

export default AboutScreen;
