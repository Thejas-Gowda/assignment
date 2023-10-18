import axios from "axios";
const BASE_URL = "http://68.178.162.203:8080/application-test-v1.1/books";
export class BookAPI {
  static async create(formValues) {
    console.log(formValues, "api");
    try {
      return (await axios.post(`${BASE_URL}`, formValues)).data;
    } catch (error) {
      console.log(error.message);
    }
  }
  static async fetchAll(page, DIR = "ASC") {
    console.log(page, DIR, "pages");
    return (
      await axios.get(`${BASE_URL}`, {
        params: { page: page ? page : 1, DIR: DIR ? DIR : "ASC" },
      })
    ).data;
  }

  static async updateById(id, values) {
    try {
      return (await axios.put(`${BASE_URL}/${id}`, values)).data;
    } catch (error) {
      console.log(error.message);
    }
  }
  static async fetchById(bookId) {
    return (await axios.get(`${BASE_URL}/${bookId}`)).data;
  }
}
