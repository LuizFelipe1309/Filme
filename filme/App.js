import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titulo}>Homem-Aranha Através do Aranhaverso</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <Image
          style={styles.image}
          source={require('./assets/ATSV.jpg')}
        />
        <Text style={styles.top}>SINOPSE:</Text>
        <Text style={styles.sinopse}>Em Homem-Aranha: Através do Aranhaverso, Miles é transportado para uma aventura épica através do multiverso, e deve unir forças com a mulher-aranha Gwen Stacy (Hailee Steinfeld) e um novo time de Pessoas-Aranha, formado por heróis de diversas dimensões. No entanto, tudo muda quando os heróis entram em conflito sobre como lidar com uma nova ameaça, e Miles se vê em um impasse. E para piorar ainda mais a situação, eles precisam enfrentar um vilão muito mais poderoso do que qualquer coisa que já tenham encontrado antes. Agora, para salvar as pessoas que ele mais ama no mundo, Miles deve redefinir o que significa ser um super herói.</Text>
        <Text style={styles.top}>CRÍTICA</Text>
        <Text style={styles.sinopse}>O longa Homem Aranha Através do Aranhaverso é uma animação que beira a perfeição em minha visão, um filme com uma história comovente e divertida, que vai te deixar entretido do começo ao fim. A dinamica entre os aranhas de outros universos é muito bem desenvolvida mesmo cada um sendo de um jeito eles se completam muito bem na narrativa, além de esteticamente a ambientação do filme é linda, cada universo tendo sua cor base, sua propria arquitetura e trilha sonora</Text>
        <Image
          style={styles.star}
          source={require('./assets/star.png')}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:415,
    height:110,
    backgroundColor: '#DA4627',
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  container2: {
    flex:8,
    width:415,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop:15,
    height: 300,
    width: 200,
  },
  top: {
    fontSize:20,
    paddingTop: 5, 
    color: '#fff', 
    fontWeight: 'bold'
  },
  sinopse:{
    fontSize:14,
    padding:5, 
    color: '#fff'
  },
  star: {
    marginBottom:15,
    height:90,
    width: 90,
  }
});
