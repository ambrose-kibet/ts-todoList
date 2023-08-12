interface Item {
  id: string;
  task: string;
  checked: boolean;
}

class ListItem implements Item {
  constructor(
    public id: string,
    public task: string,
    public checked: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.checked = checked;
  }
}

export default ListItem;
