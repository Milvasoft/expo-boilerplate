import { isObjectLike,isValidJSON } from './index';

describe('isValidJSON', () => {
  it('should return true for valid JSON string', () => {
    const jsonString = '{"name":"John","age":30,"city":"New York"}';
    const result = isValidJSON(jsonString);
    expect(result).toBe(true);
  });

  it('should return false for invalid JSON string', () => {
    const jsonString = '{"name":"John","age":30,"city":"New York"';
    const result = isValidJSON(jsonString);
    expect(result).toBe(false);
  });

  it('should return false for non-string input', () => {
    const input = 123;
    const result = isValidJSON(input);
    expect(result).toBe(false);
  });

  it('should return false for null input', () => {
    const input = null;
    const result = isValidJSON(input);
    expect(result).toBe(false);
  });

  it('should return false for undefined input', () => {
    const input = undefined;
    const result = isValidJSON(input);
    expect(result).toBe(false);
  });
});

describe('isObjectLike', () => {
  it('should return true if the value is an object', () => {
    const value = { foo: 'bar' };
    const result = isObjectLike(value);
    expect(result).toBe(true);
  });

  it('should return false if the value is null', () => {
    const value = null;
    const result = isObjectLike(value);
    expect(result).toBe(false);
  });

  it('should return false if the value is a string', () => {
    const value = 'test';
    const result = isObjectLike(value);
    expect(result).toBe(false);
  });

  it('should return false if the value is a number', () => {
    const value = 123;
    const result = isObjectLike(value);
    expect(result).toBe(false);
  });

  it('should return false if the value is a boolean', () => {
    const value = true;
    const result = isObjectLike(value);
    expect(result).toBe(false);
  });

  it('should return false if the value is an array', () => {
    const value = [1, 2, 3];
    const result = isObjectLike(value);
    expect(result).toBe(false);
  });
});