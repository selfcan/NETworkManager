"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[2498],{8860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var o=t(4848),i=t(8453);const r={sidebar_position:6},s="Traceroute",c={id:"application/traceroute",title:"Traceroute",description:"With the Traceroute you can trace the route to a host with ICMP echo requests to determine the path to the specific host.",source:"@site/docs/application/traceroute.md",sourceDirName:"application",slug:"/application/traceroute",permalink:"/NETworkManager/docs/application/traceroute",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/traceroute.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Ping Monitor",permalink:"/NETworkManager/docs/application/ping-monitor"},next:{title:"DNS Lookup",permalink:"/NETworkManager/docs/application/dns-lookup"}},l={},h=[{value:"Profile",id:"profile",level:2},{value:"Inherit host from general",id:"inherit-host-from-general",level:3},{value:"Host",id:"host",level:3},{value:"Settings",id:"settings",level:2},{value:"Maximum hops",id:"maximum-hops",level:3},{value:"Timeout (ms)",id:"timeout-ms",level:3},{value:"Buffer",id:"buffer",level:3},{value:"Resolve hostname",id:"resolve-hostname",level:3},{value:"Check IP geolocation",id:"check-ip-geolocation",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"traceroute",children:"Traceroute"})}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.strong,{children:"Traceroute"})," you can trace the route to a host with ICMP echo requests to determine the path to the specific host."]}),"\n",(0,o.jsx)(n.p,{children:"Example inputs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"server-01.borntoberoot.net"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"10.0.0.1"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Traceroute",src:t(6248).A+"",width:"1200",height:"800"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Right-click on the result to copy or export the information."})}),"\n",(0,o.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,o.jsx)(n.h3,{id:"inherit-host-from-general",children:"Inherit host from general"}),"\n",(0,o.jsx)(n.p,{children:"Inherit the host from the general settings."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If this option is enabled, the ",(0,o.jsx)(n.a,{href:"#host",children:"Host"})," is overwritten by the host from the general settings and the ",(0,o.jsx)(n.a,{href:"#host",children:"Host"})," is disabled."]})}),"\n",(0,o.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,o.jsx)(n.p,{children:"Hostname or IP address to ping."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"String"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"Empty"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"server-01.borntoberoot.net"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1.1.1.1"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,o.jsx)(n.h3,{id:"maximum-hops",children:"Maximum hops"}),"\n",(0,o.jsx)(n.p,{children:"Maximum hops to search for target."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Integer"})," [Min ",(0,o.jsx)(n.code,{children:"1"}),", Max ",(0,o.jsx)(n.code,{children:"255"}),"]"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"30"})]}),"\n",(0,o.jsx)(n.h3,{id:"timeout-ms",children:"Timeout (ms)"}),"\n",(0,o.jsx)(n.p,{children:"Timeout in milliseconds for the icmp packet after which the packet is considered lost."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Integer"})," [Min ",(0,o.jsx)(n.code,{children:"100"}),", Max ",(0,o.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"4000"})]}),"\n",(0,o.jsx)(n.h3,{id:"buffer",children:"Buffer"}),"\n",(0,o.jsx)(n.p,{children:"Buffer size of the icmp packet."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Integer"})," [Min ",(0,o.jsx)(n.code,{children:"1"}),", Max ",(0,o.jsx)(n.code,{children:"65535"}),"]"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"32"})]}),"\n",(0,o.jsx)(n.h3,{id:"resolve-hostname",children:"Resolve hostname"}),"\n",(0,o.jsx)(n.p,{children:"Resolve the hostname of the IP address (PTR lookup) for each hop."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"True"})]}),"\n",(0,o.jsx)(n.h3,{id:"check-ip-geolocation",children:"Check IP geolocation"}),"\n",(0,o.jsxs)(n.p,{children:["Enables or disables the resolution of the IP geolocation for each hop via ",(0,o.jsx)(n.a,{href:"https://ip-api.com/",children:(0,o.jsx)(n.code,{children:"ip-api.com"})}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The free API endpoint is limited to 45 requests per minute, supports only the ",(0,o.jsx)(n.code,{children:"http"})," protocol and is available for non-commercial use only."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"Enabled"})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6248:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/traceroute-bc04e23f38fad618aebd0298f254a93a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);