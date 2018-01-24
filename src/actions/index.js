export const FETCH_POSTS = 'fetch_posts';
import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123599p';

export function fetchPosts() {

  const request = axios.get(`${URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}