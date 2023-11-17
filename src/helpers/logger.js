require('dotenv').config()
const winston = require('winston')
const moment = require('moment-timezone')

const { format } = require('winston')
const { combine, timestamp, label, printf } = format

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const timeZone = process.env.LOGGER_TIMEZONE
  ? process.env.LOGGER_TIMEZONE
  : 'Asia/Taipei'

var options = {
  file: {
    level: process.env.LOGGER_LEVEL,
    filename: `./logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: process.env.LOGGER_FILESIZE,
    maxFiles: process.env.LOGGER_MAXFILES,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}

const customTimestamp = format((info, opts) => {
  if (opts.tz) info.timestamp = moment().tz(opts.tz).format()
  return info
})

var logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
  format: combine(
    label({ label: process.env.LOGGER_LABEL }),
    customTimestamp({ tz: timeZone }),
    logFormat
  ),
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  },
}

module.exports = logger
