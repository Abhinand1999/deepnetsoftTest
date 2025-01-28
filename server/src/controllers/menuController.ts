import { Request, Response } from "express";
import Menu from "../models/menu";
import { ObjectId } from 'mongodb';


export const createMenu = async (req: Request, res: Response) => {
  try {
    const { menuName, description } = req.body;
    const menu = new Menu({ menuName, description });
    await menu.save();
    res.status(201).json(menu);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};


export const getMenusbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const menus = await Menu.find({ _id: new ObjectId(id) });
    res.status(200).json(menus);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
