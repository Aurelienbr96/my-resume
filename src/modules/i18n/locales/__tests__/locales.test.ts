/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';

// Function to read JSON file and parse it to an object
const readJSONFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath);
  return JSON.parse(rawContent as any);
};

// Function to get all keys from a JSON object recursively
const getAllKeys = (obj: { [x: string]: any; }, prefix = '') => {
  let keys: any[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], `${prefix}${key}.`));
    } else {
      keys.push(`${prefix}${key}`);
    }
  }
  return keys;
};

// Test to compare keys of two JSON files
describe('JSON key comparison', () => {
  test('should have the same keys', () => {
    const json1Path = path.join(__dirname, '../en.json');
    const json2Path = path.join(__dirname, '../fr.json');

    const json1 = readJSONFile(json1Path);
    const json2 = readJSONFile(json2Path);

    const json1Keys = new Set(getAllKeys(json1));
    const json2Keys = new Set(getAllKeys(json2));

    const haveSameKeys = [...json1Keys].every(key => json2Keys.has(key)) && [...json2Keys].every(key => json1Keys.has(key));

    expect(haveSameKeys).toBe(true);
  });
});
