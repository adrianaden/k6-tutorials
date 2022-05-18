import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 200,
      maxVUs: 400,
    },
  }
};

export default function () {
  http.post('http://localhost:8888/api/count/delay');
  sleep(1);
}