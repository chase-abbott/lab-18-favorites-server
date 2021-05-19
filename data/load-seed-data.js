/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import users from './users.js';
import gifs from './gifs.js';

run();

async function run() {

  try {

    const data = await Promise.all(
      users.map(user => {
        return client.query(`
          INSERT INTO users (name, email, hash)
          VALUES ($1, $2, $3)
          RETURNING *;
        `,
        [user.name, user.email, user.password]);
      })
    );
    
    const user = data[0].rows[0];

    await Promise.all(
      gifs.map(gif => {
        return client.query(`
        INSERT INTO cats (url, title, rating, images, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
        [gif.url, gif.title, gif.rating, gif.images, user.id]);
      })
    );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}