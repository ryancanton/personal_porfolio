import { Outlet } from 'react-router-dom'
import './index.scss';
import Sidebar from '../Sidebar';
import Home from '../Home'

const Layout = () => {
  return ( 
    <div className="App">
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>
        <span className='bottom-tag-html'>&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Home />
        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout