var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVlNDkwNDFiYzM0NTRmOThiMzQ5YWUwMjA4MDhkZiIsInVzZXJuYW1lIjoicmVuZSIsImRldmljZUlkIjoiMTIzMTIzMTIzMTI0MTIzIiwiaWF0IjoxNzAwMDY4NDg2LCJleHAiOjE3MDAwNzIwODZ9.tLXiWQX2aTHvRTViRct5nXkwAcT0vl_FJit5xDz1nxU");

var requestOptions = { 
  headers: myHeaders,
  redirect: 'follow'
};

const Request = {
  async GET() {
    requestOptions.method='GET'
    return await call(requestOptions)
  },
  POST() {
    requestOptions.method='POST'
  },
  DELETE() {
    requestOptions.method='DELETE'
  },
  PUT() {
    requestOptions.method='PUT'
  }
}

async function call(options) {
  try {
    const response = await fetch("https://secure.riceup.store/ers/api/v1/products/", requestOptions);
    console.log(response)
    const result = JSON.parse(response);
    return result;
  } catch (error) {
    return console.log('error', error);
  }
}



export default Request;

