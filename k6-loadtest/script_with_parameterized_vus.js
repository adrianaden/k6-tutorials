import http from 'k6/http';
import {SharedArray} from 'k6/data';

const data = new SharedArray('some data name', function () {
  return JSON.parse(open('.resources/demo/data/users_bulk.json')).users;
});

export const options = {
  vus: data.length,
  duration: '30s',
};

export default function () {
  const params = {
    headers: {
      'user': data[__VU - 1],
    },
  };
  const payload = {}

  http.post('http://localhost:8888/api/count/parameterized', payload, params);
}