import { Photo } from './photo';

export interface Coach {
    id: number;
    userName: string;
    firstName:string;
    lastName: string;
    telegram: string;
    instageram: string;
    email: string;
    gender: string;
    regionid?: number;
    cityid?: number;
    photo?: Photo[];
}