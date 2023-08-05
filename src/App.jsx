import { Link, useLocation } from 'react-router-dom'
import './App.scss'

function App() {
  const data = [
    { title: 'Home', path: '/'},
    { title: 'About', path: '/about'},
    { title: 'Perfil', path: '/perfil'},
    { title: 'Extra', path: '/extra'}
  ]

  const {pathname} = useLocation()


  return (
  
      <div className='contenedor'>
        <nav>
          <ul>
          {
            data.map( ({title, path}, i)=>(
                <Link to={path} key={i}>
                <div className={`${pathname === path ? "itemAct" : "item"}`}>
                <li>
                    {title}
                  </li>
                  <div className={`${pathname === path ? "subrayado" : "subrayadoDes"}`} />
              </div>
              </Link>
            ) )
          }  
          </ul>
        </nav>
      </div>
    
  )
}

export default App
