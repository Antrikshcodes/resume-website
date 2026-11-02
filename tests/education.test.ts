import { educationInfo } from '../src/data/education';

describe('Education Data Authenticity', () => {
  test('degree is CSE with AI specialization', () => {
    expect(educationInfo.degree).toContain('Computer Science and Engineering');
    expect(educationInfo.specialization).toBe('Artificial Intelligence');
  });

  test('enrollment timeline starts 2026', () => {
    expect(educationInfo.period).toContain('2026');
  });

  test('no fabricated metrics or fake CGPA', () => {
    expect((educationInfo as any).cgpa).toBeUndefined();
    expect((educationInfo as any).percentage).toBeUndefined();
  });
});
