const form = document.querySelector('form');
const tipLine = document.querySelector('#tip-line');
const tipBox = document.querySelector('.tip');
const each = document.querySelector('#each');
const alertBox = document.querySelector('.alert-container');
const alertBtn = document.querySelector('#ok');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.cost.value === "" || form.options.value === "none" || form.people.value === "") {
    alertBox.classList.remove('fade');
  }

  if (form.cost.value !== '' && form.options.value !== 'none' && form.people.value !== '') {
    const costVal = Number(form.cost.value);
    const optionVal = form.options.value;
    const peopleVal = Number(form.people.value);
    const tip = ((costVal + (costVal * optionVal / 100)) / peopleVal).toFixed(2);
    tipLine.textContent = `€${tip}`;
    tipBox.classList.remove('fade');
    if (peopleVal === 1) {
      each.classList.add('fade');
    } else {
      each.classList.remove('fade');
    }
  }
});

alertBtn.addEventListener('click', () => {
  alertBox.classList.add('fade');
});

window.addEventListener('click', (e) => {
  if (e.target.className === 'alert-container') {
    alertBox.classList.add('fade');
  }
})