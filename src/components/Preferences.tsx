import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default function Preferences() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


    return (
        <View style={styles.preferencesContainer}>
            <Text style={styles.preferencesText}>Preferências</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#484646', borderBottomWidth: 1 }}>
                <MaterialIcons name='dark-mode' size={22} color={'#484646'} style={{ marginRight: 8 }} />
                <Text style={styles.options}>Modo Escuro</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#767577' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f5dd4b'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#484646', borderBottomWidth: 1 }}>
                <MaterialIcons name='mail' size={22} color={'#484646'} style={{ marginRight: 8 }} />
                <Text style={styles.options}>Email Publico</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#767577' }}
                    thumbColor={isEnabled2 ? '#f5dd4b' : '#f5dd4b'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    preferencesContainer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 8
    },
    preferencesText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646',
        paddingHorizontal: 4,
        paddingVertical: 12
    },
    options: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#484646',
        flex: 1
    },
})