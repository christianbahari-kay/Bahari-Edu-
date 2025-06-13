import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post('http://localhost:5000/login', { email, password });
    return res.data;
  } catch (err) {
    
    if (err.response && err.response.data) {
      throw err.response.data;
    } else {
     
      throw new Error("Terjadi kesalahan saat menghubungi server.");
    }
  }
};
