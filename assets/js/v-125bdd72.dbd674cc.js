"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31561],{63549:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a={key:"v-125bdd72",path:"/guide/installation/05_windows.html",title:"Windows",lang:"en-US",frontmatter:{next:"../configuration/",pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Install a USB-to-UART Bridge Virtual COM Port driver",slug:"install-a-usb-to-uart-bridge-virtual-com-port-driver",children:[]},{level:2,title:"Determine which COM port is assigned to your device",slug:"determine-which-com-port-is-assigned-to-your-device",children:[]},{level:2,title:"Installing",slug:"installing",children:[]},{level:2,title:"Configuring",slug:"configuring",children:[]},{level:2,title:"Starting Zigbee2MQTT",slug:"starting-zigbee2mqtt",children:[]}],filePathRelative:"guide/installation/05_windows.md",git:{updatedTime:1666631787e3}}},50087:(e,n,i)=>{i.r(n),i.d(n,{default:()=>W});var a=i(66252),r=i(20765);const l=(0,a._)("h1",{id:"windows",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,a.Uk)(" Windows")],-1),t=(0,a._)("h2",{id:"install-a-usb-to-uart-bridge-virtual-com-port-driver",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#install-a-usb-to-uart-bridge-virtual-com-port-driver","aria-hidden":"true"},"#"),(0,a.Uk)(" Install a USB-to-UART Bridge Virtual COM Port driver")],-1),s=(0,a._)("p",null,"In order to be able to communicate with your USB device over a virtual COM port, you might need a driver for your OS in order for it to be able to be found by your flashing software.",-1),o=(0,a.Uk)("For CP210x based chipsets, there is a driver available at "),d={href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("Silicon Labs' website"),c=(0,a.Uk)("."),g=(0,a.Uk)("For CC1352/CC2652/CC2538 based chipsets, have a look at "),h={href:"https://ftdichip.com/drivers/vcp-drivers/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("FTDI chip's website"),b=(0,a.Uk)(" for drivers."),m=(0,a._)("h2",{id:"determine-which-com-port-is-assigned-to-your-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#determine-which-com-port-is-assigned-to-your-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Determine which COM port is assigned to your device")],-1),_=(0,a._)("ol",null,[(0,a._)("li",null,"Connect your sniffer device"),(0,a._)("li",null,[(0,a.Uk)("Open up Start menu and start typing "),(0,a._)("code",null,"Device Manager")]),(0,a._)("li",null,[(0,a.Uk)("Expand "),(0,a._)("code",null,"Ports (COM & LPT)")]),(0,a._)("li",null,[(0,a.Uk)("Look for a node similar to "),(0,a._)("code",null,"USB Serial Device (COM4)")]),(0,a._)("li",null,"Take note of the port number, it will be needed during configuration")],-1),f=(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"Device Manager"})],-1),v=(0,a._)("h2",{id:"installing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#installing","aria-hidden":"true"},"#"),(0,a.Uk)(" Installing")],-1),k=(0,a.Uk)("Download and install Node.js 16 LTS from "),w={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("their website"),U=(0,a.uE)('<li>Open up a <code>Command prompt</code> or <code>Powershell</code> from the Start menu (Powershell has prettier colors)</li><li>Verify Node.js was successfully installed<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>',2),T=(0,a.Uk)("Choose a suitable directory for Zigbee2MQTT and copy all the files from the "),C={href:"https://github.com/koenkk/zigbee2mqtt",target:"_blank",rel:"noopener noreferrer"},M=(0,a.Uk)("Zigbee2MQTT repository"),x=(0,a.uE)('<ul><li>if you prefer to use git (which you should), just clone the whole repository<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> git@github.com:Koenkk/zigbee2mqtt.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>otherwise use the green <code>Clone or download</code> button to download the zip archive, then extract it</li></ul>',1),S=(0,a.uE)('<li>Change to the newly created directory and install dependencies with Node.js own package manager <code>npm</code><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> ci\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>',1),Z=(0,a._)("h2",{id:"configuring",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuring","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuring")],-1),O=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("Open "),(0,a._)("code",null,"data\\configuration.yaml"),(0,a.Uk)(" in a text editor")]),(0,a._)("li",null,[(0,a.Uk)("Change the serial port configuration to match your setup"),(0,a._)("div",{class:"language-yaml ext-yml line-numbers-mode"},[(0,a._)("pre",{class:"language-yaml"},[(0,a._)("code",null,[(0,a._)("span",{class:"token key atrule"},"serial"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token key atrule"},"port"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" \\\\.\\COM4\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])])]),(0,a._)("li",null,"Make sure other settings are correct as well"),(0,a._)("li",null,"Save and exit")],-1),P=(0,a._)("p",null,"Congratulations, you're now ready to start your Zigbee2MQTT installation",-1),Q=(0,a._)("h2",{id:"starting-zigbee2mqtt",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#starting-zigbee2mqtt","aria-hidden":"true"},"#"),(0,a.Uk)(" Starting Zigbee2MQTT")],-1),z=(0,a._)("p",null,"Just change to the root directory of your installation and run the application:",-1),D=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" start\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),q=(0,a._)("p",null,"A successful setup produces an output similar to this:",-1),B=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"> zigbee2mqtt@1.6.0 start C:\\Users\\me\\Documents\\GitHub\\zigbee2mqtt\n> node index.js\n\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: 'D:\\Documents\\GitHub\\zigbee2mqtt\\data\\log\\2019-10-18.22-56-22'\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: '20190608'\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br")])],-1),L=(0,a._)("p",null,[(0,a.Uk)("The "),(0,a._)("code",null,"Coordinator firmware version: '20190608'"),(0,a.Uk)(" entry means that Zigbee2MQTT has successfully communicated with the USB sniffer.")],-1),j=(0,a._)("p",null,[(0,a.Uk)("Zigbee2MQTT can be stopped anytime by pressing "),(0,a._)("code",null,"CTRL + C"),(0,a.Uk)(" and then confirming with "),(0,a._)("code",null,"Y"),(0,a.Uk)(".")],-1),I={},W=(0,i(83744).Z)(I,[["render",function(e,n){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,t,s,(0,a._)("ul",null,[(0,a._)("li",null,[o,(0,a._)("a",d,[u,(0,a.Wm)(i)]),c]),(0,a._)("li",null,[g,(0,a._)("a",h,[p,(0,a.Wm)(i)]),b])]),m,_,f,v,(0,a._)("ol",null,[(0,a._)("li",null,[k,(0,a._)("a",w,[y,(0,a.Wm)(i)])]),U,(0,a._)("li",null,[T,(0,a._)("a",C,[M,(0,a.Wm)(i)]),x]),S]),Z,O,P,Q,z,D,q,B,L,j],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[i,a]of n)e[i]=a;return e}},20765:(e,n,i)=>{e.exports=i.p+"assets/img/devicemanager.15b524ea.png"}}]);