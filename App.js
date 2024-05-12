import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScreen } from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { Colors } from './utils/constants/colors';

export default function App() {
  const [useNumber, setUseNumber] = useState()

  function pickNumberHandler(num) {
    setUseNumber(num)
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler} />
  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} />
  }

  return (
    <LinearGradient colors={[Colors.primary600, Colors.accent500]} style={styles.materialApp}>
      <ImageBackground
        style={styles.materialApp}
        source={require('./assets/images/bg.jpg')}
        resizeMode='cover'
        imageStyle={
          styles.imageContainer
        }
      >
        <SafeAreaView style={styles.materialApp}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  materialApp: {
    flex: 1,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    opacity: 0.15
  }
});
