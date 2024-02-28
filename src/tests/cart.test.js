require('../models')
const request = require("supertest")
const app = require("../app")

const URL_USER = '/users/login'
let TOKEN

beforeAll (async () => {
    const user = {
        email: "fernado@gmail.com",
        password: "fernando1234"
    }

    const res = await request(app)
    .post(URL_USER)
    .send(user)
})
