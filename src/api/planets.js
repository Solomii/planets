export const getAllData = () =>
  fetch(
    "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false"
  );

export const getAllPlanets = () =>
  fetch(" https://api.le-systeme-solaire.net/rest/bodies/");

// https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,neq,false
// https://api.le-systeme-solaire.net/rest/bodies/
