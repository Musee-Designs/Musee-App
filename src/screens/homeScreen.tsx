import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function homeScreen(){
    return (
      <ScrollView style={styles.background}
        contentContainerStyle={styles.fullWrapper}>
        <Text style={styles.homeTitleWhite}>Musee</Text>
          
      </ScrollView>

    );
}

const styles = StyleSheet.create({
    background:{ 
        flex:1,
        backgroundColor: '#FFECCC',
    },
    fullWrapper: {
        flexGrow: 1,
        padding: 20,
    },
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 38,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2E1D26',
        marginBottom: 8,
    },
    input: {
        height: 55,
        backgroundColor: '#FFF9F5',
        borderWidth: 1,
        borderColor: '#E6CEC4',
        borderRadius: 14,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    homeTitleWhite: {
        color: '#2C1B24',
        fontSize: 24,
    }
});