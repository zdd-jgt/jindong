$(function(){
	var box=$(".zhong")[0];
	var tus=$(".banner-zhong");
	var annius=$(".anniu-one");
	var zuo=$(".zuo")[0];
	var you=$(".you")[0];
	var width=parseInt(getStyle(box,"width"));
	var n=0;
	var next=0;
	var fla=true;
	var t=setInterval(fun,2000);
	function fun(){
		if(fla==false){
			return;
		}
		fla=false;
		next=n+1;
		if(next>=tus.length){
			next=0;
		}
		// 给下一个让它到右边
		// tus[next].style.left=width+"px";
		animate(tus[n],{opacity:0},600,Tween.Quad.easeInOut);
		animate(tus[next],{opacity:1},600,Tween.Quad.easeInOut,function(){
			fla=true;
		});
		annius[n].style.cssText="background:#3E3E3E";
		annius[next].style.cssText="background:#B61B1F";
		n=next;
	}
	box.onmouseover=function(){
		clearInterval(t);
		zuo.style.cssText="display:block";
		you.style.cssText="display:block";
	}
	box.onmouseout=function(){
		t=setInterval(fun,2000);
		zuo.style.cssText="display:none";
		you.style.cssText="display:none";
	}
	zuo.onclick=function(){
		if(fla==false){
			return;
		}
		fla=false;
		next=n-1;
		if(next<0){
			next=tus.length-1;
		}
		// 给下一个让它到右边
		// tus[next].style.left=-width+"px";
		animate(tus[n],{opacity:0},600,Tween.Quad.easeInOut);
		animate(tus[next],{opacity:1},600,Tween.Quad.easeInOut,function(){
			fla=true;
		});
		annius[n].style.cssText="background:#3E3E3E";
		annius[next].style.cssText="background:#B61B1F";
		n=next;
	}
	you.onclick=function(){
		fun();
	}
	for(var i=0;i<tus.length;i++){
		annius[i].index=i;
		annius[i].onclick=function(){
			if(fla==false){
				return;
			}
			fla=false;
			if(this.index<n){
				// tus[this.index].style.left=-width+"px";
				animate(tus[n],{opacity:0},600,Tween.Quad.easeInOut);
			}else if(this.index>n){
				// tus[this.index].style.left=width+"px";
				animate(tus[n],{opacity:0},600,Tween.Quad.easeInOut);
			}
			animate(tus[this.index],{opacity:1},600,Tween.Quad.easeInOut,function(){
				fla=true;
			});
			annius[n].style.cssText="background:#3E3E3E";
			annius[this.index].style.cssText="background:#B61B1F";
			n=this.index;
			next=this.index;
		}
	}
	// banner右拉框
	// var fenlei=$(".fenlei");
	// for(var i=0;i<fenlei.length;i++){
	// 	fenlei[i].index=i;
	// 	hover(fenlei[i],function(){
	// 		this.style.background="#fff";
	// 		var a_lianjie=fenlei[this.index].getElementsByTagName("a");
	// 		a_lianjie[i].style.color="#C81524";
	// 	},function(){
	// 		this.style.background="#C81524";
	// 		console.log(this.index)
	// 		var a_lianjie=fenlei[this.index].getElementsByTagName("a");
	// 		a_lianjie[i].style.color="#fff";
	// 	})
	// }
	var fenlei=$(".fenlei");
	var b_fenlei=$(".b_fenlei");
	for(var i=0;i<fenlei.length;i++){
		fenlei[i].index=i;
		hover(fenlei[i],function(){
			that=this;
			console.log(that)
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="block";
			}
		},function(){
			that=this;
			console.log(that)
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="none";
			}
		})
		that=this;
		console.log(that)
		hover(b_fenlei[i],function(){
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="block";
				console.log(that.index)
			}
		},function(){
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="none";
			}
		})
		
	}
})