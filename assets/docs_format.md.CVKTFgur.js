import{_ as n,c as l,m as e,a,J as i,a4 as t,o,G as p}from"./chunks/framework.4v6VRsm7.js";const te=JSON.parse('{"title":"Format","description":"","frontmatter":{},"headers":[],"relativePath":"docs/format.md","filePath":"docs/format.md"}'),r={name:"docs/format.md"},d=e("h1",{id:"format",tabindex:"-1"},[a("Format "),e("a",{class:"header-anchor",href:"#format","aria-label":'Permalink to "Format"'},"​")],-1),h=e("p",null,"Controls the output properties of the image.",-1),c={id:"adaptive-filter",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#adaptive-filter","aria-label":'Permalink to "Adaptive filter <Badge type="info" text="&af" />"'},"​",-1),u=e("p",null,[a("Use adaptive row filtering for reducing the PNG file size. This only works when the output image is "),e("code",null,"png"),a(".")],-1),k={id:"base64-data-url",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#base64-data-url","aria-label":'Permalink to "Base64 (data URL) <Badge type="info" text="&encoding=base64" />"'},"​",-1),b=t('<p>Encodes the image to be used directly in the src= of the <code>&lt;img&gt;</code>-tag. Use <a href="/?url=wsrv.nl/lichtenstein.jpg&amp;crop=100,100,720,530&amp;encoding=base64" target="_blank">this link</a> to see the output result.</p><p>More info: <a href="https://github.com/weserv/images/issues/59" target="_blank" rel="noreferrer">Issue #59 - Return image base64 encoded</a>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;crop=100,100,720,530&amp;encoding=base64</span></span></code></pre></div>',3),_={id:"cache-control",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#cache-control","aria-label":'Permalink to "Cache-Control <Badge type="info" text="&maxage=" />"'},"​",-1),f=t('<p>Defines for how long an image should be cached by the browser. This will change the <code>max-age</code> of the <code>Cache-Control</code> HTTP-header.</p><p>We define a &quot;far-future expiration&quot; of 1 year by default. The duration can be specified in days, weeks, months, and years using the following suffixes:</p><ul><li><code>d</code>: days</li><li><code>w</code>: weeks, 7 days</li><li><code>M</code>: months, 30 days</li><li><code>y</code>: years, 365 days</li></ul><p>A duration must be in the range of <code>1d</code> (1 day) to <code>1y</code> (1 year), inclusive. Any other value will be ignored and fallback to the default value of 1 year.</p><p>More info: <a href="https://github.com/weserv/images/issues/186" target="_blank" rel="noreferrer">Issue #186 - Increase Cache-Control: max-age= to 1 year instead of 1 month</a>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//wsrv.nl?url=wsrv.nl/lichtenstein.jpg&amp;w=100&amp;maxage=31d</span></span></code></pre></div>',6),E={id:"compression-level",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#compression-level","aria-label":'Permalink to "Compression level <Badge type="info" text="&l=" />"'},"​",-1),w=e("p",null,[a("The zlib compression level. Use a value between "),e("code",null,"0"),a(" (no Deflate) and "),e("code",null,"9"),a(" (maximum Deflate). The default value is "),e("code",null,"6"),a(". This only works when the output image is "),e("code",null,"png"),a(".")],-1),x={id:"lossless-compression",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#lossless-compression","aria-label":'Permalink to "Lossless compression <Badge type="info" text="&ll" />"'},"​",-1),C=e("p",null,[a("Whether the resulting image should be lossless compressed. This only works when the output image is "),e("code",null,"webp"),a(".")],-1),F=e("p",null,[a("More info: "),e("a",{href:"https://github.com/weserv/images/issues/386",target:"_blank",rel:"noreferrer"},"Issue #386 - webP output is always lossy and cannot be requested as lossless"),a(".")],-1),P={id:"default-image",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#default-image","aria-label":'Permalink to "Default image <Badge type="info" text="&default=" />"'},"​",-1),A=t('<p>If there is a problem loading an image, then an error is shown. However, there might be a need where instead of giving a broken image to the user, you want a default image to be delivered.</p><p>More info: <a href="https://github.com/weserv/images/issues/37" target="_blank" rel="noreferrer">Issue #37 - Return default image if the image&#39;s URL not found</a>.</p><p>The URL must not include a <code>default</code> querystring (if it does, it will be ignored).</p><p>Use <code>&amp;default=1</code> to redirect to the original URL specified in <code>?url=</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v_-kR" id="tab-GU3HhA6" checked="checked"><label for="tab-GU3HhA6">HTML</label><input type="radio" name="group-v_-kR" id="tab-g-mwu1m"><label for="tab-g-mwu1m">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=example.org/noimage.jpg&amp;default=wsrv.nl/placeholder.svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Default image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=example.org/noimage.jpg&amp;default=wsrv.nl/placeholder.svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=example.org/noimage.jpg&amp;default=wsrv.nl/placeholder.svg" target="_blank"><img src="/placeholder.svg" alt="Default image"></a></p>',6),I={id:"filename",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#filename","aria-label":'Permalink to "Filename <Badge type="info" text="&filename=" />"'},"​",-1),S=e("p",null,[a("To specify the filename returned in the "),e("code",null,"Content-Disposition"),a(" header. The filename must only contain alphanumeric characters.")],-1),V=e("p",null,[a("More info: "),e("a",{href:"https://github.com/weserv/images/issues/122",target:"_blank",rel:"noreferrer"},"Issue #122 - Specify filename"),a(".")],-1),j={id:"interlace-progressive",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#interlace-progressive","aria-label":'Permalink to "Interlace / progressive <Badge type="info" text="&il" />"'},"​",-1),M=t('<p>Adds interlacing to GIF and PNG. JPEGs become progressive.</p><p>More info: <a href="https://github.com/weserv/images/issues/50" target="_blank" rel="noreferrer">Issue #50 - Add parameter to use progressive JPEGs</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-C1Osu" id="tab-B2IlKUh" checked="checked"><label for="tab-B2IlKUh">HTML</label><input type="radio" name="group-C1Osu" id="tab-ETch7ia"><label for="tab-ETch7ia">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;il&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Interlace / progressive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;il</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;il" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;il" alt="Interlace / progressive"></a></p>',4),N={id:"number-of-pages",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#number-of-pages","aria-label":'Permalink to "Number of pages <Badge type="info" text="&n=" />"'},"​",-1),U=t('<p>To select the number of pages to render. The default value is <code>1</code>. Set to <code>-1</code> to mean &quot;until the end of the document&quot;.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>-1</code> will be useful if you need to resize an animated WebP or GIF image.</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_U8B-" id="tab-whBWcFe" checked="checked"><label for="tab-whBWcFe">HTML</label><input type="radio" name="group-_U8B-" id="tab-biMksXV"><label for="tab-biMksXV">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/banana.webp&amp;h=300&amp;output=gif&amp;n=-1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Number of pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/banana.webp&amp;h=300&amp;output=gif&amp;n=-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/banana.webp&amp;h=300&amp;output=gif&amp;n=-1" target="_blank"><img src="/static/banana.webp?h=300&amp;output=gif&amp;n=-1" alt="Number of pages"></a></p>',4),L={id:"output",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#output","aria-label":'Permalink to "Output <Badge type="info" text="&output=" />"'},"​",-1),H=t('<p>Encodes the image to a specific format. Accepts <code>jpg</code>, <code>png</code>, <code>gif</code>, <code>tiff</code>, <code>webp</code> or <code>json</code>. If none is given, it will honor the origin image format.</p><p>More info: <a href="https://github.com/weserv/images/issues/62" target="_blank" rel="noreferrer">Issue #62 - Format conversion</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oPbw8" id="tab-1fuw7mt" checked="checked"><label for="tab-1fuw7mt">HTML</label><input type="radio" name="group-oPbw8" id="tab-Ev2E9n_"><label for="tab-Ev2E9n_">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;output=webp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;output=webp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;output=webp" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;output=webp" alt="Output"></a></p>',4),O={id:"page",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#page","aria-label":'Permalink to "Page <Badge type="info" text="&page=" />"'},"​",-1),W=e("p",null,[a("To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a multi-resolution image, you can use "),e("code",null,"-1"),a(" to get the largest page and "),e("code",null,"-2"),a(" to get the smallest page.")],-1),J={id:"quality",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#quality","aria-label":'Permalink to "Quality <Badge type="info" text="&q=" />"'},"​",-1),Q=t('<p>Defines the quality of the image. Use values between <code>1</code> and <code>100</code>. Defaults to <code>80</code>. This only works when the output image is <code>jpg</code>, <code>tiff</code> or <code>webp</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MEVt0" id="tab-jKf0j7S" checked="checked"><label for="tab-jKf0j7S">HTML</label><input type="radio" name="group-MEVt0" id="tab-M6V_ufV"><label for="tab-M6V_ufV">Markdown</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;q=20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Quality</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://wsrv.nl/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;q=20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><p><a href="/?url=wsrv.nl/lichtenstein.jpg&amp;w=300&amp;q=20" target="_blank"><img src="/static/lichtenstein.jpg?w=300&amp;q=20" alt="Quality"></a></p>',3);function $(X,Y,Z,ee,ae,se){const s=p("Badge");return o(),l("div",null,[d,h,e("h2",c,[a("Adaptive filter "),i(s,{type:"info",text:"&af"}),a(),g]),u,e("h2",k,[a("Base64 (data URL) "),i(s,{type:"info",text:"&encoding=base64"}),a(),m]),b,e("h2",_,[a("Cache-Control "),i(s,{type:"info",text:"&maxage="}),a(),v]),f,e("h2",E,[a("Compression level "),i(s,{type:"info",text:"&l="}),a(),y]),w,e("h2",x,[a("Lossless compression "),i(s,{type:"info",text:"&ll"}),a(),T]),C,F,e("h2",P,[a("Default image "),i(s,{type:"info",text:"&default="}),a(),B]),A,e("h2",I,[a("Filename "),i(s,{type:"info",text:"&filename="}),a(),D]),S,V,e("h2",j,[a("Interlace / progressive "),i(s,{type:"info",text:"&il"}),a(),q]),M,e("h2",N,[a("Number of pages "),i(s,{type:"info",text:"&n="}),a(),R]),U,e("h2",L,[a("Output "),i(s,{type:"info",text:"&output="}),a(),G]),H,e("h2",O,[a("Page "),i(s,{type:"info",text:"&page="}),a(),z]),W,e("h2",J,[a("Quality "),i(s,{type:"info",text:"&q="}),a(),K]),Q])}const ne=n(r,[["render",$]]);export{te as __pageData,ne as default};
