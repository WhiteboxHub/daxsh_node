/**
 * Created by daxes on 8/24/2016.
 */


var chakram = require('chakram');
var randomstring = require('randomstring');
expect = chakram.expect;

var url = "http://api.qa.talentscreen.io/v1/common/types";

var name = randomstring.generate(2);
console.log("name "+ name);

describe('post request',function(){


    it('URL ;; http://api.qa.talentscreen.io/v1/common/types', function() {


        var get_req = chakram.get(url);
        console.log((expect(get_req).to.have.status(200))?"it has status 200":"statuts not 200");
        console.log((expect(get_req).to.have.header('Content-Type, application/json; charset=utf-8'))?"it has header content type":" error in content type");


        return  get_req.then(function(data){

            var jsondata = data.body;



        })




    });


});