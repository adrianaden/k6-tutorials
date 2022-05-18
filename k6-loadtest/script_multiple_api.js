import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};


export default function () {
  http.get('http://localhost:8888/api/count');
  http.post('http://localhost:8888/api/count/delay');
  sleep(1);
}
