import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal>
        <View style={[styles.card , styles.ElevatedCard]}>
            <Text>Allah</Text>
        </View>
        <View style={styles.card}>
            <Text>Allah</Text>
        </View>
        <View style={styles.card}>
            <Text>Allah</Text>
        </View>
        <View style={styles.card}>
            <Text>Allah</Text>
        </View>
        <View style={styles.card}>
            <Text>Allah</Text>
        </View>
        <View style={styles.card}>
            <Text>Allah</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 5,
        color: 'black', 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'blue',
    },
    ElevatedCard: {
        
    }
})