import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/globalStyles";

const AboutScreen = ({navigation, route}) => {
    // Comment in if you use route parameters/data
    // const {name, location} = route.params;
    return (
        <View>
            <Text style={styles.bodyText}>
                About Screen
            </Text>
            {/*Comment in if you are sending parameters/data on the route*/}
            {/*<Text style={styles.bodyText}>*/}
            {/*    We are at {name} in {location}*/}
            {/*</Text>*/}
        </View>
    );
};

export default AboutScreen;
