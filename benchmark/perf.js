(function() {
    'use strict';

    var async = require('async');
    var benchmark = require('async-benchmark');

    var parseString_044 = require('xml2js').parseString;
    var parseString_perf = require('../lib/xml2js').parseString;

    var simpleXML = "<root>Hello xml2js!</root>",
        badXML = "<root> bad xml </opps> </root>",
        complexXML = "<root><listtest>" +
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

  var benchParseString_044_Simple = function (done) {
      parseString_044(simpleXML, function(err, result) {
        done();
      });
    },
    benchParseString_perf_Simple = function (done) {
      parseString_perf(simpleXML, function(err, result) {
        done();
      });
    },
    benchParseString_044_Bad = function (done) {
      parseString_044(badXML, function(err, result) {
        done();
      });
    },
    benchParseString_perf_Bad = function (done) {
      parseString_perf(badXML, function(err, result) {
        done();
      });
    },
    benchParseString_044_Complex = function (done) {
      parseString_044(complexXML, function(err, result) {
        done();
      });
    },
    benchParseString_perf_Complex = function (done) {
      parseString_perf(complexXML, function(err, result) {
        done();
      });
    };

    async.series([
        function (cb) {
          benchmark('xml2js_0.4.4 - simple', benchParseString_044_Simple, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        },
        function(cb) {
          benchmark('xml2js_perf - simple', benchParseString_perf_Simple, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        },
        function (cb) {
          benchmark('xml2js_0.4.4 - Bad', benchParseString_044_Bad, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        },
        function(cb) {
          benchmark('xml2js_perf - Bad', benchParseString_perf_Bad, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        },
        function (cb) {
          benchmark('xml2js_0.4.4 - complex', benchParseString_044_Complex, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        },
        function(cb) {
          benchmark('xml2js_perf - complex', benchParseString_perf_Complex, function (err, event) {
            console.log(event.target.toString());
            cb();
          });
        }
      ]);
})();