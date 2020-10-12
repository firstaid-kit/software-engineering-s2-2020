const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server");
chai.use(chaiHttp);

// this test is to check the HTTP post route created on the users route to save records
describe('saving records', function() {

    it('saves a user to the DB', function(done) {
        var user01 = new User({
            login: 'sophie',
            password: '123123',
            name: 'Sophie C',
            email: "student@uoa.nz",
            affiliation: "Auckland Uni",
            role: "student",
            gender: "female",
            age: 18
        });
        
        chai.request('http://localhost:5000')
            .post('/user/add')
            .send(user01)
            .end((err, res) => {
                console.log("res body: ", res.body);
                res.should.have.status(200);
                assert(res.body == "User added!");
                
            })
         
            done();
        });

    });


    //test could also ge generalised to other get tests
