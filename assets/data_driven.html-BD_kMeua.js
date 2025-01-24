import{_ as n,c as a,d as p,o as t}from"./app-KS4pomqg.js";const e={};function o(c,s){return t(),a("div",null,s[0]||(s[0]=[p(`<p>这个数据驱动在集合 Run Collection 中选择 Data</p><h2 id="csv" tabindex="-1"><a class="header-anchor" href="#csv"><span>CSV</span></a></h2><div class="language-csv line-numbers-mode" data-highlighter="prismjs" data-ext="csv" data-title="csv"><pre><code><span class="line"><span class="token value">grant_type</span><span class="token punctuation">,</span><span class="token value">appid</span><span class="token punctuation">,</span><span class="token value">secret</span><span class="token punctuation">,</span><span class="token value">assert_value</span></span>
<span class="line"><span class="token value">client_credential</span><span class="token punctuation">,</span><span class="token value">appid</span><span class="token punctuation">,</span><span class="token value">secret</span><span class="token punctuation">,</span><span class="token value">access_token</span></span>
<span class="line"><span class="token punctuation">,</span><span class="token value">appid</span><span class="token punctuation">,</span><span class="token value">secret</span><span class="token punctuation">,</span><span class="token value">40002</span></span>
<span class="line"><span class="token value">client_credential</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token value">secret</span><span class="token punctuation">,</span><span class="token value">41002</span></span>
<span class="line"><span class="token value">client_credential</span><span class="token punctuation">,</span><span class="token value">appid</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token value">41004</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求参数取值（全局变量）：<code>{{ grant_type }}</code> <code>{{ appid }}</code> <code>{{ secret }}</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 当返回结果中有 access_token 才通过正则取值</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&#39;access_token&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 正则表达式匹配token</span></span>
<span class="line">  <span class="token keyword">const</span> access_token <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;access_token&quot;:&quot;(.*?)&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 设置全局变量</span></span>
<span class="line">  pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access_token&#39;</span><span class="token punctuation">,</span> access_token<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 业务断言</span></span>
<span class="line">pm<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;检查响应中包括access_token&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  pm<span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span>pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">include</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>assert_value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credential&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;assert_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;access_token&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;assert_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40002&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credential&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;assert_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;41002&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credential&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;assert_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;41004&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const i=n(e,[["render",o],["__file","data_driven.html.vue"]]),u=JSON.parse('{"path":"/docs/postman/data_driven.html","title":"数据驱动","lang":"zh-CN","frontmatter":{"title":"数据驱动"},"headers":[{"level":2,"title":"CSV","slug":"csv","link":"#csv","children":[]},{"level":2,"title":"JSON","slug":"json","link":"#json","children":[]}],"git":{"updatedTime":1737731455000,"contributors":[{"name":"dbthree","username":"dbthree","email":"linshengxuan00@163.com","commits":1,"url":"https://github.com/dbthree"}]},"filePathRelative":"docs/postman/data_driven.md"}');export{i as comp,u as data};
