const GRAPHQL_SERVER = 'http://localhost:4000'
funciton fetchData(){
fetch(GRAPHQL_SERVER, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    
  })
})
}

fetchData()