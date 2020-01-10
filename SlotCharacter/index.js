
import React, {Component} from 'react';
import {Animated, ScrollView, Dimensions, StyleSheet, Text, View} from 'react-native';

export default class SlotCharacter extends Component<Props> {
  state = {
    yTransition: new Animated.Value(0),
    before: undefined,
    current: undefined,
    next: undefined,
    scrollDuration: 50,
    interval: 10,
    stop: false,
    randBefore: 1,
    randCurrent: 2,
  }

  constructor(props){
    super(props);


    setTimeout(() => {
      this.setState({stop: true});
    }, this.props.duration);
  }

  _listener = ({value}) => {
    if (value == 1){
      let {
        yTransition
      } = this.state;
      let textMoveY = yTransition.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30]
      });

      let rand1 = parseInt(Math.random() * 1000) % 10;
      let rand2 = parseInt(Math.random() * 1000) % 10;
      if (this.state.stop)
        rand2 = this.props.lastCharacter

      this.setState({
        yTransition: new Animated.Value(0),
        randBefore: rand1,
        randCurrent: rand2,
      }, () => {
        if (Platform.OS == "android")
          setTimeout(() => {
            this.scrolling();
          }, 50);
        else
          this.scrolling();      
     });      
    }    
  }

  stop = () => {
    let {
      yTransition
    } = this.state;
    let textMoveY = yTransition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });

    this.setState({
      yTransition: new Animated.Value(0),
      randBefore: this.props.lastCharacter,
      randCurrent: this.props.lastCharacter,
    }, () => {

   });  
  }

  scrolling = () => {
    let {
      yTransition
    } = this.state;
    let textMoveY = yTransition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });

    this.state.scrollDuration += this.state.interval; 

    Animated.timing(yTransition, {
      toValue: 1,
      duration: this.state.scrollDuration,
    }).start();

    this.state.yTransition.removeAllListeners();
    if (!this.state.stop)
      this.state.yTransition.addListener(this._listener);
    else 
      this.stop();
  }

  componentDidMount() {
    if (this.props.enabled == false) {
      this.state.randBefore = this.props.lastCharacter;
      return;
    }
    this.scrolling();
  }

  render() {
    const {
      size,
      last,
      color,
      spacing,
      duration,
    } = this.props;

    let colorStyle = color;

    let {
      yTransition,
      before,
      current,
      next
    } = this.state;

    let textMoveY = yTransition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });

    before = (       
      <Animated.Text style={{
          //position: 'absolute',
          //bottom: 0,
          fontSize: size,
          height: size + 6,
          color: colorStyle,
          alignItems: 'center',
          transform: [{translateY: textMoveY}],
        }}>
        {this.state.randBefore}
        </Animated.Text>);
    current = (       
      <Animated.Text style={{
          //position: 'absolute',
          //bottom: 0,
          fontSize: size,
          height: size + 6,
          color: colorStyle,
          alignItems: 'center',
          transform: [{translateY: textMoveY}],
        }}>
        {this.state.randCurrent}
      </Animated.Text>);

  return(
    <View
      style={{
        widtH: 40,
        height: size + 6,
        // borderWidth: 4,
        // borderColor: '#000',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 1,
      }}>
        <ScrollView 
          style={{height: size + 6}}>
         {before}
         {current}
        </ScrollView>  
  </View>
  );
  }
}
