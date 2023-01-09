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
            // debugging
            console.log(location);
        })();
    }, []); // empty dependencies array, so do it one time.

    // Show simple error msg or show latitude/longitude
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        // Complete location object like: {"coords": {"accuracy": 21.600000381469727, "altitude": 54.900001525878906, "altitudeAccuracy": 2.2179784774780273, "heading": 0, "latitude": 52.1412183, "longitude": 6.2014602, "speed": 0}, "mocked": false, "timestamp": 1671782498649}
        // We now only use latitude and longitude.
        // AND: we assume no errors. Set up error handling yourself.
        // You also might want to use lat/lon to initialize Google maps component, for instance
        // https://docs.expo.dev/versions/latest/sdk/map-view/
        text = `
            Latitude: ${location.coords.latitude.toFixed(2)},
            Longitude: ${location.coords.longitude.toFixed(2)} 
            `
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
        fontSize:24,
        fontWeight: 'bold',
        color: 'coral'
    }
})
export default LocationApi;
