
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status = "duminhphongadv"
var a = new Array(), n = ""
a[1] = 'C';
a[2] = 'Â';
a[3] = 'U';
a[4] = ' ';
a[5] = 'C';
a[6] = 'H';
a[7] = 'Ú';
a[8] = 'C';
a[9] = ' ';
a[10] = 'L';
a[11] = 'À';
a[12] = ' ';
a[13] = 'Q';
a[14] = 'U';
a[15] = 'À';
a[16] = ' ';
a[17] = 'Q';
a[18] = 'U';
a[19] = 'Ý';
a[20] = ' ';
a[21] = '!';
function one() {
	t = document.f.txt.value
	j = t.length
	if (j > 0) {
		for (var i = 1; i <= j; i++) {
			n = n + a[i]
			if (i == 29) {
				document.f.txt.value = ""
				n = ""
			}
		}
	}
	document.f.txt.value = n
	n = ""
	setTimeout("one()", 1)
}
function s() {
}
function on() {
	one()
}

$(document).ready(function () {
	$('#k').hide();
	$('h1').click(function () {
		$('.active').removeClass('active');
		$('#k').slideUp('fast');
		if ($(this).next('#k').is(':hidden') == true) {
			$(this).addClass('active');
			$(this).next('#k').slideDown('fast');
		}
	});
});
function Yeu() {
	$("#divResult").fadeOut(0);
	//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
	$("#divResult").html("</br><h2>HÔM NAY LÀ NGÀY 8/3. CHÚC CÁC CHỊ EM LUÔN XINH ĐẸP VÀ THÀNH CÔNG TRONG CUỘC SỐNG<3 <img src='http://website1gia.com/files/assets/3.png'</img></h2>");
	$("#divResult").fadeIn(2000, function () {
		$("#divResult2").fadeOut(0);
		$("#divResult2").html("<p>♥ ỪA THÌ TAO BIẾT TAO ĐẸP TRAI THẬT. NHƯNG THÔI TAO CŨNG ĐÀNH CHỊU THIỆT YÊU MẦY VẬY .<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
		$("#divResult2").fadeIn(2000, function () {
			$("#divResult3").fadeOut(0);
			$("#divResult3").html("<p>VẬY HÃY ĐỂ TRÁI TIM TAO THUỘC VỀ MẦY MỘT LẦN NHÉ!  <img src='http://website1gia.com/files/assets/5.png'/></p></br>");
			$("#divResult3").fadeIn(2000);
		}
		);
	}
	);
}
