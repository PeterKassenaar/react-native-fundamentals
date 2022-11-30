import React, {useState} from 'react';
import {StyleSheet, Text} from "react-native";

function Person() {
    const[name, setName] = useState('Slim Shady')
    return (
        <Text style={styles.person}>
            My Name is: {name}
        </Text>
    );
}
const styles = StyleSheet.create({
    person: {
        backgroundColor: '#333',
        color: '#fff',
        fontSize:24,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    }
})
export default Person;
