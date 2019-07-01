var postUrl = '<slack webhookのurl>';

function setTrigger(){
  var setTime = new Date();
  setTime.setHours(17);
  setTime.setMinutes(30); 
  ScriptApp.newTrigger('startTime').timeBased().at(setTime).create();
  
  setTime.setHours(18);
  setTime.setMinutes(00); 
  ScriptApp.newTrigger('endTime').timeBased().at(setTime).create();

}

function startTime() {
  var message = '読書タイム開始です。'
  myFunction(message)
}

function endTime() {
  var message = '読書タイム終了です。'
  myFunction(message)
}

function myFunction(message) {
  var jsonData =
  {
     "text" : message
  };
  var payload = JSON.stringify(jsonData);

  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  UrlFetchApp.fetch(postUrl, options);
}

