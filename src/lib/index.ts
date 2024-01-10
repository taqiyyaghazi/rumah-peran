import { promises as fs } from 'fs';
export const readJson = async (path: string) => {
  const file = await fs.readFile(
    process.cwd() + path,
    'utf8'
  );
  return JSON.parse(file);
};
