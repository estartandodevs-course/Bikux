const baseUrl = "https://us-central1-bikux-f3be2.cloudfunctions.net/";

async function getApiData(route) {
  const response = await fetch(`${baseUrl}${route}`);
  const responseJson = await response.json();

  return responseJson;
}

async function createDataApi(route, data) {
  const response = await fetch(`${baseUrl}${route}`, {
    method: "post",
    body: data,
  });
  const responseJson = await response.json();

  return responseJson;
}

export { getApiData, createDataApi };
