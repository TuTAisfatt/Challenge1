import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const languages = [
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
      <Text style={styles.title}>Programming Languages</Text>

      {/* Danh sách hình ảnh cuộn ngang */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {languages.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingRight: 16,
  },
  card: {
    width: 90,
    height: 110,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
  },
});
