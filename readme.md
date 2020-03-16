前端渲染 DEMO keep-alive实现后退不刷新
https://segmentfault.com/a/1190000022038272

vue钩子函数的执行顺序:

不使用keep-alive
beforeRouteEnter --> created --> mounted --> destroyed

使用keep-alive
beforeRouteEnter --> created --> mounted --> activated --> deactivated
再次进入缓存的页面，只会触发beforeRouteEnter -->activated --> deactivated。created和mounted不会再执行。


注：
demo中，index页面包含三个链接导航。
    pageA-->pageB-->pageC

依次前进，每次前进到一个新页面都需要获取数据，而按下后退键后，

从pageC返回到pageB，pageB不再获取新数据，而是使用之前缓存的数据。

从pageB返回到pageA时，pageA不再获取新数据，而是使用之前的数据。当pageA存在滚动条时，返回时会滚动到上次浏览高度。

所以，pageA和pageB需要缓存，pageC不需要缓存。
