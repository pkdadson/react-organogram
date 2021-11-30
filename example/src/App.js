import React from 'react'

import { Organogram } from 'react-organogram'
import 'react-organogram/dist/index.css'
import lists from './lists'



const App = () => {
  return <Organogram lists={lists}>
    <h1 style={{ textAlign: 'center' }}>This is my header</h1>
  </Organogram>
}

export default App
