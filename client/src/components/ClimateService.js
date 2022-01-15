const baseURL = "http://localhost:5000/footprint/"; //Better name? 

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(baseURL).then((res) => res.json())) //Testing Promise-resolve to see if fixes async data load issue in components.
    },1500)
  })
};

export const postData = (booking) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

export const deleteData= (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
