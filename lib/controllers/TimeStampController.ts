import { Request, Response } from 'express';

export default class TodoController {
  public convertDate = async (req: Request, res: Response) => {
    const { date_string } = req.params;
    res.json('ok love you she! hihi');
  };
}
