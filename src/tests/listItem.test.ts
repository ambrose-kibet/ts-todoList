import { describe, it, expect, beforeEach, vi } from 'vitest';
import ListItems from '../ListItems';
import ListItem from '../ListItem';
const localStorage = vi.fn();
describe('list item', () => {
  const newList = new ListItems();
  it('should  have an emty list to start with', () => {
    expect(newList.taskList.length).toEqual(0);
  });
  it('should allow user to add items', () => {
    const task1 = new ListItem('1', 'sleep');
    newList.taskList.push(task1);
    expect(newList.taskList).toContain(task1);
  });
});
