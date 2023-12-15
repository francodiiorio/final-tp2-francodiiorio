import Factory from "../DAOs/Factory.js";
import { MODE } from "../config/config.js";
class Api {
  constructor() {
    this.factory = Factory.factory(MODE);
  }
  create = async (data) => {
    try {
      // vallidar la palabra
      const info = await this.factory.libroDao.createDao(data);
      return info;
    } catch (error) {
      return error;
    }
  };
  getAll = async () => {
    try {
      const info= await this.factory.libroDao.getAllDao();
      return info;
    } catch (error) {
      return error;
    }
  };
  delete = async ({codigo}) => {
    try {
      const info= await this.factory.libroDao.deleteDao({codigo});
      return info;
    } catch (error) {
      return error;
    }
  }
}

export default Api;
