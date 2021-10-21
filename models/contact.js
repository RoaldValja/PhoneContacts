const fs = require('fs');
const path = require('path');

//path to the task.json
const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'contact.json');

module.exports = class Task {

    constructor(name, number){
        this.name = name;
        this.number = number;
    }

    saveContact(){
        fs.readFile(pathToFile, (error, fileContent) => {
            let contacts = [];

            if(!error){
                contacts = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            contacts.push(this);

            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
                console.log('Error', error);
            });
            
        })
    }

    static fetchContacts(callBack){
        fs.readFile(pathToFile, (error, fileContent) => {
            if(error){
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

    static deleteContact(name, number){
        // get data from the json file
        fs.readFile(pathToFile, (error, fileContent) => {
            let contacts = [];
            if(!error){
                contacts = JSON.parse(fileContent);
            }
        // delete an item from the tasks arrays
            for(let i = 0; i < contacts.length; i++){
                if(contacts[i].name === name && contacts[i].number === number){
                    //delete an element from the array
                    contacts.splice(i, 1);
                    break;
                }
            }
            
            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
                console.log('Error', error);
            });
            
        });
    }
}