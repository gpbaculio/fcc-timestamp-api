import { Request, Response } from 'express';

export default class TodoController {
  public toggleCompleteTodos = async (req: Request, res: Response) => {
    const { todoIds, userId, complete } = req.body;
    try {
      await Todo.updateMany(
        { _id: { $in: todoIds }, userId },
        { $set: { complete } },
        async () => {
          const todos = await Todo.find({
            _id: { $in: todoIds },
            userId
          }).populate('userId', '_id');
          res.json({ todos });
        }
      );
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
