const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
  getDownloadURL,
} = require("firebase/storage");
const storage = require("../services/firebaseService");

const uploadFile = async (file) => {
  const date = new Date().getTime();
  let publicUrl;
  const imageRef = ref(storage, `images/${date}${file.originalname}`);
  const metaType = { contentType: file.mimetype, name: file.originalname };
  await uploadBytes(imageRef, file.buffer, metaType)
    .then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((downloadURL) => {
        publicUrl = downloadURL;
      });
    })
    .catch((error) => console.log(error.message));
  return publicUrl;
};
module.exports = uploadFile;
