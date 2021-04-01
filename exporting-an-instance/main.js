const logger = require('./logger');

logger.log('This is an informational message.');
logger.log('This is other message.');

const customLogger = new logger.constructor('CUSTOM');
customLogger.log('This is a custom logger.');
