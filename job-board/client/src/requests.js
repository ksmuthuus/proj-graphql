const SERVER = 'http://localhost:9000/graphql'

async function requestGraphQL(query, variables={}){
    const response = await fetch(SERVER, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({query, variables})
    });
    const responseJson = await response.json();
    if(responseJson.errors){
        const message = responseJson.errors.map((item) => item.message).join("\n");
        throw new Error(message)
    }
    return responseJson.data;
}

export async function loadJobs(){
    const query = `{
        jobs{
        id,
        title,
        company{
            id,
            name
        }
        }
    }`;
    const {jobs} = await requestGraphQL(query);
    return jobs;
}

export async function loadJob(id){
    const query = `query JobQuery($id: ID!) {
        job(id: $id){
          id,
          title,
          description,
          company{
              id,
              name
          }
        }
      }`
    const {job} = await requestGraphQL(query, {id});
    return job;
}

export async function loadCompany(id){
const query = `query CompanyQuery($id: ID!) {
                company(id: $id){
                    id,
                    name,
                    description,
                    jobs{
                        id,
                        title,
                        description
                    }
                }}`;
const {company} = await requestGraphQL(query, {id});
return company
}
