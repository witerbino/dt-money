export class Utils {

  public static numberFormat(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  public static dateFormat(data: string): string {
    return new Intl.DateTimeFormat('pt-BR')
      .format(new Date(data));
  }

}