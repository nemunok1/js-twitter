var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

/**
 * Twitterオブジェクトからスクリーンネームを返却します
 * @param {object} client Twitterオブジェクト
 * 
 * @return {string} スクリーンネーム
 */
function getUserName(client) {
	client.get('account/verify_credentials', function(error, tweet, response) {
		return tweet.screen_name;
	});
}

function sendTweet(text) {
	client.post('statuses/update', {status: text}, function(error, tweet, response) {
		console.log(tweet.text);
	});
}

sendTweet("こんにちは.");


