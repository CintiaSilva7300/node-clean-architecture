export interface Encrypter {
  encript(value: string): Promise<string>;
}
