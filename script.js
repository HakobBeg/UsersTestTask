let User = {
    firstName: '',
    lastName: ''
}

function Admin(login, pass, fName, lName) {
    this.__proto__ = User;
    this.login = login;
    this.password = pass;
    this.isAdmin = true;
    this.__proto__.lastName = lName;
    this.__proto__.firstName = fName;
}


class TableMaker{
    constructor(tableId) {
        this.table = document.getElementById(tableId);

        let row = document.createElement('tr');
        let cl1 = document.createElement('th');
        let cl2 = document.createElement('th');
        let cl3 = document.createElement('th');
        let cl4 = document.createElement('th');

        cl1.innerText = 'No.';
        cl2.innerText = 'First Name';
        cl3.innerText = 'Last Name';
        cl4.innerText = 'Is Admin?';

        this.appendTo(row,cl1);
        this.appendTo(row,cl2);
        this.appendTo(row,cl3);
        this.appendTo(row,cl4);

        this.table.append(row);
    }


    createColumn(text){
        const newCl = document.createElement('td');
        newCl.innerText = text;
        return newCl;
    }

    createRow(tdArr){
        const newRow = document.createElement('tr');
        tdArr.forEach(x=>newRow.append(x));

        return newRow;
    }


    appendTo(parent,child){
        parent.append(child);
    }






}


let MainTable = new TableMaker('AdminsTable');

 let objRow =  MainTable.createRow([MainTable.createColumn("1"),MainTable.createColumn("Hakob"),MainTable.createColumn("Beglaryan"),MainTable.createColumn("Yes")]);

 MainTable.appendTo(MainTable.table, objRow);







