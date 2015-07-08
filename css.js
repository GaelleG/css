/* 
 * CSS CLASS FUNCTIONS
 * 
 * To use on one or several elements
 */

exports.addClass = function (el, name) {
  if (typeof el !== 'object') { return; }
  if (el === null) { return; }
  if (typeof name !== 'string') { return; }
  if (name === null) { return; }

  var i = 0;
  var l = 0;

  if (typeof el.className !== 'undefined') {
    if (el.className.indexOf(name) === -1) {
      el.className = el.className + ' ' + name;
    }
  } else if (el[0] && el[0].className) {
    for (i = 0, l = el.length; i < l; i++) {
      this.addClass(el[i], name);
    }
  }
};

exports.removeClass = function (el, name) {
  if (typeof el !== 'object') { return; }
  if (el === null) { return; }
  if (typeof name !== 'string') { return; }
  if (name === null) { return; }

  var i = 0;
  var l = 0;

  if (typeof el.className !== 'undefined') {
    el.className = el.className.replace(name, '');
  } else if (el[0] && el[0].className) {
    for (i = 0, l = el.length; i < l; i++) {
      this.removeClass(el[i], name);
    }
  }
};

exports.toggleClass = function (el, name) {
  if (typeof el !== 'object') { return; }
  if (el === null) { return; }
  if (typeof name !== 'string') { return; }
  if (name === null) { return; }

  var i = 0;
  var l = 0;

  if (typeof el.className !== 'undefined') {
    if (el.className.indexOf(name) === -1) {
      this.addClass(el, name);
    } else {
      this.removeClass(el, name);
    }
  } else if (el[0] && el[0].className) {
    for (i = 0, l = el.length; i < l; i++) {
      this.toggleClass(el[i], name);
    }
  }
};

exports.hasClass = function (el, name) {
  if (typeof el !== 'object') { return; }
  if (el === null) { return; }
  if (typeof name !== 'string') { return; }
  if (name === null) { return; }

  var i = 0;
  var l = 0;
  var hasClass = true;

  if (typeof el.className !== 'undefined') {
    hasClass = (el.className.indexOf(name) > -1);
  } else if (el[0] && el[0].className) {
    for (i = 0, l = el.length; i < l; i++) {
      hasClass = (el[i].className.indexOf(name) > -1);
      if (!hasClass) {
        break;
      }
    }
  }

  return hasClass;
};