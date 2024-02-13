import { studioService } from "../../services/studio/studio.service.local";

async function loadStudios() {
  try {
    const studios = await studioService.query();
  } catch (error) {}
}
