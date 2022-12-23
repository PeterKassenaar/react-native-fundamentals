//  location API, getting access to sensors like GPS location
// https://docs.expo.dev/versions/v47.0.0/sdk/location/

import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

import * as Location from 'expo-location';

const LocationApi = () => {
// Logic for this component
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let text = 'Waiting for location...';

    // useEffect hook to set the variables async
    useEffect(() => {
        (async () => {

            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []); // empty dependencies array, so do it one time.

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    // Return UI
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your location:</Text>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#eee'
    },
    label: {
        fontSize: 24,
    },
    paragraph: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'coral'
    }
})
export default LocationApi;
