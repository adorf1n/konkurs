import ky from 'ky';

const url = ky.create({ prefixUrl: import.meta.env.VITE_MSSQL_API });

export const createUser = async (data) => {
  return await url.post('users/signup', { json: data }).json();
};

export const loginUser = async (data) => {
  return await url.post('users/signin', { json: data }).json();
};

export const getUsers = () => {
  return url.get('users').json();
};

export const getAnswers = async (UserID) => {
  return await url.get(`answers/${UserID}`).json();
};

export const addAnswer = async (data) => {
  await url.post('answers/add', { json: data }).json();
};
