export class Item {
    id:string;
    itemname:string;
    itemimage:string;
    itemprice:number;
    itemdescription:string;
    itemadddate:Date;

    constructor(id:string,
        itemname:string,
        itemimage:string,
        itemprice:number,
        itemdescription:string,
        itemadddate:Date){
            this.id = id;
            this.itemname = itemname;
            this.itemimage = itemimage;
            this.itemprice = itemprice;
            this.itemdescription = itemdescription;
            this.itemadddate = itemadddate;
        }
}