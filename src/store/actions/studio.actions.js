import { studioService } from "../../services/studio/studio.service.local";
import {
  SET_STUDIOS,
  REMOVE_STUDIO,
  SET_STUDIO,
  ADD_STUDIO,
  UPDATE_STUDIO,
} from "../reducers/studio.reducer";
import { store } from "../store";

export const studioActions = {
  loadStudios,
  loadStudio,
  removeStudio,
  saveStudio,
};

async function loadStudios() {
  try {
    const studios = await studioService.query();
    store.dispatch({ type: SET_STUDIOS, studios });
  } catch (err) {
    console.log("Issues loading Studios", err);
    throw err;
  }
}
async function loadStudio(studioId) {
  try {
    const studio = await studioService.getById(studioId);
    store.dispatch({ type: SET_STUDIO, studio });
  } catch (err) {
    console.log("Had issues loading this Studio", err);
    throw err;
  }
}
async function removeStudio(studioId) {
  try {
    await studioService.remove(studioId);
    store.dispatch({ type: REMOVE_STUDIO, studioId });
  } catch (err) {
    console.log("Issues loading Studios", err);
    throw err;
  }
}

async function saveStudio(studio) {
  try {
    const type = studio._id ? UPDATE_STUDIO : ADD_STUDIO;
    const saveStudio = await studioService.save(board);
    store.dispatch({ type, studio: saveStudio });
    return savedBoard;
  } catch (err) {
    console.log("Had issues loading boards", err);
    throw err;
  }
}
