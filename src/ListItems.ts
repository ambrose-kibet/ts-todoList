import ListItem from './ListItem';
interface List {
  taskList: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  removeItem(id: string): void;
  addItem(item: ListItem): void;
}

class ListItems implements List {
  static instance: ListItems = new ListItems();
  taskList: ListItem[];
  constructor() {
    this.taskList = [];
  }
  load(): void {
    const listArray: string | null = localStorage.getItem('myList');
    if (!listArray) return;
    const parsedList: { id: string; task: string; checked: boolean }[] =
      JSON.parse(listArray);
    parsedList.forEach(
      (item: { id: string; task: string; checked: boolean }) => {
        this.taskList.push(new ListItem(item.id, item.task, item.checked));
      }
    );
  }
  save(): void {
    localStorage.setItem('myList', JSON.stringify(this.taskList));
  }
  clearList(): void {
    this.taskList = [];
    this.save();
  }
  removeItem(id: string): void {
    this.taskList = this.taskList.filter((item) => item.id !== id);
    this.save();
  }
  addItem(item: ListItem): void {
    this.taskList.push(item);
    this.save();
  }
}

export default ListItems;
