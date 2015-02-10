### how to

 - `cd benchmark`
 - `npm install`
 - `node perf.js`



### Perf report

#### On Node 0.10.36

 - xml2js_0.4.4 - simple x 536 ops/sec ±1.81% (77 runs sampled)
 - xml2js_perf - simple x 548 ops/sec ±2.25% (72 runs sampled)
 - xml2js_0.4.4 - complex x 411 ops/sec ±1.74% (51 runs sampled)
 - xml2js_perf - complex x 409 ops/sec ±1.78% (39 runs sampled)

#### On Node 0.12.0

 - xml2js_0.4.4 - simple x 476 ops/sec ±2.31% (74 runs sampled)
 - xml2js_perf - simple x 483 ops/sec ±2.73% (68 runs sampled)
 - xml2js_0.4.4 - complex x 391 ops/sec ±1.53% (39 runs sampled)
 - xml2js_perf - complex x 389 ops/sec ±3.61% (40 runs sampled)

Overall performing bad as compared to Node@0.10.36 and not seeing much difference in Node@0.12.0