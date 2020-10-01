const GRAPHQL_SERVER = 'http://localhost:9000'

async function fetchGreeting(){
    const response = await fetch(GRAPHQL_SERVER, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({query:`
                query{
                    greeting
                }
            `})
    });

    const {data} = await response.json();
    console.log(data)
    return data;
}

fetchGreeting().then(({greeting}) => {
    document.querySelector('h1').textContent = greeting
});