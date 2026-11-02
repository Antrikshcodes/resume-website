import { getTwitterMeta } from '../src/utils/meta';
test('twitter card type is summary_large_image', () => expect(getTwitterMeta().card).toBe('summary_large_image'));
