import { storageService } from "../async-storage.service";
import { utilService, STORAGE_KEY_USER } from "../util.service";

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveSessionUser,
  getUsers,
  getById,
  remove,
  update,
  getEmptyUser,
};

function getUsers() {
  return storageService.query(STORAGE_KEY_USER);
}

async function getById(userId) {
  const user = await storageService.get(STORAGE_KEY_USER, userId);
  return user;
}

function remove(userId) {
  return storageService.remove(STORAGE_KEY_USER, userId);
}

async function update(userToUpdate) {
  const user = await getById(userToUpdate.id);
  console.log("user", user);

  const updatedUser = await storageService.put(STORAGE_KEY_USER, {
    ...user,
    ...userToUpdate,
  });
  if (getLoggedinUser().id === updatedUser.id) saveLocalUser(updatedUser);
  return updatedUser;
}

async function login(userCred) {
  const users = await storageService.query(STORAGE_KEY_USER);
  const user = users.find((user) => user.username === userCred.username);
  if (user) {
    return saveLocalUser(user);
  } else {
    throw "Invalid user name";
  }
}

async function signup(userCred) {
  const fullnameTitled = utilService.toTitleCase(userCred.fullname);
  userCred.fullname = fullnameTitled;
  const user = await storageService.post("users", userCred);
  return saveLocalUser(user);
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}

function getEmptyUser() {
  return {
    username: "",
    fullname: "",
    email: "",
    password: "",
    //   profileImg: '',
  };
}

function saveSessionUser(user) {
  user = {
    id: user._id,
    fullname: user.fullname,
    username: user.username,
    profileImg: user.profileImg,
    email: user.email,
  };
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}
