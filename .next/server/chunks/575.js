exports.id=575,exports.ids=[575],exports.modules={201:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66821),o=r(29566);function n({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,s.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,s.jsx)(o.Ay,{})}),(0,s.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},4658:(e,t,r)=>{Promise.resolve().then(r.bind(r,77467)),Promise.resolve().then(r.t.bind(r,93398,23))},6943:(e,t,r)=>{"use strict";r.d(t,{YL:()=>n,c6:()=>o,vv:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},n=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},12004:()=>{},28096:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,16874,23)),Promise.resolve().then(r.t.bind(r,65076,23)),Promise.resolve().then(r.t.bind(r,75048,23)),Promise.resolve().then(r.t.bind(r,55379,23)),Promise.resolve().then(r.t.bind(r,9123,23)),Promise.resolve().then(r.t.bind(r,95043,23)),Promise.resolve().then(r.t.bind(r,23451,23)),Promise.resolve().then(r.t.bind(r,98987,23)),Promise.resolve().then(r.t.bind(r,72853,23))},29566:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>m,xK:()=>l});var s=r(66821),o=r(7250);r(78330);var n=r(81880),a=r.n(n),i=r(71589),c=r(50569),d=r(89110);!function(){var e=Error("Cannot find module '@/auth'");throw e.code="MODULE_NOT_FOUND",e}();let l=async function(){await Object(function(){var e=Error("Cannot find module '@/auth'");throw e.code="MODULE_NOT_FOUND",e}())({redirectTo:"/"})};function m(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,s.jsx)(a(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,s.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,s.jsx)(c.A,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,s.jsx)("form",{action:(0,o.A)(l,"00bf8c0c1aad5da919222dbada4ec16146423a7a66",null),children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,s.jsx)(d.A,{className:"w-6"}),(0,s.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}},35128:(e,t,r)=>{"use strict";r.d(t,{MX:()=>d,Pt:()=>l,Q5:()=>i,Yu:()=>m,gn:()=>u,nr:()=>a,zP:()=>c});var s=r(29929),o=r(6943);let n=(0,s.A)(process.env.POSTGRES_URL,{ssl:"require"});async function a(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await n`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){try{return(await n`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,o.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=n`SELECT COUNT(*) FROM invoices`,t=n`SELECT COUNT(*) FROM customers`,r=n`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,s=await Promise.all([e,t,r]),a=Number(s[0][0].count??"0"),i=Number(s[1][0].count??"0"),c=(0,o.vv)(s[2][0].paid??"0"),d=(0,o.vv)(s[2][0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:a,totalPaidInvoices:c,totalPendingInvoices:d}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function d(e,t){try{return await n`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function l(e){try{let t=await n`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){try{return(await n`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return await n`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},39750:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var s=r(66821);r(89912);var o=r(55721),n=r.n(o);let a={title:{template:"%s | Panel admin",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function i({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},41248:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,48956,23)),Promise.resolve().then(r.t.bind(r,44778,23)),Promise.resolve().then(r.t.bind(r,97450,23)),Promise.resolve().then(r.t.bind(r,68057,23)),Promise.resolve().then(r.t.bind(r,95813,23)),Promise.resolve().then(r.t.bind(r,8513,23)),Promise.resolve().then(r.t.bind(r,79577,23)),Promise.resolve().then(r.t.bind(r,58097,23)),Promise.resolve().then(r.t.bind(r,2987,23))},50569:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(66821),o=r(91497),n=r(18574),a=r.n(n);function i(){return(0,s.jsxs)("div",{className:`${a().className} flex flex-row items-center leading-none text-white`,children:[(0,s.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,s.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},64906:(e,t,r)=>{Promise.resolve().then(r.bind(r,71589)),Promise.resolve().then(r.t.bind(r,81880,23))},71589:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(80491).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Edgar\\\\Desktop\\\\next\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Edgar\\Desktop\\next\\nextjs-dashboard\\app\\ui\\dashboard\\nav-links.tsx","default")},75204:()=>{},77467:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(72367),o=r(37044),n=r(58703),a=r(58495),i=r(93398),c=r.n(i),d=r(21373),l=r(65882);let m=[{name:"Home",href:"/dashboard",icon:o.A},{name:"Invoices",href:"/dashboard/invoices",icon:n.A},{name:"Customers",href:"/dashboard/customers",icon:a.A}];function u(){let e=(0,d.usePathname)();return(0,s.jsx)(s.Fragment,{children:m.map(t=>{let r=t.icon;return(0,s.jsxs)(c(),{href:t.href,className:(0,l.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,s.jsx)(r,{className:"w-6"}),(0,s.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},89912:()=>{}};