import { CrewDTO } from "./CrewDTO";
import { RocketDTO } from "./RocketDTO";

export interface LaunchDTO {
    id: string;
    launchCode: string;
    date: string;
    success: boolean;
    rocket: RocketDTO;
    crew: CrewDTO;
}