(()=>{var e={};e.id=220,e.ids=[220],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},2426:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(260),i=r(8203),n=r(5155),o=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7678)),"C:\\github\\Mar2025\\app\\about\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9785)),"C:\\github\\Mar2025\\app\\about\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,626)),"C:\\github\\Mar2025\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,2627)),"C:\\github\\Mar2025\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\github\\Mar2025\\app\\about\\page.tsx"],h={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3080:(e,t,r)=>{Promise.resolve().then(r.bind(r,2627))},6456:(e,t,r)=>{Promise.resolve().then(r.bind(r,4551))},9838:(e,t,r)=>{Promise.resolve().then(r.bind(r,6355)),Promise.resolve().then(r.bind(r,9994)),Promise.resolve().then(r.bind(r,5680)),Promise.resolve().then(r.bind(r,8892)),Promise.resolve().then(r.bind(r,6038)),Promise.resolve().then(r.t.bind(r,5197,23)),Promise.resolve().then(r.bind(r,1774))},9590:(e,t,r)=>{Promise.resolve().then(r.bind(r,4855)),Promise.resolve().then(r.bind(r,2110)),Promise.resolve().then(r.bind(r,9406)),Promise.resolve().then(r.bind(r,3049)),Promise.resolve().then(r.bind(r,3344)),Promise.resolve().then(r.t.bind(r,7801,23)),Promise.resolve().then(r.bind(r,2454))},2456:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},6008:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6487:()=>{},8335:()=>{},4551:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(5512);function i({error:e,reset:t}){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Something went wrong!"}),(0,s.jsx)("button",{onClick:()=>t(),children:"Try again"})]})}r(8009)},4855:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>a});var s=r(5512);r(8009);var i=r(3091),n=r(9334),o=r(3371);function a({children:e,themeProps:t}){let r=(0,n.useRouter)();return(0,s.jsx)(i.M,{navigate:r.push,children:(0,s.jsx)(o.N,{...t,children:e})})}},2110:(e,t,r)=>{"use strict";r.d(t,{ThemeSwitch:()=>h});var s=r(5512),i=r(6700),n=r(1464),o=r(3371),a=r(4990),l=r(2281),d=r(2411),c=r(2848);let h=({className:e,classNames:t})=>{let{theme:r,setTheme:h}=(0,o.D)(),m=(0,a.wR)(),{Component:u,slots:p,isSelected:b,getBaseProps:x,getInputProps:f,getWrapperProps:g}=(0,n.K)({isSelected:"light"===r||m,"aria-label":`Switch to ${"light"===r||m?"dark":"light"} mode`,onChange:()=>{"light"===r?h("dark"):h("light")}});return(0,s.jsxs)(u,{...x({className:(0,l.A)("px-px transition-opacity hover:opacity-80 cursor-pointer",e,t?.base)}),children:[(0,s.jsx)(i.s,{children:(0,s.jsx)("input",{...f()})}),(0,s.jsx)("div",{...g(),className:p.wrapper({class:(0,l.A)(["w-auto h-auto","bg-transparent","rounded-lg","flex items-center justify-center","group-data-[selected=true]:bg-transparent","!text-default-500","pt-px","px-0","mx-0"],t?.wrapper)}),children:!b||m?(0,s.jsx)(d.A,{}):(0,s.jsx)(c.A,{})})]})}},9785:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(2740);function i({children:e}){return(0,s.jsx)("section",{className:"flex flex-col items-center justify-center gap-4 py-8 md:py-10",children:(0,s.jsx)("div",{className:"inline-block max-w-lg text-center justify-center",children:e})})}},7678:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(2740),i=r(1912);function n(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:(0,i.D)(),children:"About"}),(0,s.jsx)("img",{src:"/saisha.jpg",alt:"Saisha",width:300,height:300}),(0,s.jsx)("img",{src:"",alt:"Italian Trulli",width:300,height:300}),(0,s.jsx)("img",{src:"",alt:"Italian Trulli",width:300,height:300}),(0,s.jsx)("img",{src:"https://pbs.twimg.com/media/FU17s0TX0AkKn7J.jpg",alt:"Dance",width:300,height:300}),(0,s.jsx)("img",{src:"https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg",alt:"Taekwondo",width:300,height:300}),(0,s.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJSLeRYwQGe_hW6KqyXyhm1B_4JW9UwSdlg&s",alt:"Reading",width:300,height:300}),(0,s.jsx)("a",{href:"https://open.spotify.com/?scrlybrkr=095c600f",children:"Link to Spotify"}),(0,s.jsx)("a",{href:"https://www.pinterest.com/",children:"Link to Pinterest"}),(0,s.jsx)("a",{className:"bg-lime-500 m-3 p-3",href:"https://www.chess.com/",target:"_blank",children:"Chess.com"}),(0,s.jsx)(Button,{href:"google.com",children:"Google"})]})}},2627:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\github\\\\Mar2025\\\\app\\\\error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\github\\Mar2025\\app\\error.tsx","default")},626:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P,metadata:()=>v,viewport:()=>j});var s=r(2740);r(3141);var i=r(3673),n=r(1774),o=r(6355);let a={name:"Title of your site",description:"Description of your site.",navItems:[{label:"Home",href:"/"},{label:"Docs",href:"/docs"},{label:"Pricing",href:"/pricing"},{label:"Recipes",href:"/recipes"},{label:"Blog",href:"/blog"},{label:"About Me",href:"/about"}],navMenuItems:[{label:"Home",href:"/"},{label:"Docs",href:"/docs"},{label:"Pricing",href:"/pricing"},{label:"Blog",href:"/blog"},{label:"About Me",href:"/about"}]};var l=r(861),d=r.n(l),c=r(6038),h=r(5861),m=r(8892),u=r(5680),p=r(6317),b=r(308),x=r(7717),f=r(9994);let g=()=>{let e=(0,s.jsx)(u.Input,{"aria-label":"Search",classNames:{inputWrapper:"bg-default-100",input:"text-sm"},endContent:(0,s.jsx)(h.i,{className:"hidden lg:inline-block",keys:["command"],children:"K"}),labelPlacement:"outside",placeholder:"Search...",startContent:(0,s.jsx)(x.A,{}),type:"search"});return(0,s.jsxs)(c.Navbar,{maxWidth:"xl",position:"sticky",children:[(0,s.jsxs)(c.NavbarContent,{className:"basis-1/5 sm:basis-full",justify:"start",children:[(0,s.jsx)(c.NavbarBrand,{as:"li",className:"gap-3 max-w-fit",children:(0,s.jsx)(b.default,{className:"flex justify-start items-center gap-1",href:"/",children:(0,s.jsx)("p",{className:"font-bold text-inherit",children:"ACME"})})}),(0,s.jsx)("ul",{className:"hidden lg:flex gap-4 justify-start ml-2",children:a.navItems.map(e=>(0,s.jsx)(c.NavbarItem,{children:(0,s.jsx)(b.default,{className:(0,i.A)((0,p.n)({color:"foreground"}),"data-[active=true]:text-primary data-[active=true]:font-medium"),color:"foreground",href:e.href,children:e.label})},e.href))})]}),(0,s.jsxs)(c.NavbarContent,{className:"hidden sm:flex basis-1/5 sm:basis-full",justify:"end",children:[(0,s.jsx)(c.NavbarItem,{className:"hidden sm:flex gap-2",children:(0,s.jsx)(f.ThemeSwitch,{})}),(0,s.jsx)(c.NavbarItem,{className:"hidden lg:flex",children:e})]}),(0,s.jsxs)(c.NavbarContent,{className:"sm:hidden basis-1 pl-4",justify:"end",children:[(0,s.jsx)(f.ThemeSwitch,{}),(0,s.jsx)(c.NavbarMenuToggle,{})]}),(0,s.jsxs)(c.NavbarMenu,{children:[e,(0,s.jsx)("div",{className:"mx-4 mt-2 flex flex-col gap-2",children:a.navMenuItems.map((e,t,r)=>(0,s.jsx)(c.NavbarMenuItem,{children:(0,s.jsx)(m.Link,{color:"primary",href:r,size:"lg",children:e.label})},`${e}-${t}`))})]})]})},v={title:{default:a.name,template:`%s - ${a.name}`},description:a.description,icons:{icon:"/favicon.ico"}},j={themeColor:[{media:"(prefers-color-scheme: light)",color:"white"},{media:"(prefers-color-scheme: dark)",color:"black"}]};function P({children:e}){return(0,s.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",children:[(0,s.jsx)("head",{}),(0,s.jsx)("body",{className:(0,i.A)("min-h-screen bg-background font-sans antialiased",d().variable),children:(0,s.jsx)(o.Providers,{themeProps:{attribute:"class",defaultTheme:"dark"},children:(0,s.jsxs)("div",{className:"relative flex flex-col h-screen",children:[(0,s.jsx)(g,{}),(0,s.jsx)(n.ToastContainer,{}),(0,s.jsx)("main",{className:"container mx-auto max-w-7xl pt-16 px-6 flex-grow",children:e}),(0,s.jsx)("footer",{className:"w-full flex items-center justify-center py-3",children:"footer"})]})})})]})}},6355:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\github\\Mar2025\\app\\providers.tsx","Providers")},1912:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var s=r(4991);let i=(0,s.tv)({base:"tracking-tight inline font-semibold",variants:{color:{violet:"from-[#FF1CF7] to-[#b249f8]",yellow:"from-[#FF705B] to-[#FFB457]",blue:"from-[#5EA2EF] to-[#0072F5]",cyan:"from-[#00b7fa] to-[#01cfea]",green:"from-[#6FEE8D] to-[#17c964]",pink:"from-[#FF72E1] to-[#F54C7A]",foreground:"dark:from-[#FFFFFF] dark:to-[#4B4B4B]"},size:{sm:"text-3xl lg:text-4xl",md:"text-[2.3rem] lg:text-5xl leading-9",lg:"text-4xl lg:text-6xl"},fullWidth:{true:"w-full block"}},defaultVariants:{size:"md"},compoundVariants:[{color:["violet","yellow","blue","cyan","green","pink","foreground"],class:"bg-clip-text text-transparent bg-gradient-to-b"}]});(0,s.tv)({base:"w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",variants:{fullWidth:{true:"!w-full"}},defaultVariants:{fullWidth:!0}})},9994:(e,t,r)=>{"use strict";r.d(t,{ThemeSwitch:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call ThemeSwitch() from the server but ThemeSwitch is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\github\\Mar2025\\components\\theme-switch.tsx","ThemeSwitch")},3141:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[574],()=>r(2426));module.exports=s})();