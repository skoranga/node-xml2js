### how to

 - `cd benchmark`
 - `npm install`
 - `node perf.js`



### Perf report

#### On Node 0.10.36

xml2js_0.4.4 - simple x 32,653 ops/sec ±0.99% (89 runs sampled)
xml2js_perf - simple x 33,222 ops/sec ±1.13% (91 runs sampled)
xml2js_0.4.4 - complex x 5,158 ops/sec ±1.24% (90 runs sampled)
xml2js_perf - complex x 5,343 ops/sec ±0.96% (91 runs sampled)

#### On Node 0.12.0

xml2js_0.4.4 - simple x 18,545 ops/sec ±1.86% (85 runs sampled)
xml2js_perf - simple x 19,299 ops/sec ±1.42% (85 runs sampled)
xml2js_0.4.4 - complex x 3,812 ops/sec ±1.69% (87 runs sampled)
xml2js_perf - complex x 3,774 ops/sec ±1.36% (92 runs sampled)

Overall performing bad as compared to Node@0.10.36 and not seeing much difference in Node@0.12.0