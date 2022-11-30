// 0. Documentation on Images: https://reactnative.dev/docs/image
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CatPics from "./components/CatPics";

const countryImage = require('./assets/countries/brazil.jpg');
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hello, World!</Text>
            {/*1. Static image, bundled with the app. Styling is in this component*/}
            <Image source={countryImage}
                   style={styles.countryImage} />

            {/*2. Dynamic image, coming from the internetz. Note the object notation for properties.*/}
            {/*We also used inline styling here (= not best practice).*/}
            {/*<Image source={{*/}
            {/*    uri: 'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg'*/}
            {/*}}*/}
            {/*       style={{width: 300, height: 300}}/>*/}

            {/* 3. An extra component, rendering multiple images. See source code*/}
            {/*<CatPics/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 16
    },
    heading: {
        fontSize: 48,
        backgroundColor: '#eee',
    },
    countryImage: {
        width: 400,
        height: 300
    }
});
