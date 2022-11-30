import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from "react-native";

const backgroundImage = require('../assets/countries/tokyo.jpg')
const ImageBg = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode={"cover"}
                             style={styles.backgroundImage}>
                <Text style={styles.text}>Text over background</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});

export default ImageBg;
