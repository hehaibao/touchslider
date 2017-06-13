/**
* zepto touchSlider - 移动端轮播插件
* @version 2.0.1
* @author haibao <hhb219@163.com> <http://www.hehaibao.com/>
*/
;(function($) {
	var a = 0, i = 0, o, b, s, st, wrapper, container, slides, slideNum, slideWidth, srcs, links;
	methods = {
		init: function(options) {
			return this.each(function() {
				var $this = $(this),opt = $this.data("touchSlider");
				if (typeof(opt) === "undefined") {
					var defaults = {
						box: "#sliderBox", //容器元素
						srcArr: [], //图片数组
						arrows: true, //是否显示圆点
						auto: true, //是否自动播放
						autoTime: 2000 //自动播放时间
					};
					opt = $.extend({}, defaults, options);
					$this.data("touchSlider", opt)
				}
				opt = $.extend({}, opt, options);
				wrapper = $(opt.box);
            	slideNum = opt.srcArr.length || 4;
	            slideWidth = wrapper.offset().width;
	            
	            if(slideNum >= 1) {
		            o = '<ul id="slider">';
					for (i = 0; i < slideNum; i++) {
						srcs = opt.srcArr[i].length == 2 ? opt.srcArr[i][0] : opt.srcArr[i];
						links = opt.srcArr[i].length == 2 ? opt.srcArr[i][1] : 'javascript:;';
						o += '<li><a href="'+links+'"><img width="100%" src="'+srcs+'"/></a></li>';
					}
					o += "</ul>";
					wrapper.append(o);
					
					container = wrapper.children().first();
	            	slides = container.children();
		            container.css({
						'width':slideNum * slideWidth,
						'height':'100%',
						'overflow':'hidden'
					});
		            slides.css({
						'width':slideWidth,
						'height':'100%',
						'float':'left'
					});
	            
					if(opt.arrows){
						b = '<ol id="arrow">';
						for (i = 0; i < slideNum; i++) {
							i == a ? b += '<li class="active"></li>' : b += "<li></li>";
						}
						b += "</ol>";
						$(this).append(b);
						$(this).find("#arrow li").on('tap click',function() {
							a = $(this).index();
							methods.r(opt,'tap');
						});
					}
					if(opt.auto) methods.c(opt);
					var myTouch = util.toucher(document.getElementById('slider'));
					myTouch.on('swipeLeft', function() {
						methods.r(opt,'next');
					}).on('swipeRight', function() {
						methods.r(opt,'prev');
					});
				}
			})
		},
		r: function(o,d) {
			methods.c(o);
			if(d == 'prev'){
				a--;
				if (a < 0) {
					a = slideNum - 1;
				}
			}else if(d == 'next'){
				a++;
				if (a >= slideNum) {
					a = 0;
				}
			}
            container.css({
                '-webkit-transition-duration':'400ms',
                '-webkit-transform':'translate3D(' + -(a * slideWidth) + 'px,0,0)',
				'transition-duration':'400ms',
				'transform':'translate3D(' + -(a * slideWidth) + 'px,0,0)'
            });
			wrapper.find("ol li").removeClass("active").eq(a).addClass("active");
		},
		c: function(o){
			clearInterval(s);
			clearTimeout(st);
			if(o.auto) {
				st = setTimeout(function() {
					s = setInterval(function() {
						methods.r(o,'next');
					}, o.autoTime);
				}, o.autoTime);
			}
		}
	};
	$.fn.touchslider = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
		} else {
			if (typeof method === "object" || !method) {
				return methods.init.apply(this, arguments)
			} else {
				$.error("Error! Method" + method + "does not exist on zepto.touchslider！")
			}
		}
	}
})(Zepto);