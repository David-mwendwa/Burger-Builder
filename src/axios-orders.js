import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-389de-default-rtdb.firebaseio.com/',
});

export default instance;
