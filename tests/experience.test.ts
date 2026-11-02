import { experienceData } from '../src/data/experience';

describe('Experience and Activities Timeline', () => {
  test('includes Fetch-A-Thon Top 20 recognition', () => {
    const fetchAThon = experienceData.find(e => e.id === 'fetch-a-thon')!;
    expect(fetchAThon.badge).toBe('Top 20 Finalist');
    expect(fetchAThon.description).toContain('OrderShield AI');
  });

  test('includes HackO\'Ween smart city project Converge', () => {
    const hackoween = experienceData.find(e => e.id === 'hackoween')!;
    expect(hackoween.description).toContain('Converge');
  });

  test('includes ARTHAKRAM product consultation club', () => {
    const arthakram = experienceData.find(e => e.id === 'arthakram')!;
    expect(arthakram.organization).toContain('Product Consultation');
  });
});
