import {Household} from "./Household";

export class Neighborhood {
    private _name: string;
    _neighborhood: Household[] = []


    constructor(name: string, neighborhood: Household[]) {
        this._name = name;
        this._neighborhood = neighborhood;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get neighborhood(): Household[] {
        return this._neighborhood;
    }

    set neighborhood(value: Household[]) {
        this._neighborhood = value;
    }

    filterByMemberCount(count: number) {
        let filtered = []
        for (let i = 0; i < this._neighborhood.length; i++) {
            if (this._neighborhood[i].memberCount > count) {
                filtered.push(this._neighborhood[i].houseId)
            }
        }
        console.log(filtered)
    }

    filterByNameInNeighborhood(filterName) {
        let filteredHouse = []
        for (let i = 0; i < this._neighborhood.length; i++) {
            for (let j = 0; j < this._neighborhood[i]._members.length; j++) {
                if (this._neighborhood[i]._members[j].fullName == filterName) {
                    filteredHouse.push(this._neighborhood[i].houseId)
                }
            }
        }
    }

    display(){
        console.log(this._neighborhood)
    }
}