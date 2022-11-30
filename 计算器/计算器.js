var number=document.getElementsByClassName("number");
var show=document.getElementById("show");//学了的知识,获取显示框.
var back=document.getElementById("back");//获取退格键.
var result=document.getElementById("total");//获取=键.
var clean=document.getElementById("clear");//获取C键.
var run='';//定义一个变量,承接点击的表格所对应的值.

clean.onmousedown=function(){//获取C键被鼠标键按下事件,注意:是获取按下事件,不是点击事件,onclick才是点击事件.
	run='';
	show.innerHTML='0';
	clean.style.backgroundColor="rgb(0, 170, 255,1)";//修改C键表格背景颜色.
	document.getElementById("sound").play();//播放敲击声音乐.
}
clean.onmouseup=function(){//获取C键鼠标键松开事件.
	clean.style.backgroundColor="rgb(0, 170, 255,0.8)";//同上.
}

result.onmousedown=function(){
	result.style.backgroundColor="green";//修改=键背景颜色.
	document.getElementById("sound").play();//播放敲击声音乐.
	if(run!=""){
		show.innerHTML=eval(run);//如果run不为空,则计算它的结果.
		run=eval(run);//将结果传递给run
	}
	if(show.innerHTML=="0"){
		run="";
	}
}

result.onmouseup=function(){
	result.style.backgroundColor="rgb(0, 170, 0,1)";
}

for(var i=0;i<number.length;i++){
	//alert(number[i].innerHTML);
	number[i].index=i;//给number对应的元素设置一个index属性，并赋值i，以后就可以通过这个属性来找到对应元素
	
	number[i].onmousedown=function(){
		document.getElementById("sound").play();
		run+=number[this.index].innerHTML;//将number字典对应下标的value追加给run
		show.innerHTML=run;//将run的值赋值给shou.innerHTML,这样就能在显示格中显示.
		if(number[this.index].innerHTML!="/" && number[this.index].innerHTML!="*" && number[this.index].innerHTML!="-" && number[this.index].innerHTML!="+"){
		//如果按的number类的innerHTML不是/,*-+  ,则颜色变为红色.
		number[this.index].style.backgroundColor="rgb(170, 3, 25, 0.8)";
		}else{
			//如果是/*-+中的其中一个,则颜色变为深蓝色(这颜色是深蓝色吧?).
			number[this.index].style.backgroundColor="rgb(0, 170, 255,1)";
		}
	}
	
	number[i].onmouseup=function(){//鼠标按键松开事件,和上述同理,不多赘述.
		
		if(number[this.index].innerHTML!="/" && number[this.index].innerHTML!="*" && number[this.index].innerHTML!="-" && number[this.index].innerHTML!="+"){
		number[this.index].style.backgroundColor="rgb(170, 161, 165,0.9)";
		}else{
			number[this.index].style.backgroundColor="rgb(0, 170, 255,0.8)";
		}
	}
	//为何要将两个点击松开事件放在循坏内而不是循环外？因为i！每一次循环number[i]的都是不一样的，相当于这个for循环创建了16个不同的点击事件
}

	

back.onmousedown=function(){
	var linshi ="";//退格键被鼠标键按下事件
	back.style.backgroundColor="rgb(0,170,255,1)";
	document.getElementById("sound").play();//播放敲击音乐.
	if(show.innerHTML.length==1){//如果show.innerHTML的长度等于1,即show格只有一个数字或运算符,则将show.innerHTML的值变成0.
		show.innerHTML="0";
		//run=show.innerHTML;
		run="";//将run的值重置.
	}else{//show.innerHTML的长度不是1,即大于1.
	 for(var n=0;n<show.innerHTML.length-1;n++){//遍历show.innerHTML的值,但是最后一个不遍历,则会将最后一个遗漏,完成退格效果.
		 linshi+=show.innerHTML[n];
	 }
	 show.innerHTML=linshi;//将linshi赋值给show.innerHTML
	run=show.innerHTML;
	}
}

back.onmouseup=function(){
	back.style.backgroundColor="rgb(0,170,255,0.8)"
}