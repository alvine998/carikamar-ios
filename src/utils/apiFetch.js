export async function filterFetch(url, options) {
  return await fetch(url, options)
    .then((respone) => {
      if (respone.status == 500) {
        throw new Error('Error Internal Server');
      } else {
        return respone.json();
      }
    })
    .then((json) => {
      if (json.response == 401) {
        throw new Error(JSON.stringify(json));
      } 
      // else if (json.response != 200) {
      //   throw new Error(json.message || 'Error API fetch data');
      // }
      return json;
    });
}

export async function filterFetchTest(url, options) {
  return await fetch(url, options)
    .then((respone) => {
      if (respone.status == 500) {
        throw new Error('Error Internal Server');
      } else {
        return respone.json();
      }
    })
    .then((json) => {
      if (json.response == 401) {
        // throw new Error(JSON.stringify(json));
      } 
      else if (json.response != 200) {
        throw new Error(json.message || 'Error API fetch data');
      }
      return json.result;
    });
}