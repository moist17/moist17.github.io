  $(document).ready(function(){//When the document is fully loaded
    $.ajax({//retrieve the data that is...
      url: 'expenditure_new.csv',//..at this location
      dataType: 'text',//and of type "text"
  }).done(function(data){
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table id="myTable">';
    var paymethod = -1;
    for (var r = 0; r < allRows.length; r++) {
      if (r === 0) {
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var cells = allRows[r].split(',');
      for (var c = 0; c < cells.length; c++) {
        if (r === 0) {
          table += '<th>';
          table += cells[c];
          table += '</th>';
          if(cells[c] === "Payment" || cells[c] === "payment"){
            paymethod = c;
          }
        } else {
          table += '<td>';
          if(c === paymethod){
            table += "<img class='paymethod' src=" + cells[c] + " style='width: 50px;'></img>";
          }
          else{
            table += cells[c];
          }
          table += '</td>';
        }
      }
      if (r === 0) {
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    }
    table += '</tbody>';
    table += '</table>';
    $('#expendituredata').append(table);
      });
    });