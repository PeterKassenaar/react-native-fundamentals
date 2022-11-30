import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";

import persons_MOCK from "../assets/data/persons_MOCK";

const PersonFlatList = () => {

    // 1. Render a single item - mandatory!
    const renderItem = (person) => {
        console.log(person)
        return (
            <Text style={styles.person}>
                {person.id} - {person.first_name} {person.last_name}
            </Text>
        )
    }

    // Separator component between items - optional
    const separator = () => {
        return <View style={{backgroundColor: '#999', height: 2, marginVertical: 2}}/>
    }

    // HeaderComponent, first item in the list
    const headerComponent = () => {
        return <Text style={styles.header_footer}> This is the first item </Text>
    }
    // FooterComponent, last item in the list
    const footerComponent = () => {
        return <Text style={styles.header_footer}> This is the last item </Text>
    }

    // UI for this component. Look at the different FlatList properties
    // https://reactnative.dev/docs/flatlist.
    return (
        <FlatList
            ListHeaderComponent={headerComponent}
            ListFooterComponent={footerComponent}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={separator}
            data={persons_MOCK}
            renderItem={({item}) => renderItem(item)}
        />
    );
};

// Styling for this component
const styles = StyleSheet.create({
    person: {
        marginVertical: 10,
        backgroundColor: 'lightgreen',
        marginHorizontal: 10,
        fontSize: 24,
        padding: 4,
    },
    header_footer: {
        backgroundColor: '#999',
        color: '#fff',
        height:48,
        fontSize:24,
        padding:10,
        marginVertical:10
    },
})
export default PersonFlatList;
