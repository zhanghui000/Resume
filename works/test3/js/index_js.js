var login=document.getElementById('login');
var help_list=document.querySelector('#login .help');
var QR_code=document.querySelector("#login .QR_code");
var login_lis=document.querySelectorAll("#login ul li");
var login_as=document.querySelectorAll("#login ul li a");
/*header中的下拉框*/
login_lis[2].onmouseover=function(){
	help_list.style.display="block";
	var span=login_lis[2].querySelector("span");
	span.innerHTML='&or;';
	help_list.onmouseout=function(){
		help_list.style.display="none";
		span.innerHTML='&and;';
	}
	login_lis[2].onmouseout=function(){
		help_list.style.display="none";
		span.innerHTML='&and;';
	}
}

login_lis[3].onmouseover=function(){
	QR_code.style.display="block";
	QR_code.onmouseout=function(){
		QR_code.style.display="none";
	}
	login_lis[3].onmouseout=function(){
		QR_code.style.display="none";
	}
}

/*导航下拉框*/
var nav_imgs={
	1:{
		'夏凉':'xialiang.png',
		'被枕':'beiliang.png',
		'床品件套':'chuangdan.png',
		'布艺软装':'buyi.png',
		'家具':'jiaju.png',
		'灯具':'dengju.png',
		'家饰':'jiashi.png',
		'宠物':'chongwu.png'
		},
	2:{
		'锅具':'guoju.png',
		'杯壶':'beihu.png',
		'功能厨具':'chuju.png',
		'餐具':'canju.png',
		'茶具咖啡具':'chaju.png',
		'清洁保鲜':'qingjie.png',
		'刀剪砧板':'zhenban.png',
		'厨房小电':'chufang.png'
		},
	3:{
		'行李箱':'xingli.png',
		'功能箱包':'gongneng.png',
		'双肩包':'shuangjian.png',
		'单肩包':'danjian.png',
		'鞋':'xie.png',
		'拖鞋':'tuoxie.png',
		'靴':'xue.png',
		'围巾件套':'weijin.png',
		'配饰':'peishi.png',
		'数码':'shuma.png'
		},
	4:{
		'卫衣':'weiyi.png',
		'衬衫':'chenshan.png',
		'T恤':'T-shirt.png',
		'内裤':'neiku.png',
		'内衣':'neiyi.png',
		'家居服':'jiajufu.png',
		'袜子':'wazi.png',
		'丝袜':'siwa.png',
		'毛衣':'maoyi.png',
		'婴童服饰':'yingtong.png'
		},
	5:{
		'夏凉':'xialiang.png',
		'被枕':'beiliang.png',
		'床品件套':'chuangdan.png',
		'布艺软装':'buyi.png',
		'家具':'jiaju.png',
		'灯具':'dengju.png',
		'家饰':'jiashi.png',
		'宠物':'chongwu.png'
		},
	6:{
		'锅具':'guoju.png',
		'杯壶':'beihu.png',
		'功能厨具':'chuju.png',
		'餐具':'canju.png',
		'茶具咖啡具':'chaju.png',
		'清洁保鲜':'qingjie.png',
		'刀剪砧板':'zhenban.png',
		'厨房小电':'chufang.png'
		},
	7:{
		'夏凉':'xialiang.png',
		'被枕':'beiliang.png',
		'床品件套':'chuangdan.png',
		'布艺软装':'buyi.png',
		'家具':'jiaju.png',
		'灯具':'dengju.png',
		'家饰':'jiashi.png',
		'宠物':'chongwu.png'
		},
	8:{
		'锅具':'guoju.png',
		'杯壶':'beihu.png',
		'功能厨具':'chuju.png',
		'餐具':'canju.png',
		'茶具咖啡具':'chaju.png',
		'清洁保鲜':'qingjie.png',
		'刀剪砧板':'zhenban.png',
		'厨房小电':'chufang.png'
		},
	9:{
		'锅具':'guoju.png',
		'杯壶':'beihu.png',
		'功能厨具':'chuju.png',
		'餐具':'canju.png',
		'茶具咖啡具':'chaju.png',
		'清洁保鲜':'qingjie.png',
		'刀剪砧板':'zhenban.png',
		'厨房小电':'chufang.png'
		}
}
var nav=document.querySelector("nav");

navListFn(nav);
//导航条，lis为获取的li，obj为导航条显示的内容
function navListFn(obj){
	var lis=obj.querySelectorAll("li");
	var navList=obj.querySelector('.navList');
	for(var i=1;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			var str='';
			var ol=navList.querySelector('ol');
			for(var key in nav_imgs[this.index]){
				str+='<li><img src="img/'+nav_imgs[this.index][key]+'" /><a href="">'+key+'</a></li>';
			}
			ol.innerHTML=str;
			navList.style.display="block";
			navList.onmouseover=function(){
				navList.style.display="block";
				navList.onmouseout=function(){
					navList.style.display="none";
				}
			}
		}
		lis[i].onmouseout=function(){
			navList.style.display="none";
		}
	}
};
/*吸附导航条*//*回顶部*/
var navFix=document.getElementById("navFix");
var fixPic=document.getElementById("fixPic");
var fix_top=fixPic.querySelector(".top");
window.onscroll=function(){
	if(window.pageYOffset>208){
		navFix.style.display="block";
	}else{
		navFix.style.display="none";
	}
	if(window.pageYOffset>700){
		fix_top.style.display="block";
		fix_top.onclick=function(){
			window.scrollTo(0,0);
		}
	}else{
		fix_top.style.display="none";
	}
}
navListFn(navFix);




