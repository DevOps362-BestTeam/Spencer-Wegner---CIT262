import fetch from 'node-fetch';

it ("Should get a login", async ()=>{ // async allows us to read from the database by moving on and coming back.

    const loginResponse = await fetch('https://dev.stedi.me/login', { // await fetch allows it to move on while getting the data
    
        method: 'POST', // method: POST gives information to the server
        headers:{
            'Content-Type': 'application/text'
        },

        body:JSON.stringify({ // makes the following into JSON text to be read by the server
            "userName": "spencer@byui.edu",
            "password": "Wow!123"
        })
    })
    expect(loginResponse.status).toBe(200); // 200 is the value when authorized.
})
