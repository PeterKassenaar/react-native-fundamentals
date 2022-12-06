import React from 'react';
import {Button, Text, View} from "react-native";
import styles from "../styles/globalStyles";

const HomeScreen = ({navigation}) => {
    const pressHandler = () => {
        navigation.navigate('About', {
            name: 'Ilionx',
            location: 'Maastricht'
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>
                Home Screen
            </Text>
            <Button title="Go to About" onPress={pressHandler}/>
            {/*Workshop 1: create a button or other Pressable to go to the Details Screen.*/}
            {/*Workshop 2: Create a list in this component. Send data from the list to the details screen */}
            {/*and show it there.*/}
        </View>
    );
};

export default HomeScreen;
