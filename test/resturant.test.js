const chai = require('chai');
const chaiHttp = require('chai-http')
const server = require('../server')


// assertion model
chai.should()

// xhai http:
chai.use(chaiHttp)

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });

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

    it('GET should NOT get resturant by WRONG Id',(done)=>{
        chai.request(server)
            .get('/api/resturants/getById/62cf144a4c02339e83d72dee')
            .end((err,resp)=>{
                resp.should.have.status(400)
                resp.body.should.have.property('error').eq(true)
                resp.body.should.have.property('data')
            })
            done()
    })

    it('GET should resturant by Id',(done)=>{
        chai.request(server)
            .get('/api/resturants/getById/62cf144a4c02339e83d72ded')
            .end((err,resp)=>{
                resp.should.have.property('error').eq(false)
                resp.body.should.have.property('data').should.have.property('Name').eq('Testing Resturant')
            })
            done()
    })


    it('GET should get Resturants with name',(done)=>{
        const body = {
            Name:"Test Resturant", 
            CratedDate: new Date(), 
            Address:"Testing address", 
            Description: "this is just testing resturant, that runs through chai testing."
        }
        chai.request(server)
            .get('/api/resturants/getByName/Te')
            .end((err,resp)=>{
                resp.should.have.status(200)
                resp.body.should.have.property('error').eq(false)
                resp.body.should.have.property('data')
            })
            done()
    })

})