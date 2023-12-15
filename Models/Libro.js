import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

Libro.init(
  {
    codigo: {
      type: DataTypes.STRING, //alfanumerico
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('disponible', 'alquilado', 'no-apto'),
      defaultValue: 'disponible',
    },
  },
  {
    sequelize: connection,
    modelName: "Libro",
  }
);

export default Libro;
