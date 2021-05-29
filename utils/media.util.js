import axios from "axios";

export const sendImageToApi = ({ base64 }) => {
  console.log('🚀 ~ process.env.MEDIA_API_URI', process.env.MEDIA_API_URI);
  return axios.post(
    process.env.MEDIA_API_URI,
    { file: base64 },
    {
      // headers: {
      //   'x-api-key': process.env.REACT_APP_API_KEY,
      // }
    },
  ).then(resp => resp.data);
};

export const getBase64 = (file) => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => {
          resolve(reader.result);
      };
      reader.onerror = (error) => {
          reject(error);
      };
  });
  return promise;
};