import { describe, it, expect } from 'vitest';
import { greet } from '@your-scope/ui';

describe('api deps', () => {
  it('can import @your-scope/ui and use greet', () => {
    expect(greet('API')).toContain('Greetings from UI: API');
  });
});
