'use strict';

const dotEaten = new CustomEvent("onDot", {
   detail: {},
   bubbles: true,
   cancelable: true,
   composed: false,
 });

const pelletEaten = new CustomEvent("onPellet", {
   detail: {},
   bubbles: true,
   cancelable: true,
   composed: false,
 });

