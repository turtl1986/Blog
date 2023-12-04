import { Route,  Routes } from 'react-router-dom'
import { Error } from './pages/Error'
import { MainLayout } from './pages/MainLoyaut'

import { Post } from './pages/Post'
import { Login } from './pages/Login'

import { Main } from './pages/Main'

function App() {
 

  return (
    <>
    <Routes>
    <Route element={<MainLayout />} >
    <Route path="/" element={<Main />} />
    <Route path="/post/:id" element={<Post />} />
    <Route path="/login" element={<Login />} />
      </Route>
    
      <Route path="*" element={<Error />} />
    </Routes>
    </>

    
  )
}

export default App
