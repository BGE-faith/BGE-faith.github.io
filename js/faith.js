/*
 * @Author: tzy1997
 * @Date: 2020-12-15 20:55:25
 * @LastEditors: tzy1997
 * @LastEditTime: 2021-01-12 19:02:25
 */

// 友情链接页面 头像找不到时 替换图片
if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i < imgObj.length; i++) {　　
        imgObj[i].onerror = function() { this.src = "https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/theme_f/friend_404.gif" }
    }
}