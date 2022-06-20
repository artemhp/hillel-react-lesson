export default function getListWithFetch(url, route, method, data = '') {
  if (method === 'GET') {
    return fetch(url + '/' + route)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
  if (method === 'PATCH') {
    return fetch(url + '/' + route, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
