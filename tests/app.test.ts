import request from 'supertest';
import app from '../src/app';

describe('App tests', () => {
  test('Younger Futhark endpoint works', async () => {
    const response = await request(app.callback()).get('/younger-futhark/abcdefg');

    expect(response.status).toBe(200);
    expect(response.text).toBe('ᛅᛒᛋᛏᛁᚠᚴ');
  });

  test('Elder Futhark endpoint works', async () => {
    const response = await request(app.callback()).get('/elder-futhark/abcdefg');

    expect(response.status).toBe(200);
    expect(response.text).toBe('ᚨᛒᚲᛞᛖᚠᚷ');
  });

  test('Futhorc endpoint works', async () => {
    const response = await request(app.callback()).get('/futhorc/abcdefg');

    expect(response.status).toBe(200);
    expect(response.text).toBe('ᚪᛒᚳᛞᛖᚠᚷ');
  });

  test('Futhork endpoint works', async () => {
    const response = await request(app.callback()).get('/futhork/abcdefg');

    expect(response.status).toBe(200);
    expect(response.text).toBe('ᛆᛒᚴᚦᛁᚠᚵ');
  });
});
