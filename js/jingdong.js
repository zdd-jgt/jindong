window.onload=function(){
	// 楼层跳转
	var lou_nav=$(".guding")[0];
	var nav=$(".guding1");
	var lou=$(".floor");
	var n;
	var cHeight=document.documentElement.clientHeight;
	var span=$(".guding2")
	var span1=$(".guding3")
	for(var i=0;i<lou.length;i++){
		lou[i].h=lou[i].offsetTop;
		// console.log(lou[i].h)
		window.onscroll=function(){	
			var obj=document.body.scrollTop?document.body:document.documentElement;
			// console.log(obj.scrollTop);
			var top=obj.scrollTop;
			if(top>=lou[0].h-800){
				lou_nav.style.display="block";
				var nHeight=lou_nav.offsetHeight;
				lou_nav.style.top=(cHeight-nHeight)/2+"px";
			}else if(top<lou[0].h-800){
				lou_nav.style.display="none";
			}
			for(var i=0;i<lou.length;i++){
				if(top>=lou[i].h-500){
					for(var j=0;j<span.length;j++){
						span[j].style.display="none";
						span1[j].style.display="block";
					}
					
					span[i].style.display="block";
					span1[i].style.display="none";
					n=i;
				}
				
			}
			for(var i=0;i<nav.length;i++){
		 		nav[i].index=i;
		 		nav[i].onclick=function(){
			 		animate(document.body,{scrollTop:lou[this.index].h})
			 		animate(document.documentElement,{scrollTop:lou[this.index].h})
			 		n=this.index;
		 		}
		 		hover(nav[i],function(){
		 			that=this;
		 			for(var i=0;i<span.length;i++){
		 				span[that.index].style.display="block";
		 				// console.log(this.index)
		 			}
		 		},function(){
		 			if(this.index==n){
		 				return;
		 			}
		 			that=this;
		 			for(var i=0;i<span.length;i++){
		 				span[that.index].style.display="none";
		 				// console.log(this.index)
		 			}
		 		})
			}
			// var back=$(".fanhui")[0];
			// back.onclick=function(){
			// 	animate(document.body,{scrollTop:0},400)
			// 	animate(document.documentElement,{scrollTop:0},400)
			// }
			
		}
		
	}
	// 推荐
	var rec_right=$(".right",$(".recommend")[0])[0];
	var r_anniuzuo=$(".r_anniuzuo")[0];
	var r_anniuyou=$(".r_anniuyou")[0];
	var right_lun=$(".right_lun")[0];
	var rec_lun=$(".neikuang",right_lun);
	var fla1=1;
	var rec_lunW=rec_lun[0].offsetWidth;
	// rec_lunW*=4;
	console.log(rec_lunW)
	hover(rec_right,function(){
		r_anniuzuo.style.display="block";
		r_anniuyou.style.display="block";
	},function(){
		r_anniuzuo.style.display="none";
		r_anniuyou.style.display="none";
	})
	r_anniuzuo.onclick=function(){
		if(fla1==0){
			return;
		}
		fla1=0;
		var last=getLast(right_lun);
		var first=getFirst(right_lun);
		
		// console.log(last,first)
		insertBefore(last,first);
		right_lun.style.left=-rec_lunW+"px";
		animate(right_lun,{left:0},600,function(){
			fla1=1;
		})
	}
	r_anniuyou.onclick=function(){
		if(fla1==0){
			return;
		}
		fla1=0;
		animate(right_lun,{left:-rec_lunW},600,function(){
			var tuFirst=getFirst(right_lun)
			right_lun.appendChild(tuFirst);
			right_lun.style.left="0";
			fla1=1;
		})
	}
// head上 zuo
	var beijing=$(".beijing")[0];
	var address=$(".address")[0];
	hover(beijing,function(){
		address.style.display="block";
		beijing.style.background="#fff";
	},function(){
		address.style.display="none";
		beijing.style.background="#F1F1F1";
	})
	hover(address,function(){
		address.style.display="block";
	},function(){
		address.style.display="none";
	})
	function xiaLa(ding_dian,head_wzdh){
		var ding_dian=ding_dian;
		var head_wzdh=head_wzdh;
		// console.log(head_wzdh,ding_dian);
		hover(ding_dian,function(){
			head_wzdh.style.display="block";
			ding_dian.style.background="#fff";
		},function(){
			head_wzdh.style.display="none";
			ding_dian.style.background="none";
		})
	}
	xiaLa($(".dian4",$(".head")[0])[0],$(".khfw",$(".head")[0])[0])
	xiaLa($(".dian3",$(".head")[0])[0],$(".gzjd",$(".head")[0])[0])
	xiaLa($(".dian2",$(".head")[0])[0],$(".sjjd",$(".head")[0])[0])
	xiaLa($(".dian1",$(".head")[0])[0],$(".wdjd",$(".head")[0])[0])
	// you
	var ding_dian=$(".dian5",$(".head")[0])[0];
	var head_wzdh=$(".wzdh",ding_dian)[0];
	// console.log(head_wzdh,ding_dian);
	hover(ding_dian,function(){
		head_wzdh.style.display="block";
	},function(){
		head_wzdh.style.display="none";
	})
	// 双下标轮播banner图
	var box=$(".zhong")[0];
	var tus=$(".banner-zhong");
	var annius=$(".anniu-one");
	var zuo_1=$(".zuo")[0];
	var you_1=$(".you")[0];
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
		zuo_1.style.cssText="display:block";
		you_1.style.cssText="display:block";
	}
	box.onmouseout=function(){
		t=setInterval(fun,2000);
		zuo_1.style.cssText="display:none";
		you_1.style.cssText="display:none";
	}
	zuo_1.onclick=function(){
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
	you_1.onclick=function(){
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
	// 右拉框
	var fenlei=$(".q-fenlei");
	var b_fenlei=$(".b_fenlei");
	var a=$("a",fenlei[0]);
	// console.log(b_fenlei.length)
	for(var i=0;i<fenlei.length;i++){
		fenlei[i].index=i;
		hover(fenlei[i],function(){
			that=this;
			// console.log(that)
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="block";
				fenlei[that.index].style.background="#fff";
			}
		},function(){
			that=this;
			// console.log(that)
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="none";
				fenlei[that.index].style.background="#C81524";
			}
		})
		that=this;
		// console.log(that)
		hover(b_fenlei[i],function(){
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="block";
				fenlei[that.index].style.background="#fff";
				// b_fenlei[that.index].style.background="#C81524";
				// console.log(that.index)
			}
		},function(){
			for(var i=0;i<b_fenlei.length;i++){
				b_fenlei[that.index].style.display="none";
				fenlei[that.index].style.background="#C81524";
				// b_fenlei[that.index].style.background="#fff";
			}
		})
		
	}
	// log
	var log_right=$(".log-right",$(".log")[0])[0];
	var log_gouwuC=$(".log-gouwuC",log_right)[0];
	hover(log_right,function(){
		log_right.style.background="#fff";
		log_gouwuC.style.display="block";
	},function(){
		log_right.style.background="#F9F9F9f";
		log_gouwuC.style.display="none";
	})
	// 一楼
	var box1=getClass("dapai3")[0];
	var tus1=getClass("dapai3-one");
	var annius1=getClass("anniu1-one");
	var zuo1=getClass("zuo-1")[0];
	var you1=getClass("you-1")[0];
	var width1=parseInt(getStyle(box1,"width"));
	var n1=0;
	var next1=0;
	var fla=true;
	var t1=setInterval(yilou,3000);
	function yilou(){
		next1=n1+1;
		if(next1>=tus1.length){
			next1=0;
		}
		// 给下一个让它到右边
		tus1[next1].style.left=width1+"px";
		animate(tus1[n1],{left:-width1},600,Tween.Quad.easeInOut);
		animate(tus1[next1],{left:0},600,Tween.Quad.easeInOut);
		annius1[n1].style.cssText="background:#3E3E3E";
		annius1[next1].style.cssText="background:#B61B1F";
		n1=next1;
	}
	box1.onmouseover=function(){
		clearInterval(t1);
		zuo1.style.cssText="display:block";
		you1.style.cssText="display:block";
	}
	box1.onmouseout=function(){
		t1=setInterval(yilou,3000);
		zuo1.style.cssText="display:none";
		you1.style.cssText="display:none";
	}	
	zuo1.onclick=function(){
		if(fla==false){
			return;
		}
		fla=false;
		next1=n1-1;
		if(next1<0){
			next1=tus1.length-1;
		}
		// 给下一个让它到右边
		tus1[next1].style.left=-width1+"px";
		animate(tus1[n1],{left:width1},600,Tween.Quad.easeInOut);
		animate(tus1[next1],{left:0},600,Tween.Quad.easeInOut,function(){
			fla=true;
		});
		annius1[n1].style.cssText="background:#3E3E3E";
		annius1[next1].style.cssText="background:#B61B1F";
		n1=next1;
	}
	you1.onclick=function(){
		yilou();
	}
	for(var i=0;i<tus1.length;i++){
		annius1[i].index=i;
		annius1[i].onclick=function(){
			if(fla==false){
				return;
			}
			fla=false;
			if(this.index<n1){
				tus1[this.index].style.left=-width1+"px";
				animate(tus1[n1],{left:width3},600,Tween.Quad.easeInOut);
			}else if(this.index>n1){
				tus1[this.index].style.left=width1+"px";
				animate(tus1[n1],{left:-width1},600,Tween.Quad.easeInOut);
			}
			animate(tus1[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
				fla=true;
			});
			annius1[n1].style.cssText="background:#3E3E3E";
			annius1[this.index].style.cssText="background:#B61B1F";
			n1=this.index;
			next1=this.index;
		}
	}
	// 三楼 4 5 11 10
	shuangLunbo($(".remen1")[0],$(".zuo3")[0],$(".you3")[0],$(".anniu3-one"),$(".san-lunbo"),"#3E3E3E","#B61B1F")
	shuangLunbo($(".remen1")[1],$(".zuo3")[1],$(".you3")[1],$(".anniu4-one"),$(".si-lunbo"),"#3E3E3E","#B61B1F")
	shuangLunbo($(".remen1")[2],$(".zuo3")[2],$(".you3")[2],$(".anniu5-one"),$(".wu-lunbo"),"#3E3E3E","#B61B1F")
	shuangLunbo($(".remen1")[3],$(".zuo3")[4],$(".you3")[4],$(".anniu11-one"),$(".shiyi-lunbo"),"#3E3E3E","#B61B1F")
	shuangLunbo($(".lia1",$(".shilou")[0])[0],$(".zuo3")[3],$(".you3")[3],$(".anniu10-one"),$(".shi-lunbo"),"#3E3E3E","#B61B1F")
	// 2 6 7 8 9
	shuangLunbo($(".b2-zhong",$(".erlou")[0])[0],$(".zuo-2")[0],$(".you-2")[0],$(".anniu2-one"),$(".b2-zhong-neikuang"),"#3E3E3E","#B61B1F");
	shuangLunbo($(".bottom6-3",$(".liulou")[0])[0],$(".zuo-6")[0],$(".you-6")[0],$(".anniu6-one"),$(".b6-zhong-neikuang"),"#3E3E3E","#B61B1F");
	shuangLunbo($(".bottom6-3",$(".qilou")[0])[0],$(".zuo-7")[0],$(".you-7")[0],$(".anniu7-one"),$(".b7-zhong-neikuang"),"#3E3E3E","#B61B1F");
	shuangLunbo($(".bottom6-3",$(".balou")[0])[0],$(".zuo-8")[0],$(".you-8")[0],$(".anniu8-one"),$(".b8-zhong-neikuang"),"#3E3E3E","#B61B1F");
	shuangLunbo($(".bottom6-3",$(".jiulou")[0])[0],$(".zuo-9")[0],$(".you-9")[0],$(".anniu9-one"),$(".b9-zhong-neikuang"),"#3E3E3E","#B61B1F")
	// 12
	shuangLunbo($(".remen1",$(".shierlou")[0])[0],$(".zuo12")[0],$(".you12")[0],$(".anniu12-one"),$(".shier-lunbo"),"#3E3E3E","#B61B1F")
	shuangLunbo($(".remen1",$(".shierlou")[0])[1],$(".zuo12")[1],$(".you12")[1],$(".anniu12-two"),$(".shier1-lunbo"),"#3E3E3E","#B61B1F")
	// 选项卡
	function xuanxiangKa(obj,top){
		var obj=obj;
		var top=top;
		var t_right=$(".t-right",top)[0];
		var nav=$(".daohang",t_right);
		var bot1=$(".bot1",obj)[0];
		var tu=$(".bot1-nav",bot1);
		// console.log(tu.length)
		for(var i=0;i<nav.length;i++){
			nav[i].index=i;
			hover(nav[i],function(){
				// console.log(this)
				var dianjis=$(".dianji",obj);
				for(var i=0;i<dianjis.length;i++){
					dianjis[i].style.display="none";
				}
				dianjis[this.index].style.display="block";
				for(var i=0;i<nav.length;i++){
					tu[i].className="bot1-nav";
				}
				tu[this.index].className="bot1-nav bot1-first"
			},function(){
				var dianjis=$(".dianji",this)[0];
				dianjis.style.display="block";
			})
		}
		for(var i=0;i<tu.length;i++){
			tu[i].index=i;
			hover(tu[i],function(){
				// console.log(this)
				var dianjis=$(".dianji",obj);
				for(var i=0;i<dianjis.length;i++){
					dianjis[i].style.display="none";
				}
				dianjis[this.index].style.display="block";
			},function(){
				var dianjis=$(".dianji",obj);
				for(var i=0;i<dianjis.length;i++){
					dianjis[i].style.display="none";
				}
				dianjis[this.index].style.display="block";
			})
		}
	}
	xuanxiangKa($(".floor")[0],$(".top1",$(".floor")[0])[0]);
	xuanxiangKa($(".floor")[1],$(".top2",$(".floor")[1])[0]);
	xuanxiangKa($(".floor")[2],$(".top3",$(".floor")[2])[0]);
	xuanxiangKa($(".floor")[3],$(".top4",$(".floor")[3])[0]);
	xuanxiangKa($(".floor")[4],$(".top5",$(".floor")[4])[0]);
	xuanxiangKa($(".floor")[5],$(".top6",$(".floor")[5])[0]);
	xuanxiangKa($(".floor")[6],$(".top7",$(".floor")[6])[0]);
	xuanxiangKa($(".floor")[7],$(".top8",$(".floor")[7])[0]);
	xuanxiangKa($(".floor")[8],$(".top9",$(".floor")[8])[0]);
	xuanxiangKa($(".floor")[9],$(".top10",$(".floor")[9])[0]);
	xuanxiangKa($(".floor")[10],$(".top11",$(".floor")[10])[0]);
	// 选项卡点击效果
	// var box2=$(".erlou")[0]
	// var daohang=$(".daohang",box2);
	// console.log(dianjis,daohang)
	// var daohang_x=(".bot1-nav",box2);
	// for(var i=0;i<daohang.length;i++){
	// 	hover(daohang[i],function(){
	// 		var dianjis=$(".dianji",this)[0];
	// 		dianjis.style.display="block";
	// 		console.log(this)
	// 	},function(){
	// 		var dianjis=$(".dianji",this)[0];
	// 		dianjis.style.display="none";
	// 	})
	// }
	// youguding
	var research_nav=$(".research-nav");
     var research_pic=$(".research-pic");
     var research_zi=$(".research-zi");
     for(var i=0;i<research_nav.length;i++){
          research_nav[i].index=i;
          research_nav[i].onmouseover=function(){
                 research_nav[this.index].style.background="#CB1C39";
                 research_zi[this.index].style.display="block";
                 animate(research_zi[this.index],{right:35},300);

           }
         research_nav[i].onmouseout=function() {
            research_zi[this.index].style.display="none";
           	research_nav[this.index].style.background="#ededed"; 
            animate(research_zi[this.index],{right:-35},300);
         }
     }
     // 天天低价
     var discount=$(".discount")[0];
     var d_bottom_zuo=$(".zuo",$(".d-bottom")[0])[0];
     var d_img=$(".jinshuqi",discount)[0];
     hover(d_bottom_zuo,function(){
     	// d_img.style.left=29+"px";
     	animate(d_img,{left:29})
     },function(){
     	// d_img.style.left=39+"px";
     	animate(d_img,{left:39})
     })
	function baidong(obj){
		var discount=obj;
		var d_zhong=$(".zhong",discount)[0];
	    var d_bottom_zuo=$(".left",d_zhong);
	    for(var i=0;i<d_bottom_zuo.length;i++){
	    	hover(d_bottom_zuo[i],function(){
	     		 var d_img=$(".l_img",this)[0];
		     	animate(d_img,{left:1});
		    },function(){
		     	var d_img=$(".l_img",this)[0];
		     	animate(d_img,{left:10});
		    })
	    }  
	}
	baidong($(".discount")[0]);

	// 天天降价右
	var you_b=$(".you_b",discount)[0];
	var you_img=$(".you_img",you_b);
	var you_imgH=you_img[0].offsetHeight;
	you_imgH+=25;
	var t=setInterval(shangxia,2000)
	function shangxia(){
		animate(you_b,{top:-you_imgH},600,function(){
			var tuFirst=getFirst(you_b);
			you_b.appendChild(tuFirst);
			you_b.style.top="0px";
		})
	}


}
