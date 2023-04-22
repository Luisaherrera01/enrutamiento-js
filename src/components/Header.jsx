import{Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <Link to = {'/'}>Home</Link>
            <Link to={'/formulario'}>Formulario</Link>
        </nav>
    </header>
  )
}

export default Header