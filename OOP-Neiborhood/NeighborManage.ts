import {Neighborhood} from "./Neighborhood";

export class NeighborManage {
    private _neighborhoodGroup: Neighborhood[] = []

    constructor(Neighborhoods: Neighborhood[]) {
        this._neighborhoodGroup = Neighborhoods;
    }

    get neighborhoodGroup(): Neighborhood[] {
        return this._neighborhoodGroup;
    }

    set neighborhoodGroup(value: Neighborhood[]) {
        this._neighborhoodGroup = value;
    }

    filterByNeighborName(neighborName) {
        for (let i = 0; i < this._neighborhoodGroup.length; i++) {
            if (this._neighborhoodGroup[i] == neighborName) {
                return this._neighborhoodGroup[i]
            }
        }
    }
}
