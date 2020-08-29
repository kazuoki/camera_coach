new Vue({
  el:'#practice',
  data:{
    activeMessage:'advice__message1', /*アドバイスメッセージ*/
    activeTab:'tabs-1',/*用語解説タブの切り替え*/
  },
});

document.getElementById("shutter").style.display ="none";


function toggle(){
  // const number1 = document.getElementById("f").value;
  const number11 = document.getElementById("f_2").value;
  // const number2 = document.getElementById("ss").value;
  // const number3 = document.getElementById("iso").value;
  // const str1 = number1;
  const str11 = number11;
  // const str2 = number2;
  // const str3 = number3;
  // const result1 = Number( str1 ); //引数に文字列を代入
  const result11 = Number( str11 ); //引数に文字列を代入
  // const result2 = Number( str2 ); //引数に文字列を代入
  // const result3 = Number( str3 ); //引数に文字列を代入
  // const sum = result1+result2+result3;
  const sum2 = result11;
  // console.log(sum);


  if(sum2===11){
    document.getElementById("preview__2").setAttribute("src","image/preview_2_1.jpg");
    // document.getElementById("onepoint").setAttribute("src","image/brightness3.png");
    dummy__shutter.style.display = "inline-block";
    // dummy__shutter.style.display = "none";
    dummy__shutter.style.opacity = "0.1";
    shutter.style.display = "none";
    // shutter.style.display = "block";
    // $('#onepoint').text("暗くて何も見えない (_ _)")
  }else if(sum2 === 12 ) {
    document.getElementById("preview__2").setAttribute("src","image/preview_2_2.jpg");
    // document.getElementById("onepoint").setAttribute("src","image/brightness4.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.2";
    shutter.style.display = "none";
    // $('#onepoint').text("まだまだ見えない ~_~;")
  　 }else if(sum2 === 13 ) {
    //シャッターを押せる設定
    document.getElementById("preview__2").setAttribute("src","image/preview_2_3.jpg");
    // document.getElementById("onepoint").setAttribute("src","image/brightness8.png");
    shutter.style.display = "block";
    dummy__shutter.style.opacity = "1.0";
    dummy__shutter.style.display = "none";
    // $('#onepoint').text("シャッターを押してみよう！")
  }
}


// 画像ロード中の表示エリアのサイズ（px）
const initialSize = 60;

// 拡大表示をウインドウの端から何px空けるか
const padding = 100;

// 各アニメーションの時間（ミリ秒）
const animDuration = 300;

// img要素を表示する
const showImage = (img) => {
  const $img = $(img);

  // ウインドウの幅と高さを取得
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();

  // ウインドウのアスペクト比を計算
  const windowAspectRatio = windowWidth / windowHeight;
  // 画像のアスペクト比を計算
  const imageAspectRatio = img.width / img.height;

  // ウインドウと画像のどちらが横に長いかによって
  // 表示サイズを決める
  let dispWidth;
  let dispHeight;
  if (windowAspectRatio > imageAspectRatio) {
    // 画像の方が縦に長い場合
    dispHeight = windowHeight - padding;
    dispWidth = dispHeight * imageAspectRatio;
  } else {
    // 画像の方が横に長い場合
    dispWidth = windowWidth - padding;
    dispHeight = dispWidth / imageAspectRatio;
  }

  // 画像の表示サイズをセット
  $img.css({
    // width: `${dispWidth}px`,
    // width: `70%`,
    // height: `${dispHeight}px`,
    height: `480px`,
    display: 'none',
  });

  // img要素を.popup-content内に挿入
  $('.popup-content').html(img);

  // 表示エリアの拡大アニメーション
  $('.popup-content').animate(
    {
      // width: `${dispWidth}px`,
      // height: `${dispHeight}px`,
      // height: `480px`,
      // 下記2つは上下左右中央に置くために必要
      // 'margin-left': `${-dispWidth / 2}px`,
      // 'margin-top': `${-dispHeight / 2}px`,
    },
    animDuration,
    'swing',
    () => {
      // 拡大アニメーションが終わったら画像をフェードイン
      $img.fadeIn(animDuration);
    },
  );
};

// imageUrlの画像をポップアップで表示する関数
const showPopup = (imageUrl) => {
  // 前回挿入したimg要素を削除
  $('.popup-content').html('');

  // オーバーレイ（黒背景と画像表示エリア）をフェードイン
  $('.overlay').fadeIn(animDuration);

  // 画像表示エリアを小さな四角にする
  $('.popup-content').css({
    // width: `${initialSize}px`,
    // height: `${initialSize}px`,
    // height: `480px`,
    // 下記2つは上下左右中央に置くために必要
    // 'margin-left': `${-initialSize / 2}px`,
    // 'margin-top': `${-initialSize / 2}px`,
  });

  // img要素を作成して拡大画像をロードする
  const img = new Image();
  img.onload = () => {
    // 画像のロードが終わるとここが実行される
    showImage(img);
  };
  img.src = imageUrl;
};

// ポップアップを閉じる
const closePopup = () => {
  $('.overlay').fadeOut(animDuration);
};

// .popup要素がクリックされたらポップアップを表示
$('.popup').on('click', (e) => {
  e.preventDefault();
  const imageUrl = $(e.currentTarget).attr('href');
  showPopup(imageUrl);
});

// オーバーレイがクリックされたらポップアップを閉じる
$('.overlay').on('click', (e) => {
  e.preventDefault();
  closePopup();
});