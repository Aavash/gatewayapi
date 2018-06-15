window.onload= function () {

$(document).ready(function() {
    var url = 'http://127.0.0.1:8000/api/sms';
    var datatable = $('#smsInfo').DataTable({
    });

        $(document).ready(function() {

    $.ajax({
              method: 'GET',
                url: url,
                success: function(data){
                    next_url = data.next;
                    prev_url = data.previous;
                    data = data.results;
                    for (var i = 0; i < data.length; i++) {
                    datatable.row.add( [
                        data[i].id,
                        data[i].phone_no,
                        data[i].message,
                        data[i].sent_date.slice(0,10) + " at " + data[i].sent_date.slice(11,19),
                               ] ).draw( );
                    }

                },
                error: function(error_data){
                    console.log("error");
                }

            })

   $("#prev").click(function() {
            $.ajax({
              method: 'GET',
                url: prev_url,
                success: function(data){
                next_url = data.next
                prev_url = data.previous
                datatable.clear().draw();
                data= data.results
                for (var i = 0; i < data.length; i++) {
                    datatable.row.add( [
//                        data[i].id,
                        data[i].phone_no,
                        data[i].message,
                        data[i].sent_date.slice(0,10) + " at " + data[i].sent_date.slice(11,19),
                               ] ).draw();
                    }

                next_url = data.next;
                prev_url = data.prev;
                          },
                error: function(error_data){
                    console.log("error");
                }

              })

            });


 $("#next").click(function() {
            $.ajax({
              method: 'GET',
                url: next_url,
                success: function(data){
                next_url = data.next
                prev_url = data.previous
                data= data.results
                datatable.clear().draw();
                for (var i = 0; i < data.length; i++) {
                    datatable.row.add( [
//                        data[i].id,
                        data[i].phone_no,
                        data[i].message,
                        data[i].sent_date.slice(0,10) + " at " + data[i].sent_date.slice(11,19),
                               ] ).draw();
                    }
                          },
                error: function(error_data){
                    console.log("error");
                }

              })

            });


        });
    });

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    var btn = document.getElementById("btn");
//    var url = 'http://127.0.0.1:8000/api/sms';
//    var next_url = '';
//    var prev_url = '';
//
//window.onload= function () {
//
//$(document).ready(function() {
//
//
//    var datatable = $('#smsInfo').DataTable({
//        'processing': true
//
//    });
//
//        $(document).ready(function() {
//
//         nextButton(next_url, datatable);
//         prevButton(prev_url, datatable);
//         printRow(url, datatable);
//
//
//function printRow(print_url, datatable){
//    $.ajax({
//              method: 'GET',
//                url: print_url,
//                success: function(data){
//                    next_url = data.next
//                    prev_url = data.previous
//                    console.log(next_url)
//                    console.log(prev_url)
//                    data = data.results
//                    for (var i = 0; i < data.length; i++) {
//                    datatable.row.add( [
////                        data[i].id,
//                        data[i].phone_no,
//                        data[i].message,
//                        data[i].sent_date.slice(0,10) + " at " + data[i].sent_date.slice(11,19),
//                               ] ).draw( false );
//                    }
//
//                },
//                error: function(error_data){
//                    console.log("error");
//                }
//
//            })}
//
// function nextButton(next_url, datatable){
//
// $("#next").click(function() {
//  console.log(next_url)
//            $.ajax({
//              method: 'GET',
//                url: next_url,
//                success: function(data){
//
//                    printRow(next_url, datatable)
//                console.log(next_url)
//                          },
//                error: function(error_data){
//                    console.log("error");
//                }
//
//            })
//
//            }); }
//
// function prevButton(prev_url, datatable){
// $("#prev").click(function() {
//            $.ajax({
//              method: 'GET',
//                url: prev_url,
//                success: function(data){
//
//                    printRow(prev_url, datatable)
//                          },
//                error: function(error_data){
//                    console.log("error");
//                }
//
//            })
//
//            }); }
//
//
//
//                });
//    });
//}




/////////////////////////////////////////////////////////////////////////////////////////////////////////

//btn.addEventListener("click", function(){
//    var ourRequest = new XMLHttpRequest();
//	ourRequest.open("GET", url);
//	ourRequest.onload = function() {
//		var ourData = JSON.parse(ourRequest.responseText);
////		renderHTML(ourData);
//	}
//	ourRequest.send();
//
//})



//function renderHTML(data) {
//	var inner_container = document.createElement("div"), tr, td;
//
//    for (var i = 0; i < data.length; i++) {
//        tr = document.createElement("tr");
//        td_id = document.createElement("td");
//                tx_id = document.createTextNode(data[i].id);
//                td_id.appendChild(tx_id);
//                tr.appendChild(td_id);
//
//        td_phone_no = document.createElement("td");
//                tx_phone_no = document.createTextNode(data[i].phone_no);
//                td_phone_no.appendChild(tx_phone_no);
//                tr.appendChild(td_phone_no);
//
//        td_message = document.createElement("td");
//                tx_message = document.createTextNode(data[i].message);
//                td_message.appendChild(tx_message);
//                tr.appendChild(td_message);
//
//        td_sent_date = document.createElement("td");
//                tx_sent_date = document.createTextNode(data[i].sent_date);
//                td_sent_date.appendChild(tx_sent_date);
//                tr.appendChild(td_sent_date);
//
//        inner_container.appendChild(tr);
//    }
//
//    document.getElementById("smsInfo").appendChild( inner_container );
//
//}

