import { it, expect, describe } from 'vitest';
import Display from '../displayTemplate';

describe('DISplay', () => {
  const unoderedList = document.createElement('ul') as HTMLUListElement;
  const neWTemplate = new Display(unoderedList);
  it(' ul should have no children when the list is cleared', () => {
    neWTemplate.clear();
    expect(unoderedList.children).toHaveLength(0);
  });
});
