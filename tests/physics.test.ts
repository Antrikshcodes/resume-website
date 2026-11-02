import { springDamp, clamp } from '../src/utils/physics';
test('clamp boundaries', () => expect(clamp(150, 0, 100)).toBe(100));
test('spring damp converging', () => expect(springDamp(0, 100, 200, 20, 16)).toBeGreaterThan(0));
