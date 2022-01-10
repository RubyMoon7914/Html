//為歡迎訊息建立一個變數
var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check yuur order:';
//連接以上三個變數建立歡迎訊息
var welcome = greeting + name + message;

//建立變數儲存名牌資訊
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//取得具有id屬性質為greeting的元件
var el = document.getElementById('greeting');
//用個人化的歡迎訊息取代元件內容
el.textContent = welcome;

//取得具有id屬性質為userSign的元件，然後更新它的內容
var elSign = document.gerElementById('userSign');
elSign.textContent = sign;

//取的具有id屬性質為tiles的元件，然後更新它的內容
var elTiles = document.getElementById('tiles');
elTiles.TextContent = tiles;

//取得具有id屬性質為subTotal的元件，然後更新它的內容
var elSubTotal = document.getElementById('Subtotal');
elSubTotal.textContent = '$' + subTotal;

//取得具有id屬性質為shipping元件，然後更新它的內容
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping';

//取得具有id屬性質為grandTotal元件，然後更新它的內容
var elGrandTotal = document.getElementById('grandTotal');
elgrandTotal.textContent = '$' + grandTotal';