const baseURL = "http://localhost:5000/";

export const getFootprints = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postFootprint = (booking) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

export const deleteFootprint = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
