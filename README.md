# node-red-contrib-lwws
A Node-RED node for [Livedoor Weather Web Service](http://weather.livedoor.com/weather_hacks/).

This node provides pinpoint weather forecasts in Japan.


## Install 

```
cd ~/.node-red
npm install node-red-contrib-lwws
```

## Usage

If this node is triggered, it returns an object including detail weather forecast in `msg.payload`. Format specification of the object is compatible with [LSSW JSON data format](http://weather.livedoor.com/weather_hacks/webservice).


A location of weather forecast is configurable with [city ID](http://weather.livedoor.com/forecast/rss/primary_area.xml) from the node option. (Tokyo is configured by default)