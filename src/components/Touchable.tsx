import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleProp,
  ViewStyle,
  BackgroundPropType
} from 'react-native';

interface TouchableProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactChild;
  background?: BackgroundPropType;
  onPress: () => void;
}

const Touchable = (props: TouchableProps) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={props.onPress} background={props.background}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  );

export default Touchable;
