(function ($) {
    'use strict';

    // _가 붙으면 건들이지 말아라
    var _ts = _ts || {};

    // Document Ready
    $(function () {
        _init();
        _initEvent();
    });

    // 정의를 내리는 부분
    function _init() {

    }


    // 기능을 실행하는 부분
    function _initEvent() {
        initMap();
    }

    function initMap() {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new daum.maps.LatLng(37.5049135, 127.024819), //지도의 중심좌표.
            level: 3,//지도의 레벨(확대, 축소 정도)
            draggable: false
        };

        var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

        var markerPosition  = new daum.maps.LatLng(37.5049135, 127.024819);

// 마커를 생성합니다
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

// 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var content = '<div class ="label"><span class="left"></span><span class="center">투썸플레이스 신논현역점</span><span class="right"></span></div>';

// 커스텀 오버레이가 표시될 위치입니다
        var position = new daum.maps.LatLng(37.5049135, 127.024819);

// 커스텀 오버레이를 생성합니다
        var customOverlay = new daum.maps.CustomOverlay({
            position: position,
            content: content
        });
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
    }



}(jQuery));