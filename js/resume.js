var naru=document.querySelector("#fix img");
naru.onmouseover=function(){
	var tell=document.querySelector("#fix span");
	tell.style.display="block";
}
naru.onmouseout=function(){
	var tell=document.querySelector("#fix span");
	tell.style.display="none";
}
window.onscroll=function(){
	if(window.pageYOffset>900){
		var p=document.querySelector("#fix p");
		p.style.display="block";
		p.onclick=function(){
			window.scrollTo(0,0);
		}
	}
	if(window.pageYOffset<900){
		var p=document.querySelector("#fix p");
		p.style.display="none";
	}
	if(window.pageYOffset>1500){
		var middle=document.querySelector("#ability .ability .content .middle");
		middle.style.display="block";
		abilityFn();
	}
	if(window.pageYOffset>2400){
		worksFn();
	}
}
/*照片墙*/
picsBoxFn();
function picsBoxFn(){
	var enter=document.getElementById('enter');
	var picsBox=document.getElementById("picsBox");
	var str='';
	for(var i=0;i<28;i++){
		str+='<div class="box"><div></div><div></div><div></div><div></div><div></div><div></div></div>';
	}
	picsBox.innerHTML=str;
	var boxs=document.querySelectorAll('#picsBox .box');
	for(var i=0;i<boxs.length;i++){
		var divs=boxs[i].querySelectorAll("div");
		for(var j=0;j<divs.length;j++){
			divs[j].style.background="url(img/img/"+(i+1)+".jpg)";
		}
	}
	var rotate=['rotateX(180deg)','rotateX(-280deg)','rotateY(180deg)','rotateY(-180deg)'];
	var colors=['#F7E8ED','#F2D9E6','#ECC6DE','#E0ECF5','#DDF4DE','#F0F1D5','#EEDECD','#B8E6B3','#ABE3D8','#E0E1F5','#F7E8ED','#F2D9E6','#E0ECF5','#DDF4DE','#F0F1D5','#EEDECD','#B8E6B3','#ABE3D8','#DFD1F0','#6161616'];
	
	for(var i=0;i<boxs.length;i++){
		boxs[i].onmouseenter=function(){
			var css=rotate[Math.round(Math.random()*(rotate.length-1))];
			var cor=colors[Math.round(Math.random()*(colors.length-1))];
			//在旋转的时候，要把景深加上
			this.style.transform='perspective(800px) translateZ(80px)'+css;
			this.style.zIndex=100;
			enter.style.background=cor;
		}
		boxs[i].onmouseleave=function(){
			this.style.transform='';
			this.style.zIndex='';
		}
	}
	
	enter.onmousemove=function(ev){
		/*
		 * 分析：鼠标在左边，旋转Y轴
		 */
		var x=(ev.clientX/document.documentElement.clientWidth-0.5)*20;
		var y=(0.5-ev.clientY/document.documentElement.clientHeight)*20;
		//console.log(x,y);
		picsBox.style.transform='rotateX('+y+'deg) rotateY('+x+'deg)';
	}
	
	/*进入按钮*/
	var btn=enter.querySelector("button");
	btn.onclick=function(){
		var second=document.getElementById("second");
		
		second.style.display="block";
		
		enter.style.display="none";
		document.body.removeChild(enter);
		bannerFn();
		eduPics();
	}
};



/*banner图片*/
function bannerFn(){
	var pics=document.getElementById("pics");
	var btns=pics.querySelector(".btns");
	var buttons=btns.querySelectorAll("button");
	var p=pics.querySelector("p");
	var imgs=pics.querySelector(".imgs");
	var spans=document.querySelectorAll("#banner .cicle span");
	var textArr=["姓名：张慧","联系方式：187XXXXX375","邮箱：947085042@qq.com","政治面貌：中共党员","地址：成都"];
	pics.onmouseenter=function(){
		btns.style.display="block";
	}
	pics.onmouseleave=function(){
		btns.style.display="none";
	}
	var cur=0;
	var last=0;
	var fn={
		row:4,
		col:10,
		w:(pics.clientWidth+1)/10,
		h:125,
		creatDom:function(){
			var str='<img src="img/timg'+cur+'.jpg" />';
			//注意：拼接div的时候 图片位移是负的
			for(var i=0;i<this.row;i++){
				for(var j=0;j<this.col;j++){
					str+="<div class='creatDom' style='width:"+this.w+"px;top:"+i*this.h+"px;left:"+j*this.w+"px;background:url(img/timg"+last+".jpg) no-repeat -"+j*this.w+"px -"+i*this.h+"px;' data-add="+(i+j)+" data-cut="+(j-i)+"></div>"
				};
			};
			imgs.innerHTML=str;
			//注意：要使用sort方法，必须是真正的数组，则需要把div转成正在的数组，方法是Array.prototype.slice.call(div)
			var div=imgs.querySelectorAll('div');
				this.divs=Array.prototype.slice.call(div);
			},
			//x,y参数表示位移的大小，区分向左还是向右移动
			myMove:function(x,y){
				for(var i=0;i<this.divs.length;i++){
					var This=this;
					(function(i){
						setTimeout(function(){
							This.divs[i].style.transform='translate('+x+'px,'+y+'px)';
							This.divs[i].style.opacity=0;
						},i*40);
					})(i);
				}
				move(p,{bottom:-p.offsetHeight},500,'linear',function(){
					p.innerHTML=textArr[cur];
					move(p,{bottom:0},500,'linear');
				});
				last=cur;
			},
			next:function(){
				this.creatDom();
				this.divs.sort(function(a,b){
						//sort方法的返回值 以data-add作为标准 dataset.add是H5获取data数据的方法
					return a.dataset.add-b.dataset.add;
				});
				this.myMove(this.w,-this.h);
			},
			pre:function(){
				this.creatDom();
				this.divs.sort(function(a,b){
						//降序排列
					return b.dataset.cut-a.dataset.cut;
				});
				this.myMove(-this.w,-this.h);
			}
	}
	buttons[1].onclick=function(){
		cur++;
		if(cur>=spans.length){
			cur=0;
		}
		spans[last].className='';
		spans[cur].className='active';
		fn.next();
	}
	buttons[0].onclick=function(){
		cur--;
		if(cur<0){
			cur=spans.length-1;
		}
		spans[last].className='';
		spans[cur].className='active';
		fn.pre();
	}
	for(var i=0;i<spans.length;i++){
		//选项卡的原理，把上一个的颜色清空，当前这个加上颜色
		spans[i].index=i;
		spans[i].onclick=function(){
			cur=this.index;
			spans[last].className='';
			this.className='active';
			if(cur>last){
				fn.next();
			}else{
				fn.pre();
			}
		}
	}
}

