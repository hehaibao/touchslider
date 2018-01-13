### zepto touchslider 移动端轮播图插件
 
zepto.touchslider.js 是一个用来创建一个轮播图的 zepto 插件。

  在线演示地址：http://hehaibao.github.io/touchslider/

### Dependencies：

    zepto.touchslider.js depends on the following libraries:

* [zepto](http://zeptojs.com/)
* [toucher](https://github.com/bh-lay/toucher)

#### JS调用方法(举个栗子)：

  1. 无链接的情况下：
  
  ```javascript
  $('#sliderBox').touchslider({
    srcArr: [
      "http://fakeimg.pl/320x175/666666",
      "http://fakeimg.pl/320x175/ff0000/",
      "http://fakeimg.pl/320x175/222222/",
      "http://fakeimg.pl/320x175/999999/"
    ]
  });
  ```
  
  2. 有链接的情况下：
  
  ```javascript
  $('#sliderBox').touchslider({
    srcArr: [
      [
        "http://fakeimg.pl/320x175/666666",
        "http://www.hehaibao.com/"
      ],
      [
        "http://fakeimg.pl/320x175/ff0000",
        "http://www.hehaibao.com/"
      ],
      [
        "http://fakeimg.pl/320x175/222222",
        "http://www.hehaibao.com/"
      ],
      [
        "http://fakeimg.pl/320x175/999999",
        "http://www.hehaibao.com/"
      ]
    ]
  });
  ```
  
  其他自定义参数：

  ```javascript
  $('#sliderBox').touchslider({
    box: '#sliderBox',
    srcArr: [],
    arrows: false,
    auto: true,
    autoTime: 2000
  });
  ```

