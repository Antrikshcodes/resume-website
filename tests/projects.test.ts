import { projectsData } from '../src/data/projects';

describe('Selected Projects Specifications', () => {
  test('strictly contains the 5 required projects', () => {
    expect(projectsData).toHaveLength(5);
    const titles = projectsData.map(p => p.title);
    expect(titles).toContain('CONVERGE');
    expect(titles).toContain('BLINDSPOT AI');
    expect(titles).toContain('ORDERSHIELD AI');
    expect(titles).toContain('SESAME ROBOT');
    expect(titles).toContain('JARVIS');
  });

  test('all projects have technologies and descriptions', () => {
    projectsData.forEach(p => {
      expect(p.description.length).toBeGreaterThan(20);
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.number).toMatch(/^0[1-5]$/);
    });
  });
});
