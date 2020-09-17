new Vue({
  el:'#practice',
  data:{
    activeMessage:'advice__message1', /*アドバイスメッセージ*/
    activeTab:'tabs-1',/*用語解説タブの切り替え*/
  },
});

document.getElementById("shutter").style.display ="none";


function toggle(){
  const number1 = document.getElementById("f").value;
  const number2 = document.getElementById("ss").value;
  const number3 = document.getElementById("iso").value;
  const str1 = number1;
  const str2 = number2;
  const str3 = number3;
  const result1 = Number( str1 ); //引数に文字列を代入
  const result2 = Number( str2 ); //引数に文字列を代入
  const result3 = Number( str3 ); //引数に文字列を代入
  const sum = result1+result2+result3;
  console.log(sum);

  if(sum===3){
    document.getElementById("preview").setAttribute("src","image/preview3.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness3.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.1";
    shutter.style.display = "none";
  }else if(sum === 4 ) {
    document.getElementById("preview").setAttribute("src","image/preview4.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness4.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.2";
    shutter.style.display = "none";
  }else if(sum === 5 ) {
    document.getElementById("preview").setAttribute("src","image/preview5.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness5.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.4";
    shutter.style.display = "none";
  }else if(sum === 6 ) {
    document.getElementById("preview").setAttribute("src","image/preview6.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness6.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.6";
    shutter.style.display = "none";
  }else if(sum === 7 ) {
    document.getElementById("preview").setAttribute("src","image/preview7.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness7.png");
    dummy__shutter.style.display = "inline-block";
    dummy__shutter.style.opacity = "0.8";
    shutter.style.display = "none";
  　 }else if(sum === 8 ) {
    //シャッターを押せる設定
    document.getElementById("preview").setAttribute("src","image/preview8.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness8.png");
    shutter.style.display = "block";
    dummy__shutter.style.opacity = "1.0";
    dummy__shutter.style.display = "none";
  }else if(sum === 9 ) {
    document.getElementById("preview").setAttribute("src","image/preview9.png");
    document.getElementById("onepoint").setAttribute("src","image/brightness9.png");
    dummy__shutter.style.display = "inline-block";
    shutter.style.display = "none";
    dummy__shutter.style.opacity = "0.8";
  }

  // if(sum2===11){
  //   document.getElementById("preview__2").setAttribute("src","image/preview_2_1.jpg");
  //   dummy__shutter.style.display = "inline-block";
  //   dummy__shutter.style.opacity = "0.1";
  //   shutter.style.display = "none";
  // }else if(sum2 === 12 ) {
  //   document.getElementById("preview__2").setAttribute("src","image/preview_2_2.jpg");
  //   dummy__shutter.style.display = "inline-block";
  //   dummy__shutter.style.opacity = "0.2";
  //   shutter.style.display = "none";
  // 　 }else if(sum2 === 13 ) {
  //   document.getElementById("preview__2").setAttribute("src","image/preview_2_3.jpg");
  //   shutter.style.display = "block";
  //   dummy__shutter.style.opacity = "1.0";
  //   dummy__shutter.style.display = "none";
  // }

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