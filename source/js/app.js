import * as $ from 'jquery';
import * as Backbone from 'backbone';
import contents from './contents';

//var $ = require('jquery');
require('../../style.css');
document.write(contents);
console.log('jQuery v.' + $.fn.jquery);
console.log('Backbone v.' + Backbone.VERSION);
