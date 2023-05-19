const CardContentLaunch = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        border: '2px solid #be95c4',
        width: '400px',
        margin: '15px auto',
        borderRadius: '4px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(to right, #be95c4, #e0b1cb, #be95c4)',
      }}
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
          <strong>Launch Code:</strong> BBC001
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Date:</strong> 02/01/1999
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Success:</strong> true
        </p>
      </div>
      <div>
        <h4 style={{ marginTop: 0, marginBottom: '4px', paddingLeft: '4px' }}>
          Rocket
        </h4>
        <div>
          <p style={{ margin: 0, paddingLeft: '4px' }}>
            <strong>Name:</strong> Kraskovich
          </p>
        </div>
        <h4
          style={{ marginTop: '5px', marginBottom: '2px', paddingLeft: '4px' }}
        >
          Crew
        </h4>
        <div>
          <p style={{ margin: '0 0 10px 0', paddingLeft: '4px' }}>
            <strong>Name:</strong> Shalashaska
          </p>
          <div>
            <p style={{ margin: 0, paddingLeft: '30px' }}>
              <strong>Name:</strong> Ashley
            </p>
            <p style={{ margin: '0 0 15px 0', paddingLeft: '30px' }}>
              <strong>Patent:</strong> Vice-Captain
            </p>
            <p style={{ margin: 0, paddingLeft: '30px' }}>
              <strong>Name:</strong> Mash
            </p>
            <p style={{ margin: '0 0 15px 0', paddingLeft: '30px' }}>
              <strong>Patent:</strong> Biologist
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardContentLaunch }
