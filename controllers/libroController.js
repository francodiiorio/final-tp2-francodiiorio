import Api from "../Api/Api.js";

class LibroController {
  constructor() {
    this.api= new Api()
  }

  create = async (req, res) => {
    try {
      const { codigo, titulo, autor } = req.body;
      if (!codigo || !titulo || !autor) throw new Error("Campos vacios");
      const info= await this.api.create({codigo, titulo, autor});
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAll = async (req, res) => {
    try {
      const info = await this.api.getAll();
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  delete = async(req, res) => {
    try {
      const { codigo } = req.params;
      if (!codigo) throw new Error("Campo vacio");
      const info = await this.api.delete({codigo});
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  }

}

export default LibroController;
