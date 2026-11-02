import { skillCategories } from '../src/data/skills';

describe('Technical Skills Truthfulness', () => {
  test('contains 3 distinct categories', () => {
    expect(skillCategories).toHaveLength(3);
    const keys = skillCategories.map(c => c.key);
    expect(keys).toEqual(['programming', 'tools', 'interests']);
  });

  test('programming languages strictly contain Python, HTML, CSS', () => {
    const prog = skillCategories.find(c => c.key === 'programming')!;
    const names = prog.skills.map(s => s.name);
    expect(names).toContain('Python');
    expect(names).toContain('HTML');
    expect(names).toContain('CSS');
  });

  test('interests are separated from claimed expertise', () => {
    const interests = skillCategories.find(c => c.key === 'interests')!;
    expect(interests.title).toBe('AREAS OF INTEREST');
  });
});
