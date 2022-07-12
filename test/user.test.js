const chai = require('chai')
const server = require('../server')
const chaiHttp = require('chai-http')

// assertion method
chai.should()

chai.use(chaiHttp)

describe('User Test cases',()=>{
    it('POST test it should create User',(done)=>{
        const body = {
            Name:"Muhammad Mudassir Siddiqui.",
            Email:"mudassirsiddiqui7@gmail.com",
            CreatedDate: new Date() 
        }
        chai.request(server)
        .post('/api/users/addUser')
        .send(body)
        .end((err,resp)=>{
            resp.should.have.status(201)
        })
        done()
        
    })

    it('Get test it should get Users',(done)=>{
        chai.request(server)
        .get('/api/users/')
        .end((err,resp)=>{
            resp.should.have.status(200)
            resp.body.should.have.property('error').eq(false)
            resp.body.should.have.property('data').should.be.a('object')
        })
        done()
        
    })
})