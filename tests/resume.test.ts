import { personalInfo } from '../src/data/resume';

describe('Personal Information Integrity', () => {
  test('has accurate personal name', () => {
    expect(personalInfo.name).toBe('Antriksh Galhotra');
  });

  test('institution matches Newton School of Technology', () => {
    expect(personalInfo.institution).toContain('Newton School of Technology');
  });

  test('valid verified email address', () => {
    expect(personalInfo.email).toBe('antriksh.codes@gmail.com');
  });

  test('valid GitHub profile link', () => {
    expect(personalInfo.github).toBe('https://github.com/Antrikshcodes');
  });

  test('headline matches CS & AI Undergraduate', () => {
    expect(personalInfo.role).toContain('CS & AI Undergraduate');
  });
});
