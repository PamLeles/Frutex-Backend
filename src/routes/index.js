import { Router } from "express";
import axios from 'axios';
import FruitsController from "../controllers/fruitsController.js";

const fruitsController  = new FruitsController();

const appRoutes = Router();

appRoutes.get('/fruits', fruitsController.getAll);

export default appRoutes;