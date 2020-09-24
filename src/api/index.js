import axios from 'axios';

let baseUrl = 'http://localhost:3001';

const getData = () => {
	let url = `/users`;
	return axios.get(baseUrl + url);
}
const changeData = (newData) => {
	let url = `/change`;
	return axios.post(baseUrl + url, {obj: newData});
}


export { getData, changeData };