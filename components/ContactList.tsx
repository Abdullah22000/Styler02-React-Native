import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageUrl}) =>(
                <View key={uid} style={styles.userCard}>
                    <Image
                        source={{uri: imageUrl}} style={styles.userImage} 
                    />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
      },
    container: {},
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6ab04c',
        marginBottom: 5,
        borderRadius: 25
    },
    userImage: {
        borderRadius: 50,
        height:90,
        width: 90,
        marginHorizontal: 15,
        marginTop: 10
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    userStatus: {}  
})