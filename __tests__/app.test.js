import client from '../lib/client.js';
import supertest from 'supertest';
import app from '../lib/app.js';
import { execSync } from 'child_process';

const request = supertest(app);

describe('API Routes', () => {

  afterAll(async () => {
    return client.end();
  });

  describe('/api/gifs', () => {
    let user;
    let gif;

    beforeAll(async () => {
      execSync('npm run recreate-tables');

      const response = await request
        .post('/api/auth/signup')
        .send({
          name: 'Me the User',
          email: 'me@user.com',
          password: 'password'
        });

      expect(response.status).toBe(200);

      user = response.body;
     
 
    });
    gif = {
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
        }

      },
    };
    test('POST favorite', async () => {
      
      gif.userId = user.id;
      const response = await request
        .post('/api/favorites')
        .set('Authorization', user.token)
        .send(gif);
        
     
      gif = response.body;
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: expect.any(Number),
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
        },
        userId: 1
      });
    }
    );

    test('GET your favorites', async () => {
      const response = await request
        .get('/api/me/favorites')
        .set('Authorization', user.token);
    
      expect(response.status).toBe(200);
      expect(response.body[0]).toEqual(gif);
     
    });

    test('DELETE a favorite', async () => {
      const response = await request
        .delete(`/api/favorites/${gif.id}`)
        .set('Authorization', user.token)
        .send(gif);

      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual(gif);

    });

  });
});
