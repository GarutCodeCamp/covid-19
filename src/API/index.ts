const endpoint: string = 'https://covid19.mathdro.id/';

const getDataApi = () => fetch(`${endpoint}api`).then((res) => res.json());
const getConfirmate = () => fetch(`${endpoint}api/confirmed`).then((res) => res.json());

export { getDataApi, getConfirmate };
