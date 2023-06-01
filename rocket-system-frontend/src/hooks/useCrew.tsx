import { useState } from 'react';
import { CrewDTO } from '../dtos/CrewDTO';
import { delCrew, getCrews, postCrew, putCrew } from '../services/CrewService';
import { getCrewmen } from '../services/CrewmanService';

export const useCrew = () => {
  const [crews, setCrews] = useState<CrewDTO[]>([]);
  const [crewmenDB, setCrewmenDB] = useState<string[]>([]);

  const fetchCrews = async () => {
    const crewmen = await getCrewmen();
    const crewmenNames = crewmen.map((item) => item.name);
    setCrewmenDB(crewmenNames);

    const dataCrew = await getCrews();
    setCrews(dataCrew);
  };

  const createCrew = async (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    const crewmenList = await getCrewmen();

    const matchedValues = new Set(crewmenNames);
    const crewmenFiltered = crewmenList.filter(
      (crewman) =>
        crewmenNames.includes(crewman['name']) &&
        matchedValues.delete(crewman['name'])
    );
    const crewmenIds = crewmenFiltered.map((crewman) => crewman.id);

    const crewPost = {
      name: crew.name,
      crewmenIds: crewmenIds,
    };

    const response = await postCrew(crewPost);
    fetchCrews();
    console.log('About the post operation ', response);
  };

  const updateCrew = async (
    id: string,
    crew: Partial<CrewDTO>,
    crewmenNames: string[]
  ) => {
    const crewmenList = await getCrewmen();

    const matchedValues = new Set(crewmenNames);
    const crewmenFiltered = crewmenList.filter(
      (crewman) =>
        crewmenNames.includes(crewman['name']) &&
        matchedValues.delete(crewman['name'])
    );
    const crewmenIds = crewmenFiltered.map((crewman) => crewman.id);

    const crewUpdate = {
      name: crew.name,
      crewmenIds: crewmenIds,
    };
    const response = await putCrew(id, crewUpdate);
    fetchCrews();
    console.log('About the put operation ', response);
  };

  const deleteCrew = async (id: string) => {
    await delCrew(id);
    fetchCrews();
  };

  return {
    crews,
    crewmenDB,
    fetchCrews,
    createCrew,
    updateCrew,
    deleteCrew,
  };
};
