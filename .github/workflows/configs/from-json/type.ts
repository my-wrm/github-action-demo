export interface IConfig {
  web: {
    name: string;
    ip: string;
  }[];
  db: {
    dbserver: string;
    ip: string;
  }[];
}
