import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type LoginScreenProps = {
  onCreateAccount: () => void;
};

export default function LoginScreen({ onCreateAccount }: LoginScreenProps) {
  return (
  <View style={styles.background}>
    <View style={styles.container}>
    <View style={styles.logoSection}>
      <View style={styles.logoCircle}>
        <Ionicons
          name="musical-note-outline"
          size={45}
          color="#FFECCC"
        />
      </View>

      <Text style={styles.logoTitle}>Musee</Text>
      <Text style={styles.logoSubtitle}>music, shared.</Text>
    </View>
      {/* Button section */}
      <View style={styles.buttonContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="testaccount@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestButton}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          New to Musee?
        </Text>
      <TouchableOpacity onPress={onCreateAccount}>
        <Text style={styles.createAccount}>
          Create Account
        </Text>
      </TouchableOpacity>
      </View>

    </View>
  </View>
);
}

const styles = StyleSheet.create({
    background:{ 
        flex:1,
        backgroundColor: '#FFECCC',
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
    buttonContainer: {
        marginTop: 45,
        paddingHorizontal: 15,
    },
    signInButton: {
        backgroundColor: '#A52D40',
        height: 60,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
    },

    signInText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    guestButton: {
        backgroundColor: '#F2D0A4',
        height: 60,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
    },
    guestText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: 30,
        marginBottom: 30,
    },

    footerText: {
        fontSize: 15,
        color: '#86747D',
        marginRight: 5,
    },

    createAccount: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A52D40',
    },

    logoSection: {
        alignItems: 'center',
        marginTop: 70,
    },

    logoCircle: {
        width: 94,
        height: 94,
        borderRadius: 47,
        backgroundColor: '#A52D40',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 17,

        shadowColor: '#8B2435',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 9,
        elevation: 5,
    },

    logoTitle: {
        fontSize: 39,
        fontWeight: '800',
        color: '#2E1D26',
    },

    logoSubtitle: {
        fontSize: 16,
        color: '#86747D',
        marginTop: 13,
    },
});