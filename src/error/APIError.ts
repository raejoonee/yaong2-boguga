import TypeError from './TypeError';

export default class ApiError extends TypeError {
  constructor(
    message: string,
    protected type: string,
    protected status: number,
  ) {
    super(message, type);
  }
}
