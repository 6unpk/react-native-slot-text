# react-native-slot-text

 react-native-slot-text is Slot text library for react-native (js based)
 
 react-native-slot-text는 Slot text 라이브러리 입니다.(js 기반)

 전국민 맞춤복지 혜택 챗봇 서비스 '[혹시나도](https://hoxymetoo.com)' 에서 사용됩니다. 

 현재 개발중에 있습니다.. 

<!-- ## How to Install

 ```
  npm install react-native-slot-text
 ```
 -->

## Usage 
 
```js
 import SlotText from react-native-slot-text;
 
 ...

 render(){
  return(
        <SlotText 
          title='32,000,000' 
          delim=',' 
          startDuration={1000}
          difDuration={200}
          size={26} 
          color='#000'/>    );
 }
```

## Property 
| name | property | default |
| ---- | --------- | ------- | 
| title | `String` | None |
| delim | `String` | None |
| size | `Integer` | 12 |
| startDuration | `Integer` | 2000 |
| difDuration | `Integer` | 500 |
| color | `String` | '#000' 

## License

```
MIT License

Copyright (c) 2020 6unpk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
