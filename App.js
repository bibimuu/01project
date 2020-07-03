import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/200/200' }}
            style={styles.image}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            lex関係のプロパティは外出しして書いています。 この場合は、
            ヘッダー：メインコンテンツ：フッターのflexプロパティの値は 0.3:2:0.5
            なのでこの比率が縦方向長さの比率となります。
          </Text>
          <Text>react news</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
