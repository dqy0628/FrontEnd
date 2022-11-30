
			//声明画布及声明图片
			var cavs1=document.getElementById("cavs");
			var cavs2=cavs1.getContext("2d");
			var photo = new Image();
			var aside = new Image();
			var Splite = new Image();
			
			
			//重新开始
			function restart(){
				 Step = 0;
				 ifWin = false;
				 //获取随机图片
				  SuiJi = Math.floor(Math.random()*18);
				  photo.src = "Image/"+SuiJi+".JPEG";
				  aside.src = "Image/Aside.png";
				  Splite.src = "Image/splite.png";
				   
				   list1 = [1, 4, 2, 0, 5, 8, 3, 6, 7];
				   list2 = [3, 1, 0, 7, 6, 5, 4, 8, 2];
				   list3 = [2, 7, 4, 5, 8, 0, 3, 6, 1];
				   list4 = [2, 3, 4, 1, 5, 0, 6, 8, 7];
				   list5 = [0, 1, 2, 3, 4, 5, 6, 7, 8];//测试序列
				   lists = [list1, list2, list3, list4];
				  
				  
				   PictureSort=lists[Math.floor(Math.random()*4)];//获取随机序列
				   //var PictureSort=list5;//获取随机序列
				   currate = 8;
				   cavs2.clearRect(0,0,600,600);
				   photo.onload(); 
				   aside.onload();
			}
			
			//将按键事件共同代码集合到一个函数里
			function keyDown(){
				cavs2.clearRect(0,0,600,600);
				photo.onload(); 
				aside.onload();
				Step+=1;
				console.log(PictureSort);
			}
			
			
				//计步  胜利
				var Step = 0;
				var ifWin = false;
				//获取随机图片
				var SuiJi = Math.floor(Math.random()*18);
				//定义图片地址
				photo.src = "Image/"+SuiJi+".JPEG";
				aside.src = "Image/Aside.png";
				Splite.src = "Image/splite.png";
				var list5 = [0, 1, 2, 3, 4, 5, 6, 7, 8];//测试序列
				var list1 = [1, 4, 2, 0, 5, 8, 3, 6, 7];
				var list2 = [3, 1, 0, 7, 6, 5, 4, 8, 2];
				var list3 = [2, 7, 4, 5, 8, 0, 3, 6, 1];
				var list4 = [2, 3, 4, 1, 5, 0, 6, 8, 7];
				var lists = [list1, list2, list3, list4];
				var PictureSort=lists[Math.floor(Math.random()*4)];//获取随机序列
				//var PictureSort=list5;//测试序列
				var currate = 8;
			
			
			photo.onload=function (){
				var PictureWith=photo.width;
				var PictureHeight=photo.height;
				var WidthRate=PictureWith/600;
				var HeightRate=PictureHeight/600;
				document.getElementById("step").innerHTML="已走步数："+Step;
				for(var i=0;i<=8;i++){
					
					cavs2.drawImage(photo,(PictureSort[i]%3)*200,(Math.floor((PictureSort[i]/3)))*200,200*WidthRate,200*HeightRate,(i%3)*200*WidthRate,(Math.floor(i/3))*200*HeightRate,200,200);
					
				}
				aside.onload=function (){
					
					cavs2.drawImage(aside,(currate%3)*200,(Math.floor(currate/3))*200,200,200);
					
				}
				for(var n=0;n<PictureSort.length;n++){
					
					if(PictureSort[n]!=list5[n]){
						break;
					}else if(n==8 && PictureSort[n]==list5[n]){
						ifWin=true;
						alert("恭喜获得胜利！！！");
						break;
					}
				}
			}
			document.addEventListener("keydown",keydown);
			function keydown(event){
				if(ifWin==false){
					switch(event.keyCode){
						case 87://w键的键码
						case 38://38是键盘上键的键码
						if(currate>2){
							var tem = PictureSort[currate];//临时数组索引
							PictureSort[currate] = PictureSort[currate-3];
							PictureSort[currate-3] = tem;
							currate-=3;
							keyDown();
						}
						break;
						case 83://s
						case 40://下
						if(currate<6){
							var tem = PictureSort[currate];//临时数组索引
							PictureSort[currate] = PictureSort[currate+3];
							PictureSort[currate+3] = tem;
							currate+=3;
							keyDown();
							}
							break;
						case 65://A
						case 37://左
						    if(currate>6 || (currate>3 && currate<=5) ||(currate>0 && currate<=2)){
								var tem = PictureSort[currate];
								PictureSort[currate] = PictureSort[currate-1];
								PictureSort[currate-1] = tem;
								currate-=1;
								keyDown();
							}
							break;
							
						case 68://D
						case 39://右
							if(currate<2 || (currate>=3 && currate<5) || (currate>=6 && currate<8)){
								var tem = PictureSort[currate];
								PictureSort[currate] = PictureSort[currate+1];
								PictureSort[currate+1] = tem;
								currate+=1;
								keyDown();
							}
							break;
						case 191:
								PictureSort=[0,1,2,3,4,5,6,7,8];
								currate=PictureSort[8];
								cavs2.clearRect(0,0,600,600);
								photo.onload();
								aside.onload();
								break;
						}
				}else{
					alert("已胜利，请重新开始游戏！");
				}
			}
