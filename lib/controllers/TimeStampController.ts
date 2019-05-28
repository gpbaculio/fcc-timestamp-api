import { Request, Response } from 'express';

export default class TodoController {
  public convertDate = async (req: Request, res: Response) => {
    const { date_string } = req.params;
    const date = new Date(Number(date_string));
    if (isNaN(date.getTime())) {
      res.json({ error: 'invalid Date' });
    } else {
      console.log('valid! ', date.getTime());
    }
    res.json(`${date_string} ok love you she! hihi`);
  };
}
