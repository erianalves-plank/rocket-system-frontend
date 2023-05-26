import { useContext } from 'react';
import { CrewDTO } from '../../dtos/CrewDTO.tsx';
import { RocketDTO } from '../../dtos/RocketDTO.tsx';
import { ThemeContext } from '../../theme/ThemeContext.tsx';

export interface DataLaunch {
  id: string;
  launchCode: string;
  date: string;
  success: boolean;
  rocket: RocketDTO;
  crew: CrewDTO;
  onClick: () => void;
}

const CardContentLaunch: React.FC<DataLaunch> = ({
  launchCode,
  date,
  success,
  rocket,
  crew,
  onClick,
}) => {
  const theme = useContext(ThemeContext);

  /*   const crewmenSection = crew.crewmen.map(item => {
    const crewmanInfo = <>
      <p style={{ margin: 0, paddingLeft: '30px' }}>
        <strong>Name:</strong> {item.name}
      </p>
      <p style={{ margin: '0 0 15px 0', paddingLeft: '30px' }}>
        <strong>Patent:</strong> {item.patent}
      </p>
    </>

    return crewmanInfo;
  })
 */

  const handleClick = () => {
    onClick();
  };
  const infoSuccess = success ? 'True' : 'False';
  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick}
    >
      <h3
        style={{
          marginTop: '2px',
          marginBottom: 0,
          borderBottom: '4px solid #5e60ce',
        }}
      >
        Details
      </h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Launch Code:</strong> {launchCode}
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Date:</strong> {date}
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Success:</strong> {infoSuccess}
        </p>
      </div>
      <div>
        <h4 style={{ marginTop: 0, marginBottom: '4px', paddingLeft: '4px' }}>
          Rocket
        </h4>
        <div>
          <p style={{ margin: 0, paddingLeft: '4px' }}>
            <strong>Name:</strong> {rocket.name}
          </p>
        </div>
        <h4
          style={{ marginTop: '5px', marginBottom: '2px', paddingLeft: '4px' }}
        >
          Crew
        </h4>
        <div>
          <p style={{ margin: '0 0 10px 0', paddingLeft: '4px' }}>
            <strong>Name:</strong> {crew.name}
          </p>

          {/*           <p style={{ marginTop: '5px', marginBottom: '2px', paddingLeft: '4px' }}>Crewmen</p>

          <div>
            {crewmenSection}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { CardContentLaunch };
