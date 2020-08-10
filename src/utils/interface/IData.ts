import { IDataDetails } from "./IDataDetails";

export interface IData extends IDataDetails{
    temperatureMax: number;
    temperatureMin: number;
    iconCode: string;
}