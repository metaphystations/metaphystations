
var bgs = ["url('http://metaphystations.s3-website.ca-central-1.amazonaws.com/IMG_3868_scl.jpg')",
           "url('http://metaphystations.s3-website.ca-central-1.amazonaws.com/IMG_4751_scl.jpg')",
           "url('http://metaphystations.s3-website.ca-central-1.amazonaws.com/IMG_4894_scl.jpg')",
           "url('http://metaphystations.s3-website.ca-central-1.amazonaws.com/rishilayer_scl.jpg')",
           "url('http://metaphystations.s3-website.ca-central-1.amazonaws.com/IMG_6103_scl.jpg')"]
var idx = Math.round(Math.random()*(bgs.length-1));
var jumbo = document.getElementsByClassName("jumbotron")[0];
jumbo.style["background-image"] = bgs[idx];

