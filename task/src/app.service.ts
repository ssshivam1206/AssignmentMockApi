import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getApi(): Promise<any[]> {
    const Url = 'https://rickandmortyapi.com/api';
    try {
      const episodes = await fetch(`${Url}/episode`);
      if (!episodes.ok) {
        throw new Error(`Failed to fetch episodes: ${episodes.status}`);
      }
      const episodesData = await episodes.json();

      const charUrls: string[] = [];
      episodesData.results.forEach((episode: { characters: string[] }) => {
        charUrls.push(...episode.characters);
      });

      const charPromise = charUrls.map(async (charUrl) => {
        const charResponse = await fetch(charUrl, {
          signal: AbortSignal.timeout(5000),
        });
        if (!charResponse.ok) {
          throw new Error(`Failed to fetch character: ${charResponse.status}`);
        }
        return charResponse.json();
      });

      const characters = await Promise.all(charPromise);

      console.log(characters);
      return characters;
    } catch (error) {
      console.log(error);

      console.error(`Error: ${error.message}`);
    }
  }
}
