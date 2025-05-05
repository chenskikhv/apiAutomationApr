import * as supertest from 'supertest'

const request = supertest('http://localhost:8001/api/v1')

describe('USER SIGN UP', () => {
    describe('POSITIVE TESTING', () => {
        it('should sign up a new user', async () => {
            const userData = {
                "name": "John Doe",
                "email": "jo798hn@example.com",
                "password": "mypassword123",
                "passwordConfirm": "mypassword123"
            }
            console.log(userData);
            const res = await request.post('/users/signup').send(userData)
            console.log(res.body);
        })
    })
})