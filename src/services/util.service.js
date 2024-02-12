export const utilService = {
  saveToStorage,
  loadFromStorage,
};

// Local DB Keys &  Load/Save funcs
export const STORAGE_KEY_STUDIO = "studio";
export const STORAGE_KEY_USER = "user";

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}
// __________________________________________________
