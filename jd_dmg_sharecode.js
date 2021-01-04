const request = require('request');
const delay = require('delay');

//东东工厂
let ddShareCodes = [
    "P04z54XCjVWnYaS5jQICWDx231XkA2tQy5oreA",
    "P04z54XCjVWnYaS5m9cZ2b82XxNk27vn69kkYY",
    "P04z54XCjVWnYaS5m9cZ2T733tPwZ8kWkCiv4c",
    "P04z54XCjVWnYaS5m9cZ2b9i3RMxmRQSHITQzY",
    "P04z54XCjVWnYaS5m9cZ2Srj3UZlNbwThrucUs",
    "P04z54XCjVWnYaS5m9cZ2eq23UclvDszImQb2o",
];
//京喜工厂
let jxShareCodes = [
    // "HB0rMhLZFoJZtMY_cxDS9w==",
    // "gkJDx-hnOQ-_glMijjvWhg==",
    // "JLsEgHVEqtL60bPohvdN6Q==",
    // "TA-2KPQiq7T_e0lI3_y-Bw==",
    // "8rb8s6xvPNh8T-xFWpPT2g==",
    // "f4484ZzDOyamcrl6gPaTqQ==",
    "gEdLHMPMtwDvjhexnBFArg==",
];

//种豆得豆
let jdBeanShareCodes = [
    "44i54vzpozdr5h3kk3fye44d6lua4xc2awmxtra",
    "olmijoxgmjutyg34323zrqn4m4yqbotckj5cq7q",
    "e7lhibzb3zek2ufl7s5ojquqfaawd36hi7vrv4a",
    "olmijoxgmjutypuvjs4um3t6w5bvfmzoq564sci",
    "e7lhibzb3zek3x6f6fg5zq6rthx775uqboh3mvi",
    "4npkonnsy7xi2sxblpvwpaxqo3yz75cyyk2kuli",
    "jsavtv25oeasmfjmcbi25swa7y"
];

//京东农场
let jdFruitShareCodes = [
    // "8f333aa22720446f8347089776abbab7",
    // "028e924bb2674242a6accfabcbb31275",
    // "32dc6062e5c34fb5b0b4efbd3c400bcd",
    "e04839dfe3b645a1a3aa1b73bf8b8ac7"
];

//东东萌宠
let jdPetShareCodes = [
    // "MTAxODc2NTEzMDAwMDAwMDAyNjAyODcwOQ==",
    // "MTAxODc2NTE0NzAwMDAwMDAyNDkwODY2Mw==",
    "MTE1NDUwMTI0MDAwMDAwMDQzNDE4OTYz"
];

//京东赚赚
let jdzzShareCodes = [
    "Sv_1yQBcf9EnSKR7znfAMcA",
    "S5KkcRhod9VPRIE_3laIKcQ",
    "S5KkcRB0b8lGDKEzzkvINcg",
    "S5KkcRhtP_VKEdR7yx6MMdA",
    "S5KkcRE1L_AfWKBL3kvBedg",
    "S5KkcR0wf_ALUckz8lfIIcg"
];

let jdCrazyJoyShareCodes = [
    "-T27v74mnA2T2bzOblxrN6t9zd5YaBeE",
    "4312lQEtDfuj6jwPBNYbbat9zd5YaBeE",
    "MZsuzZjCYr85oULenXYbtat9zd5YaBeE",
    "VqlbtP1xnFVU8pTIbenr0at9zd5YaBeE",
    "EriRyRIhDFEA8TNIcOx9xKt9zd5YaBeE",
    "JBeUzSuR34bGgSV783WPqat9zd5YaBeE",
];


(async () => {
    await setupShareCodes()
})();

async function setupShareCodes() {
    await setup_dd_factory(ddShareCodes);
    await setup_jx_factory(jxShareCodes);
    await setup_jd_benas(jdBeanShareCodes);
    await setup_jd_pet(jdPetShareCodes);
    await setup_jd_fruit(jdFruitShareCodes);
    await setup_jd_zz(jdzzShareCodes);
    await setup_jd_crazy_joy(jdCrazyJoyShareCodes);
}

var sleepTimeout = 2000;

async function setup_jd_crazy_joy(shareCodes) {
    let url = "https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_jd_zz(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/ddfactory/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_dd_factory(shareCodes) {
    let url = "https://code.chiang.fun/api/v1/jd/jdzz/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_jx_factory(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/jxfactory/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_jd_benas(shareCodes){
    let url = "http://api.turinglabs.net/api/v1/jd/bean/create/互助码/"
    for(let i = 0;i<shareCodes.length;i++){
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_jd_pet(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/pet/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}

async function setup_jd_fruit(shareCodes) {
    let url = "http://api.turinglabs.net/api/v1/jd/farm/create/互助码/"
    for (let i = 0; i < shareCodes.length; i++) {
        let item = shareCodes[i];
        requestAPI(url, item)
        await delay(sleepTimeout);
    }
}


function requestAPI(url,item){
    let urlString = url.replace("互助码", item)
    console.log("==========开始发请求======");
    request(urlString, function (error, response, body) {
        console.log("==========结束发请求======");
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}