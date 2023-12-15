import LibroSqlDao from "./Sql/LibroSqlDao.js";

class Factory {
  constructor() {}

  static factory = (MODE) => {  //el mode indica donde esta la persistencia (memoria, mongo o sql)
    if (MODE === "sql") {
      return {
        libroDao: new LibroSqlDao(),
      };
    }
  };
}

export default Factory;
