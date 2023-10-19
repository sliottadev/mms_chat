import React from 'react';
import { Color } from '../../../constants/Colors';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const SpeechBubble = ({ text, isLeft, fontSize }) => {
   
  const maxWidthPercentage = 0.75; 
  const margin = 10;
  const screenWidth = Dimensions.get("window").width;
  const maxWidthBubble = screenWidth * maxWidthPercentage;

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: (isLeft)?'flex-start':'flex-end',
      width: 'auto',
      height: 'auto',
      margin: margin
    },
    bubble: {
        width: 'auto',
        maxWidth: maxWidthBubble,
        padding: margin,
        borderRadius: margin,
        backgroundColor: (!isLeft) ? Color.chatBubbleUser : Color.chatBubbleContact,
    },
    text: {
        fontSize: fontSize,
        color: (isLeft) ? Color.chatBubbleUserText : Color.chatBubbleContactText    
    }
  });

  return (
    <View style={styles.container}>
        <View style={styles.bubble}>
            <Text style={styles.text} >
                {text}
            </Text>
        </View>
    </View>
  );

};




export default SpeechBubble;
