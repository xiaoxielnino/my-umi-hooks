(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/useLoadMore/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("react"),l=n("./node_modules/@mdx-js/react/dist/esm.js"),r=n("./node_modules/docz/dist/index.esm.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./src/useUpdateEffect/index.ts");function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n.itemKey,l=n.initPageSize,r=void 0===l?10:l,A=n.formatResult,g=n.ref,o=n.threshold,c=void 0===o?100:o,d=n.peerPageSize,j=Object(i.useState)(1),m=Object(b.a)(j,2),O=m[0],u=m[1],p=Object(i.useState)(),B=Object(b.a)(p,2),N=B[0],E=B[1],M=Object(i.useState)([]),I=Object(b.a)(M,2),Y=I[0],f=I[1],h=Object(i.useState)(!1),D=Object(b.a)(h,2),C=D[0],Q=D[1],w=Object(i.useState)(0),G=Object(b.a)(w,2),y=G[0],S=G[1],T=Object(i.useRef)(0),k=Object(i.useRef)((new Date).getTime()),F=Object(i.useCallback)((function(e,t){var n="function"===typeof a?a(e,t):e[a];return void 0===n?t:n}),[a]),R=Object(i.useCallback)((function(){T.current+=1;var t=T.current;Q(!0);var n={page:O,pageSize:1===O?r:d,offset:Y.length,startTime:k.current};a&&(n.id=Y.length>0?F(Y[Y.length-1],Y.length-1):void 0),e(n).then((function(e){if(t===T.current){Q(!1);var n=A?A(e):e,a=n.total,i=n.data;f(Y.concat(i)),E(a)}}))}),[O,r,d,Y]),H=Object(i.useCallback)((function(){u(1),f([]),k.current=(new Date).getTime(),S(y+1)}),[y]),J=Object(i.useCallback)((function(){N&&Y.length>=N||(u(O+1),S(y+1))}),[O,y,Y,N]),L=Object(i.useCallback)((function(){!C&&g&&g.current&&g.current.scrollHeight-g.current.scrollTop<=g.current.clientHeight+c&&J()}),[C,g,J]);return Object(i.useEffect)((function(){return g&&g.current?(g.current.addEventListener("scroll",L),function(){g&&g.current&&g.current.removeEventListener("scroll",L)}):function(){}}),[L]),Object(i.useEffect)((function(){return R(),function(){T.current+=1}}),[y]),Object(s.a)((function(){H()}),t),{data:Y,loading:C&&1===O,loadingMore:C&&O>1,reload:H,loadMore:J,total:N,noMore:!!N&&Y.length>=N}}"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useLoadMore/index.ts"}}),"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useLoadMore/index.ts"}}),"undefined"!==typeof FnParams&&FnParams&&FnParams===Object(FnParams)&&Object.isExtensible(FnParams)&&Object.defineProperty(FnParams,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FnParams",filename:"src/useLoadMore/index.ts"}}),A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLoadMore",filename:"src/useLoadMore/index.ts"}});var g,o=n("./node_modules/antd/es/list/index.js"),c=n("./node_modules/antd/es/button/index.js"),d=n("./node_modules/antd/es/avatar/index.js"),j=(g="Demo",{});function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"useloadmore"},"useLoadMore"),Object(l.b)("p",null,"\u4e00\u4e2a\u9002\u7528\u4e8e\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a\u6216\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a\u5e94\u7528\u573a\u666f\u7684 Hook\u3002"),Object(l.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(l.b)("h3",{id:"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"),Object(l.b)(r.c,{__position:0,__code:"() => {\n  const data = [\n    {\n      id: 1,\n      title: 'Ant Design Title 1',\n    },\n    {\n      id: 2,\n      title: 'Ant Design Title 2',\n    },\n    {\n      id: 3,\n      title: 'Ant Design Title 3',\n    },\n    {\n      id: 4,\n      title: 'Ant Design Title 4',\n    },\n    {\n      id: 5,\n      title: 'Ant Design Title 5',\n    },\n    {\n      id: 6,\n      title: 'Ant Design Title 6',\n    },\n    {\n      id: 7,\n      title: 'Ant Design Title 7',\n    },\n    {\n      id: 8,\n      title: 'Ant Design Title 8',\n    },\n    {\n      id: 9,\n      title: 'Ant Design Title 9',\n    },\n    {\n      id: 10,\n      title: 'Ant Design Title 10',\n    },\n  ]\n  const asyncFn = ({ pageSize, offset }) => {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        resolve({\n          total: data.length,\n          data: data.slice(offset, offset + pageSize),\n        })\n      }, 1000)\n    })\n  }\n\n  const Demo = () => {\n    const {\n      data,\n      loading,\n      loadingMore,\n      reload,\n      loadMore,\n      total,\n      noMore,\n    } = useLoadMore(asyncFn, [], {\n      initPageSize: 3,\n      peerPageSize: 4,\n      formatResult: result => ({ total: result.total, data: result.data }),\n    })\n\n    const renderFooter = () => {\n      return (\n        <div>\n          {!noMore && (\n            <Button onClick={loadMore} loading={loadingMore}>\n              {loadingMore ? '\u52a0\u8f7d\u66f4\u591a' : '\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a'}\n            </Button>\n          )}\n\n          {noMore && <span>\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86</span>}\n\n          <span style={{ float: 'right', fontSize: 12 }}>\n            \u5171\u6709{total}\u6761\u8bb0\u5f55\n          </span>\n        </div>\n      )\n    }\n\n    return (\n      <div>\n        <List\n          header={\n            <Button onClick={reload} loading={loading}>\n              \u91cd\u65b0\u52a0\u8f7d\n            </Button>\n          }\n          footer={!loading && renderFooter()}\n          loading={loading}\n          bordered\n          dataSource={data}\n          renderItem={item => (\n            <List.Item>\n              <List.Item.Meta\n                avatar={<Avatar />}\n                title={<a>{item.title}</a>}\n                description=\"umijs/hooks is a react hooks library\"\n              />\n            </List.Item>\n          )}\n        />\n      </div>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:n,Playground:r.c,useRef:i.useRef,useLoadMore:A,List:o.a,Button:c.a,Avatar:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGAxWaNCjVleUzVwiDCJgAAZSgOz1IVunI91JDgARyEkPJ6MY9BmK6SRVGwaj8PYKC6NsAglmvcIIlQJYAEFWGiVwjjIt12ncAh0DE9V2EDSV0Io01FTBVBdBRY5Tiw5wCESLF2G4CT1iiARnlQK52gABnYJMZiwdo92rGYOxYGdvIAFkC9gADZAuC9YwGAgAxb1oESbz-GcQ4EQdTAYKEfgliIahKDgMKESS6sUpoZwICwy52AARiikL5AsqypiUuZnPYCMoPIGwoHQMNUI5ZyxAG6MZHYFFHJgbhgGw-zFrgeQtxrYBhugMbggAMgO8ZEnmShml20bxu4G65TAZDJQGVB2nYAB-DY9rDCNJquS79tQTrqykGQqzfMwYQMzAwDCKApm-qaZqB3rl2rCxgHh7hpuAFcLG6441P6gBtHHtpJmtOHQK4WpC8nafGF5YG8pTMy1eAIBScxLAZ7oWpqumLCUMnXNR_muCuAAmGn-YsGICEZuVmamVn8g5qxufYcW-f5wWRfJ7HddpsX_Kl6XZfl9pFfYZX2c59Wky1umdel_XpYsI32qFmXuaZlm2dVrm5e6KKHdpp3-Zd12jYAVhN_mzeai3fZV23A_YKOQ_JsO6Yj6Wjbi2O6fjn2lb9lPYHijOayz2mc9Fyn2AAdgL2mi4VpObbV1OG8rgXm7Rz2KauAAOPua1bxOS-Tzvy6HnvUNH2u6aNgBOUevcD4urdL6fumXufq71gejZany1_pje28njuA_Lk_9-bgBdEm8f8RJLNS8wXMGvtXDSBqmqWOdMAREpjyEmpjYW0sugED6OYZ0YxoIympBGLocBKBQFYN0CBi9aYgK5kefYEYMZYwHhYVB6DMGDVIWPEQ8QrjoDUjgWAM4Jhn3Jgwggrh6GMLgFAWIMAIxAJAYAsAwDRzsAANQ_z_o1GAHI2ETQHkoVqPlVFvmlmAkmgNn7UGsqzMq_ViGQP5njHB7C1JnygPxAoljrEzkEjAM-XQrEdlsUxFiZ8IicKgGfVAlAHGjzQi5XiDF3FdAjK_d-il2CEwfksMxNY0AvGgr_GA_9mpJjPvMDIKSZFNSuB7A25MUoCCiAQMU9JYZXFQaEWGCNv5eLoROeAtSCA4EaT4_GnDqktNhjgDhrgJqBLBkUwsqBrKTgyKlZ8GRDHgJIaMsho5YGI1djWGMshqFowAIR-IcewI6qy1m00YHJG4zJqD2D4TsZaLiBIsTQncgoty7EpAcZtLZNcnn2JYm9OUgACpUAL7xgAXs0AFiaL1vKAE6HQA34pArBe0QGxyTmSDOQpLaSKOTaMWTXPZvzDmMEqu4MQgBCm0AJDmYLAAOpoAO2NABhclIQlqAxBYqRQmBl80HKwGWlBMALiCDeX6CkQgwVDTAXSVTcWqEPnYrpoAR0VSXAA6fIQAhuaAAbowAqvqfPpWFRl1DgaxgHuo7WFkoHLIEOYKM2KNnotdowKSKJPmbA7BkZanyEyoouagK5sRtjLWcfxR5ryXkdgKFKlltNACziYABtMgWutrCi-S1BrVrMRSylKIhnXAG2d82chzJkCGmemgQ30U1IuzUGiKKQS3HK8AIKc2RPkDNyn0BEy0BlVrWXmpsMAiDLReN2-psbbXSRwF2ogSaWVDpRCO2gRAcB6lHK4WN5NXCqU4QIZajAVJqSOJudtYbz6cuAIwVwYhgB9tnfHeQUgT17rDeUcg_QZjdlQHwEAoQiAQE0JIYYlBth2FsCEZpZpfDCD_ewPhHhMgCESPwJd7BNyDskHatpo7x3S0xdQhDlqdybNGYazOxrabQJWYwfRw4sOZxTVIZGoMzBfhAJxbiIT-IOOEuGXABAtAUGAvoBgeEDJQRIjqDw6gtgyVomeURYmli8XslkGTRF7DxCgB4CU2wFPERgGAJYrN5jhksokZDqETImk1Ppe0vEACqMwOEwEk2AMTJn2g4A9FZmzWR7Nib9GYPGfjKAzCuEY1glAuBzIRsAeQKoaCnW6H5mYYWIHBa4FFiG9o0C0AENDfKYoYFmoAGrxAZIwVDxjs1XC8Og8UqAosWGzQ48rwhyTVfWAMq4o7Yk1eaXcq4cXOt3Pq-wXr6xcVdAa5V9wnWOk9ffYEI4AAfXI4ZIDOnQFFwGqWxx6EyxKboOon1PTgIwCprSlglYjkkgguS0myNetNogs3OvZIEFd9Jt3BszYyJ189ABpGAiQ3somnLOBbRCuhUFrW1mdSwRJYDu7N-Z7KgcfmSkKMpx3YZvYteTWHhlekyXWAj2uU33v3c-yuVrjQZ0dfWJF9YXQwBvaEyJsTjAAASlg9R0QvN2_QYhJt4FQcMUab3UAfYEGt8GWBxLpYyFl7oH8UmZCIHYCOYU0hw7J6FVJYqScPaZKIkBGvxfrC4G9pEnWUTqQIPgmAIuxcS_9M6KXkMtMwylA9Z9tFQn3K6EdvH_UkSnZnQH1AiQGzJS8gNMKSv7jsAV-pb0cAEeIMiNSP3lSCBiClpgO4VxdN0EwAZozLlYlS388-2Pe2K_p5O5T7tWezAciuDl2BBWoBFbO-sR4gBcJUANOagA0ZUADwK6xTGcBnb9xI0PUDJO17I_qJ8lglLR3jpY9OlgTEF-gnILkT5-SCXsfbui-viKgk9l7c_9_l4O1FkfuipiEzV44-ao4rsP36rJzhtBGCi9JwIBsLVkdqw8ZCYOklg8FaEoA39gkiI5Mv8f9ZsGxADcY78YkBkwDRwtQ1IoDaJYCYBisqcH4GxYlADb9xl79s10CCBvcChsCP8shGAKsmsGxoYoAiISDqxHh2BABy40ADYlKNQAcyNAAZCNIOskJioGQnExAUcAkNoJgM_zwPgIyAbB8nYIsE4N4MACB9QAU2tAB36MACEbQAN9NAB4vREKmDRE9TaEzGgM0zAAjBUJvw4MkHYEAAB9XvQAELcDDAAX1MAGYjUw9lK3G3d_IiEiCMeBK2LIb6E8UcG3b6VQsZayU8UdCfIImAJTBIVTHYLHGsCMc9SHbtKfNQI3QnHRMg9gbYP7ZyIWByM6ZoH7Com6Fydoe6SyZ9F6d6OoxIHIqHTgdjH6Aac9EIOwJEDkQmDowYkIUPB-TrcmYjM1Mo-o26ZCKGNAXMdo9jdgK4coxIaY-eFcUY8fP7OJAnBw5A0o8wlItIlTNTIhYokWcw6QmgD4PoMMKYCRHfHYvGXoAQF4h4qYFye4ywtpL4l4nYkBagmcCMVEBkOI046yaPRPK4ePGPfqHBR_ZuR_HXCMR_ZyW6FqP5C7c_JqDYvsIIZ7WfJqSafwXXDIZuIRUcbhThJhOgFIVhEmS3YUG3K4dk63fkP8YE_QWOWnR3cmR4FcCAZoLo7tCfSaVEhPZXHAULFyAZJklhPEaaPyd6RIg4zogZQmZU5hFkvEc0VqOJLpVwFUw09gY0gA4kpYrTFY1bFcKtMAVALEuUpPdpTYV0lBPHZvPHW4peCU_kmgX49gbZW6AEiQp474_QGUoWWY5rA2PdME15CMFgtgnY2EgiYnYM63CApYCnXMzAzhYzL-JfaIdHUQUZd6cs8pPHH0jPfDWmHpRs8Y83NkjAtSCMZU3QOIAgCMIstSDkJA3BaIiAgc54_QSwCAkcgWEc5RB_VJKfGfPJJ_M_ckp_AZB-OIvGP1DsC45TDI7YG48LFcEBK7CMAA0EzszhCMYg0EtdHko8aMl4_qMI4sgRDkKIp8z868ggX4gcwEyRVqecpYMQwE7czrPGfrX5awy4o8k87BMUiUjpA5Y6fU5kgsMQFyDpOMg2BMnYqtc81JN0tIYCq8s80cAC8QzMKRCi6sBctEwsCQgsixIcbxSCwjTgwAKDlABJoyBTcMAE7TQAVZs_C4AH10EoB50JgnADz0jrijFa5xSBps12A5sFttl6c1KNL6cXzYzjEZjTVEyCMRZlKfSwA9LHjxKhAEhWcYB2ZCArTmkLLcycBrLJLpz4tGB_itNLKgS-F9A7KHLXj8RN9Ro8K6YYLwlZzUIacwKKDnKlgoqYBOLhT4MnDAAgzUABzzUlNfdgQATCVAAseT4rhVBXWF4k80lEQoWXJjMs0q020rDN0tzIiqIyMoGkJyFJMsMpcsnMePCjPEwRoGQ3SCLXaHcoSGFQmqktHGGHQBioTI6tPINjMq0tzV8paoMrat6pjMeK6DKkwUGv0BGudDGumqmokoSGkrmpioFidM6wXOmuuqcFSq7ycMACvlUlPvfvdgQANCNABQAJooIEAA3lfvDwwATAVABZI0KqEPMPKqIkqv7MUpXHMO-h2MWuRvwuQl-L8skXePuripiSBtescOOBgDuFBsADgVQAGH-o09z0B4aYBrNbNEbqqtr6a0bCac8k8TjmlctzBa40CVwytwNXk0LpEsFcTY46sWIrhVLDlsTppqYUb5x-JpaWMPEVxQCVwRtmptltlULDkMLVT2BsL2L4gpYhTAZ6NGMeIiJmaPMpNJQ2M1B2kuMgI9BQJwJxIoIKqnbxNeISJjM2JKJFQHC8Y3MWb_arhqiYBzoJN_bDEtMHNJQCzyak9lqszOA4AGhp8Yh4hmIJCUiQioS5Fea_aU6kaAzEkJTbBc6XgIAC7AS_LWraqc687G6pLm7cz-p0yYBCLoRWDugcFk6xNOaRYU1lFubAChTJdxIoY3daIHbaBEaot6MqpthUl_w0FUBAJdAQIDAwII5-BUBvRGQkB2B-AfhixqgMhzQfwyRz6pZ-BMEBB8hqB-Arh-AfIcAf6fISp1h-B71H1n1P7L6QAlJ5o8Jy4H7y4c8rFEhcw8gCggNJRzRr6_hSwAHqx-Aog0AwH-AYdt7sGLAgHyaC94QIB4AwHa5-AzJRAL7-AAA9FqOKHAIeHAOKEhmsfgHSBmxhkAJhpMHAcWH-lqbh0hwQTUS0SIAhwR1h9hzh2DBisweQG2zB3AXQSAFIbe6gPenjL27GEAGdMkLIT-q-00Wgc0eh80WYGYfgNR-QJxoAA",mdxType:"Playground"},(function(){var e=[{id:1,title:"Ant Design Title 1"},{id:2,title:"Ant Design Title 2"},{id:3,title:"Ant Design Title 3"},{id:4,title:"Ant Design Title 4"},{id:5,title:"Ant Design Title 5"},{id:6,title:"Ant Design Title 6"},{id:7,title:"Ant Design Title 7"},{id:8,title:"Ant Design Title 8"},{id:9,title:"Ant Design Title 9"},{id:10,title:"Ant Design Title 10"}],t=function(t){var n=t.pageSize,a=t.offset;return new Promise((function(t){setTimeout((function(){t({total:e.length,data:e.slice(a,a+n)})}),1e3)}))};return Object(l.b)((function(){var e=A(t,[],{initPageSize:3,peerPageSize:4,formatResult:function(e){return{total:e.total,data:e.data}}}),n=e.data,a=e.loading,i=e.loadingMore,r=e.reload,b=e.loadMore,s=e.total,g=e.noMore;return Object(l.b)("div",null,Object(l.b)(o.a,{header:Object(l.b)(c.a,{onClick:r,loading:a,mdxType:"Button"},"\u91cd\u65b0\u52a0\u8f7d"),footer:!a&&Object(l.b)("div",null,!g&&Object(l.b)(c.a,{onClick:b,loading:i,mdxType:"Button"},i?"\u52a0\u8f7d\u66f4\u591a":"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"),g&&Object(l.b)("span",null,"\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"),Object(l.b)("span",{style:{float:"right",fontSize:12}},"\u5171\u6709",s,"\u6761\u8bb0\u5f55")),loading:a,bordered:!0,dataSource:n,renderItem:function(e){return Object(l.b)(o.a.Item,null,Object(l.b)(o.a.Item.Meta,{avatar:Object(l.b)(d.a,{mdxType:"Avatar"}),title:Object(l.b)("a",null,e.title),description:"umijs/hooks is a react hooks library"}))},mdxType:"List"}))}),{mdxType:"Demo"})})),Object(l.b)("h3",{id:"\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a"},"\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a"),Object(l.b)(r.c,{__position:1,__code:"() => {\n  const data = [\n    {\n      id: 1,\n      title: 'Ant Design Title 1',\n    },\n    {\n      id: 2,\n      title: 'Ant Design Title 2',\n    },\n    {\n      id: 3,\n      title: 'Ant Design Title 3',\n    },\n    {\n      id: 4,\n      title: 'Ant Design Title 4',\n    },\n    {\n      id: 5,\n      title: 'Ant Design Title 5',\n    },\n    {\n      id: 6,\n      title: 'Ant Design Title 6',\n    },\n    {\n      id: 7,\n      title: 'Ant Design Title 7',\n    },\n    {\n      id: 8,\n      title: 'Ant Design Title 8',\n    },\n    {\n      id: 9,\n      title: 'Ant Design Title 9',\n    },\n    {\n      id: 10,\n      title: 'Ant Design Title 10',\n    },\n  ]\n  const asyncFn = ({ pageSize, offset }) => {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        resolve({\n          total: data.length,\n          data: data.slice(offset, offset + pageSize),\n        })\n      }, 1000)\n    })\n  }\n\n  const Demo = () => {\n    const containerRef = useRef()\n    const { data, loading, loadingMore, reload, total, noMore } = useLoadMore(\n      asyncFn,\n      [],\n      {\n        initPageSize: 4,\n        peerPageSize: 3,\n        ref: containerRef,\n      },\n    )\n\n    const renderFooter = () => {\n      return (\n        <div>\n          {!noMore && (\n            <Button loading={loadingMore}>\n              {loadingMore ? '\u52a0\u8f7d\u66f4\u591a' : '\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a'}\n            </Button>\n          )}\n          {noMore && <span>\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86</span>}\n          <span style={{ float: 'right', fontSize: 12 }}>\n            \u5171\u6709{total}\u6761\u8bb0\u5f55\n          </span>\n        </div>\n      )\n    }\n\n    return (\n      <div ref={containerRef} style={{ height: 300, overflowY: 'auto' }}>\n        <List\n          header={\n            <Button onClick={reload} loading={loading}>\n              \u91cd\u65b0\u52a0\u8f7d\n            </Button>\n          }\n          footer={!loading && renderFooter()}\n          loading={loading}\n          bordered\n          dataSource={data}\n          renderItem={item => (\n            <List.Item>\n              <List.Item.Meta\n                avatar={<Avatar />}\n                title={<a>{item.title}</a>}\n                description=\"umijs/hooks is a react hooks library\"\n              />\n            </List.Item>\n          )}\n        />\n      </div>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:n,Playground:r.c,useRef:i.useRef,useLoadMore:A,List:o.a,Button:c.a,Avatar:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGAxWaNCjVleUzVwiDCJgAAZSgOz1IVunI91JDgARyEkPJ6MY9BmK6SRVGwaj8PYKC6NsAglmvcIIlQJYAEFWGiVwjjIt12ncAh0DE9V2EDSV0Io01FTBVBdBRY5Tiw5wCESLF2G4CT1iiARnlQK52gABnYJMZiwdo92rGYOxYGdvIAFkC9gADZAuC9YwGAgAxb1oESbz-GcQ4EQdTAYKEfgliIahKDgMKESS6sUpoZwICwy52AARiikL5AsqypiUuZnPYCMoPIGwoHQMNUI5ZyxAG6MZHYFFHJgbhgGw-zFrgeQtxrYBhugMbggAMgO8ZEnmShml20bxu4G65TAZDJQGVB2nYAB-DY9rDCNJquS79tQTrqykGQqzfMwYQMzAwDCKApm-qaZqB3rl2rCxgHh7hpuAFcLG6441P6gBtHHtpJmtOHQK4WpC8nafGF5YG8pTMy1eAIBScxLAZ7oWpqumLCUMnXNR_muCuAAmGn-YsGICEZuVmamVn8g5qxufYcW-f5wWRfJ7HddpsX_Kl6XZfl9pFfYZX2c59Wky1umdel_XpYsI32qFmXuaZlm2dVrm5e6KKHdpp3-Zd12jYAVhN_mzeai3fZV23A_YKOQ_JsO6Yj6Wjbi2O6fjn2lb9lPYHijOayz2mc9Fyn2AAdgL2mi4VpObbV1OG8rgXm7Rz2KauAAOPua1bxOS-Tzvy6HnvUNH2u6aNgBOUevcD4urdL6fumXufq71gejZany1_pje28njuA_Lk_9-bgBdEm8f8RJLNS8wXMGvtXDSBqmqWOdMAREpjyEmpjYW0sugED6OYZ0YxoIympBGLocBKBQFYN0CBi9aYgK5kefYEYMZYwHhYVB6DMGDVIWPEQ8QrjoDUjgWAM4Jhn3Jgwggrh6GMLgFAWIMAIxAJAYAsAwDRzsAANQ_z_o1GAHI2ETQHkoVqPlVFvmlmAkmgNn7UGsqzMq_ViGQP5njXQnC0AZBIv1XiJFvpCzxjg9hakz5QH4gUFxbiZyCRgGfLoriOxnwiJwqAZ9UCUG8aPNCLleIMSYixCMr936KXYITB-SxHE1jQC8aCv8YD_2ah7A25N5gZByTIpqVwky-JgGAX6wFXAWIECRSJYMimFlQNZScGRUrPgyIY8BJC2lkNHLAxGrsawxlkNQtGABCMJ3j2BHTGeM2mjA5I3GZP4iKKRlpbIKN4za0ya57K8SxN6cpAAFSoAX3jAAvZoALE0XreUAFBygBJo2ufc9ogMVmrMkOshSW1vkci-d8iS8yzlLMYJVdwYhACFNoASHN7mAAdTQAdsaADC5KQULUBiGBd8yFYVzALVgMtKCYB_EEG8v0FIhBgqGmAvkqm4tUKHKGfzQAjopwuAEE-I8hACG5oABujACq-kcjF-KAWu2BrGAe6jtYWSgSMgQ5gowssmROGpy0zENOdE0mpaFCVLWAFBTY7NCCVNUYAzBAhSWjAAJreTCBEF68hmW4qkiiI5mwOwZGWkchMfzmTUHsHwnYy0_H8TQicnZwAI3OpBeTQAs4mAAbTa5Pray_PktQMV4ycUrJSiIL1wAZkRsWcdLpAgel5oEN9bN4yI27M8SkatrsvACCnNkI5HDXC5T6AiZaHbG1yvDAIJsMAiDLReCOhGSrY0JldQQHAw6iCZpBYwWd87aBEBwHqUcrgU3k1cKpThAhlqMBUmpI4m5-0gvjse1wYhgDjo3fHeQUhb2Xu-eUcg_QZjdlQHwEAoQiAQE0JIYYlBth2FsCEVVZpfDCHA-wPhHhMgCESPwXd7BNwpqkKuhdS7pZAuoZh5VO4pltOlZnWVtNoGjMYPo4cRHM7AqkMjUGZgvwgE4txGJ_FvHCXDLgAgWgKDAX0AwPCBkoIkR1B4dQWwZK0TPKIuTSxeL2SyCpoi9h4hQA8BKbYGniI1KWKzeY4ZLKJFnahEyJpNT6XtLxAAqjMDhMBFNgDk9Z9oOAPSOec1kNzcm_RmDxmEygMwrhGNYJQLg_SEbAHkCqGgp1uihZmLFiBUWuCJYhvaNAtBLUSm6GKGBCqABq8QGSMFw8YiNVwvDoPFKgRLFgI3eLq8IckTX1gdquAu1JzXVVbKuKlgbWy2vsBG-sMFXR2sNfcANrlUBhsAcCEcAAPrkcMkBnToES4DHLY49AFfyjqb9T04CMDFPSWGSxqsRyyQQMpeTZGvWW0QVbA2SkCCe_k17E2VsZAGw-gA0jARIf2UTTlnBtohXQqAtt6-upYIksBvdWwM-aqICgfmSkKKIBAruhFhn9qdNZUeGXgETmS6wMe10W2jwHK4euNHXf19YCX1hdDAH9qTMm5OMAABKWD1HRC8I79BiAW3gVBwxRp_dQADgQe3wZYHEnljI0N8ofxyZkIgdgI5hTSAzpX6xDfPYqf997jPqxCNHMboH6A_tIgGyidSBB8EwHl4r5X_pnSq8hjUmGUoHo_torEgSLFLuU9hv1JEt312x9QIkBsyUvIDTCrr-47BtfqW9HADHiDIjUij9dggYgpaYDuFcEzdBMDmcsy5VJUsws_qz6d1vJeqfx5HeXswHIrjFdgeVqAlW7vrEeIAXCVADTmoANGVAA8CusBxnB12g8SMj1A2Tcn5P6ifJYKUBD48Jzd1VYAlgTBl-gnILkT5-SiXsM7ujRviKgl9n7sirMuRb-dxLi_dFTEJmbksCAk9g_NYkRGprQIwArlbgIA2C1DjtWHjITItkAaOJYLQlAKAdEuAZwpAdAatg2AgbjH_ikh2qgdqGpFgbRBATAFVqzg_A2Kkggb_h0v_hGuQeHgUFQaprgbQfVp1g2NDFAERMwdWI8OwIAOXGgAbEqJqADmRoADIRLB1khMVAyE8mICjgah3BOBWQUBiuDYPkohFg4h0hgAQPqACm1oAO_RgAQjaABvpoAPF6ShUwaIqAmhmY2BhmYAEYhhP-Yhkg7AgAAPpT6AAhbrYYAC-pgAzEZOGY5u4e5gGeERjwJWxZDfQnhoH8gCIchGHtLWSngLqr7xFaYJC6Y7Ck4WARgPqI4jrr5qDG6046KsHsDbBg7ORCwORnTNAg4tE3QuTtD3SWQ_ovTvRdGJAVFI6cD8Y_QDQPohB2BIgciEwjGzEhBJ4PwDbkzUYKpNHdG3TIRQwWI5DDH8bsBXDNGJDrHzwriLEr5g5pI06-HEGNEuGFHaYlHbBEL1EiwuFuFzq9ACBhhTASLX4XGmJ9AAk_H9TfFtA0AfBgn6AXEgKcEzgRiogMjZGPHWQZ555XA56Z79Q4KAEkxm70rp65LOS3QtTnIPZv5NQnF9hBDfZb6yKTT-CW6rbNy27kr4ycJMJ0ApCsIkyu7Cge5XBCnu4ZGwn_H6Cxwc6-7kyPArgQDNBjEjqr6TQEm55644AxYuQdq8ksJ4jTR-TvR5E3GjEdqEx6nML8l4jmitRpLcmuD6k2nsB2nwF0l7E1IHEXHZpgCoARhYl64cg4ATB0Cw7R5clH4ECfFLzKl_HgnQlTAzK3RQlqGSkAnqlCybFdYGyNqIn1oRhCEiEXEYkET049Bwk0DoHBJLDM7xn6BagEx36Fl47RBRlCzvT76H4RkoIRnka0xXCoJU4slzFJ4lnzSjiNmcIRh6m6BxAEARj1k0BTmuBZHjl4IYGLmVnu4YFEFVx7nKIAG5Lr6b7lI-L0mlJMkAKOkPzZF4yhodgvHFF6YfFxYrjAG5IRjwEImTlqQRhMEImHrilHjpkuguRJFTmZFpHAWZE_kEA_GLmJmSKtQHlLAqGJm3kDZ4xjZnIeFFE6YvlGK1xKkDSLbFqOnOkFhiAuSLaZkGzZk-nvmjhPYBlklSLflMXwWJmIVqHIUcXViHmAGFhqG1nOJDjBKYWUbiGvLXLBGACdpoAKs20RcAn66CUAW6EwTgT5BFpRRFipypRaa2G2MyXO7ARl7AJlNSoFNAdFdMDFK42aJFvZYA1lc6KlQgCQAuMAxqUwdpXOrlOA7lal6BaWjALk_lS5vxfC-gXlPlyF5-8Asu6AtltMOFXQ30jFAlaF7BJ-SwaVMAklcpGG_hgAQZqAA55nClzksIAJhKgAWPIyW3J3LrC8QBaSivnYL6UDSWXNDmXdWuUpUbHyqKq06ykUZfFWWRU4DhRniYI0CzrpCVrtBBUJA0rLXqWjjDDJUXHZkDQxmGzKmmVLIRXbkDVUYTXbmhgjqUCYIzX6DzVaqPhrWrWqUJAaWbV7ljWZwDaHlrVvVOCFXj7-GABXynCtPjPuwIAGhGgAoAGqE0CAAbyjPqEYAJgKgAska1UKEuHNVEStULl6VfHIQZUrg7V412XIQ_GuWSLAkOXfVoWw0EAA1-HHAwB3AI2ABwKoADD_iaD56AWNMATmLmON7Vgyg1WyhNWVTNdw2RO1tcZBK4tWCG9a5FZu5J1-scrWLEVwRaSyyt001MRN84_EatPGLEscKBK402zUMyMyZFSyVpfJVFNFGBUsspgM7GnGPERE_N_mSmkofGagIZQmQEegoE4E4kUELVPt8mNiNSVmbElEiovheMvmAtkdVw7RMA50CmkdhiNS7mkotZzN-eb5iBJBtgDQG-MQ8QzEvFHhtiqJciDxWdeduNe1bsypZdFdEAVdiZ_Vxi5MHdLwXd6lPdkV_URZMAPp0Iwh3QOCudcmYtn188Et-ee2vhB2TN0MVOtEXttAONiW7GVU2wuS_4aCqAgEZiomYEEc_AqA3ojISA7A_APwxY1QGQ5oP4ZI99Us_AFq-Q1A_AVw_APkOAwDPkJU6w_AH6X6P6ADj9IASk80eE5cH95cleriiQuYeQBQ0Gko5oz9fwpY4D1Y_AUQaAsD_AKOJ9RDFgkDzNte8IEA8AsDtc_AZkogD9_AAAei1HFDgEPDgHFNQzWPwDpDzRwyAJw0mDgOLMAy1EIzQ4IJqJaJEOQxIzw3wwI2hgJWYPIG7QQ7gLoJACkCfdQOfSJiHdjCAOumSFkAA0_aaLQOaGw-aLMDMPwLo06vIEAA",mdxType:"Playground"},(function(){var e=[{id:1,title:"Ant Design Title 1"},{id:2,title:"Ant Design Title 2"},{id:3,title:"Ant Design Title 3"},{id:4,title:"Ant Design Title 4"},{id:5,title:"Ant Design Title 5"},{id:6,title:"Ant Design Title 6"},{id:7,title:"Ant Design Title 7"},{id:8,title:"Ant Design Title 8"},{id:9,title:"Ant Design Title 9"},{id:10,title:"Ant Design Title 10"}],t=function(t){var n=t.pageSize,a=t.offset;return new Promise((function(t){setTimeout((function(){t({total:e.length,data:e.slice(a,a+n)})}),1e3)}))};return Object(l.b)((function(){var e=Object(i.useRef)(),n=A(t,[],{initPageSize:4,peerPageSize:3,ref:e}),a=n.data,r=n.loading,b=n.loadingMore,s=n.reload,g=n.total,j=n.noMore;return Object(l.b)("div",{ref:e,style:{height:300,overflowY:"auto"}},Object(l.b)(o.a,{header:Object(l.b)(c.a,{onClick:s,loading:r,mdxType:"Button"},"\u91cd\u65b0\u52a0\u8f7d"),footer:!r&&Object(l.b)("div",null,!j&&Object(l.b)(c.a,{loading:b,mdxType:"Button"},b?"\u52a0\u8f7d\u66f4\u591a":"\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a"),j&&Object(l.b)("span",null,"\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"),Object(l.b)("span",{style:{float:"right",fontSize:12}},"\u5171\u6709",g,"\u6761\u8bb0\u5f55")),loading:r,bordered:!0,dataSource:a,renderItem:function(e){return Object(l.b)(o.a.Item,null,Object(l.b)(o.a.Item.Meta,{avatar:Object(l.b)(d.a,{mdxType:"Avatar"}),title:Object(l.b)("a",null,e.title),description:"umijs/hooks is a react hooks library"}))},mdxType:"List"}))}),{mdxType:"Demo"})})),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const {\n  loading: boolean,\n  loadingMore: boolean,\n  data: any[],\n  reload: () => void,\n  loadMore: () => void,\n  noMore: boolean,\n  total: number,\n} = useLoadMore(params);\n\nparams:(\n  fn: ({page, pageSize, offset, id, startTime}) => Promise<Result>,\n  deps?: DependencyList = [],\n  options?: {\n    initPageSize?: number,\n    peerPageSize?: number,\n    itemKey?: string | ((record: Item, index: number) => string),\n    formatResult?: (x: Result) => ({\n      total: number,\n      data: Item[]\n    }),\n    ref?: RefObject<HTMLElement>,\n    threshold?: number\n  }\n)\n")),Object(l.b)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u7b2c\u4e00\u6b21\u52a0\u8f7d\u4e2d"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"loadingMore"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u52a0\u8f7d\u66f4\u591a\u4e2d"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"data"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5168\u90e8\u5217\u8868\u6570\u636e"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"any[]"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"reload"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u91cd\u65b0\u52a0\u8f7d\u51fd\u6570"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"loadMore"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u52a0\u8f7d\u66f4\u591a\u51fd\u6570"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"noMore"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"total"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6570\u636e\u603b\u91cf"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number","|","undefined"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"fn"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u6570\u636e\u7684\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u89c1 Params"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(Params)=> Promise"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"deps"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u4f9d\u8d56\u6570\u7ec4\uff0c\u5982\u679c deps \u53d8\u5316\uff0c\u4f1a\u89e6\u53d1 reload"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"any[]"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"options"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u89c1 Options"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"params"},"Params"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"page"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u7b2c\u51e0\u9875\u6570\u636e\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u5982\u679c\u4f60\u7684 initPageSize \u4e0d\u7b49\u4e8e peerPageSize\uff0c\u90a3 page \u5bf9\u4f60\u6ca1\u6709\u610f\u4e49\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 offset"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"pageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u6570\u636e\u6570\u91cf\uff0c\u7b2c\u4e00\u9875\u7b49\u4e8e initPageSize\uff0c\u975e\u7b2c\u4e00\u9875\u7b49\u4e8e peerPageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"offset"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6570\u636e\u504f\u79fb\u91cf\uff0c\u4e5f\u5c31\u662f\u5f53\u524d\u5df2\u7ecf\u5b58\u5728\u591a\u5c11\u6761\u6570\u636e\u4e86"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6700\u540e\u4e00\u6761\u6570\u636e\u7684 id\uff0c\u53ea\u6709\u8bbe\u7f6e\u4e86 itemKey \u540e\u624d\u4f1a\u5b58\u5728"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"startTime"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f00\u59cb\u65f6\u95f4\u6233\uff0c\u7b2c\u4e00\u6b21\u52a0\u8f7d\u6216\u6bcf\u6b21 reload \u65f6\u8bb0\u5f55"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"initPageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7b2c\u4e00\u9875\u7684 pageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"10")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"peerPageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u975e\u7b2c\u4e00\u9875\u7684 pageSize\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5219\u7b49\u4e8e initPageSize"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"itemKey"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6570\u636e id\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u51fd\u6570"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"`string"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"((record: Item, index: number) => string)`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"formatResult"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u683c\u5f0f\u5316 fn \u8bf7\u6c42\u7ed3\u679c"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(x: Result) => ({ total: number, data: Item[]})")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"ref"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5bb9\u5668\u7684 ref\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u5728\u6eda\u52a8\u5230\u5e95\u90e8\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1 loadMore"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"RefObject<HTMLElement>")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"threshold"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u4e0b\u62c9\u81ea\u52a8\u52a0\u8f7d\uff0c\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u9608\u503c"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"100")))),Object(l.b)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),Object(l.b)("p",null,"\u5728\u52a0\u8f7d\u66f4\u591a\u7684\u573a\u666f\u4e2d\uff0c\u540e\u53f0\u6570\u636e\u53ef\u80fd\u4e00\u76f4\u5728\u589e\u52a0\uff0c\u5982\u679c\u6211\u4eec\u7528\u666e\u901a\u7684\u5206\u9875\u6765\u5904\u7406\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u91cd\u590d\u7684\u6570\u636e\u3002\u5e38\u89c1\u7684\u52a0\u8f7d\u66f4\u591a\u573a\u666f\u4f1a\u6709\u4ee5\u4e0b\u51e0\u79cd\u5904\u7406\u6570\u636e\u5206\u9875\u65b9\u5f0f\uff1a"),Object(l.b)("p",null,"\u666e\u901a\u6a21\u5f0f\uff1a\u6570\u636e\u4e0d\u4f1a\u66f4\u65b0\uff0c\u603b\u6570\u662f\u56fa\u5b9a\u7684\u3002\u8fd9\u79cd\u573a\u666f\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 Demo \u4e2d\u4f8b\u5b50\uff0c\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"page"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"pageSize"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"offset")," \u7b49\u76f4\u63a5\u5411\u540e\u7aef\u670d\u52a1\u7aef\u8bf7\u6c42\u6570\u636e\u3002"),Object(l.b)("p",null,"id \u6a21\u5f0f\uff1a\u6570\u636e\u4f1a\u4e00\u76f4\u66f4\u65b0\uff0c\u6bcf\u4e2a\u6570\u636e\u6709\u552f\u4e00 id\u3002\u6211\u4eec\u53bb\u670d\u52a1\u7aef\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u5e94\u8be5\u662f\u8bf7\u6c42\u5f53\u524d\u6700\u540e\u4e00\u6761\u6570\u636e\u540e\u9762\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"pageSize")," \u6761\u6570\u636e\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u9700\u8981\u5b9a\u4e49 ",Object(l.b)("inlineCode",{parentName:"p"},"itemKey"),"\uff0c\u8fd9\u6837\u6211\u4eec\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"fn")," \u51fd\u6570\u5c31\u53ef\u4ee5\u62ff\u5230\u5f53\u524d\u6700\u540e\u4e00\u6761\u6570\u636e\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u4e86\u3002"),Object(l.b)("p",null,"timestamp \u6a21\u5f0f\uff1a\u6570\u636e\u66f4\u65b0\u9891\u7387\u4e0d\u9ad8\uff0c\u6ca1\u6709\u552f\u4e00 id\u3002\u8fd9\u79cd\u573a\u666f\u6211\u4eec\u53bb\u670d\u52a1\u5668\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u5e94\u8be5\u662f\u8bf7\u6c42 ",Object(l.b)("inlineCode",{parentName:"p"},"startTime")," \u4e4b\u524d\u7684\u6570\u636e\u3002\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"startTime"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"page"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"pageSize"),"\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"offset")," \u5373\u53ef\u51c6\u786e\u5b9a\u4f4d\u6570\u636e\u3002"))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useLoadMore/index.mdx"}}),m.isMDXComponent=!0},"./src/useUpdateEffect/index.ts":function(e,t,n){"use strict";var a=n("react"),i=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){n.current?n.current=!1:e()}),t)};t.a=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useUpdateEffect",filename:"src/useUpdateEffect/index.ts"}})}}]);