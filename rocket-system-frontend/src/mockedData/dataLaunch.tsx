export default function GetLaunchs() {
  const data = [
    {
      id: '3bca4bf2-cdde-4c5b-b088-12498b4a9e2c',
      launchCode: 'BBC0102',
      date: '05/11/23',
      success: true,
      rocket: {
        id: '88b6428b-d09c-42be-be74-95ba55cdcd07',
        name: 'Denver',
      },
      crew: {
        id: '4dca6810-524d-4f15-957c-b29485dda84c',
        name: 'Studying the Moon',
        crewmen: [
          {
            id: '3',
            name: 'Joshua',
            patent: 'Biologist',
          },
        ],
      },
    },
    {
      id: 'b5bf6bb3-0c69-4ac5-81ad-94b8f07a95a9',
      launchCode: 'DFG0111',
      date: '01/07/98',
      success: false,
      rocket: {
        id: '4812562d-5e10-4015-aa03-dea4fd8090e0',
        name: 'Kastriminoff',
      },
      crew: {
        id: '8654c293-a5b5-4148-86b8-f979e4055144',
        name: 'New Moon',
        crewmen: [
          {
            id: '3',
            name: 'Joshua',
            patent: 'Biologist',
          },
        ],
      },
    },
  ]

  return data
}
