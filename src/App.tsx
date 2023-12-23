import { Route,  Routes } from 'react-router-dom'
import { Error } from './pages/Error'
import { MainLayout } from './pages/MainLoyaut'
import { Post } from './pages/Post'
import { PostsList } from './components/PostsList'

function App() {

  return (
    <>
    <Routes>
    <Route element={<MainLayout />} >
    <Route path="/" element={<PostsList />} />
    <Route path="/post/:id" element={<Post />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </>

    
  )
}

export default App
