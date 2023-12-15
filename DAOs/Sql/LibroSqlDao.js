import {Libro} from "../../Models/index.js";

class libroSqlDao {
  constructor() {

  }
  createDao = async (data) => {
    try {
      const newLibro = await Libro.create(data)
      return newLibro;
    } catch (error) {
      return error;
    }
  };
  getAllDao = async () => {
    try {
      const libro = await Libro.findAll()
      return libro
    } catch (error) {
      return error;
    }
  };
  deleteDao = async({codigo}) => {
    try {
      const user = await Libro.destroy({
        where: { codigo },
      });
    } catch (error) {
      return error
    }
  }
}

export default libroSqlDao
