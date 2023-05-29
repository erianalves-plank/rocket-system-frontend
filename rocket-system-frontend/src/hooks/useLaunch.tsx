import { useState } from "react";
import { LaunchDTO } from "../dtos/LaunchDTO";
import { delLaunch, getLaunchs, postLaunch, putLaunch } from "../services/LaunchService";
import { getRockets } from "../services/RocketService";
import { getCrews } from "../services/CrewService";

export const useLaunch = () => {

  const [launches, setLaunches] = useState<LaunchDTO[]>([]);

    const fetchLaunches = async () => {
        const launchData = await getLaunchs();
        setLaunches(launchData);
    };

    const createLaunch = async (
        launch: Partial<LaunchDTO>,
        rocketName: string,
        crewName: string
    ) => {
        const rocketsList = await getRockets();
        const crewsList = await getCrews();

        const rocketId = rocketsList.find(
            rocket => rocket['name'] === rocketName
        )?.id;
        const crewId = crewsList.find(crew => crew['name'] === crewName)?.id;

        const launchPost = {
            launchCode: launch.launchCode,
            date: launch.date,
            success: launch.success,
            rocketId: rocketId,
            crewId: crewId,
        };

        const response = await postLaunch(launchPost);//await axios.post(API_BASE_URL + 'launch', launchPost);
        fetchLaunches();
        console.log('About the post operation ', response);
    };

    const updateLaunch = async (
        id: string,
        launch: Partial<LaunchDTO>,
        rocketName: string,
        crewName: string
    ) => {
        const rocketsList = await getRockets();
        const crewsList = await getCrews();

        const rocketId = rocketsList.find(
            rocket => rocket['name'] === rocketName
        )?.id;
        const crewId = crewsList.find(crew => crew['name'] === crewName)?.id;

        const launchUpdate = {
            launchCode: launch.launchCode,
            date: launch.date,
            success: launch.success,
            rocketId: rocketId,
            crewId: crewId,
        };

        const response = await putLaunch(id, launchUpdate);
        fetchLaunches();
        console.log('About the put operation ', response);
    };

    const deleteLaunch = async (id: string) => {
        await delLaunch(id);
        fetchLaunches();
    };

    return {
        launches,
        fetchLaunches,
        createLaunch,
        updateLaunch,
        deleteLaunch
    }

}