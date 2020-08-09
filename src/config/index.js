const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : ' https://aluraflix-anderson.herokuapp.com';

export default URL;
