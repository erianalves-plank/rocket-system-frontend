import { CrewmanDTO } from './CrewmanDTO';

export interface CrewDTO {
  id: string;
  name: string;
  crewmen: CrewmanDTO[];
}
