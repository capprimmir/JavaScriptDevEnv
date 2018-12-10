import 'whatwg-fetch';

export function getUsers(){
  return get('users');
}

function get (url){
  return fetch(url).then(onSuccess, onError);
}

function onSucess(response){
  return Response.json()
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}


