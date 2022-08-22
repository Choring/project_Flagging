// 닷홈 주소 및 토근에 대한 부분 ~~ 시작 ~~
var yhlee_url = "http://ds6546.dothome.co.kr";//용현
var belikhs_url = "http://belikhs.dothome.co.kr";//희수
var hipark_url = "http://zktyvod.dothome.co.kr";//혜인
var Icjo_url = "http://dlscjf351.dothome.co.kr";//인철
var sykim_url = "http://ksy990609.dothome.co.kr";//수연

var DOTHOME_URL = "";

// 네이버 api 키
var yhlee_naver_key = "oZgZJRS6zEgnOla7yBQM";//용현
var belikhs_naver_key = "6ueCHw8Yjh8PG8vgJp9f";//희수
var hipark_naver_key = "SQvy08B2oXUmk1GATmiW";//혜인
var Icjo_naver_key = "c9epzfAmP96SfDHxEC7B";//인철
var sykim_naver_key = "uBHmHIRT5cUmTolR_jk_";//수연

var NAVER_API_KEY = "";

// 카톡 api 키
var yhlee_kakao_key = "759bb2e1516c5a9286c8f2a9d6ab24ca";//용현
var belikhs_kakao_key = "02421cc31b7482d582407e7a25e41aa6";//희수
var hipark_kakao_key = "03a89a334bb9dc48ee01cf68b10897cc";//혜인
var Icjo_kakao_key = "8b09f07c9ea51d7c3992c7388bc59bf8";//인철
var sykim_kakao_key = "0b15c1913e32e9cc754fcfd452aaa1b1";//수연

var KAKAO_API_KEY = "";

function set_URL()
{
    // 본인꺼 빼고 나머지 4개는 주석처리 
    DOTHOME_URL = yhlee_url;//용현
    NAVER_API_KEY = yhlee_naver_key;//용현
    KAKAO_API_KEY = yhlee_kakao_key;//용현

    // DOTHOME_URL = belikhs_url;//희수
    // NAVER_API_KEY = belikhs_naver_key;//희수
    // KAKAO_API_KEY = belikhs_kakao_key;//희수

    // DOTHOME_URL = hipark_url;//혜인
    // NAVER_API_KEY = hipark_naver_key;//혜인
    // KAKAO_API_KEY = hipark_kakao_key;//혜인

    // DOTHOME_URL = Icjo_url;//인철
    // NAVER_API_KEY = Icjo_naver_key;//인철
    // KAKAO_API_KEY = Icjo_kakao_key;//인철

    // DOTHOME_URL = sykim_url;//수연
    // NAVER_API_KEY = sykim_naver_key;//수연
    // KAKAO_API_KEY = sykim_kakao_key;//수연
}
set_URL();
// 닷홈 주소 및 토근에 대한 부분 ~~ 끝 ~~


//사용자의 기본 정보
var USER_DATA = {
    EMAIL : "",
    NICK_NAME : "",
    MILEAGE : 0
}


// 현재 나의 ID 및 닉네임을 저장 
USER_DATA.EMAIL = localStorage.getItem('email');
USER_DATA.NICK_NAME = localStorage.getItem('nick_name');