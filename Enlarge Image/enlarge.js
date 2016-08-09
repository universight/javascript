/*! jquery-photo-enlarger.js v0.0.0 | (c) 2013 Brent O'Connor | The MIT License (MIT)
*/
"use strict";!function(a){a.fn.PhotoEnlarger=function(b){var c=this,d={max_width_container:null,caption_fadein_speed:500,caption_fadeout_speed:500,enlarge_speed:300,shrink_speed:300,add_caption_function:null};return c.options=a.extend(d,b),c.enlarge=function(b){var d=b.find("img:first"),e=a('<div class="thumb-large">'),f=a("<img>");f.attr("src",d.data("large_photo")),f.imagesLoaded().done(function(){var g=f[0].width,h=f[0].height,i=a('<div class="caption"><p></p></caption>'),j=a('<div class="state-icon">'),k=d.data("caption"),l=g,m=h;"undefined"!=typeof b.max_width&&"undefined"!=typeof b.max_height?(l=b.max_width,m=b.max_height):(null===c.options.max_width_container?l=b.parent().parent().width():c.options.max_width_container instanceof a&&(l=c.options.max_width_container.width()),g>l&&(m=h*(l/g)),b.max_width=l,b.max_height=m,b.width=d[0].width,b.height=d[0].height),e.hide(),e.css({width:b.width,height:b.height}),e.append(f).append(j),b.append(e),e.show(),e.animate({width:l,height:m},c.options.enlarge_speed,function(){"function"==typeof c.options.add_caption_function?c.options.add_caption_function(i,k,e,c):"undefined"!=typeof k&&""!==k&&(i.find("p:first").html(k),e.append(i),e.hover(function(){i.fadeIn(c.options.caption_fadein_speed)},function(){i.fadeOut(c.options.caption_fadeout_speed)})),f.click(function(){c.shrink(b)}),j.click(function(){c.shrink(b)})})})},c.shrink=function(a){var b=a.find(".thumb-large:first"),d=b.find(".caption:first"),e=function(){b.animate({width:a.width,height:a.height},c.options.shrink_speed,function(){b.remove()})};0===d.length?e():d.fadeOut(100,e)},c.each(function(){var b=a(this),d=b.find("img:first"),e=a('<div class="state-icon">'),f=d.data("large_photo"),g=new Image;return g.src=f,e.click(function(){c.enlarge(b)}),d.click(function(){c.enlarge(b)}),b.append(e),b})}}(jQuery);