import {
  STORAGE_KEY_STUDIO,
  STORAGE_KEY_USER,
  saveToStorage,
  loadFromStorage,
  utilService,
} from "./util.service.js";

// WHEN WORKING LOCALLY Initiates Data in local storage / when no Data is stored it creates data.
// The file is independant, it means it has to be called from some enty-level comp like main.jsx so the Function call will be triggered.
// Can be removed when working with DB

createDatabase();

function createDatabase() {
  _createUsers();
  _createStudios();
}

function _createUsers() {
  if (!loadFromStorage(STORAGE_KEY_USER)) {
    const users = [
      {
        _id: "u101",
        fullname: "Dan Yanuka",
        username: " danyanuka",
        email: "danyanuka@gmail.com",
        password: "dan123",
        profileImg:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      },
      {
        _id: "u102",
        fullname: "Lior Yanuka",
        username: " lioryanuka",
        email: "lioryanuka@gmail.com",
        password: "lior123",
        profileImg:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      },
      {
        _id: "u103",
        fullname: "Eli Yanuka",
        username: " eliyanuka",
        email: "eliyanuka@gmail.com",
        password: "eli123",
        profileImg:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      },
    ];
    saveToStorage(STORAGE_KEY_USER, users);
  }
}

function _createStudios() {
  if (!loadFromStorage(STORAGE_KEY_STUDIO)) {
    const studios = [
      {
        _id: "s1",
        title: "House-Tech-Jazz",
        description: "Need Sax for the Project.",
        previewAudio: "",
        members: [
          {
            _id: "u101",
            fullname: "Dan Yanuka",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
          {
            _id: "u103",
            fullname: "Eli Yanuka",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
        ],
        projectFolder: {},
      },
    ];
    saveToStorage(STORAGE_KEY_STUDIO, studios);
  }
}
