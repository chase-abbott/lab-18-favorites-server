import gifs from '../data/gifs';
import { formatGifs } from '../lib/data-munge';

describe('API Data Munging', () => {
    
  const expectedGifs = [
    {
      id: 1,
      url: 'https://giphy.com/gifs/cat-smoke-smoking-3o6Zt481isNVuQI1l6',
      title: 'Cat Smoking GIF by sheepfilms',
      rating: 'pg-13',
      images: {
        'height': '250',
        'width': '400',
        'size': '3662773',
        'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.gif&ct=g',
        'mp4_size': '772242',
        'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.mp4&ct=g',
        'webp_size': '992406',
        'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.webp&ct=g',
        'frames': '81',
        'hash': '23c2bbc1d41e1376b8252ef4a6505bb2'
      }
    }];

  test('munges data', () => {
    const output = formatGifs(gifs);
    expect(output).toEqual(expectedGifs);
  });
});