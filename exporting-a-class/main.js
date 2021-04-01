const Logger = require('./logger');

const dbLogger = new Logger('DB');
dbLogger.info('This is an informative message');
dbLogger.log('This is a logger message');
dbLogger.verbose('hello world, this is a verbose message');
