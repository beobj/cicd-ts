import { describe, it, expect, test } from 'vitest';
import { getAPIKey } from '../api/auth.js';

const mockHeaders = {
  "authorization": "ApiKey test-api-key"
};

describe('Authentication', () => {
  it('should return an API key from the header', () => {
    const apiKey = getAPIKey(mockHeaders);
    expect(apiKey).toBeDefined();
    expect(apiKey).toBe("test-api-key");
  });

  it('should return null if the authorization header is missing', () => {
    const apiKey = getAPIKey({});
    expect(apiKey).toBeNull();
  });

  it('should return null if the authorization header is not in the correct format', () => {
    const apiKey = getAPIKey({ "authorization": "Bearer test-api-key" });
    expect(apiKey).toBeNull();
  });

  it('should return null if the authorization header does not contain an API key', () => {
    const apiKey = getAPIKey({ "authorization": "ApiKey" });
    expect(apiKey).toBeNull();
  });
});
