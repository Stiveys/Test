import React from 'react'
import Users from './components/Users/Users'

export default function App() {
  return (
    <div>
      <Users name={"ken"} age={9} isAdmin={true}/>
    </div>
  )
}
