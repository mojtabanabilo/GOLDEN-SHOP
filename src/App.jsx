import React from 'react'
import './App.scss';

// components
import Introduction from './components/introduction/Introduction';
import Collection from './components/collection/Collection';
import Discount from './components/discount/Discount';
import Teams from './components/teams/Teams';
import Subscribe from './components/subscribe/Subscribe';

function App() {

  return (
    <div className='app'>
      <Introduction />
      <Collection />
      <Discount />
      <Teams />
      <Subscribe />
    </div>
  )
}

export default App
