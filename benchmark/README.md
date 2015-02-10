### how to

 - `cd benchmark`
 - `npm install`
 - `node perf.js`



### Perf report

#### On Node 0.10.36

 - xml2js_0.4.4 - simple x 544 ops/sec ±1.99% (79 runs sampled)
 - xml2js_perf - simple x 536 ops/sec ±2.28% (75 runs sampled)
 - xml2js_0.4.4 - Bad x 519 ops/sec ±3.07% (33 runs sampled)
 - xml2js_perf - Bad x 519 ops/sec ±2.68% (74 runs sampled)
 - xml2js_0.4.4 - complex x 421 ops/sec ±4.23% (25 runs sampled)
 - xml2js_perf - complex x 416 ops/sec ±1.95% (60 runs sampled)

#### On Node 0.12.0

 - xml2js_0.4.4 - simple x 468 ops/sec ±2.55% (73 runs sampled)
 - xml2js_perf - simple x 516 ops/sec ±3.65% (69 runs sampled)
 - xml2js_0.4.4 - Bad x 488 ops/sec ±3.10% (49 runs sampled)
 - xml2js_perf - Bad x 472 ops/sec ±3.45% (47 runs sampled)
 - xml2js_0.4.4 - complex x 394 ops/sec ±1.76% (76 runs sampled)
 - xml2js_perf - complex x 392 ops/sec ±2.00% (76 runs sampled)

Overall performing little bad on Node@0.12.0 as compared to Node@0.10.36