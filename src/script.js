$(document).ready(function() {
    $("#btn").click(function(){
      $.getJSON("https://api.coindesk.com/v1/bpi/currentprice/EUR.json", function(data) {
        console.log(data);
        var value= data.bpi.USD.rate_float;
        console.log(value);

        //get string from datepicker

        var date = new Date($('#dateipt').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        var close = ([day, month, year].join('-'));

        //hardcode datepicker value for testing
        //TODO: fix datepicker
        var close= "2017-01-02";
        console.log(close);

        //check if the picked date is valid
        if (isValidDate(close)) {

          $.getJSON("https://api.coindesk.com/v1/bpi/historical/close.json?start=" + close + "&end=" + close, function(closure) {
            console.log(closure);
            //hardcode close value for testing
            var closeValue=1;
            //var closeValue= "closure.bpi[\"\"" +close+ "\"\"]";
            //console.log(eval(closeValue));
            //var test= closure.bpi[\201\7-\01-\02];
            //console.log(test);
            var revenue= closeValue - value;
            console.log(revenue);
            if (revenue < 0) {
                $('#msg').text("You would have lost " + (-1 * revenue) + " dollars by todays index!")
            }
            if (revenue > 0) {
                $('#msg').text("You would have earned " + (-1 * revenue) + " dollars by todays index!")
            }

          });
        }
        else {
          alert("Incorrect date!");
        }
      });
  });
});

function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0,10) === dateString;
}
