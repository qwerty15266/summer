var curcontent = new Array();



curcontent["Oplata"] = {
    xhead: 'Способы пополнения баланса',
    xcon: '<div class="xbox oplata_info">\
<div class="forms-oplata-grid">\
\<form onsubmit="return freekassaHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://enot.io/pay">\
<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
	<div class="qiwi-widget-title">Enot.io<br><p>криптовалюта и сбп</p></div>\
	<div class="qiwi-inp-box">\
			<label for="fk-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="number" placeholder="Сумма" id="fk-donation-amount" name="oa" required="" value="">\
			<input type="hidden" id="fk-donation-sign" name="s" value="">\
			<input type="hidden" id="enot-donation-id" name="o" value="">\
			<input type="hidden" id="fk-donation-comment" name="cf" value="">\
			<input type="hidden" name="m" value="41751">\
			<input type="hidden" id="fk-donation-comment2" name="c" value="Пополнение баланса">\
			<input type="hidden" name="cr" value="RUB">\
			<div class="qiwi-error-box" id="fk-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
	<div class="payment-block">\
        <div class="payment-type payment-block-crypto"></div><div class="payment-type payment-block-mir"></div><div class="payment-type payment-block-mastercard"></div>\
	</div>\
</div>\
</form>\
\
<form onsubmit="return freekassaHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://enot.io/pay">\
<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
	<div class="qiwi-widget-title">Enot.io<br><p>криптовалюта и сбп</p></div>\
	<div class="qiwi-inp-box">\
			<label for="fk-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="number" placeholder="Сумма" id="fk-donation-amount" name="oa" required="" value="">\
			<input type="hidden" id="fk-donation-sign" name="s" value="">\
			<input type="hidden" id="enot-donation-id" name="o" value="">\
			<input type="hidden" id="fk-donation-comment" name="cf" value="">\
			<input type="hidden" name="m" value="41751">\
			<input type="hidden" id="fk-donation-comment2" name="c" value="Пополнение баланса">\
			<input type="hidden" name="cr" value="RUB">\
			<div class="qiwi-error-box" id="fk-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
	<div class="payment-block">\
        <div class="payment-type payment-block-crypto"></div><div class="payment-type payment-block-mir"></div><div class="payment-type payment-block-mastercard"></div>\
	</div>\
</div>\
</form>\
<a class="container-oplata" id="qiwi-inp-other2"><img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить картой</span><span class="category-user">Visa, Mastercard и Мир</span></div></a><a class="container-oplata" onclick="Open(\'skins\');" target="_blank"><img alt="" src="https://i.imgur.com/iV8LCN1.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить скинами</span><span class="category-user">Минимальная комиссия</span></div></a><a class="container-oplata"></a>\
</div>\
<div class="warnings_skin2">⚠ Перед тем как пополнять банковской картой через QIWI - нужно авторизироваться в своём кошельке, а если его нет - зарегистрировать.</div>'
};





function Open(el, usefade = true, zind = false) {
    closepage();
    var div1 = document.createElement("div");
    div1.id = 'Modal';
    var div2 = document.createElement("div");
    div2.className = 'modal modal-xacku fade';
    if(!usefade) div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    //div2.onclick = closepage;
    var div3 = document.createElement("div");
    div3.className = "modal-dialog modal-lg";
    if(el=="block")div3.className+=" modal-lg-block"
    var div4 = document.createElement("div");
    div4.className = "modal-content";
    var div5 = document.createElement("div");
    div5.className = "modal-header";
    div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
    var div6 = document.createElement("div");
    div6.className = "modal-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    div7.className = "modal-footer";
    div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
    var div8 = document.createElement("div");
    div8.className = "modal-backdrop fade show";
    div8.style = 'z-index: 1050;';

    div1.appendChild(div2);
    //div2.appendChild(div2_5);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);
    div1.appendChild(div8);
    if(usefade) setTimeout(()=> div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}


function closepage() {
    var Modal = document.getElementById('Modal');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null) return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
}

function search(e){
    if (e.offsetX < 1) {
        console.log(e.target.innerText + ' | ' + e.clientX);
        if (document.selection) { // IE
            var range = document.body.createTextRange();
            range.moveToElementText(e.target);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(e.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.');
        } catch (err) {
            console.log('Oops, unable to copy' + err);
        }
    }
}

var CustomerSteamId = "0";
var OvhPayUrl = "";

var now = new Date();

function freekassaHandler(e){

    var inputval = document.getElementById('fk-donation-amount').value;
    var inputfloat = parseFloat(inputval);
    if(inputfloat < 1 || inputfloat > 15000 || isNaN(inputfloat)){
        document.getElementById('fk-error-box').innerText = "От 1 до 15000 RUB";
        e.preventDefault();
        return false;
    }else{
        document.getElementById('fk-error-box').innerText = "";
    }
    var a3 = document.getElementById('fk-donation-comment');
    if(a3 != null)
        a3.value = CustomerSteamId;
    
    var a4 = document.getElementById('fk-donation-comment2');
    if(a4 != null)
        a4.value = CustomerSteamId;
    document.getElementById('fk-donation-amount').value = inputfloat;
    document.getElementById('enot-donation-id').value = MD5('41751' + inputfloat + CustomerSteamId + Math.floor(Math.random() * 1000000000));
    document.getElementById('fk-donation-sign').value = MD5('41751:' + inputfloat + ':0zxrLSXVbCBB6SBp0Saak8YZhWJelH20:' + document.getElementById('enot-donation-id').value);
    if(CustomerSteamId == "0" || CustomerSteamId == ""){
        document.getElementById('fk-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
        e.preventDefault();
        return false;
    }

    return null;
}




function OvhUrlOverrite(){
    var slides = document.getElementsByClassName("nav-link");
    for (var i = 0; i < slides.length; i++) {
        var elelink = slides.item(i);
        var urlelelink = elelink.getAttribute("href");
        if(urlelelink.startsWith('https://pay.moscow.ovh')){
            OvhPayUrl = urlelelink;
            console.log(OvhPayUrl);
            elelink.setAttribute("href", "javascript:;");
            elelink.setAttribute("onclick", "OpenOplata()");
        }
    }
}

setInterval(() => {
    OvhUrlOverrite();
}, 1000)

function obtainShopSteamId(){
    if(CustomerSteamId != "0" && CustomerSteamId != ""){
        return;
    }
    var xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", "/api/index.php?modules=users&action=getData", true );
        xmlHttp.send( null );
    }
    xmlHttp.onload = function(gjson) {
        var gjson = JSON.parse(xmlHttp.response);
        console.log(gjson);
        var preSteam = gjson.data.steamID;
        OvhPayUrl = "https://pay.moscow.ovh/?"+gjson.data.pay;
        if(preSteam > 76561100000000000 || !isNaN(preSteam)){
            CustomerSteamId = preSteam.toString();
            //qiwiFormHandle();
            OvhUrlOverrite();
        }else{
            console.log("error obtainShopSteamId! "+ gjson);
        }
    }

}

function OpenOplata(){
    Open('Oplata');
    qiwiFormHandle();
    setTimeout(() => function () {
        try{
            qiwiFormHandle();
        }catch(e){
            console.log('element not found '+ e);
        }
    }, 3000);
}

function getCookie(name = "_id") {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "";
}

var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}
window.addEventListener("load",function () {
    try{
        obtainShopSteamId();
    }catch(e){
        console.log('element not found '+ e);
    }
});
