import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {


  return (
    <>
    <View>
        <View style={{ flexDirection:'row' }}>
            <Image
                style={styles.banner}
                source={ require('./assets/img/bg.jpg')}
            />
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height:250,
    flex:1,
  },
});
