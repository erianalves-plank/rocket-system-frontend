
const CardContentCrewman = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', border: '2px solid #be95c4', width: '400px', margin: '15px auto', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', background: 'linear-gradient(to right, #be95c4, #e0b1cb, #be95c4)' }}>
            <h3 style={{marginTop: '2px', marginBottom: 0, borderBottom: '4px solid #5e60ce'}}>Details</h3>
            <div>
                <p style={{margin: 0, paddingLeft: '4px'}}><strong>Name:</strong> Riskaminiff</p>
                <p style={{margin: 0,  paddingLeft: '4px'}}><strong>Patent:</strong> Captain</p>
            </div>
        </div>
    );
}

export {
    CardContentCrewman
};