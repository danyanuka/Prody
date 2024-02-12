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

function get(carId) {
  return storageService.get(CAR_KEY, carId);
}

function remove(carId) {
  return storageService.remove(CAR_KEY, carId);
}

function save(car) {
  if (car._id) {
    return storageService.put(CAR_KEY, car);
  } else {
    return storageService.post(CAR_KEY, car);
  }
}
