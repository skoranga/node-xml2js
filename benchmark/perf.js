(function() {
    'use strict';

    var Benchmark = require('benchmark');
    var suite = new Benchmark.Suite();

    var parseString_044 = require('xml2js').parseString;
    var parseString_perf = require('../lib/xml2js').parseString;

    var simpleXML = "<root>Hello xml2js!</root>";
    var complexXML = "<root><listtest>" +
            "<item>" +
              "This is      " +
              "character    " +
              "data!        " +
              "<subitem>Foo(1)</subitem>" +
              "<subitem>Foo(2)</subitem>" +
              "<subitem>Foo(3)</subitem>" +
              "<subitem>Foo(4)</subitem>" +
            "</item>" +
            "<item>Qux.</item>" +
            "<item>Quux.</item>" +
          "</listtest>" +
          "<arraytest>" +
            "<item>" +
              "<subitem>Baz.</subitem>" +
            "</item>" +
            "<item>" +
              "<subitem>Foo.</subitem>" +
              "<subitem>Bar.</subitem>" +
            "</item>" +
          "</arraytest>" +
          "<emptytest>  </emptytest></root>";

    suite.add('xml2js_0.4.4 - simple', function() {
        parseString_044(simpleXML);
    })
    .add('xml2js_perf - simple', function() {
        parseString_perf(simpleXML);
    })
    .add('xml2js_0.4.4 - complex', function() {
        parseString_044(complexXML);
    })
    .add('xml2js_perf - complex', function() {
        parseString_perf(complexXML);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .run({ 'async': true });
})();