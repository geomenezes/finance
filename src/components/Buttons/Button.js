import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title, style } = props;
  return (
    <Pressable style={style} onPress={onPress} id={props.id}>
      <Text style={style}>{title}</Text>
    </Pressable>
  );
}