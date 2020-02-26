
let getUsers = new XMLHttpRequest();
getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
getUsers.addEventListener('load', function () {
    if (this.readyState == 4 && this.status == 200) {
        users = JSON.parse(this.responseText);
    }
    //console.log('GET all ', users)

    var i;
    for (i = 0; i < users.length; i++) {
        //console.log('GET email ', users[i].email)
    }

    var i;
    for (i = 0; i < users.length; i++) {
        //console.log('GET suite ', users[i].address.suite)
    }

});
getUsers.send();

///////////////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        // NEW USABLE ARRAYS FOR LOGIN!!!!!!!!!!!!!!!!!!!! 
        var i = 0;
        var userEmail = []
        data.forEach(element => {
            userEmail.push(data[i++].email)
        });
        console.table(userEmail)

        var i = 0
        var userPassword = []
        data.forEach(element => {
            userPassword.push(data[i++].address.suite)
        })
        console.table(userPassword)

        //console.table('Fetch all ', data)

        var i;
        for (i = 0; i < data.length; i++) {
            //console.log('Fetch email ', data[i].email)
        }

        var i;
        for (i = 0; i < data.length; i++) {
            //console.log('Fetch suite ', data[i].address.suite)
        }
    });
