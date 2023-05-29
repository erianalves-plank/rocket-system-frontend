import { useState } from "react";
import { CrewmanDTO } from "../dtos/CrewmanDTO";
import { delCrewman, getCrewmen, postCrewman, putCrewman } from "../services/CrewmanService";


export const useCrewman = () => {
    const [crewmen, setCrewmen] = useState<CrewmanDTO[]>([]);

    const fetchCrewmen = async () => {
        const CrewmanData = await getCrewmen();
        setCrewmen(CrewmanData);
    };

    const createCrewman = async (Crewmant: Partial<CrewmanDTO>) => {
        const response = await postCrewman(Crewmant);
        console.log('About the post operation ', response);
    };

    const updateCrewman = async (id: string, Crewmant: Partial<CrewmanDTO>) => {
        const response = await putCrewman(id, Crewmant);
        fetchCrewmen();
        console.log('About the put operation ', response);
    };

    const deleteCrewman = async (id: string) => {
        await delCrewman(id);
        fetchCrewmen();
    };


    return {
        crewmen,
        fetchCrewmen,
        createCrewman,
        updateCrewman,
        deleteCrewman
    }
}