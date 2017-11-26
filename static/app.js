'use strict';
// APP
function app() {
  var navbarItems$ = selectFirstWithClassName('navbar__items'),
    navbarToggler$ = selectFirstWithClassName('navbar__toggler');

  navbarToggler$
    .on('click', function () {
      navbarItems$.toggleClass('navbar__items--open');
    });
}
// HELPER FUNCTIONS.
/**
 * Calls a function when the DOM is ready.
 * @param {function} fn Function to call when the DOM is ready.
 */
function ready(fn) {
  var state = document.attachEvent
    ? document.readyState === "complete"
    : document.readyState !== "loading"
  if (state) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
/**
 * Adds a className to an element.
 * @param {DOM element} element   DOM element to apply the new class.
 * @param {string}      className Class name to apply.
 */
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
}
/**
 * Checks an element to see if it has a given class name applied.
 * @param  {DOM element} element   Dom element to check.
 * @param  {string}      className Class name to check.
 * @return {boolean} Wether the element has the class or not.
 */
function hasClass(element, className) {
  if (element.classList)
    return element.classList.contains(className);
  else
    return new RegExp(
      '(^| )' +
      className +
      '( |$)'
      , 'gi').test(el.className);
}
/**
 * Toggles a class name from an element.
 * @param {DOM element} element   Dom element to toggle a class.
 * @param {string}      className Class name to toggle.
 */
function toggleClass(element, className) {
  if (hasClass(element, className))
    removeClass(element, className);
  else
    addClass(element, className);
}
/**
 * Adds an event listener on the element.
 * @param {DOM element} element Event listener target.
 * @param {string}      event   DOM event name.
 * @param {function}    handler Callback to be called on event trigger.
 */
function on(element, event, handler) {
  element.addEventListener(event, handler);
}
/**
 * Removes an event listener from an element.
 * @param {DOM element} element Event listener target.
 * @param {string}      event   DOM event name.
 * @param {function}    handler Callback to be called on event trigger.
 */
function off(element, event, handler) {
  element.removeEventListener(event, handler);
}
/**
 * Removes a class from an element.
 * @param {DOM Element} element   DOM element to remove the class.
 * @param {string}      className Class name to remove from element.
 */
function removeClass(element, className) {
  if (element.classList)
    element.classList.remove(className);
  else {
    var regExp = new RegExp(
      '(^|\\b)' +
      className.split(' ').join('|') +
      '(\\b|$)', 'gi'
    );
    element.className = element.className.replace(regExp, ' ');
  }
}
/**
 * Creates a selection element to interact with the element.
 * @param  {DOM element} element Element to wrap actions around.
 * @return {object} Selection object.
 */
function selection(element) {
  return {
    addClass: function (className) {
      addClass(element, className);
      return this;
    },
    removeClass: function (className) {
      removeClass(element, className);
      return this;
    },
    toggleClass: function (className) {
      toggleClass(element, className);
      return this;
    },
    on: function (event, handler) {
      this.listeners || (this.listeners = {});
      this.listeners[event] = handler;
      on(element, event, this.listeners[event]);
      return this;
    },
    off: function (event, handler) {
      this.listeners || (this.listeners = {});
      handler || (handler = this.listeners[event]);
      off(element, event, handler);
      return this;
    },
    element: element
  }
}
/**
 * Returns the first selection element with the provided class name.
 * @param {string}  className Name of the class applied to a DOM element.
 * @return {object} Selection object.
 */
function selectFirstWithClassName(className) {
  var element = document.getElementsByClassName(className)[0];

  return selection(element);
}
// ---
ready(app);
