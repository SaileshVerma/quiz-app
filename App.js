import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScreen } from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#82063C', '#ddbf2f']} style={styles.materialApp}>
      <ImageBackground
        style={styles.materialApp}
        source={require('./assets/images/bg.jpg')}
        resizeMode='cover'
        imageStyle={
          styles.imageContainer
        }
      >
        <StartGameScreen />
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
