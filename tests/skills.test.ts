import { skillCategoryGroups } from '../src/data/skills';

describe('Technical Skills Truthfulness from GitHub README', () => {
  test('contains categorized groups matching GitHub profile', () => {
    expect(skillCategoryGroups.length).toBeGreaterThanOrEqual(5);
  });

  test('programming languages strictly contain Python, C++, C, JavaScript, TypeScript, Java, Bash', () => {
    const prog = skillCategoryGroups.find(c => c.id === 'programming-languages')!;
    const names = prog.technologies.map(s => s.name);
    expect(names).toContain('Python');
    expect(names).toContain('C++');
    expect(names).toContain('C');
    expect(names).toContain('JavaScript');
    expect(names).toContain('TypeScript');
    expect(names).toContain('Java');
    expect(names).toContain('Bash');
  });

  test('frontend contains React, Next.js, HTML5, CSS3', () => {
    const front = skillCategoryGroups.find(c => c.id === 'frontend-development')!;
    const names = front.technologies.map(s => s.name);
    expect(names).toContain('React');
    expect(names).toContain('Next.js');
    expect(names).toContain('HTML5');
    expect(names).toContain('CSS3');
  });
});
