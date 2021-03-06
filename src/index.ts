import Database from './Database';
import TicketBot from './Client';
import { loadConfig } from './util';

const config = loadConfig();

new TicketBot({
  ...config.clientConfig,
  db: new Database(config.dbConfig)
}).connect();
