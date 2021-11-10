/*function getActiveUser(name){
    return {
        uid: "4233245",
        username: name
    }
};*/

const getActiveUser = (name) => (
    {
        uid: "4233245",
        username: name
    });

let user = getActiveUser("William");

console.log( user )