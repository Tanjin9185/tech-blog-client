import './App.css';
import LoadBlog from './Components/LoadBlog/LoadBlog';
import AddBlog from './Components/AddBlog/AddBlog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold">tanjin</h1>
      <LoadBlog></LoadBlog>
      <AddBlog></AddBlog>
      <Footer></Footer>
    </div>
  )
}

export default App;
