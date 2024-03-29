import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.cardImage} />
      <View style={styles.cardbody}>
        <Text style={styles.cardTitle}> REACT NATIVE</Text>
        <Text style={styles.cardLabel}>FACEBOOK</Text>
        <Text style={styles.cardDescription} numberOfLines={4}>Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.</Text>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    cardImage: {
        height: 180,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    cardbody :{
        backgroundColor: '#ffffff',
        height: 150,
        width: 336,
        marginHorizontal: 12,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardLabel :{
        fontSize : 20,
        color: '#000000',
        paddingHorizontal: 12,
    },
    cardDescription :{
        color: '#000000',
        fontSize: 18,
        paddingHorizontal:15
    },

})