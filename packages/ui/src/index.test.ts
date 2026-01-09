import { describe, it, expect } from 'vitest';
import { greet } from './index.js';

describe('greet', () => {
  it('returns the greeting with input', () => {
    const result = greet('World');
    expect(result).toBe('Greetings from UI: World');
  });
});
