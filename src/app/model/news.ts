export class News {
  constructor(
    public id: number = 0,
    public title = '',
    public description = '',
    public summary = '',
    public images?: string[]
  ) {}
}