/*教育经历*/
function eduPics(){
	var lis=document.querySelectorAll("#educate .educate ul li");
	var ps=document.querySelectorAll("#educate .educate li p");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseenter=function(){
			move(ps[this.index],{top:0},500,'linear');
		}
		lis[i].onmouseleave=function(){
			move(ps[this.index],{top:-this.offsetHeight},500,'linear');
		}
	}
}

/*个人能力*/


function abilityFn(){
	var spans=document.querySelectorAll('#ability .content .middle span');
	var divsLeft=document.querySelectorAll('#ability .content .one');
	var divsRight=document.querySelectorAll('#ability .content .three');
	var timer;
	var last=0;
	var divs=[];
	//用一个数组分别把左右两边的div存下来
	for(var i=0;i<divsLeft.length;i++){
		divs.push(divsLeft[i]);
		divs.push(divsRight[i]);
	}
	//当animationend运动结束后触发
	document.addEventListener('animationend',function(){
		//使用timeout延迟定时器，只运动一次
		for(var i=0;i<spans.length;i++){
			(function(i){
				timer=setTimeout(function(){
					spans[last].className='';				
					spans[i].className='active';
					divs[Math.floor(i/5)].style.opacity=1;
					last=i;
				},120*i)
				//最后一个span的颜色清除掉
				if(i==spans.length-1){
					setTimeout(function(){
						spans[i].className='';
					},(i+1)*120)
				};
			})(i);
		}
	});
}


/*我的作品*/
function worksFn(){
	var works=document.getElementById("works");
	var box=document.querySelector('#works .works .box');
	var divs=document.querySelectorAll('#works .works .box>div');
	var minDiv=document.querySelectorAll('#works .works .box>div div');
	
	for(var i=0;i<divs.length;i++){
		minDiv[i].style.background='linear-gradient(rgb(255,250,205) 50%,rgba(255,255,255,0)),url(img/'+(i+1)+'.jpg)';
		(function(i){
			var timer=setInterval(function(){
				divs[i].style.transform='rotateY('+(i+1)*36+'deg) translateZ(400px)';
			},i*100)
		})(i);
	}
	var curX=0;
	var curY=-10;
	var timer;
	works.onmousedown=function(ev){
		clearInterval(timer);
		var disX=ev.clientX;
		var disY=ev.clientY;
		var curd=new Date().getTime();
		var speedX=0;
		var speedY=0;
		document.onmousemove=function(ev){
			curX+=(ev.clientX-disX)/100;
			curY+=(disY-ev.clientY)/100;
			
			if(curY>90){
				curY=90;
			}else if(curY<-90){
				curY=-90;
			}
			box.style.transform='perspective(1000px) rotateX('+curY+'deg) rotateY('+curX+'deg)';
			
			speedX=(ev.clientX-disX)/100;
			speedY=(disY-ev.clientY)/100;
			//console.log('curX='+curX,'curY='+curY,'speedX='+speedX,'speedY='+speedY)
		}
		document.onmouseup=function(){
			if(new Date().getTime()-curd<300){
				timer=setInterval(function(){
					curX+=speedX;
					curY+=speedY;
					speedX*=0.95;
					speedY*=0.95;
					if(Math.abs(speedX)<0.1 &&Math.abs(speedY)<0.1){
						clearInterval(timer);
					}
					box.style.transform='perspective(1000px) rotateX('+curY+'deg) rotateY('+curX+'deg)';
				},16);
			}
			document.onmousemove=null;
		}
		return false;
	}
}
