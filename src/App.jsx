import React from 'react'
import JSX from './components/JSX'
import Class_Component from './components/Class_Component'
import Counter from './components/Counter'
import Props from './components/Props'
import State from './components/State'
import UseEffect from './components/UseEffect'
import Fetch_data from './components/Fetch_data'
import IndianGovt from './components/props_drilling/IndianGovt'
import UseRef from './components/UseRef'
// import LazyComponents from './Advanced/LazyComponents'

import { lazy, Suspense } from 'react'
import React_Memo from './Advanced/React_Memo'
import Form from './Advanced/Form'

const LazyComponents = lazy(()=>import('./Advanced/LazyComponents'))

const App = () => {
  return (
    <div>
      {/* <JSX /> */}
      {/* <Class_Component /> */}
      {/* <Counter />
      <Props name="deepak" age="35" pincode={452010} />
      <Props name="Kishan" age="32" pincode={452011} />
      <Props name="Ayush" age="30" pincode={452012} /> */}
      {/* <State /> */}
      {/* <UseEffect /> */}
      {/* <Fetch_data /> */}
      {/* <IndianGovt /> */}
      {/* <UseRef /> */}

     <div>
      {/* <h1>Main Component</h1> */}
       <Suspense fallback={<div>
         Loading....
       </div>}>
         {/* <LazyComponents /> */}
         {/* <React_Memo /> */}
      </Suspense>
     </div>
      <Form />
    </div>
  )
}

export default App