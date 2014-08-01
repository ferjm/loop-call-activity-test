window.addEventListener("load", function onload() {
  var token = document.getElementById("token");
  var callButton = document.getElementById("call-button");
  callButton.addEventListener("click", function() {
    if (!token || !token.value || !token.value.length) {
      return;
    }
    new MozActivity({
      name: "loop-call",
      data: {
        type: "loop/token",
        token: token.value
      }
    });
  });  
});