/*banner滚动图片*/
var banner=document.getElementById('banner');
var ban_btns=banner.querySelectorAll("button");
var ban_img=banner.querySelector("img");
var ban_spans=banner.querySelectorAll("div span");
ban_img.index=0;//图片的索引
ban_img.last=0;
ban_btns[1].onclick=function(){
	clearInterval(ban_timer);
	ban_img.index++;
	banImg();
}
ban_btns[0].onclick=function(){
	clearInterval(ban_timer);
	ban_img.index--;
	banImg();
}
var ban_timer=setInterval(function(){
	ban_img.index++;
	banImg();
},2000);
for(var i=0;i<ban_spans.length;i++){
	ban_spans[i].index=i;
	ban_spans[i].onmouseover=function(){
		clearInterval(ban_timer);
		ban_img.index=this.index;
		banImg();
	}
}
/*banner图片运动的动画*/
function banImg(){
	ban_spans[ban_img.last].className='';
	if(ban_img.index>=ban_spans.length){
		ban_img.index=0;
	}
	if(ban_img.index<0){
		ban_img.index=ban_spans.length-1;
	}
	ban_spans[ban_img.index].className='active';
	ban_img.src="img/banner"+ban_img.index+".jpg";
	ban_img.last=ban_img.index;
}






/*品牌制造商*/
var brand=document.getElementById("brand");
imgScale(brand);

/*图片放大效果函数 obj为获取到的元素*/
function imgScale(obj){
	var imgs=obj.querySelectorAll("img");
	for(var i=0;i<imgs.length;i++){
		imgs[i].onmouseover=function(){
			this.style.transform='scale(1.1)';
			this.style.transition='1s';
		}
		imgs[i].onmouseout=function(){
			this.style.transform='scale(1)';
			this.style.transition='1s';
		}
	}
}

/*人气推荐*/
var hot=document.getElementById("hot");
var hot_btns=hot.querySelectorAll(".title button");
var hot_cont=hot.querySelectorAll(".content");
var hot_last=0;
imgScale(hot);//图片放大的效果
hot_cont[0].style.display="block";
for(var i=0;i<hot_btns.length;i++){
	hot_btns[i].index=i;
	hot_btns[i].onclick=function(){
		hot_btns[hot_last].className='';
		hot_cont[hot_last].style.display='none';
		this.className="active";
		hot_cont[this.index].style.display="block";
		hot_last=this.index;
	}
}

/*限时购*/
var shop=document.getElementById("shop");
imgScale(shop);
var sh_spans=shop.querySelectorAll(".shop .content div span");
setInterval(function(){
	var t=cutDown(24);
	sh_spans[0].innerHTML=format(t.h);
	sh_spans[1].innerHTML=format(t.m);
	sh_spans[2].innerHTML=format(t.s);
},1000);


/*倒计时函数*/
function cutDown(hour){
	//获取当前的时间
	var d=new Date();
	var v=new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,0,0)-d;
	//把毫秒转成对应的天、时、分、秒
	return {
		d:parseInt(v/(24*3600000)),
		h:parseInt(v%(24*3600000)/3600000),
		m:parseInt(v%(24*3600000)%3600000/60000),
		s:parseInt(v%(24*3600000)%3600000%60000/1000)
	};
}
//时间格式
function format(v){
	return v<10?'0'+v:v;
}
/*居家/服装*/
var home_imgs=document.querySelector("#home .content ul");
var cloth_imgs=document.querySelector("#cloth .content ul");
imgScale(home_imgs);
imgScale(cloth_imgs);

/*大家都在说*/
var say=document.getElementById("say");
imgScale(say);
var say_btns=say.querySelectorAll("button");
var say_ul=say.querySelector(".content ul");
var say_t=false;
say_btns[1].onclick=function(){
	say_t=true;
	sayMove('right');
}
say_btns[0].onclick=function(){
	sayMove('left');
	say_t=true;
}
say_ul.onmouseover=function(){
	say_t=true;
	say_ul.onmouseout=function(){
		say_t=false;
	}
}
//加了定时器的轮播图，一个定时器启动另一个定时器，加上一个函数
function picTimer(){
	var sayPic_t=setInterval(function(){
		if(say_t){
			clearInterval(sayPic_t);
			say_t=false;
			var sayTime_t=setTimeout(function(){
				picTimer();
			},5000);
			return;
		}
		sayMove('right');
	},3000)
}
picTimer();

