$(document).ready(function(){
  let jsonData = '{"elements": ["Пункт 1", "Пункт 2", "Пункт 3"]}';
  let dataObject = JSON.parse(jsonData);
  let ul = $('<ul>');
  
  dataObject.elements.forEach(function(element) {
      $('<li>').text(element).appendTo(ul);
  });
  
  $('body').append(ul);
  console.log($('body').children());
  
  let table = $('<table>').addClass('myTable');
  
  let tr1 = $('<tr>').appendTo(table);
  $('<th>').css('background-color', 'green').appendTo(tr1).text('Time');
  $('<th>').css('background-color', 'green').appendTo(tr1).text('Present');
  $('<th>').css('background-color', 'green').appendTo(tr1).text('Past');
  $('<th>').css('background-color', 'green').appendTo(tr1).text('Future');
  
  let tr2 = $('<tr>').appendTo(table);
  $('<td>').css('background-color', 'green').appendTo(tr2).text('+');
  $('<td>').css('background-color', 'lightblue').appendTo(tr2).text('I dance');
  $('<td>').css('background-color', 'lightblue').appendTo(tr2).text('I danced');
  $('<td>').css('background-color', 'lightblue').appendTo(tr2).text('I will dance');
  
  let tr3 = $('<tr>').appendTo(table);
  $('<td>').css('background-color', 'green').appendTo(tr3).text('-');
  $('<td>').css('background-color', 'lightblue').appendTo(tr3).text('I dont dance');
  $('<td>').css('background-color', 'lightblue').appendTo(tr3).text('I didnt dance');
  $('<td>').css('background-color', 'lightblue').appendTo(tr3).text('I will not dance');
  
  let tr4 = $('<tr>').appendTo(table);
  $('<td>').css('background-color', 'green').appendTo(tr4).text('?');
  $('<td>').css('background-color', 'lightblue').appendTo(tr4).text('Do I dance?');
  $('<td>').css('background-color', 'lightblue').appendTo(tr4).text('Did I danced?');
  $('<td>').css('background-color', 'lightblue').appendTo(tr4).text('Will I dance?');
  
  table.appendTo('body');
  table.addClass('styledTable');
  
  let isDescriptionShown = false;
  $('th').hover(function() {
      if (!isDescriptionShown) {
          let description;
          switch ($(this).text()) {
              case 'Present':
                  description = 'События, произошедшие в настоящем времени';
                  break;
              case 'Past':
                  description = 'События, которые произошли в прошлом времени';
                  break;
              case 'Future':
                  description = 'События, которые произойдут в будущем времени';
                  break;
              default:
                  description = 'Описание времени отсутствует';
                  break;
          }
          alert(description);
          isDescriptionShown = true;
      }
  }, function() {
      isDescriptionShown = false;
  });
  
  $('.switch-btn').click(function() {
      if ($(this).hasClass('switch-btn-on')) {
          $(this).removeClass('switch-btn-on').addClass('switch-btn-off').text('Off');
      } else {
          $(this).removeClass('switch-btn-off').addClass('switch-btn-on').text('On');
      }
  });
});
