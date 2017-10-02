
    
      // prefetch images to cache
      
      var imgHexDown = new Image();
      imgHexDown = "icons/click_hex.png";
      var imgHexHover = new Image();
      imgHexHover = "icons/hover_hex.png";
      var imgHexOut = new Image();
      imgHexOut = "icons/default_hex.png";
      var imgPentDown = new Image();
      imgPentDown = "icons/click_pent.png";
      var imgPentHover = new Image();
      imgPentHover = "icons/hover_pent.png";
      var imgPentOut = new Image();
      imgPentOut = "icons/default_pent.png";
      var imgSquareDown = new Image();
      imgSquareDown = "icons/click_square.png";
      var imgSquareHover = new Image();
      imgSquareHover = "icons/hover_square.png";
      var imgSquareOut = new Image();
      imgSquareOut = "icons/default_square.png";
      var imgTriDown = new Image();
      imgTriDown = "icons/click_tri.png";
      var imgTriHover = new Image();
      imgTriHover = "icons/hover_tri.png";
      var imgTriOut = new Image();
      imgTriOut = "icons/default_tri.png";
      var imgLineDown = new Image();
      imgLineDown = "icons/click_line.png";
      var imgLineHover = new Image();
      imgLineHover = "icons/hover_line.png";
      var imgLineOut = new Image();
      imgLineOut = "icons/default_line.png";
      var imgBinduDown = new Image();
      imgBinduDown = "icons/click_bindu.png";
      var imgBinduHover = new Image();
      imgBinduHover = "icons/hover_bindu.png";
      var imgBinduOut = new Image();
      imgBinduOut = "icons/default_bindu.png";
      
      // swap functions for mouse down
      function hexDown() {
        document.hex.src = imgHexDown;
      };
      function hexHover() {
        document.hex.src = imgHexHover;
      };
      function hexOut() { // should be cached already...
        document.hex.src = "icons/default_hex.png";
      };
      function pentDown() {
        document.pent.src = imgPentDown;
      };
      function pentHover() {
        document.pent.src = imgPentHover;
      };
      function pentOut() { // should be cached already...
        document.pent.src = "icons/default_pent.png";
      };
      function squareDown() {
        document.square.src = imgSquareDown;
      };
      function squareHover() {
        document.square.src = imgSquareHover;
      };
      function SquareOut() { // should be cached already...
        document.squre.src = "icons/default_square.png";
      };
      function triDown() {
        document.tri.src = imgTriDown;
      };
      function triHover() {
        document.tri.src = imgTriHover;
      };
      function triOut() { // should be cached already...
        document.tri.src = "icons/default_tri.png";
      };
      function lineDown() {
        document.line.src = imgLineDown;
      };
      function lineHover() {
        document.line.src = imgLineHover;
      };
      function lineOut() { // should be cached already...
        document.line.src = "icons/default_line.png";
      };
      function binduDown() {
        document.bindu.src = imgBinduDown;
      };
      function binduHover() {
        document.bindu.src = imgBinduHover;
      };
      function binduOut() { // should be cached already...
        document.bindu.src = "icons/default_bindu.png";
      };