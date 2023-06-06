import { LeftCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export interface PropsType {
  entityType: string;
}

const NavbarContentPages: React.FC<PropsType> = ({ entityType }) => {
  const [t] = useTranslation();
  const sectionName = entityType + ' section';
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '78px',
        background: '#5e548e',
      }}
    >
      <Link style={{ marginLeft: '30px' }} to="/">
        <LeftCircleOutlined style={{ fontSize: '30px' }} />
      </Link>{' '}
      <li style={{ listStyle: 'none', fontSize: '25px', marginRight: '60px' }}>
        {t(sectionName)}
        {/* {entityType[0].toUpperCase() + entityType.slice(1) + ' Section'} */}
      </li>
    </nav>
  );
};

export { NavbarContentPages };
