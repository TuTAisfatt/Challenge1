import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState('');

  // Danh sách 6 ngôn ngữ lập trình với logo
  const programmingLanguages = [
    {
      id: 1,
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      id: 2,
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      id: 3,
      name: 'Java',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      id: 4,
      name: 'C++',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
      id: 5,
      name: 'Ruby',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'
    },
    {
      id: 6,
      name: 'Swift',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Tiêu đề "Programming Languages" */}
        <Text style={styles.title}>Programming Languages</Text>

        {/* Danh sách 6 hình ảnh cuộn ngang */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {programmingLanguages.map((lang) => (
            <View key={lang.id} style={styles.imageContainer}>
              <Image 
                source={{ uri: lang.image }}
                style={styles.languageImage}
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>

        {/* Ô nhập văn bản với placeholder đúng theo yêu cầu */}
        <TextInput
          style={styles.input}
          placeholder="What is your favorite programming language from the list above?"
          value={favoriteLanguage}
          onChangeText={setFavoriteLanguage}
          placeholderTextColor="#888"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 40,
    height: 120,
  },
  scrollContent: {
    alignItems: 'center',
    paddingRight: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  languageImage: {
    width: 70,
    height: 70,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
  },
});