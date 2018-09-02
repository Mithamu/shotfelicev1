(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var WinW = 600;
var WinH = 400;
var PosX = (screen.width - WinW)/2;
var PosY = (screen.height - WinH)/2;
var siteURL = document.URL;
var siteNAM = "techshot.net";

function HtLink(){
  window.open('http://b.hatena.ne.jp/add?mode=confirm&url=' + siteURL + '&title=' + siteNAM + '', '', 'left='+ PosX +', top='+ PosY +', width='+ WinW +', height='+ WinH +', scrollbars=no');
}

function TwLink(){
  window.open('http://twitter.com/share?text=' + siteNAM + '&url=' + siteURL + '', '', 'left='+ PosX +', top='+ PosY +', width='+ WinW +', height='+ WinH +', scrollbars=no');
}

function FbLink(){
  window.open('https://www.facebook.com/sharer/sharer.php?u=https://lichess.org/', '', 'left='+ PosX +', top='+ PosY +', width='+ WinW +', height='+ WinH +', scrollbars=no');
}
