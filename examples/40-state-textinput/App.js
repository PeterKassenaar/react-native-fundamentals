import {Button, StyleSheet, Text, View, Pressable} from 'react-native';
import {useState} from "react";
import Person from "./components/Person";

export default function App() {
    // 0. state in React Native works like in React Web
    const [name, setName] = useState('Tommy')


    // 1. handle button clicks
    const clickHandler = () => {
        setName('Joakim')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hello, {name}!</Text>
            {/* 2. Add style to the button by adding a new View, as the*/}
            {/*button DOES NOT have a style="..." property*/}
            <View style={styles.buttonContainer}>
                {/*3. using the onPress property to change the state*/}
                <Button title="Set new name" onPress={clickHandler}/>
                {/* 4. using Pressable to style the 'button' yourself*/}
                {/*<Pressable style={styles.button}*/}
                {/*           onPress={clickHandler}*/}
                {/*           android_ripple={styles.ripple}>*/}
                {/*    <Text style={styles.buttonLabel}>Pressable: new name</Text>*/}
                {/*</Pressable>*/}
                {/*5. Changing the name/age by using a TextInput field*/}
                {/* <Person /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 48,
        backgroundColor: '#eee',
    },
    bodyText: {
        fontSize: 32
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'BFFF00C3',
        backgroundColor: '#555'
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    ripple: {
        color: 'red'
    }
});
