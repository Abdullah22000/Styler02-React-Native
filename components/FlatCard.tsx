import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
            <View style={[styles.card , styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card , styles.cardTwo]}>
                <Text>green</Text>
            </View>
            <View style={[styles.card , styles.cardThree]}>
                <Text>yellow</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    container: {
        flex: 1,
        flexDirection:'row',
        padding: 15,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 5,
        color: 'black', 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'yellow',
    }
})

export default FlatCard