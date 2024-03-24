"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[8371],{5744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(4848),t=s(8453);const i={sidebar_position:1},d="Network Interface",a={id:"application/network-interface",title:"Network Interface",description:"In Network Interface you can see all network adapters of the computer with the most important information (like IP addresses, DNS servers etc.). The bandwidth of the connected network adapter can be monitored and the configuration such as IP address or DNS server can be changed via profiles.",source:"@site/docs/application/network-interface.md",sourceDirName:"application",slug:"/application/network-interface",permalink:"/NETworkManager/docs/application/network-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/network-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Dashboard",permalink:"/NETworkManager/docs/application/dashboard"},next:{title:"WiFi",permalink:"/NETworkManager/docs/application/wifi"}},o={},l=[{value:"Information",id:"information",level:2},{value:"Bandwidth",id:"bandwidth",level:2},{value:"Configure",id:"configure",level:2},{value:"Profile",id:"profile",level:2},{value:"Obtain an IP address automatically",id:"obtain-an-ip-address-automatically",level:3},{value:"Use the following IP address:",id:"use-the-following-ip-address",level:3},{value:"IPv4 address",id:"ipv4-address",level:3},{value:"Subnetmask or CIDR",id:"subnetmask-or-cidr",level:3},{value:"Default-Gateway",id:"default-gateway",level:3},{value:"Obtain DNS server address automatically",id:"obtain-dns-server-address-automatically",level:3},{value:"Use the following DNS server addresses:",id:"use-the-following-dns-server-addresses",level:3},{value:"Primary DNS server",id:"primary-dns-server",level:3},{value:"Secondary DNS server",id:"secondary-dns-server",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"network-interface",children:"Network Interface"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"Network Interface"})," you can see all network adapters of the computer with the most important information (like IP addresses, DNS servers etc.). The bandwidth of the connected network adapter can be monitored and the configuration such as IP address or DNS server can be changed via profiles."]}),"\n",(0,r.jsx)(n.h2,{id:"information",children:"Information"}),"\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Information"})," tab, you can see all the important details of the selected network adapter such as the configured IP addresses, DNS servers, MAC address, and more. If information such as IPv6 configuration is not available, it is hidden in the view."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Network Interface - Information",src:s(5314).A+"",width:"1200",height:"800"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"In addition, further actions can be performed using the buttons at the bottom left:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Network connections..."})," - Opens the ",(0,r.jsx)(n.code,{children:"Control Panel > Network and Internet > Network Connections"})," window."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IP Scanner"})," - Opens the ",(0,r.jsx)(n.a,{href:"./ip-scanner",children:"IP Scanner"})," tool and forwards the IPv4 address and subnetmask of the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flush DNS cache"})," - Flush the DNS cache (",(0,r.jsx)(n.code,{children:"ipconfig /flushdns"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release & Renew"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IPv4"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release & Renew"})," - Releases the current IPv4 addresses obtained via DHCP and renews them via DHCP for the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter that is configured to automatically obtain an IPv4 address (",(0,r.jsx)(n.code,{children:"ipconfig /release && ipconfig /renew <ADAPTER>"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release"})," - Releases the current IPv4 addresses obtained via DHCP for the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter that is configured to automatically obtain an IPv4 address (",(0,r.jsx)(n.code,{children:"ipconfig /release <ADAPTER>"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Renew"})," - Renews the current IPv4 address via DHCP for the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter that is configured to automatically obtain an IPv4 address (",(0,r.jsx)(n.code,{children:"ipconfig /renew <ADAPTER>"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IPv6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release & Renew"})," - Releases the current IPv6 addresses obtained via DHCPv6 and renews them via DHCPv6 for the ",(0,r.jsx)(n.em,{children:"selected"})," adapter that ist configured to automatically obtain an IPv6 address (",(0,r.jsx)(n.code,{children:"ipconfig /release6 && ipconfig /renew6 <ADAPTER>"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release"})," - Releases the current IPv6 addresses obtained via DHCPv6 for the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter that is configured to automatically obtain an IPv6 address (",(0,r.jsx)(n.code,{children:"ipconfig /release6 <ADAPTER>"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Renew"})," - Renews the current IPv6 address via DHCPv6 for the ",(0,r.jsx)(n.em,{children:"selected"})," network adapter that is configured to automatically obtain an IPv6 address (",(0,r.jsx)(n.code,{children:"ipconfig /renew6 <ADAPTER>"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Export..."})," - Export the information to a CSV, XML or JSON file."]}),"\n"]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Right-click on the result to copy the information."})}),"\n",(0,r.jsx)(n.h2,{id:"bandwidth",children:"Bandwidth"}),"\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Bandwidth"})," tab, you can monitor the currently used bandwidth of the selected network adapter."]}),"\n",(0,r.jsx)(n.p,{children:"You can see the current download and upload speed in bit/s (B/s). Depending on the bandwidth used, it is automatically changed to KBit/s (KB/s), MBit/s (MB/s) or GBit/s (GB/s). It also shows since when the bandwidth has been measured and how much has been downloaded and uploaded since then."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"If you switch to another tool, monitoring will stop and when you switch back, the statistics will be reset and monitoring will continue."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Network Interface - Bandwidth",src:s(599).A+"",width:"1200",height:"800"})}),"\n",(0,r.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Configure"})," tab, you can change the configuration of the selected network adapter. In order to change the settings, the network adapter must be connected."]}),"\n",(0,r.jsxs)(n.p,{children:["The options you can set correspond to the network adapter properties ",(0,r.jsx)(n.code,{children:"Internetprotokoll, Version 4 (TCP/IPv4) Properties"})," in the ",(0,r.jsx)(n.code,{children:"Control Panel > Network and Internet > Network Connections"}),". These are explained in the ",(0,r.jsx)(n.a,{href:"#profile",children:"profiles section"}),". Clicking the ",(0,r.jsx)(n.strong,{children:"Apply"})," button will launch an elevated PowerShell to configure the network adapter."]}),"\n",(0,r.jsx)(n.p,{children:"In addition, further actions can be performed using the buttons at the bottom left:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Additional config..."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add IPv4 address..."})," - Opens a dialog to add an IPv4 address with a subnet mask or CIDR to the selected network adapter."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If a static IP address is added to a network adapter that is configured for DHCP, the ",(0,r.jsx)(n.code,{children:"netsh"})," option ",(0,r.jsx)(n.code,{children:"dhcpstaticipcoexistence"})," is also activated."]}),(0,r.jsxs)(n.p,{children:["The following command is executed in an elevated PowerShell to enable the ",(0,r.jsx)(n.code,{children:"dhcpstaticipcoexistence"})," option:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:'netsh interface ipv4 set interface interface="Ethernet" dhcpstaticipcoexistence=enabled\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dhcpstaticipcoexistence"})," allows the network adapter to use a static IP address and still receive DHCP options (e.g. DNS server) from the DHCP server. This is useful if you want to use a static IP address but still want to receive DNS server addresses from the DHCP server. This feature is available since Windows 10 version 1703 (Creators Update)."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Remove IPv4 addres..."})," - Opens a dialog where you can select an IPv4 address to remove from the selected network adapter."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"You can only remove IPv4 addresses that are not assigned via DHCP."}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"netsh"})," option ",(0,r.jsx)(n.code,{children:"dhcpstaticipcoexistence"})," remains active. You can disable it by executing the following command in an elevated PowerShell:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:'netsh interface ipv4 set interface interface="Ethernet" dhcpstaticipcoexistence=disabled\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You may need to confirm a Windows UAC dialog to make changes to the network interface."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Network Interface - Configure",src:s(4128).A+"",width:"1200",height:"800"})}),"\n",(0,r.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,r.jsx)(n.h3,{id:"obtain-an-ip-address-automatically",children:"Obtain an IP address automatically"}),"\n",(0,r.jsx)(n.p,{children:"Obtain an IP address automatically from a DHCP server for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you select this option, the ",(0,r.jsx)(n.a,{href:"#use-the-following-ip-address",children:"Use the following IP address"})," option will be disabled."]})}),"\n",(0,r.jsx)(n.h3,{id:"use-the-following-ip-address",children:"Use the following IP address:"}),"\n",(0,r.jsxs)(n.p,{children:["Configure a static IP address for the selected network adapter. See ",(0,r.jsx)(n.a,{href:"#ipv4-address",children:"IPv4 address"}),", ",(0,r.jsx)(n.a,{href:"#subnetmask-or-cidr",children:"Subnetmask or CIDR"})," and ",(0,r.jsx)(n.a,{href:"#default-gateway",children:"Default-Gateway"})," options below for more information."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you select this option, the ",(0,r.jsx)(n.a,{href:"#obtain-an-ip-address-automatically",children:"Obtain an IP address automatically"})," option will be disabled."]})}),"\n",(0,r.jsx)(n.h3,{id:"ipv4-address",children:"IPv4 address"}),"\n",(0,r.jsx)(n.p,{children:"Static IPv4 address for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"192.168.178.20"})]}),"\n",(0,r.jsx)(n.h3,{id:"subnetmask-or-cidr",children:"Subnetmask or CIDR"}),"\n",(0,r.jsx)(n.p,{children:"Subnet mask or CIDR for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/24"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"255.255.255.0"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-gateway",children:"Default-Gateway"}),"\n",(0,r.jsx)(n.p,{children:"Default gateway for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"192.168.178.1"})]}),"\n",(0,r.jsx)(n.h3,{id:"obtain-dns-server-address-automatically",children:"Obtain DNS server address automatically"}),"\n",(0,r.jsx)(n.p,{children:"Obtain DNS server address automatically from a DHCP server for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you select this option, the ",(0,r.jsx)(n.a,{href:"#use-the-following-dns-server-addresses",children:"Use the following DNS server addresses"})," option will be disabled."]})}),"\n",(0,r.jsx)(n.h3,{id:"use-the-following-dns-server-addresses",children:"Use the following DNS server addresses:"}),"\n",(0,r.jsxs)(n.p,{children:["Configure static DNS server addresses for the selected network adapter. See ",(0,r.jsx)(n.a,{href:"#primary-dns-server",children:"Primary DNS server"})," and ",(0,r.jsx)(n.a,{href:"#secondary-dns-server",children:"Secondary DNS server"})," options below for more information."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you select this option, the ",(0,r.jsx)(n.a,{href:"#obtain-dns-server-address-automatically",children:"Obtain DNS server address automatically"})," option will be disabled."]})}),"\n",(0,r.jsx)(n.h3,{id:"primary-dns-server",children:"Primary DNS server"}),"\n",(0,r.jsx)(n.p,{children:"Primary DNS server for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"1.1.1.1"})]}),"\n",(0,r.jsx)(n.h3,{id:"secondary-dns-server",children:"Secondary DNS server"}),"\n",(0,r.jsx)(n.p,{children:"Secondary DNS server for the selected network adapter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"1.0.0.1"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},599:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/network-interface--bandwidth-c610bfe208b67cb4a7f2170bcd0834f0.png"},4128:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/network-interface--configure-7e02fe3ba90731c928fb8cda192d4a13.png"},5314:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/network-interface--information-ee0d28a7e5bdfe0be5d47a43c57e7477.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);