import http from 'k6/http';
import {sleep} from 'k6';

const env = __ENV.ENV || 'demo'
const properties = JSON.parse(open(`./resources/${env}/properties.json`));

export const options = {
  vus: properties.vus,
  duration: '30s',
};

export default function () {
  console.log(properties.text)
  http.post('http://localhost:8888/api/count');
  sleep(1);
}