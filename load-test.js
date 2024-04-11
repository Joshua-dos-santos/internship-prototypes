import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1, // Number of virtual users
  duration: '20s', // Duration of the test
};

export default function () {
  const url = 'http://localhost:5100/websocket'; // Update with your actual URL

  // Wait for 2 seconds before making the request
  sleep(2);

  const response = http.get(url);
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  console.log(`Page loaded in ${response.timings.duration} ms`);

  sleep(1);
}
