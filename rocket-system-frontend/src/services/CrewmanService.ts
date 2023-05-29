import axios from 'axios';
import { CrewmanDTO } from '../dtos/CrewmanDTO';

const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL
const entityPath = 'crewman';

const getCrewmen = async () => {
  try {
    const response = await axios.get<CrewmanDTO[]>(API_BASE_URL + entityPath);
    return response.data;
  } catch (error) {
    console.log('We got an error: ', error);
    throw error;
  }
};

const postCrewman = async (Crewman: Partial<CrewmanDTO>) => {
  try {
    const response = await axios.post(API_BASE_URL + entityPath, Crewman);
    console.log('About the post operation ', response);
  } catch (error) {
    console.log(error);
  }

};

const putCrewman = async (id: string, Crewman: Partial<CrewmanDTO>) => {
  
  try {
    const response = await axios.put(API_BASE_URL + entityPath + `/${id}`, Crewman);
    console.log('About the put operation ', response);
  } catch (error) {
    console.log(error)    
  }
};

const delCrewman = async (id: string) => {
  try {
    await axios.delete<void>(API_BASE_URL + entityPath + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { getCrewmen, postCrewman, putCrewman, delCrewman };
