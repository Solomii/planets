export const getAllData = () =>
  fetch(
    " https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,neq,false "
  );

export const getAllPlanets = () =>
  fetch(
    " https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,false"
  );

// https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true -планети
// https://api.le-systeme-solaire.net/rest/bodies/
// https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,false -не планети
