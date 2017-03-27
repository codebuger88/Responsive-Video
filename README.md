# Responsive-Video

內嵌youtube、vimeo或youku等影音平台影片時還能隨著不同解析度看到完整的預覽畫面

### Settings

Option | Default | Description
------ | ------- | -----------
selector | 'iframe' | 選擇元素
containerClass | 'video-container' | 元素外層div class名稱
source | ['youtube', 'vimeo'] | 開放使用的影音來源
extraSource | [] | 除了預設開放使用外的影音來源

##### 使用方法

```javascript
// 一般使用
$('.video').ResponsiveVideo();

// 自訂class名稱
$('.vimeo').ResponsiveVideo({
    containerClass: 'vimeo-container'
});

// 開放使用的影音來源
$('.only').ResponsiveVideo({
    source: ['youtube']
});

// 額外的影音來源
$('.extra').ResponsiveVideo({
    extraSource: ['xuite', 'youku']
});

```

