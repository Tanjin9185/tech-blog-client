import './App.css';
import Login from './Components/Login/Login'
import AddBlog from './Components/AddBlog/AddBlog';
import Blogs from './Components/Blogs/Blogs'
import LoadBlogs from './Components/LoadBlogs/LoadBlogs';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div>


      <h1 className="text-4xl font-bold">tanjin</h1>
      <Login />
      <LoadBlogs></LoadBlogs>
      <Blogs></Blogs>
      <AddBlog></AddBlog>
      <Footer></Footer>
    </div>
  )
}

export default App;
