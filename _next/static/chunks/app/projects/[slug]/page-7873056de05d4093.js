(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{8003:(e,s,t)=>{Promise.resolve().then(t.bind(t,709))},6046:(e,s,t)=>{"use strict";var l=t(6658);t.o(l,"useRouter")&&t.d(s,{useRouter:function(){return l.useRouter}})},4296:(e,s,t)=>{"use strict";t.d(s,{default:()=>o});var l=t(5155),a=t(2115),i=t(8173),n=t.n(i),r=t(1536),c=t(1714);let o=()=>{let[e,s]=(0,a.useState)(!1),[t,i]=(0,a.useState)("intro"),[o,d]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let s of(d(e),["intro","education","skills","projects","contact"])){let t=document.getElementById(s);if(t){let l=t.offsetTop-100,a=l+t.offsetHeight;if(e>=l&&e<a){i(s);break}}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,l.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(o>50?"bg-white shadow-md py-2":"bg-white/80 backdrop-blur-sm py-3.5"),children:(0,l.jsxs)("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[(0,l.jsx)(c.P.div,{className:"text-xl font-bold",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:(0,l.jsx)(n(),{href:"#intro",className:"nav-link flex items-center",children:(0,l.jsx)("span",{className:"font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent",children:"KYLIAN GACHET"})})}),(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsx)("button",{onClick:()=>s(!e),className:"focus:outline-none text-gray-600 hover:text-gray-800 transition-colors",children:e?(0,l.jsx)(r.QCr,{size:24}):(0,l.jsx)(r.OXb,{size:24})})}),(0,l.jsxs)(c.P.div,{className:"md:flex items-center md:space-x-8 ".concat(e?"flex flex-col absolute top-full left-0 right-0 bg-white shadow-md p-4 space-y-4":"hidden"),initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5,staggerChildren:.1},children:[[{href:"#education",label:"Parcours"},{href:"#skills",label:"Comp\xe9tences"},{href:"#projects",label:"Projets"},{href:"#contact",label:"Contact"}].map(e=>(0,l.jsx)(c.P.div,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:10},children:(0,l.jsxs)(n(),{href:e.href,className:"nav-link block py-2 relative ".concat(t===e.href.slice(1)?"font-semibold":""),onClick:()=>{s(!1)},children:[e.label,t===e.href.slice(1)&&(0,l.jsx)(c.P.span,{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-600",layoutId:"activeSection",transition:{type:"spring",stiffness:400,damping:40}})]})},e.href)),(0,l.jsxs)("div",{className:"flex md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0 flex-col md:flex-row",children:[(0,l.jsxs)("a",{href:"https://github.com/Iamkylian",target:"_blank",rel:"noopener noreferrer",className:"icon-link",children:[(0,l.jsx)(r.hL4,{size:22}),(0,l.jsx)("span",{className:"ml-2 md:hidden",children:"GitHub"})]}),(0,l.jsxs)("a",{href:"https://www.linkedin.com/in/kyliangachet",target:"_blank",rel:"noopener noreferrer",className:"icon-link",children:[(0,l.jsx)(r.QEs,{size:22}),(0,l.jsx)("span",{className:"ml-2 md:hidden",children:"LinkedIn"})]})]})]})]})})}},709:(e,s,t)=>{"use strict";t.d(s,{ProjectPage:()=>u});var l=t(5155),a=t(2115),i=t(6046),n=t(5565),r=t(8173),c=t.n(r),o=t(1714),d=t(6648),x=t(6720),m=t(1536),h=t(4296),p=t(8994);function u(e){let{slug:s}=e,t=(0,i.useRouter)(),r=d.d.find(e=>e.slug===s);return((0,a.useEffect)(()=>{window.scrollTo(0,0)},[]),r)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.default,{}),(0,l.jsxs)("main",{className:"pt-24 bg-gray-50 min-h-screen",children:[(0,l.jsxs)("div",{className:"relative h-[40vh] md:h-[50vh] w-full bg-gray-800",children:[r.image&&"string"==typeof r.image?(0,l.jsx)(n.default,{src:r.image,alt:r.title,fill:!0,style:{objectFit:"cover"}}):(0,l.jsx)("div",{className:"absolute inset-0 bg-gray-700"}),(0,l.jsx)("div",{className:"absolute inset-0 bg-black/50 flex flex-col justify-end",children:(0,l.jsx)("div",{className:"container mx-auto px-6 py-8",children:(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:["university"===r.type?(0,l.jsxs)("span",{className:"bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",children:[(0,l.jsx)(m.MdY,{})," Projet universitaire"]}):(0,l.jsxs)("span",{className:"bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",children:[(0,l.jsx)(m.tut,{})," Projet personnel"]}),(0,l.jsxs)("span",{className:"bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",children:[(0,l.jsx)(m.bfZ,{})," ",r.date]})]}),(0,l.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:r.title}),(0,l.jsx)("p",{className:"text-white/90 text-lg max-w-3xl",children:r.description})]})})})]}),(0,l.jsx)("div",{className:"container mx-auto px-6 py-12",children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,l.jsxs)("div",{className:"lg:w-2/3",children:[(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"bg-white p-8 rounded-xl shadow-md mb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"\xc0 propos de ce projet"}),(0,l.jsx)("div",{className:"prose prose-lg max-w-none text-gray-700",children:(0,l.jsx)("p",{className:"mb-6",children:r.longDescription||r.description})})]}),r.context&&(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"bg-white p-8 rounded-xl shadow-md mb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Contexte"}),(0,l.jsx)("div",{className:"prose prose-lg max-w-none text-gray-700",children:(0,l.jsx)("p",{children:r.context})})]}),r.objectives&&(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"bg-white p-8 rounded-xl shadow-md mb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Objectifs"}),(0,l.jsx)("ul",{className:"space-y-3 text-gray-700",children:r.objectives.map((e,s)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("span",{className:"w-6 h-6 text-white bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5",children:s+1}),(0,l.jsx)("span",{children:e})]},s))})]}),r.methodology&&(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"bg-white p-8 rounded-xl shadow-md mb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"M\xe9thodologie"}),(0,l.jsx)("div",{className:"prose prose-lg max-w-none text-gray-700",children:(0,l.jsx)("p",{children:r.methodology})})]}),r.results&&(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},className:"bg-white p-8 rounded-xl shadow-md",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"R\xe9sultats"}),(0,l.jsx)("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6",children:(0,l.jsx)("ul",{className:"space-y-4 text-gray-700",children:r.results.map((e,s)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("span",{className:"text-green-500 mr-3 flex-shrink-0",children:"✓"}),(0,l.jsx)("span",{children:e})]},s))})})]})]}),(0,l.jsx)("div",{className:"lg:w-1/3",children:(0,l.jsxs)(o.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.4},className:"bg-white p-8 rounded-xl shadow-md mb-8 sticky top-24",children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"text-xl font-bold mb-4 text-gray-800",children:"Technologies"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:r.technologies.map((e,s)=>(0,l.jsx)("span",{className:"px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm",children:e},s))})]}),(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h3",{className:"text-xl font-bold mb-4 text-gray-800",children:"Comp\xe9tences"}),(0,l.jsx)("div",{className:"space-y-3",children:r.skills.map(e=>{let s=x.HQ.find(s=>s.id===e);return s?(0,l.jsx)(c(),{href:"/skills/".concat(s.slug),children:(0,l.jsxs)("div",{className:"flex items-center p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer",children:[(0,l.jsx)("div",{className:"w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3",children:e}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"font-medium text-gray-800",children:s.name}),(0,l.jsxs)("p",{className:"text-xs text-gray-500",children:[s.levels.length," niveau",s.levels.length>1?"x":""]})]})]})},e):null})})]}),(0,l.jsxs)("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 transition-colors shadow-md mb-4",children:[(0,l.jsx)(m.hL4,{size:20})," Voir le code source"]}),(0,l.jsxs)("button",{onClick:()=>t.push("/#projects"),className:"flex items-center justify-center gap-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg px-6 py-3 transition-colors",children:[(0,l.jsx)(m.QVr,{size:16})," Retour aux projets"]})]})})]})})]}),(0,l.jsx)(p.default,{})]}):(0,l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Projet non trouv\xe9"}),(0,l.jsx)("p",{className:"text-gray-600 mb-8",children:"Le projet que vous recherchez n'existe pas."}),(0,l.jsx)("button",{onClick:()=>t.push("/#projects"),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Retour aux projets"})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[711,173,408,565,88,441,517,358],()=>s(8003)),_N_E=e.O()}]);