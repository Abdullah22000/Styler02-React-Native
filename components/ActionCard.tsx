import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';

const ActionCard = () => {
  function openWebsites(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.headingText, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}> React Native</Text>
        </View>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Many of the images you will display in your app will not be available at compile time, or you will want to
            load some dynamically to keep the binary size down. Unlike with static resources, you will need to
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsites('https://reactnative.dev/docs/images')}>
            <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsites('https://react.dev/')}>  
            <Text style={styles.socialLinks}>Even More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  elevatedCard: {
    backgroundColor: '#0A79DF',
    borderRadius: 10,
  },
  headingContainer: {
    marginHorizontal: 80,
  },
  cardImage: {
    height: 150,
    width: 250,
    marginHorizontal: 50,
  },
  bodyContainer: {
    margin:10
  },
  footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',   
        justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize:16,
    backgroundColor: '#FFF',
    color: '#000000',
    borderRadius: 10, 
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin:10       
  },
});

export default ActionCard;
