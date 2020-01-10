
import React, {Component} from 'react';
import {Animated, Dimensions, ActivityIndicator, Platform, StyleSheet, Text, View, Button} from 'react-native';
import SlotCharacter from '../SlotCharacter';

export default class SlotText extends Component<Props> {
  state = {
    yTransition: new Animated.Value(0),
    before: undefined,
    current: undefined,
    next: undefined,
  }

  constructor(props){
    super(props);
  }

  render() {
    const {
      title,
      delim,
      startDuration,
      difDuration,
      size,
      color,
      textStyle
    } = this.props;

    let sizeStyle = size;
    let colorStyle = color;

    let text = [];
    for (var i = 0; i < title.length; ++i) {
      ch = title[i];
      if (delim != ch)
        text.push(<SlotCharacter lastCharacter={ch} duration={startDuration + difDuration * i} color={colorStyle} size={size ? size : 24} />)
      else
        text.push(<SlotCharacter lastCharacter={ch} size={size ? size : 24} color={colorStyle} enabled={false} />)        
    }

    return (
        <View 
          style={{
            flexDirection: 'row',
          }}>
          {text}
        </View>
      );
  }
}
