import fs from 'fs';
import path from 'path';

describe('ATS PDF Artifact Integrity', () => {
  test('resume.pdf exists in public directory', () => {
    const pdfPath = path.resolve('public', 'resume.pdf');
    expect(fs.existsSync(pdfPath)).toBe(true);
  });

  test('resume.pdf is non-empty and valid file size', () => {
    const pdfPath = path.resolve('public', 'resume.pdf');
    const stats = fs.statSync(pdfPath);
    expect(stats.size).toBeGreaterThan(1000); // Greater than 1KB
  });
});
