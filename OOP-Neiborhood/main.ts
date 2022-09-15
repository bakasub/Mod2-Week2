import {Person} from "./Person";
import {Household} from "./Household";
import {Neighborhood} from "./Neighborhood";
import {NeighborManage} from "./NeighborManage";

// @ts-ignore
let input = require('readline-sync')
let status = true

function mainMenu() {
    let menu =
        `1.Create person
        2.Create household
        3.Create neighborhood
        4.Add person to household
        5.Add household to neighborhood
        6.Filter household by their member count
        7.Filter household by their member name
        8.Exit
        `
    console.log(menu)
}

function createPerson() {
    let name = input.question('Name input')
    let occupation = input.question('Occupation input')
    let id = input.question('Person id input')
    let person: Person = new Person(name, occupation, id)
}

function createHousehold() {
    let address = input.question('House address ?')
    let houseId = input.question('House Id ?')
    let household = new Household(address, houseId,[])
}

function addPersonToHousehold (personId){

}