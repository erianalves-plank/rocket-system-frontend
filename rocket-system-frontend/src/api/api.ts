import axios, { AxiosResponse } from 'axios';
import { RocketDTO } from '../dtos/RocketDTO';
import { CrewDTO } from '../dtos/CrewDTO';
import { CrewmanDTO } from '../dtos/CrewmanDTO';

export const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL

const getRockets = async () => {
    const data = await axios.get<RocketDTO[]>(API_BASE_URL + `rocket`);
    const rocketsList = data.data;
    return rocketsList;    
  }

const getCrews = async () => {
    const data = await axios.get<CrewDTO[]>(API_BASE_URL + `crew`);
    const crewList = data.data;
    return crewList; 
}

const getCrewmen = async () => {
    const data = await axios.get<CrewmanDTO[]>(API_BASE_URL + `crewman`);
    const crewmanList = data.data;
    return crewmanList; 
}

export {
    getRockets,
    getCrews,
    getCrewmen
}