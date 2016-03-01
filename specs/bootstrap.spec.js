"use strict";

var env = require("jsdom").env,
  assert = require("chai").assert,
  express = require("express"),
  app = express();

app.use(express.static("public"));
var listener = app.listen(0);

describe("Step 1 - check bootstrap navbar with navbar-right", function () {
  var window;
  before(function (done) {
    this.timeout(5000);
    env({
      url: "http://127.0.0.1:" + listener.address().port + "/index.html",
      features: {
        FetchExternalResources: ['script']
      },
      done: function (errors, w) {
        window = w;
        done();
      }
    });
  });

  it("It must have bootstrap navbar specified in nav tag", function () {
    assert.equal(window.jQuery("nav").attr("class"), "navbar");
  });

  it("It must have inner bootstrap ul specified with elements on right side of page", function () {
    assert.equal(window.jQuery("nav.navbar").find("ul").attr("class"), "nav navbar-nav navbar-right");
  });
});

describe("Step 2 - check bootstrap carousel", function () {
  var window;
  before(function (done) {
    this.timeout(5000);
    env({
      url: "http://127.0.0.1:" + listener.address().port + "/index.html",
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script']
      },
      done: function (errors, w) {
        window = w;
        done();
      }
    });
  });

  it("It must have carousel with id myCarousel and bootstrap carousel classes", function () {
    assert.equal(window.jQuery("#myCarousel").length, 1);
    assert.equal(window.jQuery("#myCarousel").attr("class"), "carousel slide");
  });

  it("Carousel must have indicators", function () {
    assert.equal(window.jQuery("#myCarousel").find("ol").attr("class"), "carousel-indicators");
  });

  it("Carousel must have wrappers", function () {
    assert.equal(window.jQuery("#myCarousel").find("div.carousel-inner").length, 1);
  });

  it("Carousel wrappers items must include one active item", function () {
    assert.equal(window.jQuery("#myCarousel").find("div.carousel-inner").find("div.item").attr("class"), "item active");
  });

  it("Carousel wrappers must have atleast 3 items", function () {
    assert.isAtLeast(window.jQuery("#myCarousel").find("div.carousel-inner").find("div.item").length, 3);
  });

  it("Carousel wrappers must have images with bootstrap image class in items", function () {
    assert.isAtLeast(window.jQuery("#myCarousel").find("div.carousel-inner").find("div.item").find("img").length, 3);
    assert.isDefined(window.jQuery("#myCarousel").find("div.carousel-inner").find("div.item").find("img").attr("class"), "img-responsive");
  });

  it("Carousel wrappers must have left and right controls", function () {
    assert.equal(window.jQuery("#myCarousel").find("div.carousel-inner").find("a.left").attr("class"), "left carousel-control");
    assert.equal(window.jQuery("#myCarousel").find("div.carousel-inner").find("a.right").attr("class"), "right carousel-control");
  });
});

describe("Step 3 - check bootstrap grid", function () {
  var window;
  before(function (done) {
    this.timeout(5000);
    env({
      url: "http://127.0.0.1:" + listener.address().port + "/index.html",
      features: {
        FetchExternalResources: ['script']
      },
      done: function (errors, w) {
        window = w;
        done();
      }
    });
  });

  it("Bootstrap grid must use container and row", function () {
    assert.equal(window.jQuery("#mygrid").attr("class"), "container-fluid");
    assert.equal(window.jQuery("#mygrid").find("div.row-fluid").length, 2);
  });

  it("Bootstrap grid divide it into 4 columns", function () {
    assert.equal(window.jQuery("#mygrid").find("div.col-md-2").length, 4);
  });

  it("Bootstrap grid columns must have img tag with responsive and circular image bootstrap classes", function () {
    assert.equal(window.jQuery("#mygrid").find("div.col-md-2").find("img").attr("class"), "img-circle img-responsive");
  });
});

describe("Step 4 - check bootstrap progressbar", function () {
  var window;
  before(function (done) {
    this.timeout(5000);
    env({
      url: "http://127.0.0.1:" + listener.address().port + "/index.html",
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script']
      },
      done: function (errors, w) {
        window = w;
        done();
      }
    });
  });

  it("Progressbar must have atleast 4 progressbars with respective bootstrap classes", function () {
    assert.isAtLeast(window.jQuery("#myprogressbar").find("div.progress").length, 4);
    assert.isAtLeast(window.jQuery("#myprogressbar").find("div.progress").find("div.progress-bar").length, 4);
  });
});

describe("Step 5 - check bootstrap form", function () {
  var window;
  before(function (done) {
    this.timeout(5000);
    env({
      url: "http://127.0.0.1:" + listener.address().port + "/index.html",
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script']
      },
      done: function (errors, w) {
        window = w;
        done();
      }
    });
  });

  it("Form must be horizontal with respective bootstrap classes", function () {
    assert.equal(window.jQuery("#contact").find("form.form-horizontal").length, 1);
  });

  it("Form must have atleast 4 fields and one submit form button", function () {
    assert.isAtLeast(window.jQuery("#contact").find("form.form-horizontal").find("div.form-group").length, 5);
    assert.equal(window.jQuery("#contact").find("form.form-horizontal").find("div.form-group").find("button").attr("type"), "submit");
  });
});
