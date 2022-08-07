import axios from "axios";

export default class FruitsController {
  getAll = async (req, res) => {
    try {
      const { data } = await axios.get("https://www.fruityvice.com/api/fruit/all");
      return res.json(data).status(200);
    } catch (error) {
      console.log(error);
      return res
        .json({ message: error.message })
        .status(error.status);
    }
  };
};
