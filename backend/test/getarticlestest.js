const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server");
chai.use(chaiHttp);

// this test is to check the HTTP get route created on the article route
describe('get users', function() {
    it ("Should Fecth all the articles", (done)=>{
        chai.request('http://localhost:5000')
            .get("/article/")
            .end((err, result)=>{
                result.should.have.status(200);
                console.log ("Result:", result.body);                
                done()
        })
    })
})
