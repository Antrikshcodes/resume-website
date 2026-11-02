import { validatePersonalInfo, validateProjects } from '../src/utils/validation';
import { personalInfo } from '../src/data/resume';
import { projectsData } from '../src/data/projects';
test('personal info passes validator', () => expect(validatePersonalInfo(personalInfo)).toBe(true));
test('projects pass validator', () => expect(validateProjects(projectsData)).toBe(true));
