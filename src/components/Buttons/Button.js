import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title, style, id } = props;
  return (
    <Pressable style={style} onPress={onPress} id={id}>
      <Text style={style}>{title}</Text>
    </Pressable>
  );
}