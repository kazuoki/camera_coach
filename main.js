new Vue({
  el:'#practice',
  data:{
    activeMessage:'advice__message1', /*アドバイスメッセージ*/
    activeTab:'tabs-1',/*用語解説タブの切り替え*/
  },
});

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
  }else if(sum === 4 ) {
    document.getElementById("preview").setAttribute("src","image/preview4.png");
  }else if(sum === 5 ) {
    document.getElementById("preview").setAttribute("src","image/preview5.png");
  }else if(sum === 6 ) {
    document.getElementById("preview").setAttribute("src","image/preview6.png");
  }else if(sum === 7 ) {
    document.getElementById("preview").setAttribute("src","image/preview7.png");
  }else if(sum === 8 ) {
    document.getElementById("preview").setAttribute("src","image/preview8.png");
  }else if(sum === 9 ) {
    document.getElementById("preview").setAttribute("src","image/preview9.png");
  }
}
