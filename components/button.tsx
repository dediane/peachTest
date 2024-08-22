import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 57,
        padding: 10,
        backgroundColor: '#2CE080',
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginTop: 40,
    },
    buttonText: {
        color: '#03314B',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 35,
    },
});

export default Button;
