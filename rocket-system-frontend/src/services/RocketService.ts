import { get, post, update, del } from '../api/api'
import { RocketDTO } from '../dtos/RocketDTO';

const path = 'rocket';

const getRockets = async (): Promise<RocketDTO[]> => {
    const rockets = get<RocketDTO>(path);
    console.log('inside service ', await rockets);
    return rockets;
};

export {
    getRockets
}