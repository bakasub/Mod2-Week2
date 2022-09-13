let readlineSync = require('readline-sync')
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {NewsPaper} from "./NewsPaper";
import {LibraryManage} from "./LibraryManage";

let libraryManage = new LibraryManage()
let status = true
let book1 = new Book(32, 'asd', 4123, 'Book', 'john doe', 500)
let news1 = new NewsPaper(20, 'Marvel', 694, 'NewsPaper', 19)
let book2 = new Book(15, 'asd', 69, 'Book', 'doe john', 160)
libraryManage.add(book1)
libraryManage.add(book2)
libraryManage.add(news1)


let menu = `
             1. Add new library
             2. Remove by Id
             3. Display library
             4. Display books
             5. Display magazine
             6. Display newspaper
             7. Exit program
`
while (status) {
    let choice = readlineSync.question(menu);
    switch (choice) {
        case '1':
            let docCode = readlineSync.question(`Document's code?`);
            let publisher = readlineSync.question('Nhap ten?');
            let issuedID = readlineSync.question('Issued Id?')
            let category = readlineSync.question('Which type of doc is this ?')
            let obj (docCode,publisher,issuedID,category)
            libraryManage.add(obj)
        case '2':
            let document2 = readlineSync.question('nhập mã số sách muốn xóa ?');
            console.log('đã xóa sách số ' + document2)
            libraryManage.removeById(document2)
            break;
        case '3':
            libraryManage.display()
            break;
        case '4':
            console.log(libraryManage.filterByCategory('Book'))
            break;
        case '5':
            console.log(libraryManage.filterByCategory('Magazine'))
            break;
        case '6':
            console.log(libraryManage.filterByCategory('NewsPaper'))
            break;
        case '7':
            status = false
    }
}