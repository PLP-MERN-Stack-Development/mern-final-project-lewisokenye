import Bug from "../models/Bug.js";
import { validateBugData } from "../utils/validateBug.js";

export const createBug = async (req, res, next) => {
  try {
    if (!validateBugData(req.body))
      return res.status(400).json({ message: "Invalid bug data" });
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

export const updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

export const deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json({ message: "Bug deleted" });
  } catch (error) {
    next(error);
  }
};
