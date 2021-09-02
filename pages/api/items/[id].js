import axios from 'axios';
import { API_MELI_ITEM } from '../../../config';
import { author, singleItemMap } from '../helpers';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const responseApiItem = await axios.get(`${API_MELI_ITEM + id}`);
    const responseApiDescription = await axios.get(`${API_MELI_ITEM + id}/description`);

    const item = singleItemMap(responseApiItem.data, responseApiDescription.data.plain_text);

    const response = {
      author,
      item,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
