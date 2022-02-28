import React from "react"
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1525',
        padding: Platform.OS === 'ios' ? 15 : 12,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})