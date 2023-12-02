import request from 'supertest';
import server from '../../server';
describe('User API', () => {

    //test for create user//
   /* it('should create a new user', async () => {
      const newUser = { username: 'Rarome', email: 'rearome@gmail.com', address: 'nerl', password: 'rarome123', profile_pic: 'rarome.png' };
      const response = await request(server)
        .post('/user')
        .send(newUser)
        .expect(201);
        expect(response.body).toHaveProperty('id');  
    });
 
    //test for update user//
    it('should update an existing user', async () => {
      const updatedUserData = { username: 'john', email: "swagata@gmail.com", address: "vashi",profile_pic: "goa.png", password: "johnswagata"};
      const id = 1;
      const response = await request(server)
        .put(`/user/${id}`)
        .send(updatedUserData)
        .expect(200);
    });
    
    //test get all user//
    it('should get all user', async () => {
        const response = await request(server)
        .get('/users')
        .expect(200);
        expect(response.body).toHaveProperty('data');
    });
    */
   //test for get user by Id//
   it('should get user by id', async () => {
    const id = 1;
    const response = await request(server)
    .get(`/user/${id}`)
    .expect(200);
    expect(response.body).toHaveProperty('data');
});
 /*
    //test for delete user//
    it('should delete an existing user', async () => {
        const deletedUser = { };
        const id = 4;
        const response = await request(server)
        .delete(`/user/${id}`)
        .expect(204);

    });
     */

  });
  