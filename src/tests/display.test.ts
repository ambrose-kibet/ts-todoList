import { it, expect, describe, beforeAll } from 'vitest';
import Display from '../displayTemplate';

beforeAll(() => {
  const unoderedList = document.createElement('ul') as HTMLUListElement;
  const neWTemplate = new Display(unoderedList);
  describe('DISplay', () => {
    it(' ul should have no children when the list is cleared', () => {
      neWTemplate.clear();
      expect(unoderedList.children).toHaveLength(0);
    });
  });
});
