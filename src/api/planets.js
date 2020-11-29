export const getAllData = () =>
  fetch(
    `https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,false`
  );

export const getAllPlanets = () =>
  fetch(
    `https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,neq,false`
  );

export const getPlanetDetails = (id) =>
  fetch(` https://api.le-systeme-solaire.net/rest/bodies/${id}`);
