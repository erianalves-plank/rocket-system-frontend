import axios from 'axios';
import { RocketDTO } from '../dtos/RocketDTO';

const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL
const entityPath = 'rocket';

const getRockets = async () => {
  try {
    const response = await axios.get<RocketDTO[]>(API_BASE_URL + entityPath);
    return response.data;
  } catch (error) {
    console.log('We got an error: ', error);
    throw error;
  }
};

const postRocket = async (Rocket: Partial<RocketDTO>) => {
  const response = await axios.post(API_BASE_URL + entityPath, Rocket);

  console.log('About the post operation ', response);
};

const updateRocket = async (id: string, Rocket: Partial<RocketDTO>) => {
  const response = await axios.put(API_BASE_URL + entityPath + `/${id}`, Rocket);

  console.log('About the put operation ', response);
};

const deleteRocket = async (id: string) => {
  await axios.delete<void>(API_BASE_URL + entityPath + `/${id}`);
};

export { getRockets };
