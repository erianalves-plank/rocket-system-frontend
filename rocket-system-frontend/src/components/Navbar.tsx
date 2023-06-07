import { RocketOutlined } from '@ant-design/icons';

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
      <RocketOutlined data-testid="rocket-icon-left" style={{ fontSize: '48px', color: '#e0b1cb' }} />
      <li data-testid='navbar' style={{ listStyle: 'none', padding: '0 30px', fontSize: '30px' }}>
        Mining Rockets
      </li>
      <RocketOutlined data-testid="rocket-icon-right" style={{ fontSize: '48px', color: '#e0b1cb' }} />
    </nav>
  );
};

export default Navbar;
