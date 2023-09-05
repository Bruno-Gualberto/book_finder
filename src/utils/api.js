import axios from 'axios';

export const searchBooks = async query => {
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    }
  });

  return response.data;
}