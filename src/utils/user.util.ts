import localStore from "./localstore.util";

// Define interface shapes for better type safety
interface UserInfo {
  name?: string;
  email?: string;
  [key: string]: any;
}

interface AdminInfo {
  name?: string;
  role?: string;
  [key: string]: any;
}

interface PatientInfo {
  id?: string;
  name?: string;
  [key: string]: any;
}

// User Info
export const setUserInfo = async (info: UserInfo): Promise<boolean> => {
  const _data = { ...info };
  await localStore.store_data("UserInfo", _data);
  return true;
};

export const getUserInfo = (): UserInfo | undefined => {
  return localStore.get_data("UserInfo");
};

export const getUserProfile = (): string | undefined => {
  return localStore.get_data("ProfilePicture");
};

export const removeUserInfo = (): boolean | void => {
  return localStore.remove_data("UserInfo");
};

// Admin Info
export const setAdminInfo = async (info: AdminInfo): Promise<boolean> => {
  const _data = { ...info };
  await localStore.store_data("Admininfo", _data);
  return true;
};

export const getAdminInfo = (): AdminInfo | undefined => {
  return localStore.get_data("Admininfo");
};

export const removeAdminInfo = (): boolean | void => {
  return localStore.remove_data("Admininfo");
};

// User Role (commented out in original)
// Uncomment and update if needed:
/*
export const setUserRole = async (info: { role: string }): Promise<boolean> => {
  const _data = { ...info };
  await localStore.store_data("userRole", _data);
  return true;
};

export const getUserRole = (): string | undefined => {
  const roleObj = localStore.get_data<{ role: string }>("userRole");
  return get(roleObj, "role");
};
*/

export const removeUserRole = (): boolean | void => {
  return localStore.remove_data("userRole");
};

// Patient Info
export const getPatientInfo = (): PatientInfo | undefined => {
  return localStore.get_data("patientInfo");
};
