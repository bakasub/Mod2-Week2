"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var Book_1 = require("./Book");
var NewsPaper_1 = require("./NewsPaper");
var LibraryManage_1 = require("./LibraryManage");
var libraryManage = new LibraryManage_1.LibraryManage();
var status = true;
var book1 = new Book_1.Book(32, 'asd', 4123, 'Book', 'john doe', 500);
var news1 = new NewsPaper_1.NewsPaper(20, 'Marvel', 694, 'NewsPaper', 19);
var book2 = new Book_1.Book(15, 'asd', 69, 'Book', 'doe john', 160);
libraryManage.add(book1);
libraryManage.add(book2);
libraryManage.add(news1);
var menu = "\n             1. Add new library\n             2. Remove by Id\n             3. Display library\n             4. Display books\n             5. Display magazine\n             6. Display newspaper\n             7. Exit program\n";
while (status) {
    var choice = readlineSync.question(menu);
    switch (choice) {
        case '1':
            var document1 = readlineSync.question('What are you adding?');
            console.log('Added ' + document1 + '!');
            libraryManage.add(document1);
            break;
        case '2':
            var document2 = readlineSync.question('nhập mã số sách muốn xóa ?');
            console.log('đã xóa sách số ' + document2);
            libraryManage.removeById(document2);
            break;
        case '3':
            libraryManage.display();
            break;
        case '4':
            console.log(libraryManage.filterByCategory('Book'));
            break;
        case '5':
            console.log(libraryManage.filterByCategory('Magazine'));
            break;
        case '6':
            console.log(libraryManage.filterByCategory('NewsPaper'));
            break;
        case '7':
            status = false;
    }
}
