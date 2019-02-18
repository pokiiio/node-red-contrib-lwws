module.exports = function (RED) {
    function WeatherHacksNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var cityId = config.cityid;
        var request = require('request-promise');

        if (!cityId || cityId.length < 6) {
            // set to TOKYO.
            cityId = '130010';
        }

        node.on('input', function (msg) {
            request('http://weather.livedoor.com/forecast/webservice/json/v1?city=' + cityId)
                .then(function (response) {
                    msg.payload = JSON.parse(response);
                    node.send(msg);
                })
                .catch(function (error) {
                    node.send(msg);
                });
        });
    }
    RED.nodes.registerType("weather-hacks", WeatherHacksNode);
}
