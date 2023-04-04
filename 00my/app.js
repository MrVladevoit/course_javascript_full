// const scrapingbee = require('scrapingbee'); // Import ScrapingBee's SDK
// const fs = require('fs');

// async function login_and_take_screenshot(url, path) {
//   var client = new scrapingbee.ScrapingBeeClient('YOUR-API-KEY'); // New ScrapingBee client
//   var response = await client.get({
//     url: url,
//     params: {
//         'js_scenario': {"instructions":[
//             {"fill": ["#email", "your-email@address.com"]}, // Enter registration email
//             {"fill": ["#passwd", "your-password"]}, // Enter password
//             {"click": "#SubmitLogin"}, // Click on login
//             {"wait": 1000} // Wait for a second
//         ]},
//         'screenshot': 'true'
//     }
// }).then((response)=>fs.writeFileSync(path, response.data)) // Save the contents of the request (screenshot) to the 'path' file destination
// .catch((e)=>console.log("An error has occured: " + e.message))
// }

// login_and_take_screenshot("http://automationpractice.com/index.php?controller=authentication", "./my-account.png");