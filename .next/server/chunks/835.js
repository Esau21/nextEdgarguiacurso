exports.id=835,exports.ids=[835],exports.modules={201:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(66821),o=s(29566);function n({children:e}){return(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,r.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,r.jsx)(o.Ay,{})}),(0,r.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},6943:(e,t,s)=>{"use strict";s.d(t,{YL:()=>n,c6:()=>o,vv:()=>r});let r=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let s=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(s)},n=e=>{let t=[],s=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=s;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:s}}},12004:()=>{},22409:(e,t,s)=>{Promise.resolve().then(s.bind(s,77467)),Promise.resolve().then(s.bind(s,88805)),Promise.resolve().then(s.t.bind(s,93398,23))},28096:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,16874,23)),Promise.resolve().then(s.t.bind(s,65076,23)),Promise.resolve().then(s.t.bind(s,75048,23)),Promise.resolve().then(s.t.bind(s,55379,23)),Promise.resolve().then(s.t.bind(s,9123,23)),Promise.resolve().then(s.t.bind(s,95043,23)),Promise.resolve().then(s.t.bind(s,23451,23)),Promise.resolve().then(s.t.bind(s,98987,23)),Promise.resolve().then(s.t.bind(s,72853,23))},29566:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>u,xK:()=>m});var r=s(66821),o=s(7250);s(78330);var n=s(81880),i=s.n(n),a=s(71589),c=s(50569),d=s(89110),l=s(98789);let m=async function(){await (0,l.signOut)({redirectTo:"/"})};function u(){return(0,r.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,r.jsx)(i(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,r.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,r.jsx)(c.A,{})})}),(0,r.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,r.jsx)(a.default,{}),(0,r.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,r.jsx)("form",{action:(0,o.A)(m,"00bf8c0c1aad5da919222dbada4ec16146423a7a66",null),children:(0,r.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,r.jsx)(d.A,{className:"w-6"}),(0,r.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}},32137:(e,t,s)=>{Promise.resolve().then(s.bind(s,71589)),Promise.resolve().then(s.bind(s,98789)),Promise.resolve().then(s.t.bind(s,81880,23))},35128:(e,t,s)=>{"use strict";s.d(t,{MX:()=>d,Pt:()=>l,Q5:()=>a,Yu:()=>m,gn:()=>u,nr:()=>i,zP:()=>c});var r=s(29929),o=s(6943);let n=(0,r.A)(process.env.POSTGRES_URL,{ssl:"require"});async function i(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await n`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function a(){try{return(await n`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,o.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=n`SELECT COUNT(*) FROM invoices`,t=n`SELECT COUNT(*) FROM customers`,s=n`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,r=await Promise.all([e,t,s]),i=Number(r[0][0].count??"0"),a=Number(r[1][0].count??"0"),c=(0,o.vv)(r[2][0].paid??"0"),d=(0,o.vv)(r[2][0].pending??"0");return{numberOfCustomers:a,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:d}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function d(e,t){try{return await n`
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
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},39750:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,metadata:()=>i});var r=s(66821);s(89912);var o=s(55721),n=s.n(o);let i={title:{template:"%s | Panel admin",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function a({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},41248:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,48956,23)),Promise.resolve().then(s.t.bind(s,44778,23)),Promise.resolve().then(s.t.bind(s,97450,23)),Promise.resolve().then(s.t.bind(s,68057,23)),Promise.resolve().then(s.t.bind(s,95813,23)),Promise.resolve().then(s.t.bind(s,8513,23)),Promise.resolve().then(s.t.bind(s,79577,23)),Promise.resolve().then(s.t.bind(s,58097,23)),Promise.resolve().then(s.t.bind(s,2987,23))},50569:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(66821),o=s(91497),n=s(18574),i=s.n(n);function a(){return(0,r.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[(0,r.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,r.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},71589:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(80491).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Edgar\\\\Desktop\\\\next\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Edgar\\Desktop\\next\\nextjs-dashboard\\app\\ui\\dashboard\\nav-links.tsx","default")},75204:()=>{},77467:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(72367),o=s(37044),n=s(58703),i=s(58495),a=s(93398),c=s.n(a),d=s(21373),l=s(65882);let m=[{name:"Home",href:"/dashboard",icon:o.A},{name:"Invoices",href:"/dashboard/invoices",icon:n.A},{name:"Customers",href:"/dashboard/customers",icon:i.A}];function u(){let e=(0,d.usePathname)();return(0,r.jsx)(r.Fragment,{children:m.map(t=>{let s=t.icon;return(0,r.jsxs)(c(),{href:t.href,className:(0,l.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,r.jsx)(s,{className:"w-6"}),(0,r.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},89912:()=>{}};