# react-organogram

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-organogram.svg)](https://www.npmjs.com/package/react-organogram) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-organogram
```

## Example

![Example Screenshot](https://user-images.githubusercontent.com/38428845/143792018-ea9b1c80-b8e3-43ed-bcd8-49d394eac57c.png)

## Usage

```jsx
import React from 'react'

import { Organogram } from 'react-organogram'
import 'react-organogram/dist/index.css'

const lists = [
  {
    title: 'First level',
    description: 'Hello world',
    image:
      'https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png',
    children: [
      {
        title: 'Second level 1',
        description: 'Hello world',
        children: []
      },
      {
        title: 'Second level 2',
        description: 'Hello world',
        children: [
          {
            title: 'Third level 1',
            description: 'Hello world',
            children: [
              {
                title: 'Forth level 1',
                description: 'Hello world',
                children: []
              },
              {
                title: 'Forth level 2',
                description: 'Hello world',
                children: []
              }
            ]
          },
          {
            title: 'Third level 2',
            description: 'Hello world',
            children: [
              {
                title: 'Forth level 3',
                description: 'Hello world',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Second level 3',
        description: 'Hello world',
        children: [
          {
            title: 'Third level 3',
            description: 'Hello world',
            children: []
          }
        ]
      }
    ]
  }
]

const Example = () => {
  return (
    <Organogram lists={lists}>
      <h1 style={{ textAlign: 'center' }}>This is my header</h1>
    </Organogram>
  )
}

export default Example
```

## License

MIT © [pkdadson](https://github.com/pkdadson)
