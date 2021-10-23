// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const Sapporo = { lat: 43.068564, lng: 141.3507138 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: Sapporo,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">d.name</h1>' +
    '<div id="bodyContent">' +
    '<p>Attribution: Uluru, <a href="http://www.jr-tower.com/">' +
    "詳細</a> " +
    "</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: Sapporo,
    map,
    title: "Sapporo Station",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}



                // var infoWindow = new google.maps.InfoWindow();
                // // var d.name =
                //     '<div id="content">' +
                //     '<div id="siteNotice">' +
                //     "</div>" +
                //     '<h1 id="firstHeading" class="firstHeading">'+
                //     {{ d.name }} +
                //     '</h1>' +
                //     '<div id="bodyContent">' +
                //     '<p><a href="http://www.jr-tower.com/">' +
                //     "詳細へ</a> " +
                //     "</p>" +
                //     "</div>" +
                //     "</div>";


                    //         html: {
                    //             name: d.name,
                    //             url: '<a href="http://www.jr-tower.com/">詳細</a>'
                    //        },
                    // //                             marker.addListener('click', () => {
                    //     currentWindow && currentWindow.close();
                    //     // const infoWindow = new google.maps.InfoWindow({content: d.name});
                    //     infoWindow.setContent(html);
                    //     infoWindow.open(map, marker);
                    //     currentWindow = infoWindow;
                    // });

                     marker.addListener('click', () => {
                                currentWindow && currentWindow.close();
                                contentString =
                                '<div id="content">' +
                                '<div id="siteNotice">' +
                                "</div>" +
                                '<h1 id="firstHeading" class="firstHeading">{% autoescape on %}{{data.name}}{% endautoescape %}</h1>' +
                                // '<div id="bodyContent">' +
                                // '<p>' +
                                // '<a href="{% url 'space:index' placeid=data.id %}">' +
                                // "詳細へ</a> " +
                                // "</p>" +
                                // "</div>" +
                                "</div>";
                                const infoWindow = new google.maps.InfoWindow(contentString);
                                // infoWindow.setContent(d.name, html);
                                infoWindow.open(map, marker);
                                currentWindow = infoWindow;
                            });


                      const windowContent =
                            '<div id="content">' +
                            '<h3 id="firstHeading" class="firstHeading">'+ d.name +' </h3>' +
                            '<div id="bodyContent">' +
                            '<p>'+ d.adress +' '+ 'id:'+ d.id +'</p>' +
                            // '<p><a href="{% url "space:index" placeid=4 %}">詳細</a> ' +
                            '<p><a href="{% url "space:index" placeid=placeid %}">詳細</a>' + '</p>' +
                            '<p>混雑さ：'+
                            '<span class="star5_rating" data - rate="'+ d.para +'" ></span >'+
                            '</p>'+
                            '</div>'+
                            '</div>';