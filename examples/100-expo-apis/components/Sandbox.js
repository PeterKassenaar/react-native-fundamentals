import React from 'react';
import {StyleSheet, Text, View} from "react-native";

// demonstration of flexbox principles to show how you can style components.
// More info: https://reactnative.dev/docs/flexbox
const Sandbox = () => {
    return (
        <View style={styles.container}>
            {/*because the styles.container == flex, everything below becomes a flex component*/}
            <View style={styles.bandMembers}>
                <Text style={styles.boxOne}>Joakim</Text>
                <Text style={styles.boxTwo}>Tommy</Text>
                <Text style={styles.boxThree}>Hannes</Text>
                <Text style={styles.boxFour}>Chris</Text>
                <Text style={styles.boxFive}>Par</Text>
            </View>
            <View style={styles.searchItem}>
                <Text style={styles.itemImage}>Image</Text>
                <View style={styles.itemDescription}>
                    <Text style={styles.itemName}>Name</Text>
                    <Text style={styles.itemCapital}>Capital</Text>
                    <Text style={styles.itemPopulation}>Population</Text>
                </View>
            </View>
            <View style={styles.searchItem}>
                <Text style={styles.itemImage}>Image</Text>
                <View style={styles.itemDescription}>
                    <Text style={styles.itemName}>Name</Text>
                    <Text style={styles.itemCapital}>Capital</Text>
                    <Text style={styles.itemPopulation}>Population</Text>
                </View>
            </View>
            <View style={styles.searchItem}>
                <Text style={styles.itemImage}>Image</Text>
                <View style={styles.itemDescription}>
                    <Text style={styles.itemName}>Name</Text>
                    <Text style={styles.itemCapital}>Capital</Text>
                    <Text style={styles.itemPopulation}>Population</Text>
                </View>
            </View>
            <View style={styles.searchItem}>
                <Text style={styles.itemImage}>Image</Text>
                <View style={styles.itemDescription}>
                    <Text style={styles.itemName}>Name</Text>
                    <Text style={styles.itemCapital}>Capital</Text>
                    <Text style={styles.itemPopulation}>Population</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, // 'This is a flexible component, and flex all the way down to the bottom'
        paddingTop: 40, // remember: every number is in pixels.
        backgroundColor: '#ddd',
        flexDirection: 'column',
        justifyContent: 'space-between', // spread content on the main axis
        alignItems: 'flex-start', // spread content out in the cross-axis
    },
    bandMembers: {
        flex:1,
        flexDirection: 'row'
    },
    // styles for the different boxes
    boxOne: {
        flex: 1,
        padding: 10,
        backgroundColor: 'yellow'
    },
    boxTwo: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rebeccapurple'
    },
    boxThree: {
        flex: 1,
        padding: 10,
        backgroundColor: 'green'
    },
    boxFour: {
        flex: 1,
        padding: 10,
        backgroundColor: 'skyblue'
    },
    boxFive: {
        flex: 1,
        padding: 10,
        backgroundColor: 'saddlebrown'
    },
    searchItem: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 4,
        marginVertical: 4,
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333'
    },
    itemDescription: {
        flex: 1,
        flexDirection: "column"
    },
    itemImage: {
        width: 100,
        height: 90,
        fontSize: 24,
        paddingLeft:4,
        backgroundColor: 'red'
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    itemCapital: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
    itemPopulation: {
        fontSize: 16,
        paddingHorizontal: 10
    },
})
export default Sandbox;
