
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type SignupScreenProps = {
  onLogin: () => void;
};

export default function SignupScreen({ onLogin }: SignupScreenProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Let's tune in</Text>
            <Text style={styles.subtitle}>
              Share your daily music moments with friends.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>

            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Test Account"
              autoCapitalize="words"
            />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="testaccount@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
            />

            {/* Terms of Service */}
            <View style={styles.termsRow}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: agreed
                      ? '#A52D40'
                      : 'transparent',
                  },
                ]}
                onPress={() => setAgreed(!agreed)}
              >
                {agreed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>

              <Text style={styles.termsText}>
                I agree to the Terms of Service
              </Text>
            </View>

            {/* Create Account Button */}
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => {
                if (!agreed) {
                  Alert.alert(
                    'Please agree to the Terms of Service'
                  );
                  return;
                }

                Alert.alert(
                  'Create Account',
                  'Authentication coming soon!'
                );
              }}
            >
              <Text style={styles.createButtonText}>
                Create Account
              </Text>
            </TouchableOpacity>

          </View>

          {/* Bottom Login Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>

            <TouchableOpacity onPress={onLogin}>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFECCC',
  },

  container: {
    flex: 1,
    margin: 15,
    borderRadius: 38,
    overflow: 'hidden',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    marginTop: 65,
    marginBottom: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2E1D26',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 15,
    color: '#86747D',
  },

  form: {
    marginTop: 0,
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
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 20,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#A52D40',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  termsText: {
    fontSize: 13,
    color: '#86747D',
  },

  createButton: {
    backgroundColor: '#A52D40',
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 40,
  },

  footerText: {
    fontSize: 15,
    color: '#86747D',
    marginRight: 5,
  },

  loginLink: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A52D40',
  },
});
