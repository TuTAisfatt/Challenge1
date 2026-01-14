import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const [favoriteLanguage, setFavoriteLanguage] = useState('');

  const programmingLanguages = [
  {
    id: 1,
    name: 'C',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    id: 2,
    name: 'C++',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    id: 3,
    name: 'Elixir',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg',
  },
  {
    id: 4,
    name: 'Java',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    id: 5,
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: 6,
    name: 'Python',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
];


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Programming Languages</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {programmingLanguages.map(lang => (
            <View key={lang.id} style={styles.imageContainer}>
              <Image source={{ uri: lang.image }} style={styles.languageImage} resizeMode="contain" />
            </View>
          ))}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="What is your favorite programming language from the list above?"
          value={favoriteLanguage}
          onChangeText={setFavoriteLanguage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  scrollView: { marginBottom: 40, height: 120 },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageImage: { width: 70, height: 70 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    height: 50,
  },
});
