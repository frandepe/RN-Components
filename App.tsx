import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: 'rgb(255, 45, 85)',
//     background: 'black',
//     // card: 'rgb(255, 255, 255)',
//     // text: 'rgb(28, 28, 30)',
//     // border: 'rgb(199, 199, 204)',
//     // notification: 'rgb(255, 69, 58)',
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
