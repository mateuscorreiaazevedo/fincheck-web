export class DateHelper {
  static formatDdMmYyyy(date: string) {
    const transformedDate = new Date(date);

    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(transformedDate);
  }
}
