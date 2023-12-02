import request from 'supertest';
import server from '../../server';
describe('User API', () => {

    //test for create user//
    it('should create a new user', async () => {
        const response = await request(server)
            .post('/user')
            .field('email', 'swagamhatre12@email.com') 
            .field('username', 'swagata')
            .field('address', 'vashi')
            .field('password', 'swagata098')
            .attach('profile_pic', '/home/dell/Documents/SwagataMhatre_pic') 
            .set('Content-Type', 'multipart/form-data')
            .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
            expect(response.status).toBe(201);

            expect(response.body).toHaveProperty('id');  
    });
    it('should return email exist error', async () => {
        const newUser = { username: 'Rarome', email: 'rearome@gmail.com', address: 'nerl', password: 'rarome123', profile_pic: 'rarome.png' };
        const response = await request(server)
            .post('/user')
            .field('email', 'swagamhatre12@email.com') 
            .field('username', 'swagata')
            .field('address', 'vashi')
            .field('password', 'swagata098')
            .attach('profile_pic', '/home/dell/Documents/SwagataMhatre_pic') 
            .set('Content-Type', 'multipart/form-data')
            .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
            expect(response.status).toBe(409);

            expect(response.body.error).toBe('Email already exist');  
    });
 
    //test for update user//
    it('should update an existing user', async () => {
        const id = 1;
        const response = await request(server)
            .put('/user')
            .field('email', 'swagamhatre12@email.com') 
            .field('username', 'swagata')
            .field('address', 'vashi')
            .field('password', 'swagata098')
            .attach('profile_pic', '/home/dell/Documents/SwagataMhatre_pic') 
            .set('Content-Type', 'multipart/form-data')
            .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
            expect(response.status).toBe(200);

    });
    
    //test get all user//
    it('should get all user', async () => {
        const response = await request(server)
        .get('/users')
        .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
        .expect(200);
        expect(response.body).toHaveProperty('data');
    });
    
   //test for get user by Id//
   it('should get user by id', async () => {
        const id = 1;
        const response = await request(server)
            .get(`/user/${id}`)
            .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
            .expect(200);
            expect(response.body).toHaveProperty('data');
    });
 
    //test for delete user//
    it('should delete an existing user', async () => {
        const deletedUser = { };
        const id = 4;
        const response = await request(server)
            .delete(`/user/${id}`)
            .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaGF0Z3d0YWpqanNic2ZnIiwiaWF0IjoxNzAxNTM1ODM5LCJleHAiOjE3MDE1Mzk0Mzl9.3f5O6-kH3z2_ih0d4v4YVb3A2O0pdZlcMYzwBJSYIl0')
            .expect(204);

    });
    

});
  