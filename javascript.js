const mon = document.querySelector('.mon');
const tue = document.querySelector('.tue');
const wed = document.querySelector('.wed');
const thu = document.querySelector('.thu');
const fri = document.querySelector('.fri');
const sat = document.querySelector('.sat');
const sun = document.querySelector('.sun');

let semana = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
let d = new Date();

if (semana[d.getDay()] == 'sunday') {
  sun.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'monday') {
  mon.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'tuesday') {
  tue.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'wednesday') {
  wed.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'thursday') {
  thu.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'friday') {
  fri.style.backgroundColor = 'hsl(186, 34%, 60%)';
}
if (semana[d.getDay()] == 'saturday') {
  sat.style.backgroundColor = 'hsl(186, 34%, 60%)';
}

function onFocusMon() {
  mon.style.opacity = '.7';
  mon.style.setProperty('--visib', 'visible');
}
function noFocusMon() {
  mon.style.opacity = '1';
  mon.style.setProperty('--visib', 'hidden');
}
mon.addEventListener('mouseover', onFocusMon);
mon.addEventListener('mouseout', noFocusMon);

function onFocusTue() {
  tue.style.opacity = '.7';
  tue.style.setProperty('--visib', 'visible');
}
function noFocusTue() {
  tue.style.opacity = '1';
  tue.style.setProperty('--visib', 'hidden');
}
tue.addEventListener('mouseover', onFocusTue);
tue.addEventListener('mouseout', noFocusTue);

function onFocusWed() {
  wed.style.opacity = '.7';
  wed.style.setProperty('--visib', 'visible');
}
function noFocusWed() {
  wed.style.opacity = '1';
  wed.style.setProperty('--visib', 'hidden');
}
wed.addEventListener('mouseover', onFocusWed);
wed.addEventListener('mouseout', noFocusWed);

function onFocusThu() {
  thu.style.opacity = '.7';
  thu.style.setProperty('--visib', 'visible');
}
function noFocusThu() {
  thu.style.opacity = '1';
  thu.style.setProperty('--visib', 'hidden');
}
thu.addEventListener('mouseover', onFocusThu);
thu.addEventListener('mouseout', noFocusThu);

function onFocusFri() {
  fri.style.opacity = '.7';
  fri.style.setProperty('--visib', 'visible');
}
function noFocusFri() {
  fri.style.opacity = '1';
  fri.style.setProperty('--visib', 'hidden');
}
fri.addEventListener('mouseover', onFocusFri);
fri.addEventListener('mouseout', noFocusFri);

function onFocusSat() {
  sat.style.opacity = '.7';
  sat.style.setProperty('--visib', 'visible');
}
function noFocusSat() {
  sat.style.opacity = '1';
  sat.style.setProperty('--visib', 'hidden');
}
sat.addEventListener('mouseover', onFocusSat);
sat.addEventListener('mouseout', noFocusSat);

function onFocusSun() {
  sun.style.opacity = '.7';
  sun.style.setProperty('--visib', 'visible');
}
function noFocusSun() {
  sun.style.opacity = '1';
  sun.style.setProperty('--visib', 'hidden');
}
sun.addEventListener('mouseover', onFocusSun);
sun.addEventListener('mouseout', noFocusSun);
