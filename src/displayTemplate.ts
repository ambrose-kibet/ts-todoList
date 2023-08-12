import ListItems from './ListItems';
interface DisplayItems {
  ul: HTMLUListElement;
  clear(): void;
  render(list: ListItems): void;
}

export default class Display implements DisplayItems {
  static instance: Display = new Display();
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.querySelector('.list-container') as HTMLUListElement;
  }
  clear(): void {
    this.ul.textContent = '';
  }
  render(list: ListItems): void {
    this.clear();
    list.taskList.forEach((task) => {
      const li = document.createElement('li') as HTMLLIElement;
      li.className = 'list-item';
      const checkbox = document.createElement('input') as HTMLInputElement;
      checkbox.type = 'checkbox';
      checkbox.name = 'input-item';
      checkbox.id = task.id;
      checkbox.checked = task.checked;
      li.append(checkbox);
      li.addEventListener('change', () => {
        ListItems.instance.taskList = ListItems.instance.taskList.map(
          (item) => {
            if (item.id === task.id) {
              return { ...item, checked: !item.checked };
            }
            return item;
          }
        );
        ListItems.instance.save();
      });
      const label = document.createElement('label') as HTMLLabelElement;
      label.htmlFor = task.id;
      label.className = 'input';
      label.textContent = task.task;
      li.append(label);
      const button = document.createElement('button') as HTMLButtonElement;
      button.type = 'button';
      button.className = 'button delete-btn';
      button.textContent = 'delete';
      li.append(button);
      button.addEventListener('click', () => {
        list.removeItem(task.id);
        this.render(list);
      });
      this.ul.append(li);
    });
  }
}
