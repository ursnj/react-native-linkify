import { Component, ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface Props {
  children: ReactNode;
  linkDefault?: boolean;
  linkify?: object;
  linkStyle?: StyleProp<any>;
  linkText?: string | ((text: string) => string);
  onPress?: (url: string, text: string) => void;
  onLongPress?: (url: string, text: string) => void;
}

declare class Linkify extends Component<Props> {}

export default Linkify;
