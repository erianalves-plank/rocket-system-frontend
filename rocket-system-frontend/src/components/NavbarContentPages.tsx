import { Link } from 'react-router-dom'

const NavbarContentPages = () => {
  return (
    <nav>
      <ul>
        <li>Mining Rockets - Rockets Section</li>

        <li>
          <Link to="/">Back To Main Page</Link>{' '}
        </li>
      </ul>
    </nav>
  )
}

export { NavbarContentPages }
