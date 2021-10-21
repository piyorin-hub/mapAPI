// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }

<<<<<<< HEAD
var map;
var marker = [];
var infoWindow = [];
var markerData =[
    { 
        name:'紀伊國屋',
        lat: 43.067278,
        lng: 141.348365 
    },
    { 
        name:'サイゼリア',
        lat: 43.069564, 
        lng: 141.351850
    }
]

=======
>>>>>>> 1308379721d5e8c5927d81d903ab282669fbce66
// 現在地取得処理
function initMap() {
    // Geolocation APIに対応している
    if (navigator.geolocation) {
        // 現在地を取得
        navigator.geolocation.getCurrentPosition(
            // 取得成功した場合
            function (position) {
                // 緯度・経度を変数に格納
<<<<<<< HEAD
                // var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapLatLng = new google.maps.LatLng(43.068661, 141.350755)　 //札幌駅の座標（動画用)
                // マップオプションを変数に格納
                var mapOptions = {
                    zoom: 15,       
                    maxZoom: 15,   // 拡大倍率
                    center: mapLatLng  // 緯度・経度
                };
                // マップオブジェクト作成
                map = new google.maps.Map(
=======
                var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // マップオプションを変数に格納
                var mapOptions = {
                    zoom: 15,          // 拡大倍率
                    center: mapLatLng  // 緯度・経度
                };
                // マップオブジェクト作成
                var map = new google.maps.Map(
>>>>>>> 1308379721d5e8c5927d81d903ab282669fbce66
                    document.getElementById("map"), // マップを表示する要素
                    mapOptions         // マップオプション
                );
                //　マップにマーカーを表示する
<<<<<<< HEAD
                var currentmarker = new google.maps.Marker({
                    map: map,             // 対象の地図オブジェクト
                    position: mapLatLng   // 緯度・経度
                });

                 // マーカー毎の処理
                for (var i = 0; i < markerData.length; i++) {
                    markerLatLng = new google.maps.LatLng({ lat: markerData[i]['lat'], lng: markerData[i]['lng'] }); // 緯度経度のデータ作成
                    marker[i] = new google.maps.Marker({ // マーカーの追加
                        position: markerLatLng, // マーカーを立てる位置を指定
                        map: map // マーカーを立てる地図を指定
                    });

                    infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
                        content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
                    });
                }
=======
                var marker = new google.maps.Marker({
                    map: map,             // 対象の地図オブジェクト
                    position: mapLatLng   // 緯度・経度
                });
>>>>>>> 1308379721d5e8c5927d81d903ab282669fbce66
            },
            // 取得失敗した場合
            function (error) {
                // エラーメッセージを表示
                switch (error.code) {
                    case 1: // PERMISSION_DENIED
                        alert("位置情報の利用が許可されていません");
                        break;
                    case 2: // POSITION_UNAVAILABLE
                        alert("現在位置が取得できませんでした");
                        break;
                    case 3: // TIMEOUT
                        alert("タイムアウトになりました");
                        break;
                    default:
                        alert("その他のエラー(エラーコード:" + error.code + ")");
                        break;
                }
            }
        );
        // Geolocation APIに対応していない
    } else {
        alert("この端末では位置情報が取得できません");
    }
<<<<<<< HEAD
    
}
=======
}

>>>>>>> 1308379721d5e8c5927d81d903ab282669fbce66
