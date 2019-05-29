import { Request, Response } from 'express';

export default class TimeStampController {
  public convertDate = async (req: Request, res: Response) => {
    const { date_string }: { date_string?: string } = req.params;
    let date = new Date(Number(date_string));
    if (date_string.includes('-')) {
      date = new Date(date_string);
    }
    if (typeof date_string === 'undefined') {
      date = new Date(Date.now());
      res.json({ unix: date.getTime(), utc: date.toUTCString() });
    } else if (date_string && isNaN(date.getTime())) {
      res.json({ error: 'invalid Date' });
    } else {
      res.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
  };
}
