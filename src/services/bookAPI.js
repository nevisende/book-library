import axios from 'axios';

const API_ID = '9NvknRogPKU473d3i4gw';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}`;
const END_POINT = 'books';

const BookClient = axios.create({
  baseURL: BASE_URL,
});

export default class BookAPI {
  constructor() {
    this.bookList = [];
    this.bookListKeys = [];
  }

  async getRequest() {
    const res = await BookClient.get(`/${END_POINT}`);
    this.bookList = res.data;
    const { data } = res;
    this.bookListKeys = Object.keys(data);
    this.bookListValues = Object.values(data).map((el) => el[0]);
    return data;
  }

  async getBookList() {
    await this.getRequest();
    const result = [];
    this.bookListKeys.forEach(async (key) => {
      result.push({
        item_id: key,
        title: this.bookList[key][0].title,
        category: this.bookList[key][0].category,
      });
    });
    return result;
  }

  async postBook(data) {
    const res = await BookClient.post(`/${END_POINT}`, data);
    this.bookList = res.data;
    return res.data;
  }

  async deleteBook(id) {
    const res = await BookClient.delete(`/${END_POINT}/${id}`);
    this.bookList = res.data;
    return res.data;
  }
}
