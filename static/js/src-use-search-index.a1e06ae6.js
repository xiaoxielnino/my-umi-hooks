(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/useAsync/index.ts":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),a=t.n(r),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),u=t("react"),A=function(){},d=function e(n,t){var r=this;Object(l.a)(this,e),this.remaining=0,this.delay=0,this.cb=null,this.start=0,this.timerId=0,this.stop=function(){window.clearTimeout(r.timerId),r.timerId=0,r.remaining=r.delay},this.pause=function(){window.clearTimeout(r.timerId),r.remaining-=Date.now()-r.start},this.resume=function(){r.start=Date.now(),window.clearTimeout(r.timerId),r.cb&&(r.timerId=window.setTimeout(r.cb,r.remaining))},this.remaining=t,this.delay=t,this.start=t,this.timerId=t,this.cb=n};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(u.useState)({loading:!1,cancel:A,run:A,timer:{stop:A,resume:A,pause:A}}),l=Object(c.a)(r,2),b=l[0],m=l[1],p=Object(u.useRef)(void 0),g=Object(u.useRef)(0),j=Object(u.useRef)(!0);Object(u.useEffect)((function(){return g.current+=1,j.current=!0,function(){g.current+=1}}),n);var h=Object(u.useCallback)((function(){var n=g.current;return m((function(e){return Object(i.a)({},e,{loading:!0})})),e.apply(void 0,arguments).then((function(e){return n===g.current&&m((function(n){return Object(i.a)({},n,{data:e,loading:!1})})),e})).catch((function(e){return n===g.current&&m((function(n){return Object(i.a)({},n,{error:e,loading:!1})})),e}))}),n),y=Object(u.useCallback)(Object(s.a)(a.a.mark((function e(){var n,r,s,i,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=c.length,r=new Array(n),s=0;s<n;s++)r[s]=c[s];if(i=g.current,t.manual&&j.current){e.next=5;break}return e.next=5,h.apply(void 0,Object(o.a)(r||[]));case 5:g.current===i&&(p.current=new d((function(){return y.apply(void 0,r)}),t.pollingInterval),j.current&&t.manual?j.current=!1:p.current.resume());case 6:case"end":return e.stop()}}),e)}))),[t.pollingInterval,t.manual,h]),f=Object(u.useCallback)((function(){g.current+=1;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.pollingInterval?(t.manual||w(),y.apply(void 0,n)):h.apply(void 0,Object(o.a)(n||[]))}),[h,t.pollingInterval]),O=Object(u.useCallback)((function(){g.current+=1,m((function(e){return Object(i.a)({},e,{error:new Error("canceled"),loading:!1})}))}),[]),w=Object(u.useCallback)((function(){g.current+=1,p.current&&p.current.stop(),m((function(e){return Object(i.a)({},e,{error:new Error("stopped"),loading:!1})}))}),[]),B=Object(u.useCallback)((function(){p.current&&p.current.resume()}),[]),E=Object(u.useCallback)((function(){g.current+=1,p.current&&p.current.pause(),m((function(e){return Object(i.a)({},e,{error:new Error("paused"),loading:!1})}))}),[]);return Object(u.useEffect)((function(){if(t.pollingInterval)y();else if(t.manual){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];h.apply(void 0,Object(o.a)(n||[]))}return function(){g.current+=1,w()}}),[t.manual,t.pollingInterval,h]),{loading:b.loading,error:b.error,data:b.data,cancel:O,run:t.manual&&t.pollingInterval?B:f,timer:{stop:w,resume:B,pause:E}}}"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useAsync/index.ts"}}),"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useAsync/index.ts"}}),n.a=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAsync",filename:"src/useAsync/index.ts"}})},"./src/useSearch/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("react"),o=t("./node_modules/@mdx-js/react/dist/esm.js"),s=t("./node_modules/docz/dist/index.esm.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./src/useUpdateEffect/index.ts"),u=t("./src/useAsync/index.ts");function A(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(a.useState)(0),o=Object(c.a)(r,2),s=o[0],A=o[1],d=Object(a.useRef)(),b=Object(u.a)(e,[s].concat(Object(i.a)(n)),{manual:!0}),m=b.loading,p=b.data,g=b.run,j=Object(a.useMemo)((function(){return void 0===t.wait?300:t.wait}),[t.wait]);return Object(l.a)((function(){return d.current&&window.clearTimeout(d.current),d.current=window.setTimeout((function(){g(s)}),j),function(){window.clearTimeout(d.current)}}),[s]),Object(l.a)((function(){g(s)}),n),{data:p,loading:m,value:s,onChange:A}}"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useSearch/index.ts"}}),"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useSearch/index.ts"}});var d=A;A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSearch",filename:"src/useSearch/index.ts"}});var b=t("./node_modules/antd/es/select/index.js"),m=(t("./node_modules/antd/es/select/style/index.js"),function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)}}),p=(m("Option"),m("Demo"),{});function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"usesearch"},"useSearch"),Object(o.b)("h2",{id:"useage"},"Useage"),Object(o.b)("h3",{id:"simple-search-demo-with-select"},"simple search demo with select"),Object(o.b)(s.c,{__position:0,__code:"() => {\n  const { Option } = Select\n  function Demo() {\n    const fetchEmail = str => {\n      console.log('search string: ', str)\n      return fetch(`https://randomuser.me/api/?results=5`)\n        .then(res => res.json())\n        .then(res => res.results)\n    }\n\n    const { data, loading, onChange } = useSearch(fetchEmail)\n\n    return (\n      <Select\n        showSearch\n        placeholder=\"Select Emails\"\n        filterOption={false}\n        onSearch={onChange}\n        loading={loading}\n        style={{ width: 300 }}\n      >\n        {data && data.map(d => <Option key={d.email}>{d.email}</Option>)}\n      </Select>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:t,Playground:s.c,useSearch:d,Select:b.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKY8hgZxxQEcg8SNWV2g9OBSMkQjiNcUi8EkVRsFwiD2Cg4jYElVD0Mo9wCHQdj8LlQT0E9OBJDgectgIaSCESX0VVQPD1XYQNeIok1NXaMFUF0FFjlOLDnEUrF2G4Tj1iiARnlQK52gABnYJMZiwdo92rGYOxYGdHIAFnc9gADZ3M89YwGAgAxb1oESRz-GcQ4EQdTAYKEfgliIahKDgHyEQi6sopoZwICwy52AARgCrz5H0wypgAQTmSz2AjKCyOgdAw1QjlLLEdroxkdgUSUmBuGAbCzPGuB5C3GtgC6qAeuCAAyNbxkSeZKGaZbVvMbgjrlMBkMlAZUHadgAH4Nm6sMI36q59rDerqykGQqzfMwYXUzAwDCKApkegahvelrl2rCxgBB7hBuAFcLEazj2B1GZu3MNCrO4uTEcNM6MfYLUYBykGEahmskeoIywFHMizyiaA2pRI44esinKap1A4EoWAcCgSgUkfGTGLI0bUQKRylhZt9Oc5roCD6cxaYIMiI2KQhbnuR5MgwSJCIEHAj0kWYIEka6unpIG4G4ABWYpZblzmcAmOgI0t0HLf_HnUEex2nZrF3Nl9j22a9y3Qmt_3ObevGuaMqD0GiVwlgFjsCiWah7D8Gduix3IZIYpiIxV-nGagb6OZrBWlbBgOExxyU485uBhhGIuyObymyQlGBhhWjI-BARupgZ1xoDgfgu5rSAgYyNGMcmgGoBkt765ragO7wSas5ztI1_X9g078lJJuPgoD_XsbYEmqCcXQCYriTJyXPkS-nYW9epuT9gNuOZOjazAjDkNmjAF4XXYNsGAiRJroBwCTceUB5pTXgeXeQUhwHUDEByd-cspAj0_pzaOFhcETlHLXRgxMcrsE3CuN-0ZJAQy-mYL8IAaLkDooXEiZEWLhlwAQLQFBgL6AYGpe0UFibzHDAZRIAAZWwBAlj0QIFkJRMk9Qk0oGomAYpmhoW0vKM0Il1KEQAKozCTrQM8YBaZaTdFRD0ZiLFZGsbYl8KkxEERkk1OAiQDL8XdI47xviDJ-h-lgUSaBaACABqlMUisBCoAAGrxAZIwSw8N1jn38uwLwvNxSoBUhYSxrhrpXEsEU9grBUmVSRJU3e7g0hXAjNUqADIrhIn6mzVglAuAqTer9e0USMixO6Jg7m7MLAjHHgQMp7BUChCIIEAQ_T9KnQMoTei3C8CMDFFbAgDZIoOXaq09pIRUCJC6YNaCMpqS7PgJHA5XlikwDuFcSRdBMAyPkUZKyABtAAus8vY6MLr3FRqC6mbVgBKDMByK48SlYpLaTAe5-zMnVmRn805MBpajmRQyAFbVlFZEYEiBsTkPz6XjlMGIR5WYFx0TAMAjAFlLIyA2Kl_pMXU0gkfSg6cZxLBKUsNEmNiXBL8eQNFjyGxgFQEsbFNSlg4FVZgO4QLJk1iiAs-IVxUQMmBfILl6xkbTJeFcNlyyJUwA0aTWGg0IyUEhdzHA5qphHSsshf6aBcy3Wfi5K4zqMZwDdTMjkiqVzBrBWGl4wKAUmurE4yxMBXFyQjA6rVFgIDNAjHSjIHw-hhgIP1cmcscR6xGB8ckAhLD8hgPsPN9bDa9AEMWrllN375pbUWl0VkK0nCrTJAgdajyNszWW-WyEWk1I7TWJQeZw2VIsDXRJ7UrlZprAO0Y1aSKjobeEJt9LC1tv0HOkhlSF1KpRQmypyaXE2PTROlcYqZ0ornQu9VcBE0rvIWuydxTk7AosNklIwGqnKqjagbOjTKrDoJbi9Y8hVncsGVMf6gMvFEW2SpVh7DOEwHMSmtNkpeFqBdoIoCehQLgVElBQiJHFGMt0XxAxppFQqTMMje9VjH2Sn1dtBtzQGN8Y9e1ZlbjhWvO_aDSdyNbANFUjEeIeo2iZi9TJXRea0QwB_YyxjGaN0Ac4LmhTSmIAqbUwQE97bN3ZrgIpl4FmoCqeQtZ1txa2rLxksuvi84ZJ2ehKJx6vmD6fuk1y5D-k0PHGZZhxlRGH1uNw0oNhtFCI-KlWR7AFHAK6BAgYMCniUaEXsPEKAHgJTbG0WZVRzHmXaMY0sD50jyByIUax-x7H3ENV5fM4QMxmkbp6VwNqE6os0EE_151Y3hu9PQCpcgcE4B2H3UcSd_Y2BZDIYzVSOSrUZDak5Spm3qm0Fi3BBK8zFnWqssd9Yp3tvkA8Jagb7AAA-12EhtQWQkE7_QzvdBRIxAglqbuHbu_9rb53u33jB-yhl93uU0rRJKIUEZnuvedVJy78PlmlpXBMWwoYEFoAKG1TAl3fNE9DZT-CFP5zwWpwSHAwP7RWTp4kZnxPYcgIu0zwnLPnttWe5e9YKIZtWWfRTbdValt7vrY2mnLtm33nPfiHnqu-dI8psrrou3ydWWV5zy9J2wgBal0Zlcsvd2MX3UrlnvP1d69J3t2c5orJaiyDgVAowQbmg16GtnBBTfrAjkeWbsnBfE-D21L3tAfd-_Vzb-XdvFeHuV073zOb2rK-ewTqumetdtRt8O-3GehceCWC7g3M51dhZQ-EyJegYm9whSGrVOrQjxDmXk8khSaGSHYIAejNABkKoAXCVADTmoANGVADmRoAGQiHu8ygAURT0TWlzIOyswf7BAB28YAI-jAAhboAF9TAApaYAa-tABLnmYWOzoInqWGa3uJf7kk1PSRikDAqT5XD7wUypGQhABA5kzw20hRKkSk5kKlTV3AEQoAscZhKkxV4DKlu0rhjMJdBtpsECX0HkjxkCVwfJCJ8DqwJtb91lzpmQMsQlpU9lHk2pyUoxipjkIxVUcBGIUhwUkRAUN0blIg7laCgYxBgUv13lXlPl4R2tfl2BAVgVo1qYrhxk7ArIYUvJ4UNIX8EMZVBCtUsVgdaA8UCAiUNMiIVFaB7kElX8UUtCDkGxjNQMrhvNEMKY4gDJ5x4DwMkCsDwNUDAsMD3C8Zw9Kpfdsc8ZCCZJ_CKZYUSC51kZu0bVdF0lm0PtchwxIBnR0AGxvVmVfV0AYi-sqA3N4jmUIxKVKl5MlMiiwBtMGQ9MRM3FDMo9nCrMbMXQABqKyKqbPJTFo9TcYHTXzVdcwaXOWAomgHoqYdo6qULS9KTO4PTZGMVG1MrBISrHYDNVg9gzgi5bgxoymR4dgQAOw9ABd-UAFg5QALHlAAV-MAD21QAaojAA15UAAjbQ_QAZb9AAc8xXAWOQkcEKKslGPc17RoF82HQjCUMdSglYLgFTi_0lj6IZD6j01_QsMNF9g2Lsm_TxiDjdhKV2Kdhz3di-Ks0smOj-PGILyvlHBBNBg6nYAhOFSA35UFRSAcPiAC2NXV07WbkGP_hUV8xIWIRpLiFVjwAjAAKFBxLljxLFW-PU2JOaI8zPUC0pmBNBPanBNVUhOhFAIEChMZOZJXjzg5HZPnU5Jf01MAN5L6hmNizmM4x5W5jHBb1aUy38WMOWIqyq0YMpn8ClXalRI4Ktyrk-Og0JN-LlIBJDzxjxIAEI5DXUu9ex3tPsoyyd_jT0aAySnZXB3UJxp1WCIxNiPtPtuCjTSE8SST5SZSrIpSrMMy5Zu1xifsYAxg1sGi2ZH8nTqCWDVVNiI0QUQ0cBBQEhV9HTex_BrsEcETOZHhm48SUyGy_5YzQ14yK5FSaw5yKyxNHCLSSFoR9TVyLB6yNySd6QjwQtm5SF34ojKY_lFyBzl9hz194hM4XUlz3Bu8oBRVkIgV1h5i-suhj4ljytVjthPSawuy2C0SAyRiwy0yJiOiLS8TbzByV8Zw18MhWlazOZozbzlzMK5YMCzyq4SEZyRyoBnTyBwKeyLS0J_NuhjNKZX08yCzEzpCE0Sy6FwM_kxVnz-zkKHz0L4hvzqw8j7TVhXCoBAKViPThiaxyzwz2BJjOiVxpyKZlSqS1TWclhRSyx5kmz2AQDADHwXDYDshXwdTv9DQWSDSP1FVb1TU-sMDJL3S1iZKqY3MGzFLfN9jABQO0ABM0wAQujAA300AAs1FcPEw88MvC8YZtcY1nCIGYQijk1SiklU6k2ks0oUS1PSgy9HdoDA-YYSXs-wyyvctkq07gsov83A7oV0oC6SqCmsfYq4wAWE0grQqKZwqYqNyoqIrYLjzFkYBErjSSDbKRKjIwiarGU3TgLWyP9ZKYLPNPLlKh9AAgs0AB0FNqsK3NXq2zei6K49I8iaoa4i5KggSktmNK9UrSrUrKsYHKgQR8Cawq8ymExw-E8quy5HfTYLFcSitEjpbYhNcUtc3NJC-81C0iqK7NUi8i46-dXcgLRCl8wBXVFcvaldXM1VfMtEws1iw06ivGHywAMBdAAs7RCoCNNNcs5jktgoUvgubgIpLNC04pwrfKfL7JjT4ohsfI_JzNQCEosD0y5LsOhJyT0L_FA3A20quHFvgS1PAxKRltML_BFQ-JgPnA8OQiDWRuXN_k2jBqHO5oEoktukCPYCuH_K_28ObTQLxgwPA1_RPKcLlgmvAyvNQkbzv1EgwzoKoKlRS2UAKm2FcDSG9moDy2ERo0nX4FQG9EZCQHYH4B-GLGqAyHNB_DJHjuBX4FYAyHyGoH4CuH4CchwBLqciynWH4HKHIH6BdULsTpACalGjwlgGhCwG9EzutIFkSFzDyHJ263NGTr-FLArurH4F23rv4FYg0EnhAGzpAHVXEIMggHgHruM34HEknpAAAD0kwcAAAmEuqqUeymfgbrLe7eqqEKHAAADhwBChPprDPs1EtEiAvqvtvvvqnhIJvzw2HtwF0EgBSDDtQAjuo0KxAARhAFoB9CyELqTtNFoHNAHtmBmH4HkAUDfiAA",mdxType:"Playground"},(function(){var e=b.a.Option;return Object(o.b)((function(){var n=d((function(e){return console.log("search string: ",e),fetch("https://randomuser.me/api/?results=5").then((function(e){return e.json()})).then((function(e){return e.results}))})),t=n.data,r=n.loading,a=n.onChange;return Object(o.b)(b.a,{showSearch:!0,placeholder:"Select Emails",filterOption:!1,onSearch:a,loading:r,style:{width:300},mdxType:"Select"},t&&t.map((function(n){return Object(o.b)(e,{key:n.email,mdxType:"Option"},n.email)})))}),{mdxType:"Demo"})})),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"params:{\n  fn: (s: any) => Promise<Result>,\n  deps?: DependencyList = [],\n  options?: {\n    wait: number\n  }\n}\n\nconst {\n  loading: boolean;\n  data?: T;\n  value: any,\n  onChange: (s: any) => void;\n} = useAsync(params);\n")))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useSearch/index.mdx"}}),g.isMDXComponent=!0},"./src/useUpdateEffect/index.ts":function(e,n,t){"use strict";var r=t("react"),a=function(e,n){var t=Object(r.useRef)(!0);Object(r.useEffect)((function(){t.current?t.current=!1:e()}),n)};n.a=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useUpdateEffect",filename:"src/useUpdateEffect/index.ts"}})}}]);