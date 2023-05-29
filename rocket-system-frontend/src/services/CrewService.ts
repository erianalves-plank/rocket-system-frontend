import axios from 'axios';
import { CrewDTO } from '../dtos/CrewDTO';

const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL
const entityPath = 'crew';

const getCrews = async () => {
  try {
    const response = await axios.get<CrewDTO[]>(API_BASE_URL + entityPath);
    return response.data;
  } catch (error) {
    console.log('We got an error: ', error);
    throw error;
  }
};

const postCrew = async (Crew: Partial<CrewDTO>) => {
  try {
    const response = await axios.post(API_BASE_URL + entityPath, Crew);
    console.log('About the post operation ', response);
  } catch (error) {
    console.log(error);
  }

};

const putCrew = async (id: string, Crew: Partial<CrewDTO>) => {
  
  try {
    const response = await axios.put(API_BASE_URL + entityPath + `/${id}`, Crew);
    console.log('About the put operation ', response);
  } catch (error) {
    console.log(error)    
  }
};

const delCrew = async (id: string) => {
  try {
    await axios.delete<void>(API_BASE_URL + entityPath + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { getCrews, postCrew, putCrew, delCrew };
