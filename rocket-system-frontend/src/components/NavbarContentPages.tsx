import { LeftCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
interface PropsType {
  entityType: string;
}

const NavbarContentPages: React.FC<PropsType> = ({entityType}) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '78px', background: '#5e548e' }}>

      <Link style={{ marginLeft: '30px' }} to="/">
        <LeftCircleOutlined style={{ fontSize: '30px' }} />
      </Link>{' '}
      <li style={{ listStyle: 'none', fontSize: '25px', marginRight: '60px' }}>{entityType[0].toUpperCase()+entityType.slice(1) + ' Section'}</li>

    </nav>
  )
}

export { NavbarContentPages }
