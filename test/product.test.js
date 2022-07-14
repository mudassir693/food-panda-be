const chai = require('chai')

const chaiHttp = require('chai-http')

const server = require('./../server')


// assertation method
chai.should()

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });


describe("Products Test",()=>{
    // it('POST should ADD product regarding to resturant',(done)=>{
    //     const body = {
    //         Title:'Afghani Test Boti',
    //         ResturantId:'62cf144a4c02339e83d72ded'
    //     }
    //     chai.request(server)
    //         .post('/api/products/add')
    //         .send(body)
    //         .end((err,resp)=>{
    //             resp.should.have.status(200)
    //             resp.body.should.have.property('error').eq(false)
    //         })
    //         done()
    // })

    it('POST should NOT ADD product regarding to resturant',(done)=>{
        const body = {
            Title:'Afghani Test Boti',
            ResturantId:'62cf144a4c02339e83d72ded'
        }
        chai.request(server)
            .post('/api/products/add')
            .send(body)
            .end((err,resp)=>{
                resp.should.have.status(400)
                resp.body.should.have.property('error').eq(false)
            })
            done()
    })
})