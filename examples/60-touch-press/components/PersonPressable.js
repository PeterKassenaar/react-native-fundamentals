import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import persons_MOCK from "../assets/data/persons_MOCK";

const PersonPressable = () => {

    const showPerson = (person) => {
        alert('You selected: ' + person.first_name)
        // Handle pressed person in the parent component. React principle of 'lifting state up'.
        // select(person)
    }

    // using TouchableOpacity to make person/item Clickable. We could also
    // have used Pressable. Check TouchableHighlight for yourself
    const renderItem = (person) => {
        return (
            <Pressable onPress={() => showPerson(person)}
                       android_ripple={{color: 'green'}}>
                <Text style={styles.person}>
                    {person.id} - {person.first_name} {person.last_name}
                </Text>
            </Pressable>
        )
    }

    // Separator component between items
    const separator = () => {
        return <View style={{backgroundColor: '#999', height: 2, marginVertical: 2}}/>
    }

    // UI for this component. Look at the different FlatList properties
    // https://reactnative.dev/docs/flatlist.
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={separator}
            data={persons_MOCK}
            renderItem={({item}) => renderItem(item)}
        />
    );
};
const styles = StyleSheet.create({
    person: {
        marginVertical: 10,
        backgroundColor: '#ffcccb',
        marginHorizontal: 10,
        fontSize: 24,
        padding: 4,
    }
})
export default PersonPressable;
