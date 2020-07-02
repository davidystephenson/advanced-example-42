import React from 'react';
import ColorForm from './ColorForm.js'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import Dog from './Dog'

function App() {
  return (
    <>
      <Route path="/color/:guess" component={ColorForm} />
      <Route exact path='/' component={Welcome} />
      <Route exact path='/dog/:breed' component={Dog} />
    </>
  );
}

export default App;
