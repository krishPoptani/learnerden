import localStore from "./localstore.util";

export const getToken = ():string => localStore.get_data("token");

export const setToken = (token:string) => localStore.store_data("token", token);

export const getAdminToken = ():string => localStore.get_data("Admintoken");

export const setAdminToken = (token:string) => localStore.store_data("Admintoken", token);

export const logoutT = () => {
  localStore.remove_data("token");
  return true;
};

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
};
