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
        'original': {
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
        },
        'downsized': {
          'height': '250',
          'width': '400',
          'size': '1868369',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-downsized.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-downsized.gif&ct=g'
        },
        'downsized_large': {
          'height': '250',
          'width': '400',
          'size': '3662773',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.gif&ct=g'
        },
        'downsized_medium': {
          'height': '250',
          'width': '400',
          'size': '3662773',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.gif&ct=g'
        },
        'downsized_small': {
          'height': '136',
          'width': '217',
          'mp4_size': '72310',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-downsized-small.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-downsized-small.mp4&ct=g'
        },
        'downsized_still': {
          'height': '250',
          'width': '400',
          'size': '26579',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-downsized_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-downsized_s.gif&ct=g'
        },
        'fixed_height': {
          'height': '200',
          'width': '320',
          'size': '1662630',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200.gif&ct=g',
          'mp4_size': '269098',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200.mp4&ct=g',
          'webp_size': '876730',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200.webp&ct=g'
        },
        'fixed_height_downsampled': {
          'height': '200',
          'width': '320',
          'size': '135196',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200_d.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200_d.gif&ct=g',
          'webp_size': '84514',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200_d.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200_d.webp&ct=g'
        },
        'fixed_height_small': {
          'height': '100',
          'width': '160',
          'size': '548295',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100.gif&ct=g',
          'mp4_size': '87680',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100.mp4&ct=g',
          'webp_size': '296200',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100.webp&ct=g'
        },
        'fixed_height_small_still': {
          'height': '100',
          'width': '160',
          'size': '8488',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100_s.gif&ct=g'
        },
        'fixed_height_still': {
          'height': '200',
          'width': '320',
          'size': '21628',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200_s.gif&ct=g'
        },
        'fixed_width': {
          'height': '125',
          'width': '200',
          'size': '905134',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w.gif&ct=g',
          'mp4_size': '120109',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w.mp4&ct=g',
          'webp_size': '415832',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w.webp&ct=g'
        },
        'fixed_width_downsampled': {
          'height': '125',
          'width': '200',
          'size': '65926',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w_d.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w_d.gif&ct=g',
          'webp_size': '37164',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w_d.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w_d.webp&ct=g'
        },
        'fixed_width_small': {
          'height': '63',
          'width': '100',
          'size': '266131',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100w.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100w.gif&ct=g',
          'mp4_size': '42976',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100w.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100w.mp4&ct=g',
          'webp_size': '143232',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100w.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100w.webp&ct=g'
        },
        'fixed_width_small_still': {
          'height': '63',
          'width': '100',
          'size': '4021',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/100w_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=100w_s.gif&ct=g'
        },
        'fixed_width_still': {
          'height': '125',
          'width': '200',
          'size': '13663',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200w_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=200w_s.gif&ct=g'
        },
        'looping': {
          'mp4_size': '1687722',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-loop.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-loop.mp4&ct=g'
        },
        'original_still': {
          'height': '250',
          'width': '400',
          'size': '63143',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy_s.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy_s.gif&ct=g'
        },
        'original_mp4': {
          'height': '300',
          'width': '480',
          'mp4_size': '772242',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.mp4&ct=g'
        },
        'preview': {
          'height': '176',
          'width': '281',
          'mp4_size': '41137',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-preview.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-preview.mp4&ct=g'
        },
        'preview_gif': {
          'height': '89',
          'width': '142',
          'size': '48436',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-preview.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-preview.gif&ct=g'
        },
        'preview_webp': {
          'height': '120',
          'width': '192',
          'size': '39458',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-preview.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy-preview.webp&ct=g'
        },
        '480w_still': {
          'height': '300',
          'width': '480',
          'size': '3662773',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/480w_s.jpg?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=480w_s.jpg&ct=g'
        }
      },
    }];
    

  test('munges data', () => {
    const output = formatGifs(gifs);
    expect(output).toEqual(expectedGifs);
  });
});