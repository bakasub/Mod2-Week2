import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {NewsPaper} from "./NewsPaper";

export class LibraryManage {
    private _library = [];

    get library(): any[] {
        return this._library;
    }

    set library(value: any[]) {
        this._library = value;
    }

    add(document) {
        this._library.push(document)
    }

    display(){
        console.log(this._library)
    }

    removeById(id){
        for (let i = 0; i < this._library.length; i++){
            if (id == this._library[i].issuedID){
                this._library.splice(i,1)
            }
        }
    }

    filterByCategory(input: string){
        let filteredDocs = []
        for (let i = 0; i < this._library.length; i++) {
            if (input == this._library[i].category){
                filteredDocs.push(this._library[i])
            }
        }
        return filteredDocs
    }

}