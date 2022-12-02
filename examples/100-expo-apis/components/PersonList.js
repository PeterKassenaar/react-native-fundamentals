import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
// using Mock data here
import persons_MOCK from "../assets/data/persons_MOCK";


const PersonList = () => {
    // 0. state in this component
    const [persons, setPersons] = useState(persons_MOCK)

    return (
        <ScrollView>
            {
                persons.map(person => (
                        <View key={person.id}>
                            <Text style={styles.person}>{person.id} - {person.first_name} {person.last_name}</Text>
                        </View>
                    )
                )
            }
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    person: {
        marginTop: 20,
        backgroundColor: 'lightblue',
        marginHorizontal: 10,
        fontSize: 24,
        padding: 4,
    }
})
export default PersonList;
