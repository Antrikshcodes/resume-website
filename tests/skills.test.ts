import { skillCategoryGroups } from '../src/data/skills';

describe('Technical Skills Truthfulness from GitHub README', () => {
  test('contains 7 categorized groups matching GitHub profile', () => {
    expect(skillCategoryGroups).toHaveLength(7);
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

  test('frontend contains HTML5, CSS3, AngularJS, CanvasJS', () => {
    const front = skillCategoryGroups.find(c => c.id === 'frontend')!;
    const names = front.technologies.map(s => s.name);
    expect(names).toContain('HTML5');
    expect(names).toContain('CSS3');
    expect(names).toContain('AngularJS');
    expect(names).toContain('CanvasJS');
  });

  test('backend contains Node.js, Django, Flask, Firebase, Microsoft Azure', () => {
    const backend = skillCategoryGroups.find(c => c.id === 'backend')!;
    const names = backend.technologies.map(s => s.name);
    expect(names).toContain('Node.js');
    expect(names).toContain('Django');
    expect(names).toContain('Flask');
    expect(names).toContain('Firebase');
    expect(names).toContain('Microsoft Azure');
  });
});
