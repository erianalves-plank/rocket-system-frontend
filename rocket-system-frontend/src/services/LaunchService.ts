import axios from 'axios';
import { LaunchDTO } from '../dtos/LaunchDTO';

const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL
const entityPath = 'launch';

const getLaunchs = async () => {
  try {
    const response = await axios.get<LaunchDTO[]>(API_BASE_URL + entityPath);
    return response.data;
  } catch (error) {
    console.log('We got an error: ', error);
    throw error;
  }
};

const postLaunch = async (Launch: Partial<LaunchDTO>) => {
  try {
    const response = await axios.post(API_BASE_URL + entityPath, Launch);
    console.log('About the post operation ', response);
  } catch (error) {
    console.log(error);
  }
};

const putLaunch = async (id: string, Launch: Partial<LaunchDTO>) => {
  try {
    const response = await axios.put(
      API_BASE_URL + entityPath + `/${id}`,
      Launch
    );
    console.log('About the put operation ', response);
  } catch (error) {
    console.log(error);
  }
};

const delLaunch = async (id: string) => {
  try {
    await axios.delete<void>(API_BASE_URL + entityPath + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { getLaunchs, postLaunch, putLaunch, delLaunch };
