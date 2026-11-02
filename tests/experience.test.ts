import { activitiesData } from '../src/data/experience';

describe('Activities and Involvement Timeline', () => {
  test('includes Arthakram and Newtonbotics prominently as separate entries', () => {
    const arthakram = activitiesData.find(e => e.id === 'arthakram');
    const newtonbotics = activitiesData.find(e => e.id === 'newtonbotics');
    expect(arthakram).toBeDefined();
    expect(newtonbotics).toBeDefined();
    expect(arthakram!.organization).toContain('Newton School of Technology');
    expect(newtonbotics!.organization).toContain('Newton School of Technology');
  });

  test('includes Fetch-A-Thon Top 20 recognition', () => {
    const fetchAThon = activitiesData.find(e => e.id === 'fetch-a-thon')!;
    expect(fetchAThon.badge).toBe('Top 20 Recognition');
    expect(fetchAThon.description).toContain('OrderShield AI');
  });

  test('includes HackO\\\'Ween smart city project Converge', () => {
    const hackoween = activitiesData.find(e => e.id === 'hackoween')!;
    expect(hackoween.description).toContain('Converge');
  });
});
