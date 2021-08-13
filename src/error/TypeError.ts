export default class TypeError extends Error {
  constructor(message: string, protected type: string) {
    super(message);
  }
}
