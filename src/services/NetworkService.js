import { create } from 'apisauce';
import endpoints from '../constants/endpoints';

const api = create({
  baseURL: endpoints.host,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  timeout: 30000,
});

class NetworkService {
  static setTokenInHeader = token => api.setHeader('Authorization', `Bearer ${token}`);

  static signUp = (firstName, lastName, password) =>
    api.post(endpoints.user, {
      firstName,
      lastName,
      password,
    });

  static updateUser = (userId, updatableFields) =>
    api.patch(`${endpoints.user}/${userId}`, {
      ...updatableFields,
    });

  static sendUserCoremetrixId = (userId, puid) =>
    api.post(`${endpoints.coremetrix}`, {
      userId,
      puid,
    });
}

export default NetworkService;
