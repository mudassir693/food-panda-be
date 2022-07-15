const chai = require('chai')

const chaiHttp = require('chai-http')

const server = require('./../server')


// assertation method
chai.should()

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });
  
chai.use(chaiHttp);

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
                resp.body.should.have.property('error').eq(true)
            })
            done()
    })

    it('GET should get All Products',(done)=>{
        chai.request(server).get('/api/products/get')
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
                resp.body.should.have.property('data').should.be.a('object')
            })
            done()
    })

    it('GET Product by ID',(done)=>{
        chai.request(server)
            .get('/api/products/getById/62d044e92eafb7db318f985f')
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
                resp.body.should.have.property('data')
            })
            done()
    })

    it('GET should get each resturant Products',(done)=>{
        chai.request(server)
            .get('/api/products/getByResturant/62d044e92eafb7db318f985f')
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
                resp.body.should.have.property('data').should.be.a('object')
            })
            done()
    })

    it('PUT should update Products',(done)=>{
        const body = {
            Title:"Update Test", 
        }
        chai.request(server)
            .put('/api/products/update/62d044e92eafb7db318f985f')
            .send(body)
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
                resp.body.should.have.property('data')
            })
            done()
    })

    it("DELETE Should delete resturant",(done)=>{
        chai.request(server)
            .delete('/api/products/delete/62d044e92eafb7db318f985f')
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
            })
            done()
    })
})