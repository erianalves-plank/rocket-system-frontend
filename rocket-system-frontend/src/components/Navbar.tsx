import { RocketOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '78px',
      }}
    >
      <RocketOutlined style={{ fontSize: '48px', color: '#e0b1cb' }} />
      <li style={{ listStyle: 'none', padding: '0 30px', fontSize: '30px' }}>
        Mining Rockets
      </li>
      <RocketOutlined style={{ fontSize: '48px', color: '#e0b1cb' }} />
    </nav>
  )
}

export default Navbar
