import './style.css';

import ListItems from './ListItems';
import Display from './displayTemplate';
import ListItem from './ListItem';

const form = document.querySelector('.form') as HTMLFormElement;
form.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  const content = document.getElementById('form-input') as HTMLInputElement;
  const { value } = content;
  const cleanValue = value.trim();
  if (!cleanValue) return;
  const tempId = new Date().getTime().toString();
  ListItems.instance.addItem(new ListItem(tempId, cleanValue));
  Display.instance.render(ListItems.instance);
  return;
});
const launchApp = () => {
  ListItems.instance.load();
  Display.instance.render(ListItems.instance);
};

document.addEventListener('DOMContentLoaded', launchApp);
