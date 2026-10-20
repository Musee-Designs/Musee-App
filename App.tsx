
import React, { useState } from 'react';
import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return currentScreen === 'login' ? (
    <LoginScreen
      onCreateAccount={() => setCurrentScreen('signup')}
    />
  ) : (
    <SignupScreen
      onLogin={() => setCurrentScreen('login')}
    />
  );
}
