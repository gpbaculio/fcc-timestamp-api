import TimeStampController from '../controllers/TimeStampController';

export default class TimeStampRoutes {
  public timeStampController: TimeStampController = new TimeStampController();
  public routes(app): void {
    app
      .route('/api/timestamp/:date_string?')
      .get(this.timeStampController.convertDate);
  }
}
