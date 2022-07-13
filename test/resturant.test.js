const chai = require('chai');
const chaiHttp = require('chai-http')
const server = require('../server')


// assertion model
chai.should()

// xhai http:
chai.use(chaiHttp)

describe('resturants Tests',()=>{
    // it('POST should ADD Resturant',(done)=>{
    //     const body = {
    //         Name:"Test Resturant", 
    //         CratedDate: new Date(), 
    //         Address:"Testing address", 
    //         Description: "this is just testing resturant, that runs through chai testing."
    //     }
    //     chai.request(server)
    //         .post('/api/resturants/add/')
    //         .send(body)
    //         .end((err,resp)=>{
    //             resp.should.have.status(200)
    //             resp.body.should.have.property('error').eq(false)
    //         })
    //         done()
    // })


    it('POST should NOT ADD Resturant',(done)=>{
        const body = {
            Name:"Test Resturant", 
            CratedDate: new Date(), 
            Address:"Testing address", 
            Description: "this is just testing resturant, that runs through chai testing."
        }
        chai.request(server)
            .post('/api/resturants/add/')
            .send(body)
            .end((err,resp)=>{
                resp.should.have.status(400)
                resp.body.should.have.property('error').eq(true)
                resp.body.should.have.property('data').eq('this resturant is already register')
            })
            done()
    })

})