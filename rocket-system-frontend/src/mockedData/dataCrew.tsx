export default function GetCrews() {
  const data = [
    {
      id: '1',
      name: 'Mars VII',
      crewmen: [
        {
          id: '1',
          name: 'Kiin',
          patent: 'Sub-Commander',
        },
        {
          id: '2',
          name: 'Kate',
          patent: 'Commander',
        },
      ],
    },
    {
      id: '2',
      name: 'Moon V',
      crewmen: [
        {
          id: '3',
          name: 'Joshua',
          patent: 'Biologist',
        },
      ],
    },
    {
      id: '3',
      name: 'Jupyter III',
      crewmen: [
        {
          id: '1',
          name: 'Kiin',
          patent: 'Sub-Commander',
        },
        {
          id: '2',
          name: 'Kate',
          patent: 'Commander',
        },
        {
          id: '4',
          name: 'Felicia',
          patent: 'Chemist',
        },
      ],
    },
  ]

  return data
}
