import React from 'react'
import { useState } from 'react'
import NormalData from './DataPassing/NormalData'
import DataAsArray from './DataPassing/DataAsArray'
import DataAsObject from './DataPassing/DataAsObject'
import DataAsNull from './DataPassing/DataAsNull'
import DataAsCondition from './DataPassing/DataAsCondition'
import HandleChange from './ControlledComponent/HandleChange'
import FilterMethod from './ControlledComponent/FilterMethod'
import Form from './ControlledComponent/Form'

const App = () => {
  return (
    <div>
      {/* <h1>ways of passing data</h1>
      <NormalData />
      <DataAsArray />
      <DataAsObject />
      <DataAsNull /> */}
      {/* <DataAsCondition /> */}
      {/* <HandleChange /> */}
      {/* <FilterMethod /> */}
      <Form />
    </div>
  )
}

export default App

