// BarCodeScanner API, getting access to the camera and scanning a bar- or QR-code
// https://docs.expo.dev/versions/v47.0.0/sdk/bar-code-scanner

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

const BarcodeScannerApi = () => {
    // 0. state hooks for this component
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    // 1. useEffect, getting (camera) permission for the barcodescanner one time only
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            // 1a. Destructuring the status in a variable
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            // 1b. Set true or false to hasPermission.
            setHasPermission(status === 'granted');
        };

        // 1c. Get the permissions on startup
        getBarCodeScannerPermissions();
    }, []);

    // 2. If a barcode is scanned correctly, an alert is shown with the type and data.
    // Available types and formats are found at https://docs.expo.dev/versions/v47.0.0/sdk/bar-code-scanner/#supported-formats
    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        Alert.alert(`Bar code has type: ${type}.\nData: ${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {/* 3. scanner taking up the full screen. If a code is
            scanned correctly, the function handleBarCodeScanned is called.
            */}
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {/* 4. Show the Scan again button if we have a result*/}
            {scanned && <Button title={'Tap to Scan Again'}
                                onPress={() => setScanned(false)}/>}
        </View>
    );
}

// 5. Styles for this component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#eee'
    },
})
export default BarcodeScannerApi
