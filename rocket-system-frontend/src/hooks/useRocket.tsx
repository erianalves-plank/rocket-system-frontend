import { useState } from "react";
import { RocketDTO } from "../dtos/RocketDTO";
import { delRocket, getRockets, postRocket, putRocket } from "../services/RocketService";


export const useRocket = () => {
    const [rockets, setRockets] = useState<RocketDTO[]>([]);

    const fetchRockets = async () => {
        const rocketsData = await getRockets();
        setRockets(rocketsData);
    };

    const createRocket = async (rocket: Partial<RocketDTO>) => {
        const response = await postRocket(rocket);
        console.log('About the post operation ', response);
    };

    const updateRocket = async (id: string, rocket: Partial<RocketDTO>) => {
        const response = await putRocket(id, rocket);
        fetchRockets();
        console.log('About the put operation ', response);
    };

    const deleteRocket = async (id: string) => {
        await delRocket(id);
        fetchRockets();
    };


    return {
        rockets,
        fetchRockets,
        createRocket,
        updateRocket,
        deleteRocket
    }
}