// import * as loggerModule from './logger.js';
// * syntax (also called namespace import)
// console.log(loggerModule);

import { log as log2, Logger } from './logger.js';

const log = console.log;

log('using console.log');
log2('Hello world.');

const logger = new Logger('DEFAULT');
logger.log('This is a default category');
