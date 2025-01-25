import{_ as o,c as t,d as i,o as l}from"./app-DRXY3Ljm.js";const n={};function a(c,e){return l(),t("div",null,e[0]||(e[0]=[i('<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h2><p>Cookie 鉴权原理：</p><ol><li>客户端第一次访问服务器，服务器会生成 Cookie 信息，在响应头 <code>Set-Cookie</code> 把 Cookie 信息发送给客户端。</li><li>客户端再次访问服务器，客户端就会带着 <code>Cookie</code> 信息实现鉴权。</li></ol><p>Cookie 分类：</p><ul><li>会话级别：保存在内存，浏览器关闭后自动化清除。</li><li>持久化级别：保存在硬盘，浏览器关闭后不会清除，失效时间或手动删除。</li></ul><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span>Token</span></a></h2><p>取得 Token 存为全局变量，然后从全局变量中获取 Token</p>',7)]))}const r=o(n,[["render",a],["__file","cookie.html.vue"]]),k=JSON.parse('{"path":"/docs/postman/cookie.html","title":"鉴权","lang":"zh-CN","frontmatter":{"title":"鉴权"},"headers":[{"level":2,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":2,"title":"Token","slug":"token","link":"#token","children":[]}],"git":{"updatedTime":1737774322000,"contributors":[{"name":"dbthree","username":"dbthree","email":"linshengxuan00@163.com","commits":1,"url":"https://github.com/dbthree"}]},"filePathRelative":"docs/postman/cookie.md"}');export{r as comp,k as data};
