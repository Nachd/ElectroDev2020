import { Category } from './category';

export class Event {

    nameEn : string;
    nameFr : string;
    startDate : Date;
    endDate : Date;
    description : string;
    price : number;
    categoryId : Category;
}
