const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js')

// assertion method
chai.should()
// chai http request
chai.use(chaiHttp)

describe('server running test',()=>{
    it("GET server running test:",(done)=>{
        chai.request(server)
            .get('/')
            .end((err, response)=>{
                response.should.have.status(200)
            })
            done()
    })
})