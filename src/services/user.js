import request from '../utils/request'
function fetch({ page, pageSize }) {
  return request(`/api/users?_page=${page}&_limit=${pageSize}`);
}

export default {
  fetch
}
