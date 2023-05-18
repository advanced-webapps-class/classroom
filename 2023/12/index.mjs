/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
// const log = require('./console.mjs');
import prettyBytes from 'pretty-bytes';
import { log } from './console.mjs';

log('12/index.js');
log(prettyBytes(100000));
