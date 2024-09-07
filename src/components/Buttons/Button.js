import React from 'react';
import { Text, Pressable, Image } from 'react-native';

export default function Button(props) {
  const { onPress, title, style, id, icon } = props;
  return (
    <Pressable style={style} onPress={onPress} id={id}>
      {icon &&
        <Image
          // style={styles.icon_button}
          source={icon}
        />
      }
      <Text style={style}>{title}</Text>
    </Pressable>
  );
}