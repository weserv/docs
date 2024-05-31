import{_ as n,c as l,j as i,a,I as t,a3 as e,o as p,E as h}from"./chunks/framework.wrXFlTLz.js";const Z=JSON.parse('{"title":"Adjustment","description":"","frontmatter":{},"headers":[],"relativePath":"docs/adjustment.md","filePath":"docs/adjustment.md"}'),d={name:"docs/adjustment.md"},r=i("h1",{id:"adjustment",tabindex:"-1"},[a("Adjustment "),i("a",{class:"header-anchor",href:"#adjustment","aria-label":'Permalink to "Adjustment"'},"​")],-1),o=i("p",null,"Perform operations similar to those in image-editing applications.",-1),c={id:"background",tabindex:"-1"},k=i("a",{class:"header-anchor",href:"#background","aria-label":'Permalink to "Background <Badge type="info" text="&bg=" />"'},"​",-1),g=e('<p>Sets the background color of the image. Supports a variety of color formats. In addition to the 140 color names supported by all modern browsers (listed <a href="./supported-colors.html">here</a>), it also accepts hexadecimal RGB and RBG alpha formats.</p><p><strong>Valid hexadecimal formats:</strong></p><ul><li>3 digit RGB: <code>CCC</code></li><li>4 digit ARGB (alpha): <code>5CCC</code></li><li>6 digit RGB: <code>CCCCCC</code></li><li>8 digit ARGB (alpha): <code>55CCCCCC</code></li></ul><p>More info: <a href="https://github.com/weserv/images/issues/81" target="_blank" rel="noreferrer">Issue #81 - Background setting</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lAOmw" id="tab-v2gXrn6" checked><label for="tab-v2gXrn6">HTML</label><input type="radio" name="group-lAOmw" id="tab-9xBjLNO"><label for="tab-9xBjLNO">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/transparency_demo.png&amp;w=400&amp;bg=black&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/transparency_demo.png&amp;w=400&amp;bg=black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/transparency_demo.png&amp;w=400&amp;bg=black" target="_blank"><img src="/static/transparency_demo.png?w=400&amp;bg=black" alt="Background"></a></p>',6),u={id:"blur",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#blur","aria-label":'Permalink to "Blur <Badge type="info" text="&blur=" />"'},"​",-1),E=e('<p>Adds a blur effect to the image. When used without a value (<code>&amp;blur</code>), performs a fast, mild blur of the output image. When a value is provided, performs a slower, more accurate Gaussian blur.</p><p>Use values between <code>0.3</code> and <code>1000</code>, representing the sigma of the Gaussian mask, where <code>sigma = 1 + radius / 2</code>.</p><p>More info: <a href="https://github.com/weserv/images/issues/69" target="_blank" rel="noreferrer">Issue #69 - Allow blur transformation (with radius parameter)</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3y9SY" id="tab-O2X61pY" checked><label for="tab-O2X61pY">HTML</label><input type="radio" name="group-3y9SY" id="tab-i9_Dz4q"><label for="tab-i9_Dz4q">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;blur=5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;blur=5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;blur=5" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;blur=5" alt="Blur"></a></p>',5),b={id:"contrast",tabindex:"-1"},v=i("a",{class:"header-anchor",href:"#contrast","aria-label":'Permalink to "Contrast <Badge type="info" text="&con=" />"'},"​",-1),_=e('<p>Adjusts the image contrast. Use values between <code>-100</code> and <code>+100</code>, where <code>0</code> represents no change.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qUn9j" id="tab-efzn3fV" checked><label for="tab-efzn3fV">HTML</label><input type="radio" name="group-qUn9j" id="tab-706_zJG"><label for="tab-706_zJG">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;con=25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Contrast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;con=25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;con=25" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;con=25" alt="Contrast"></a></p>',3),y={id:"filter",tabindex:"-1"},f=i("a",{class:"header-anchor",href:"#filter","aria-label":'Permalink to "Filter <Badge type="info" text="&filt=" />"'},"​",-1),w=e('<p>Applies a filter effect to the image. Accepts <code>greyscale</code>, <code>sepia</code>, <code>duotone</code> or <code>negate</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use <code>&amp;start</code> and <code>&amp;stop</code> to define the duotone colors. By default, it will use <code>&amp;start=<span style="background:#C83658;color:white;">C83658</span></code> and <code>&amp;stop=<span style="background:#D8E74F;color:black;">D8E74F</span></code>.</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hg4g6" id="tab-rX07FEQ" checked><label for="tab-rX07FEQ">HTML</label><input type="radio" name="group-hg4g6" id="tab-4VJCkkp"><label for="tab-4VJCkkp">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/zebra.jpg&amp;w=300&amp;h=300&amp;fit=cover&amp;a=focal&amp;fpx=0.6&amp;filt=duotone&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/zebra.jpg&amp;w=300&amp;h=300&amp;fit=cover&amp;a=focal&amp;fpx=0.6&amp;filt=duotone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/zebra.jpg&amp;w=300&amp;h=300&amp;fit=cover&amp;a=focal&amp;fpx=0.6&amp;filt=duotone" target="_blank"><img src="/static/zebra.jpg?w=300&amp;h=300&amp;fit=cover&amp;a=focal&amp;fpx=0.6&amp;filt=duotone" alt="Filter"></a></p>',4),C={id:"gamma",tabindex:"-1"},x=i("a",{class:"header-anchor",href:"#gamma","aria-label":'Permalink to "Gamma <Badge type="info" text="&gam=" />"'},"​",-1),F=e('<p>Adjusts the image gamma. Use values between <code>1.0</code> and <code>3.0</code>. The default value is <code>2.2</code>, a suitable approximation for sRGB images.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ciQcg" id="tab-BbKHXgk" checked><label for="tab-BbKHXgk">HTML</label><input type="radio" name="group-ciQcg" id="tab-J37D3nc"><label for="tab-J37D3nc">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;gam=3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Gamma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;gam=3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;gam=3" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;gam=3" alt="Gamma"></a></p>',3),T={id:"modulate",tabindex:"-1"},B=i("a",{class:"header-anchor",href:"#modulate","aria-label":'Permalink to "Modulate <Badge type="info" text="&mod=" />"'},"​",-1),j=i("p",null,[a("Transforms the image using brightness, saturation and hue rotation. Use "),i("code",null,"&mod=[brightness multiplier],[saturation multiplier],[hue degrees]"),a(" to define the below adjustments at once.")],-1),A={id:"brightness",tabindex:"-1"},S=i("a",{class:"header-anchor",href:"#brightness","aria-label":'Permalink to "Brightness <Badge type="info" text="&mod=" />"'},"​",-1),D=e('<p>Adjusts the brightness of the image. A multiplier greater than 1 will increase brightness, while a multiplier less than 1 will decrease the brightness.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GQKfB" id="tab-_hJU-6_" checked><label for="tab-_hJU-6_">HTML</label><input type="radio" name="group-GQKfB" id="tab-mlmJ5I6"><label for="tab-mlmJ5I6">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;mod=2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Brightness</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;mod=2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;mod=2" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;mod=2" alt="Brightness"></a></p>',3),P={id:"saturation",tabindex:"-1"},V=i("a",{class:"header-anchor",href:"#saturation","aria-label":'Permalink to "Saturation <Badge type="info" text="&sat=" />"'},"​",-1),q=e('<p>Adjusts the saturation of the image. A multiplier greater than 1 will increase saturation, while a multiplier less than 1 will decrease the saturation.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_QQcO" id="tab-3HkPS3t" checked><label for="tab-3HkPS3t">HTML</label><input type="radio" name="group-_QQcO" id="tab--wfwDiV"><label for="tab--wfwDiV">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sat=0.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Saturation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sat=0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sat=0.5" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;sat=0.5" alt="Saturation"></a></p>',3),I={id:"hue-rotation",tabindex:"-1"},M=i("a",{class:"header-anchor",href:"#hue-rotation","aria-label":'Permalink to "Hue rotation <Badge type="info" text="&hue=" />"'},"​",-1),R=e('<p>Applies a hue rotation to the image. A positive hue rotation increases the hue value, while a negative rotation decreases the hue value.</p><p>Values are given in degrees, there is no minimum or maximum value; <code>&amp;hue=N</code> evaluates to <code>N</code> modulo 360.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-98ZDh" id="tab-346Mwfm" checked><label for="tab-346Mwfm">HTML</label><input type="radio" name="group-98ZDh" id="tab-aSQJ4OD"><label for="tab-aSQJ4OD">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;hue=90&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Hue rotation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;hue=90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;hue=90" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;hue=90" alt="Hue rotation"></a></p>',4),G={id:"sharpen",tabindex:"-1"},N=i("a",{class:"header-anchor",href:"#sharpen","aria-label":'Permalink to "Sharpen <Badge type="info" text="&sharp=" />"'},"​",-1),H=e('<p>Sharpen the image. Performs an accurate sharpen of the L channel in the LAB color space. Use in combination with <code>&amp;sharpf=</code> and <code>&amp;sharpj=</code> to control the level of sharpening in &quot;flat&quot; and &quot;jagged&quot; areas.</p><p>Use values between <code>0.000001</code> and <code>10</code>, representing the sigma of the Gaussian mask, where <code>sigma = 1 + radius / 2</code>. When used without parameters, performs a fast, mild sharpen of the output image.</p><p>The level of sharpening to apply to &quot;flat&quot; (<code>&amp;sharpf=</code>) and &quot;jagged&quot; (<code>&amp;sharpj=</code>) areas needs to be given in the range of <code>0</code> and <code>1000000</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Y7yVR" id="tab-5KW2SyY" checked><label for="tab-5KW2SyY">HTML</label><input type="radio" name="group-Y7yVR" id="tab-CSmX7UR"><label for="tab-CSmX7UR">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sharp=3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Sharpen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sharp=3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;sharp=3" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;sharp=3" alt="Sharpen"></a></p>',5),U={id:"tint",tabindex:"-1"},L=i("a",{class:"header-anchor",href:"#tint","aria-label":'Permalink to "Tint <Badge type="info" text="&tint=" />"'},"​",-1),J=e('<p>Tint the image using the provided chroma while preserving the image luminance. See <a href="./adjustment.html#background">here</a> for the supported color formats.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-zUG6i" id="tab-l3kcS0S" checked><label for="tab-l3kcS0S">HTML</label><input type="radio" name="group-zUG6i" id="tab-6PuDayU"><label for="tab-6PuDayU">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;tint=red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Tint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;tint=red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;tint=red" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;tint=red" alt="Tint"></a></p>',3);function z(Q,O,X,Y,K,W){const s=h("Badge");return p(),l("div",null,[r,o,i("h2",c,[a("Background "),t(s,{type:"info",text:"&bg="}),a(),k]),g,i("h2",u,[a("Blur "),t(s,{type:"info",text:"&blur="}),a(),m]),E,i("h2",b,[a("Contrast "),t(s,{type:"info",text:"&con="}),a(),v]),_,i("h2",y,[a("Filter "),t(s,{type:"info",text:"&filt="}),a(),f]),w,i("h2",C,[a("Gamma "),t(s,{type:"info",text:"&gam="}),a(),x]),F,i("h2",T,[a("Modulate "),t(s,{type:"info",text:"&mod="}),a(),B]),j,i("h3",A,[a("Brightness "),t(s,{type:"info",text:"&mod="}),a(),S]),D,i("h3",P,[a("Saturation "),t(s,{type:"info",text:"&sat="}),a(),V]),q,i("h3",I,[a("Hue rotation "),t(s,{type:"info",text:"&hue="}),a(),M]),R,i("h2",G,[a("Sharpen "),t(s,{type:"info",text:"&sharp="}),a(),N]),H,i("h2",U,[a("Tint "),t(s,{type:"info",text:"&tint="}),a(),L]),J])}const ii=n(d,[["render",z]]);export{Z as __pageData,ii as default};