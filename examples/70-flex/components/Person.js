import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

const Person = () => {
    // 0. Data/state in person component
    const [person, setPerson] = useState({
        name: 'Hannes',
        age: 32
    })

    const updatePerson = (prop, val) =>{
        setPerson({
            ...person,
            [prop]: val
        })
    }

    return (
        <View>
            <Text style={styles.component}>Component: Person.js</Text>
            <Text style={styles.heading}>My name is {person.name} and I am {person.age} years old.</Text>
            <Text style={styles.person}>New Name:</Text>
            <TextInput style={styles.input}
                       placeholder="e.g. Tobias"
                       onChangeText={(val) => updatePerson('name', val)}
            />
            <Text style={styles.person}>New Age:</Text>
            <TextInput style={styles.input}
                       placeholder="e.g. 25"
                       keyboardType="numeric"
                       onChangeText={(val) => updatePerson('age',  +val)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    component: {
        fontSize: 10,
        color: 'red',
        margin: 4
    },
    heading: {
        fontSize: 36,
        backgroundColor: '#eee',
        padding: 4,
    },
    person: {
        color: '#333',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    input: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 4,
        marginHorizontal: 4,
        paddingHorizontal: 4,
        fontSize: 24
    }
})
export default Person;
