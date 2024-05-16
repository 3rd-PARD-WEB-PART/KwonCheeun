import axios from "axios";

export const getUserData = async() => {
  try {
    const response = await axios.get('http://localhost:3001/users');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const patchUserAPI = async(userId, userData) => {
  try {
    const response = await axios.patch(`http://localhost:3001/users/${userId}`, userData);
    return response.data;
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
} ;