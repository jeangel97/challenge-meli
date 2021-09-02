// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { API_MELI_SEARCH } from '../../config';
import { itemsMapped, author, getCategories } from './helpers';

export default async function handlerSearch(req, res) {
  try {
    const query = req.query.q;
    const responseApi = await axios.get(`${API_MELI_SEARCH}?q="${query}"&limit=4`);
    const items = itemsMapped(responseApi.data.results);
    const categories = getCategories(responseApi.data.filters);
    const response = {
      author,
      categories,
      items,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
