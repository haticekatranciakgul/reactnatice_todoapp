import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/Components/HomeScreen/HomeScreen';
import Header from './src/Components/Header/Header';

function App() {
  return (
    <PaperProvider>
      <Header />
      <HomeScreen />
    </PaperProvider>
  );
}


export default App;