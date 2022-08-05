export default function setDate() {
  // Select els
  const number_day = document.querySelector('[data-date-number-day]'),
    mounth = document.querySelector('[data-date-mounth]'),
    year = document.querySelector('[data-date-year]'),
    day = document.querySelector('[data-date-day]');

  // Get date
  const date = new Date();

  // Set date values at els
  number_day.textContent = date.getDate();
  mounth.textContent = date.toString().slice(date.toString().indexOf(' ')).slice(0, date.toString().indexOf(' ') + 1).trim();
  year.textContent = date.getFullYear();
  day.textContent = date.toString().slice(0, date.toString().indexOf(' '));
}