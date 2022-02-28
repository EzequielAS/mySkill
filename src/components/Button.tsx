import React from "react"
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

// interface ButtonProps extends TouchableOpacityProps {   
//     title: string;                                     caso quisesse pegar todas as propriedades do botão e outras
// }

export function Button({ ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
})