import { STORAGE_KEY_STUDIO } from "../util.service.js";
import { storageService } from "../async-storage.service.js";

export const studioService = {
  query,
  get,
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

function get(studioId) {
  return storageService.get(STORAGE_KEY_STUDIO, studioId);
}

function remove(studioId) {
  return storageService.remove(STORAGE_KEY_STUDIO, studioId);
}

function save(studio) {
  if (studio._id) {
    return storageService.put(STORAGE_KEY_STUDIO, studio);
  } else {
    return storageService.post(STORAGE_KEY_STUDIO, studio);
  }
}

// function save(boardToSave) {
//   if (boardToSave._id) {
//     return storageService.put(STORAGE_KEY_BOARDS, boardToSave);
//   } else {
//     const initBoard = _createBoard();
//     const board = { ...initBoard, ...boardToSave };
//     console.log(board);
//     return storageService.post(STORAGE_KEY_BOARDS, board);
//   }
// }
