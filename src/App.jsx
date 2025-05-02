import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import UserList from './component/UserList'
import AddUser from './component/AddUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </Router>
  )
}

export default App