//大家都在说 图片运动方法，dec有left值表示像左运动，dec有right值表示向右移动，默认为向左
function sayMove(dec){
	var say_lis=say_ul.getElementsByTagName("li");
	say_ul.style.width=say_lis.length*275+"px";
	dec=dec||'left';
	if(dec=='left'){
		say_ul.insertBefore(say_ul.lastElementChild,say_ul.firstElementChild);
		say_ul.style.left="-275px";
		move(say_ul,{left:0},500,'linear');
	}else if(dec=='right'){
		move(say_ul,{left:-275},500,'linear',function(){
			say_ul.appendChild(say_ul.firstElementChild);
			say_ul.style.left=0;
		});
	}
}

/*底部关注我们*/
var wei_imgs=document.querySelectorAll("#last .weixin img");
wei_imgs[0].onmouseover=function(){
	wei_imgs[1].style.display="block";
}
wei_imgs[0].onmouseout=function(){
	wei_imgs[1].style.display="none";
}

/*新品首发*/
var newStart=document.getElementById("new");
var new_btns=document.querySelectorAll("#new button");
var new_pic=document.querySelector("#new .content .pic");

var new_imgs={
	0:{
		"img1":"longxiamin.jpg",
		"img2":"longxia.jpg",
		"ptext":"小龙虾4-6钱/只 净虾850克",
		"resize":75,
	},
	1:{
		"img1":"mojingmin.jpg",
		"img2":"mojing.jpg",
		"ptext":"空蓝经典飞行员墨镜",
		"resize":109,
		"strongT":"Police制造商"
	},
	2:{
		"img1":"txumin.jpg",
		"img2":"txu.jpg",
		"ptext":"男式字母T恤",
		"resize":59
	},
	3:{
		"img1":"yangpixiemin.jpg",
		"img2":"yangpixie.jpg",
		"ptext":"光面羊皮蛋卷鞋",
		"resize":199,
		"strongT":"Tory Burch制造商"
	},
	4:{
		"img1":"tangpanmin.jpg",
		"img2":"tangpan.jpg",
		"ptext":"玉琢龙泉月亮汤盘",
		"resize":59
	},
	5:{
		"img1":"zhuximin.jpg",
		"img2":"zhuxi.jpg",
		"ptext":"头层青碳化宿舍单人床席",
		"resize":99
	},
	6:{
		"img1":"diaodaimin.jpg",
		"img2":"diaodai.jpg",
		"ptext":"女式精梳棉吊带",
		"resize":59,
		"strongT":"爱慕制造商"
	},
	7:{
		"img1":"beixinmin.jpg",
		"img2":"beixin.jpg",
		"ptext":"女式无压力背心",
		"resize":69
	}
};
var new_index=0;
creatUl();

var new_lis=new_pic.getElementsByTagName("li");
//新品首发移入li里面图片改变
for(var i=0;i<new_lis.length;i++){
	new_lis[i].index=i;
	new_lis[i].onmouseover=function(){
		var imgsrc=this.querySelector("img");
		imgsrc.setAttribute('src','img/'+new_imgs[this.index].img2+'');
		this.style.background='#EEDFCC';
	}
	new_lis[i].onmouseout=function(){
		var imgsrc=this.querySelector("img");
		imgsrc.setAttribute('src','img/'+new_imgs[this.index].img1+'');
		this.style.background='';
	}
}
//新品首发 左右按钮
new_btns[1].onclick=function(){
	move(new_pic,{left:-1092},500,'linear',function(){
		new_pic.appendChild(new_pic.firstElementChild);
		new_pic.style.left=0;
	});
};
new_btns[0].onclick=function(){
	new_pic.insertBefore(new_pic.lastElementChild,new_pic.firstElementChild);
	new_pic.style.left='-1092px';
	move(new_pic,{left:0},500,'linear');
};

//新品首发  生成一组li
function creatUl(){
	var str2='';
	for(var j=0;j<2;j++){
		var str1='';
		for(var i=new_index;i<(new_index+4);i++){
			//判断是否有制造商
			if(new_imgs[i].strongT){
				str1+=`<li><a href="#"><img src="img/${new_imgs[i].img1}"></a>
									<p>${new_imgs[i].ptext}</p>
									<div>
										<span>￥${new_imgs[i].resize}</span>
										<strong>${new_imgs[i].strongT}</strong>
									</div>
								</li>`
			}else{
				str1+=`<li><a href="#"><img src="img/${new_imgs[i].img1}"></a>
									<p>${new_imgs[i].ptext}</p>
									<div>
										<span>￥${new_imgs[i].resize}</span>
									</div>
								</li>`
			}
			
		
		}
		new_index+=4;
		str2+="<ul class='clearBox'>"+str1+"</ul>";
	
	}
	new_pic.innerHTML=str2;
}



