import '../index.css'


interface DataRocket {
    id: number,
    name: string
}
const CardContent: React.FC<DataRocket> = ({ name }) => {
    return (
        <div className='flex-item-page'>
            <div>
                <h3 className='div-title'>Details</h3>
            </div>
            <div className='flex-item-content'>
                <p>Name: {name}</p>
            </div>
        </div>
    );
}

export {
    CardContent
};

