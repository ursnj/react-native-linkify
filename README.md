# react-native-linkify
[![NPM version](https://badge.fury.io/js/react-native-linkify.svg)](http://badge.fury.io/js/react-native-linkify) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/jondot/awesome-react-native#text--rich-content)

A `<Linkify />` component for [react-native](http://facebook.github.io/react-native/) & [react-native-web](https://github.com/necolas/react-native-web) that makes urls, fuzzy links, emails etc clickable

![demo](https://cdn.rawgit.com/obipawan/hyperlink/master/asset/screen.gif)

## Installation
```sh
npm i --save react-native-linkify
```

## Props
| name | desc | type | default
| --- | --- | --- | --- |
| `linkify` | [linkify-it](http://markdown-it.github.io/linkify-it/doc/) object, for custom schema  | `object` | `require('linkify-it')()`
| `linkStyle` | highlight clickable text with styles | `Text.propTypes.style` |
| `linkText` | A string or a func to replace parsed text | `oneOfType([ string, func ])` |
| `onPress` | Func to handle click over a clickable text with parsed text as arg | `func` |
| `onLongPress` | Func to handle long click over a clickable text with parsed text as arg | `func` |
|`linkDefault`|A platform specific fallback to handle `onPress`. Uses [Linking](https://facebook.github.io/react-native/docs/linking.html). Disabled by default | `bool`
|`injectViewProps`| Func with url as a param to inject props to the clickable component | `func` | `i => ({})`

## Examples
Wrap any component that has `<Text>` (works for [nested ](https://facebook.github.io/react-native/docs/text.html#nested-text) text too) in it

```jsx
import Linkify from 'react-native-linkify'

export const defaultLink = () =>
  <Linkify linkDefault={ true }>
    <Text style={ { fontSize: 15 } }>
      This text will be parsed to check for clickable strings like https://github.com/ursnj/react-native-linkify and made clickable.
    </Text>
  </Linkify>

export const regularText = () =>
  <Linkify onPress={ (url, text) => alert(url + ", " + text) }>
    <Text style={ { fontSize: 15 } }>
      This text will be parsed to check for clickable strings like https://github.com/ursnj/react-native-linkify and made clickable.
    </Text>
  </Linkify>

export const regularTextLongPress = () =>
  <Linkify onLongPress={ (url, text) => alert(url + ", " + text) }>
    <Text style={ { fontSize: 15 } }>
      This text will be parsed to check for clickable strings like https://github.com/ursnj/react-native-linkify and made clickable for long click.
    </Text>
  </Linkify>

export const nestedText = () =>
  <Linkify onPress={ (url, text) => alert(url + ", " + text) }>
    <View>
      <Text style={ { fontSize: 15 } }>
        A nested Text component https://facebook.github.io/react-native/docs/text.html works equally well <Text>with https://github.com/ursnj/react-native-linkify</Text>
      </Text>
    </View>
  </Linkify>

export const highlightText = () =>
  <Linkify linkStyle={ { color: '#2980b9', fontSize: 20 } }>
    <Text style={ { fontSize: 15 } }>
      Make clickable strings like https://github.com/ursnj/react-native-linkify stylable
    </Text>
  </Linkify>

export const parseAndReplace = () =>
  <Linkify
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://github.com/ursnj/react-native-linkify' ? 'Hyperlink' : url }
  >
    <Text style={ { fontSize: 15 } }>
      Make clickable strings cleaner with https://github.com/ursnj/react-native-linkify
    </Text>
  </Linkify>

export const passPropsText = () =>
  <Linkify
    linkDefault
    injectViewProps={ url => ({
          testID: url === 'http://link.com' ? 'id1' : 'id2' ,
          style: url === 'https://link.com' ? { color: 'red' } : { color: 'blue' },
          //any other props you wish to pass to the component
    }) }
  >
    <Text>You can pass props to clickable components matched by url.
        <Text>This url looks red https://link.com
    </Text> and this url looks blue https://link2.com </Text>
  </Linkify>
```

### Dependenies
 [linkify-it](https://github.com/markdown-it/linkify-it)
### Development

PRs highly appreciated

License
----
MIT License
