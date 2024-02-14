import { STORAGE_KEY_STUDIO, utilService } from "../util.service.js";
import { storageService } from "../async-storage.service.js";

export const studioService = {
  query,
  getById,
  remove,
  save,
};

async function query(filterBy = {}) {
  const studios = await storageService.query(STORAGE_KEY_STUDIO);
  // if (filterBy.txt) {
  //   const regExp = new RegExp(filterBy.txt, "i");
  //   studios = studios.filter((studio) => regExp.test(studio.title));
  // }
  return studios;
}

function getById(studioId) {
  return storageService.get(STORAGE_KEY_STUDIO, studioId);
}

function remove(studioId) {
  return storageService.remove(STORAGE_KEY_STUDIO, studioId);
}

function save(studioToSave) {
  if (studioToSave._id) {
    return storageService.put(STORAGE_KEY_STUDIO, studioToSave);
  } else {
    const initStudio = _getEmptyStudio();
    const studio = { ...initStudio, ...studio };
    return storageService.post(STORAGE_KEY_STUDIO, studio);
  }
}

function _getEmptyStudio() {
  const studio = {
    _id: utilService.makeId(),
    title: "",
    description: "",
    previewAudio: "",
    members: [],
    projectFolder: {},
  };

  return studio;
}

function getDefaultFilter() {
  console.log("dummy getDefaultFilter");
}

function getFilterFromParams() {
  console.log("dummy getFilterFromParams");
}
