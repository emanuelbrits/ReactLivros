import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bookform } from './Pages/BookPages/components/Bookform'
import { Bookspage } from './Pages/BookPages/components'

function App() {

  return (
    <div>
      <header>
        <h1>Livros & livres</h1>
      </header>
      <main>
        <Bookspage />
      </main>
    </div>
  )
}

export default App
