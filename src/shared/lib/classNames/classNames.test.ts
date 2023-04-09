import { classNames } from "./classNames";

describe( 'classNames', () => {
  test( 'with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test( 'with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expected);
  });
  test( 'with mods', () => {
    const expected = 'someClass class1 class2 hevered, scrollable';
    expect(classNames('someClass', 
      {hevered: true, scrollable: true}, 
      ['class1', 'class2']
      )).toBe(expected);
  });
  test( 'with mods false', () => {
    const expected = 'someClass class1 class2 hevered';
    expect(classNames('someClass', 
      {hevered: true, scrollable: false}, 
      ['class1', 'class2']
      )).toBe(expected);
  });
  test( 'with mods undefined', () => {
    const expected = 'someClass class1 class2 hevered';
    expect(classNames('someClass', 
      {hevered: true, scrollable: undefined}, 
      ['class1', 'class2']
      )).toBe(expected);
  });
});