const request = require('request');
let ddShareCodes = [
    "P04z54XCjVWnYaS5jQICWDx231XkA2tQy5oreA",
    "P04z54XCjVWnYaS5m9cZ2b82XxNk27vn69kkYY",
    "P04z54XCjVWnYaS5m9cZ2T733tPwZ8kWkCiv4c",
    "P04z54XCjVWnYaS5m9cZ2b9i3RMxmRQSHITQzY",
    "P04z54XCjVWnYaS5m9cZ2Srj3UZlNbwThrucUs",
    "P04z54XCjVWnYaS5m9cZ2eq23UclvDszImQb2o",
];

let jxShareCodes = [
    "HB0rMhLZFoJZtMY_cxDS9w==",
    "gkJDx-hnOQ-_glMijjvWhg==",
    "JLsEgHVEqtL60bPohvdN6Q==",
    "TA-2KPQiq7T_e0lI3_y-Bw==",
    "8rb8s6xvPNh8T-xFWpPT2g==",
    "f4484ZzDOyamcrl6gPaTqQ=="
];

let jdBeanShareCodes = [
    "44i54vzpozdr5h3kk3fye44d6lua4xc2awmxtra",
    "olmijoxgmjutyg34323zrqn4m4yqbotckj5cq7q",
    "e7lhibzb3zek2ufl7s5ojquqfaawd36hi7vrv4a",
    "olmijoxgmjutypuvjs4um3t6w5bvfmzoq564sci",
    "e7lhibzb3zek3x6f6fg5zq6rthx775uqboh3mvi",
    "4npkonnsy7xi2sxblpvwpaxqo3yz75cyyk2kuli"
];

let jdFruitShareCodes = [
    "8f333aa22720446f8347089776abbab7",
    "028e924bb2674242a6accfabcbb31275"
];

let jdPetShareCodes = [
    "MTAxODc2NTEzMDAwMDAwMDAyNjAyODcwOQ==",
    "MTAxODc2NTE0NzAwMDAwMDAyNDkwODY2Mw=="
];
setupShareCodes()

function setupShareCodes() {
    setup_dd_factory(ddShareCodes);
    setup_jx_factory(jxShareCodes);
    setup_jd_benas(jdBeanShareCodes);
    setup_jd_pet(jdPetShareCodes);
    setup_jd_fruit(jdFruitShareCodes);
}
function setup_dd_factory(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/ddfactory/create/互助码/"
    shareCodes.forEach(item => {
        requestAPI(url, item)
    })
}

function setup_jx_factory(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/jxfactory/create/互助码/"
    shareCodes.forEach(item =>{
        requestAPI(url,item)
    })
}

function setup_jd_benas(shareCodes){
    let url = "http://api.turinglabs.net/api/v1/jd/bean/create/互助码/"
    shareCodes.forEach(item => {
        requestAPI(url, item)
    })
}

function setup_jd_pet(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/pet/create/互助码/"
    shareCodes.forEach(item => {
        requestAPI(url, item)
    })
}

function setup_jd_fruit(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/farm/create/互助码/"
    shareCodes.forEach(item => {
        requestAPI(url, item)
    })
}


function requestAPI(url,item){
    let urlString = url.replace("互助码", item)
    request(urlString, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

