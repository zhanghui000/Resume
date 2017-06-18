/*
 * 任务：1、鼠标经过 颜色变化的特效
 *         分析：设置上一个兄弟节点和下一个兄弟节点的颜色变化
 *       2、点击上下按钮，背景变化，到顶部，到底部设置
 *       3、上下移动li
 *          分析：move函数移动距离，需使用定位改变top值，在交换移动两个节点的结构
 */
var lis=document.getElementsByTagName("li");
var as=document.querySelectorAll("a");
//让所有li显示出来
for(var i=0;i<lis.length;i++){
	lis[i].style.top=i*80+i*5+"px";    
}
//鼠标移动颜色变化
for(var i=0;i<lis.length;i++){
	as[i].onmouseover=function(){
		this.parentNode.style.background='#ef3820';
		if(this.parentNode.previousElementSibling!=null){
			this.parentNode.previousElementSibling.style.background='#ed614f';
		}
		if(this.parentNode.nextElementSibling!=null){
			this.parentNode.nextElementSibling.style.background='#ed614f';
		}		
	}
	as[i].onmouseout=function(){
		this.parentNode.style.background='#e36373';
		if(this.parentNode.previousElementSibling!=null){
			this.parentNode.previousElementSibling.style.background='#e36373';
		}
		if(this.parentNode.nextElementSibling!=null){
			this.parentNode.nextElementSibling.style.background='#e36373';
		}
	}
}
//上一个下一个到顶部到底部按钮
var next=document.getElementById("next");
var pre=document.getElementById("pre");
var topBtn=document.getElementById("topBtn");
var bottom=document.getElementById("bottom");
var img=document.querySelector("#pics img");
//var pics=['img/qianqian.png','img/yehua.png','img/fengjiu.png','img/donghua.png','img/lijing.png','img/ali.png','img/zhenzhen.png','img/zheyan.png'];
var index=-1;
//设置图片数组的值
var pics=[];
var spans=document.getElementsByTagName("span");
for(var i=0;i<spans.length;i++){
	pics[i]=spans[i].innerHTML;
}

next.onclick=function(){	
	if(index>=lis.length-1){
		index=-1;		
	};
	index++;
	lis[index].style.background='#ef3820';
	img.src=pics[index];
	console.log(index);
	if(index>0){
		lis[index-1].style.background='#e36373';
	};
	if(index==0){
		lis[lis.length-1].style.background='#e36373';
	};	
};
pre.onclick=function(){	
	index--;
	if(index<0||index<-1){
		index=lis.length-1;		
	}
	lis[index].style.background='#ef3820';
	img.src=pics[index];
	//console.log(index);
	if(index<lis.length-1){
		lis[index+1].style.background='#e36373';
	}
	if(index==lis.length-1){
		lis[0].style.background='#e36373';
	};		
};

topBtn.onclick=function(){
	lis[0].style.background='#ef3820';
	img.src=pics[0];
	for(var i=1;i<lis.length;i++){
		lis[i].style.background='#e36373';
	}
	index=0;	
};
bottom.onclick=function(){	
	lis[lis.length-1].style.background='#ef3820';
	img.src=pics[lis.length-1];
	for(var i=0;i<lis.length-1;i++){
		lis[i].style.background='#e36373';
	}
	index=lis.length-1;
};

//上移下移
var nav=document.getElementById("nav");
var btns=nav.getElementsByTagName("button");
var ul=document.getElementsByTagName("ul");

for(var i=0;i<btns.length;i+=2){
	//console.log(i);	
	//上移动的按钮，i的值为0，2，4，6，8，10，12，14
	btns[i].onclick=function(){
		//最上面一个按钮达到的条件，上一个兄弟节点不为空，执行
		if(this.parentNode.previousElementSibling!=null){
			//获取:当前按钮父级也就是li到顶端的距离
			var distance=this.parentNode.offsetTop;
			//move运动的值			
			move(this.parentNode,{top:distance-85},500,'linear');
			//获取:当前按钮父级的上一个兄弟节点到顶端的距离
			var dis=this.parentNode.previousElementSibling.offsetTop;
			//move运动
			move(this.parentNode.previousElementSibling,{top:dis+85},500,'linear');
			//距离移动之后，交换li结构，insertBefore函数，剪切达到交换的目的
			ul[0].insertBefore(this.parentNode,this.parentNode.previousElementSibling);			
		}else{
			console.log("*");
		}
		//结构变化后，重新获取图片数组的值
		var spans=document.getElementsByTagName("span");
		for(var i=0;i<spans.length;i++){
			pics[i]=spans[i].innerHTML;
		}
		
	}	    
}
//下移动的按钮，i的值为1，3，5，7，9，11，13，15
for(var i=1;i<btns.length;i+=2){		
	btns[i].onclick=function(){		
		if(this.parentNode.nextElementSibling!=null){
			//console.log(this.parentNode);
			//console.log(this.parentNode.nextElementSibling);
			var distance=this.parentNode.offsetTop;
			//console.log("上面一个的距离"+distance);			
			move(this.parentNode,{top:distance+85},500,'linear');			
			var dis=this.parentNode.nextElementSibling.offsetTop;
			//console.log("下面一个的距离"+dis);
			move(this.parentNode.nextElementSibling,{top:dis-85},500,'linear');			
			ul[0].insertBefore(this.parentNode.nextElementSibling,this.parentNode);			
		}else{
			console.log("*");
		}
		var spans=document.getElementsByTagName("span");
		for(var i=0;i<spans.length;i++){
			pics[i]=spans[i].innerHTML;
		}
	}	    
}
