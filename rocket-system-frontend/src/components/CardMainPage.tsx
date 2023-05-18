import { Link } from 'react-router-dom';
import '../index.css'

export interface DataMainPage {
    id: number,
    name: string,
    img: string,
    description: string,
    redirect: string
}

const CardMainPage: React.FC<DataMainPage> = ({ name, img, description, redirect }) => {
    return (
        <div className="flex-item">
            <h2>{name}</h2>
            <img src={img} alt="" className="img-front-page" />
            <p>{description}<Link to={redirect}>Check More</Link> </p>
        </div>

    );
}

export{
    CardMainPage
}; 

