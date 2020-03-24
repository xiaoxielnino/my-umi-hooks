(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/useAsync/index.mdx":function(e,n,A){"use strict";A.r(n),A.d(n,"default",(function(){return g}));var t,o=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=A("react"),s=A("./node_modules/@mdx-js/react/dist/esm.js"),u=A("./node_modules/docz/dist/index.esm.js"),i=A("./node_modules/antd/es/button/index.js"),l=A("./node_modules/antd/es/spin/index.js"),c=(A("./node_modules/antd/es/select/style/index.js"),A("./src/useAsync/index.ts")),m=(t="Demo",{});function g(e){var n=e.components,A=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},m,A,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"useasync"},"useAsync"),Object(s.b)("p",null,"React side-effect hook that helps you run async function"),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("h3",{id:"run-the-async-function-when-component-load"},"Run the async function when component load."),Object(s.b)(u.c,{__position:0,__code:"() => {\n  function getEmail(id) {\n    return fetch(`https://randomuser.me/api?id=${id}`).then(res => res.json())\n  }\n\n  function Demo() {\n    const [state, set] = useState(0)\n    const { data, loading, cancel, run } = useAsync(() => getEmail(state), [\n      state,\n    ])\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n\n    return (\n      <div>\n        <Spin spinning={loading}>\n          id: {state}; email: {email}\n        </Spin>\n        <Button onClick={run}>reload</Button>\n        <Button onClick={cancel}>cancel</Button>\n        <Button onClick={() => set(c => c + 1)}>increase id</Button>\n      </div>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:u.c,useState:r.useState,useMemo:r.useMemo,Button:i.a,Spin:l.a,useAsync:c.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEE4ESVByAE90ZIEchJAo7TdJM1RsFE9TA0lAzGMVME9OoFFjlOLCSKU-B2G4Vj1iiARnlQK52gABnYJMZiwdo92rGYOxYGdQoAFmi9gADZoti9YwGAgAxb1oESUL-GcQ4EQdTAYKEfglho1BKDgBKERy6s8poZwICwy52AARhSuL5Gc3Q3M0uZfPYCMoPIGwoHQMNUI5XyxCm6MZHYFFvO4YBsK8rF5C3GtgFm6AFuCAAyC7xkSeZKGaU75sW7gXrlMBkMlAZUHadgAH4NjOsMI2Wq5HvO1BhurKQZCrN8zBhdTMDAMIoCmYGVrWqHxuXasLGAdHuFW4AVwsd69O7cxTzPKJoAjLhluJ3GawsLoCD6cwwFHWaI2KQhbnuR5MgwSIKIEHAj0kWYIF-rhuAAEmALh5GKDkcAmOgIy6OxCZJ5mJ3gf84GoYG4r1ms3zNyHdbJz7mS1ajKHRxmzYsUapgAbRRMjNtHABdSaKJIrIIzCi2Xbd1jjmiVwligSgOwKJY4j0-cljRcw0L8sydL0iMCdWqmaagCMvdoDklnd3XmdLmBTZd32w7NiPqNcaAA6IqiaKjJmzfzqa8_QaP2AAH2H1j5FVrXQlRuxR_Yd2G_dsL_bn4AJ5wFvoDrl358H0jfe3vW4Z7mtWfZzGd4TGGq71xgeL45q0FUmcdrjhOZ0Om-za4K5gBr-QlTQiLr_TeUBIaXxrFIe-qAjoQMYOxG4zJqD2CgLEbYO106HS6G_dAUgEGcVgZfeBHEkGoBQWgnaycERgLEFQ-ceCSEwK_pA_BpDyE7B2n3IiBAIz6UJj0dgABqfqHJDpoHIKaIinBcGSFYUwk-zNoaxhvo3Gs4C9ZnwEOYRg9saLsE3CueQ6ipDY1hmYL8IA4DGVMkRcyelJBWVwAQLQFBgL6AYGpe0UEKL2HiFADwEptjkSIkHWgwSYBijAOEs8YBOaSiWPbeY4Y9KJAADK2CmHRN0jkXwqTMBHRqlAZhXD7qwSgXBJp9zXipRS8x2CFJmJU5a_CylcBUuQOCcA7CWH5Bkfy8V-isCyPrGmz8UhXFQKEIggQjh-TCipCw_Y2DDMwHBEq9SpkzMmvM9YSyhm0B6B4CZwhGlj0mQkSa5yoALL7IM4ZXthQTM2X0uZNy9nDJiEeAQ94nnTJeewHZ_pqxuzRJKIUvCjn1JOUsVZ8FfkzIZiuCYthQybzGZNWFiQbkWGRXAHAmKMXzngti_EKKHlTD8pikluK1a9O-TkSlRKsVIoJB8Dwk1yAeBueolERSmkY2djWHEwsRgfHJAIHpR59gRhpZ8jI94PwspRXK-l2zqWsq6KMgok0aVUvWAA3ZYQpF-SqSuYVJxRUdPFBK3p0rZV0oVeqlFmrW7ovNH5LUWQcCNRGOjc0pK8Xku5TcqeR5-X8MFTi1l5LJqetoN60YwMSXmtGGK61kqYB2tZSqx1K4IDNBlayzliKT72q-feSaKbRXcIzVmlFnKlg0pdWgAoiqmbqINRDZyCN7RoFoAIZGlUdQzApnYQVURJnxF-lcLwlBySoEAY8dggB6M0AGQqgBcJUANOagA0ZUAOZGgAZCN2XO1BM4Gh6AEEMqA06Nl_IEIuyQ7BAB28YAI-jAAhboAF9TAApaYAa-tABLnmYK2zosBiT7RkQd3QxRsy0QANXiAyRglgibrBwQUGdwh503IyEIAQ16zwCGwzcverhr2WBuXQqAxyikhuQpRmYNyVW_xXLy4pUKqMrlDb1BpJKEoUVo8GgDzkbYUw0nY8gjAxT0lRpNJEDZcohSmjgRTrggr3BCKgRIC9mmrWgjKak4n4DTwIGIOumA7hXESXQTAKT0luT8gvOuRTR1XGHaOyaa84ociuJB9msGoDwYk4ZpDwLXIexrksbh_ss4hNIrQfTUHUC-f8wZ1GYgGyRvYCh5Khp4hEUPuR2jh904FaRXSxjJ9mPFZPhxyrZseNERq2ouuE8yMhfGHS9uESYBgAQ-1seyEkZoGyA2frXXBvoDba7VrVBkIUo0pEkOE3CyoDci22bFF5uogZG29YFEYlxJ4aapm02aAfD6GGKYgi_J9RJat07-GXR-U2zAElmjzCHabm0E7vR7uZku_1ElnaLBKGODAO423gvLamOnDrviEgBJ2HnRTOBlMpFU0iTTAqVxLsAHYegBd-UALBygAseUACvxgA9tUANURgA15UABG2r7ADLfoAHPMVwR3To4GbHLPsEDu-dkl3CS4Y2muwJHcBY7xySuM8YaJugT3B8zV7hpUARiRyjuAqiLBq02IrojmOFGcALazznvlXrHa59987JaIF8-1qtQXwuYXR1F-_CXyMoBSJlyS5m6izby6Ix7pausPjRG5lhoUOud75qmgb9nL0_Im-5_oC3l8rcC6gnb6E-GhSO_F1cF3buOSLctjfeXIe7262a_qmFoPVd5Ihyt89l7RMw78fD7Y3dmb-AsgppTKmtP9I-5DicyE2eZlj5z-PNA_cR4jAAQkc19PFE7Qi9jntP27ZuE995dq4EYrcofISV4piMKuR5j00wXtRusp9x_XyP16UeaCJ7Niq8fs3nRjAzQIPOvfQMXviKJg_yOPeSwc-rkOAgoCQBQZ6_al6IQdgkyt6suLsjwN8U-a-Z2LoV0ewI68-4s7gS-UAj-LsaBP2s2uez2N8aE84Ui6WT-dKL-qK9IR4SaFBZehih87sIBy2YBx6kB9e8QwB2BoBi-_Bg-qAB86wiBLO84YuTecOgSbeNYABKuveNBhYM2L-QiV2k-BanBeK4BJ6KQUBGQl6hBzMU-s-ghXBwhBBm-O8zGzBuuXuesP-DeOc5AShPefulBru3QqhLM--SOR-KmJ-88Dc5-QObBK47s6cAho63BEBp6fBUA4h1Yi2Ec5Gsh_i8h72NY1-6Bv2WhWOvITMye_CtuimIu6e2GEyMAYweG2Gj45G2Qr4WeqG2WPhS0i2wOmmLWA-zGmRLeX-YeuRY-N-F2hRTMS6gAoHaAAmaYAIXRgAb6aAAWanmgWs_mMaYW1l8vQfYefk4aUTbqnhUUsCXjUXURnp_u0MxvMCJOXBlmLm0WQZ0dyhXA3L0W5BxgMdkSoUUewKToALCaixKxTMU-6x-RBAmxYJJBDBUyMADhnuFeoRaRrWdW3QUWMAsOWRCOORk26hYxmh_2vxgAQWaAA6CkCasVNFCebrYTWFSceKifCRfiUaOPzmUUcTgJUacfUrUewPUeCu0Kibca0Vlk8e7oiT0c5BYLtrElsDwiuB4ajlcOjg3MMWYToZYXoTwYkdAfEJsRYC4X_m4YyZ7tCB0VProbgZOjYX4aIQAUEajiEWfl4brNMYAGAugAWdrLG6zy44l6x5EkEEnXY3y7FeEA7sEWnWGxE4H6G8E6lQBpzIQpEWCIHy7paZYS41w4DpmHxcmZkl6HxEZXCZlEZ5buDUKFY0ZYFxHWHsCYEWkxnanGG9j_SfFXDYJi6HwMY0kWDMaHwswGZHh9l9hGq1yRHVidqAY9pTBIwoxTDZwWQqQWItTbCuBpCGzUCAS6AgQGBgSCr8CoDeiMhIDsD8A_DFjVAZDmg_hkhHl1z8CsAZD5DUD8BXD8BhQ4DvlhR1TrD8DlASIQCWEvknkgCaSbR4SwDQhYDeg3kg5kiUCJC5h5DaqmiSjmhnl_CljfnVj8CjJAX8COKGxYUWC_mg6WbwgQDwBAXpb8AoWiDHn8AAB6fUGUOAAAHDgBlERTWPwBJHhSAAxUmDgAAEzvl9RcXEWCCaiWiRB8VMUsXsWcUgD6oAYWLnneAfDUCQApDrmoCbluKgQgDEwgC0A-hZAvmnmmi0Dmi0XmizAzD8DyAKBGJAA",mdxType:"Playground"},(function(){return Object(s.b)((function(){var e=Object(r.useState)(0),n=Object(o.a)(e,2),A=n[0],t=n[1],a=Object(c.a)((function(){return fetch("https://randomuser.me/api?id=".concat(A)).then((function(e){return e.json()}))}),[A]),u=a.data,m=a.loading,g=a.cancel,d=a.run,B=Object(r.useMemo)((function(){return(((u||{}).results||[])[0]||{}).email}),[u]);return Object(s.b)("div",null,Object(s.b)(l.a,{spinning:m,mdxType:"Spin"},"id: ",A,"; email: ",B),Object(s.b)(i.a,{onClick:d,mdxType:"Button"},"reload"),Object(s.b)(i.a,{onClick:g,mdxType:"Button"},"cancel"),Object(s.b)(i.a,{onClick:function(){return t((function(e){return e+1}))},mdxType:"Button"},"increase id"))}),{mdxType:"Demo"})})),Object(s.b)("h3",{id:"run-the-async-function-with-callback"},"Run the async function with callback."),Object(s.b)(u.c,{__position:1,__code:"() => {\n  function getEmail() {\n    return fetch(`https://randomuser.me/api`).then(res => res.json())\n  }\n\n  function Demo() {\n    const { data, loading, cancel, run } = useAsync(() => getEmail(), [], {\n      manual: true,\n    })\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n\n    return (\n      <div>\n        <Spin spinning={loading}>email: {email}</Spin>\n        <Button onClick={run}>fetch</Button>\n      </div>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:u.c,useState:r.useState,useMemo:r.useMemo,Button:i.a,Spin:l.a,useAsync:c.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEE4ESVByAE90ZIEchJAo7TdJM1RsFE9TA0lAzGMVME9OoFFjlOLCSKU-B2G4Vj1iiARnlQK52gABnYJMZiwdo92rGYOxYGdQoAFmi9gADZoti9YwGAgAxb1oESUL-GcQ4EQdTAYKEfglho1BKDgBKERy6s8poZwICwy52AARhSuL5Gc3Q3M0uZfPYCMoPIGwoHQMNUI5XyxCm6MZHYFFvO4YBsK8rF5C3GtgFm6AFuCAAyC7xkSeZKGaU75sW7gXrlMBkMlAZUHadgAH4NjOsMI2Wq5HvO1BhurKQZCrN8zBhdTMDAMIoCmYGVrWqHxuXasLGAdHuFW4AVwsd69O7cxTzPKJoHR4ncZrCwugIPpzDAUdZojYpCFue5HkyDBIgogQcCPSRZggYoORwCY6AjLo7EJid4H_OBqGBt9GYsSGScND6KfYLVqMoOndYsUaCPQaJXCWKBKA7AoljiPT5yWNFzDQvyzJ0vSIwJ1aqZpqBgaWABtABdJZ6a1rWolQUJ4iuVEGTimPtc1tOLehIPJooqiaKjBmY_9qa_at0j2AAH0r1j5GlhXQlRuxq_YCOOVDsLw6rmvgDrnBqNcaBU7TixQ_L1xI7N9g4aLmtmdZzGR4TGGp8ZxgeL45q0FUmcdrth2Z0OgfoCuYBj6geQpA31AjqX2t2JuZlqHsKBYm2Hb3cO9mCFmqQH842-adoaxinhnRmkMY7zwEOYRgRsaLsE3CueQEDaySGxrDMwX4QBwGMqZIi5k9KSCsrgAgWgKDAX0AwNS9ooIUXsPEKAHgJTbHIkREiZENJijAKwmAZ4wDs0lEsI28xwx6USAAGVsFMOibpHIvhUmYLOjVKAzCuCXVglAuCTRLr3FSil5jsGUTMbRy0lYaK4CpcgcE4B2EsPyDI_l4r9FYFkZWNMd4pCuPHIggQjh-TCipCw_Y2CuMwHBEqhjQg-Icf4wJfZnGuPIB4LxwhjE13jgkSaGSoBxOCS42gm1SLCi8VE3xk0AnrDya4mIR4BD3hKdEvx7AKn-mrBbNEkohQRiSSklRSwwnwQab45a0cawTFsKGY-HjJoDMSHEiw4y4A4FmTM-c8F5n4gmSiVw9o_KzI2YsmW9i6k5D2WsuZK5DlJMmkkuJKCUQqJMRjUZFgcSCxGB8ckAg7FHn2BGQ5NSMj3g_JcgkRzan3nKQcsFXR3EFEmoc_Z6x5C5LCERJ5SsXl5lUKMT54pvn2L-QC45wLoUTNhYPaZ5o_JaiyDgRqIx0bmk2Us7Zwo7lxIbkeDFRNQVbKKVMGldKGXAw2W8k4HyrH4p-TAIlYLAUnJBQzCAzR_lgqSSM3WxKIWnOxe8nARECAyrlRMpJSxDkUrQAUJV4DkUqR1s6LAYk0C0AEMjSqOoZgUzsKMuOCcoC_SuF4Sg5JUBKgQZIdggB6M0AGQqgBcJUANOagA0ZUAOZGgAZCMqSG1-M4Gh6AEC4gNQyMjhseOwQAdvGACPowAIW6ABfUwAKWmAGvrQAS55mAdQje0LqMjuu6GKFm0CABq8QGSMEsLy6s-8kqePYMG0NcSMhCAEIG9gZ4BALriePJdlg4nOwRFAXpMxOXIX3XEhVp8VwPNUYY1JGyuW9SMRshKFFj12tbc5Mmn1mTewsowMU9JUaTSRA2XKIUpo4DAzslI9wQioESG3DG0EZTUh_fARuBAxDD0wHcK4wi6CYDEZItyfkI7DxUd6q4nrvWTV7nFDkVxe2s0HVAYdv7UNjvNq5KYodtm0CWIaruXs2GkVoMhvtqBGPMZQ6jMQDYsUToKFcZGUAiLD3Nu4Xd-6VMTiPVevplzjlntnhejTutb3Gdno-oiZnwHDzrtujj4xjm5yIlwkdjma7ISRmgbIDYPMwEgM6dANrCyoDclQZCgrOF-YjGFILWcrURYolw_5aIYBKvWBRPhAiCB-1MWxmsYWaAfD6GGKYABqPyfUNnxaK6ul0flk4wBvaOBeOjdYFYIDVkr7Byv9Q2Si5F_SYB3DS20-z7snMwHoQkJhOw_ZgZwBBqDSI4OYpXKWwAdh6AF35QAsHKACx5QAK_GAD21QA1RGADXlQAEbZVsAMt-gAc8xXFnd2jhws3LaIV3otWaAbMNRGRWq1prsHm3AW29tJ1JxS0tEbjMoFs1QBGebi2wE1hlpsWH49nlTxVVNR7r3BWvXa51_QmrZ6M2-79qaUFAf9OtsDg-U7FPorrkFmOKDIHNegcca2Gz066w-NETm86hTo-J5wVV2PnsvT8vj97JWid31Jxjf7lPoSrqFDT0Hhp4gM45EzrWLOtbQ-V2u3WtmBvHCG3ASHwW3KdvzfEAh-kBOTYYTN7YhdGb-AsqB8DQULdC5jg95CT3MyS5xwTz7utMcRgAISka-ksv1vYW5R-q9LwnjiR6uBGIPKY7s4dgYjIt7urdw7a656hCPqqpfFbq69MXNBZdpwVWHiLzoxgyoEDljGNuC327zwtn3HIlix9cjgQUCQCi5tdQWkIdhvHDIUcLx4GPVUp-r5mK6ewvVx9Fu4f1DeR6r4-xF-njWp5oXnOirFMcm-p8K7e0VZ_jdIM06HYfIXR9Zon3mgtQ-t8j4T1AG7MhJPNWJbg9vOCDhNlNowswm7jWH3gjn7lrFXkft1hVmXpHm_ksmPtmikJPhkAWvvlrJHjHn_u_gAUQTHBeg_sLnrozN3nbj7OQAgQPmXufkpt0FfnPMhH3gXj7kXm3DrtrM_iuKHO7L_t6h_uPjmt_vECARYLFvZjuvOFAc7rAa1gzCgV1j1pVmtryAzPLkrIrmBkDobkKF4jAGMCuguo-MobACJIPuwHJslBrhwRDncmHCXnZiFlMBeqodNuoblunvlqHrfmVugXoewIAKB2gAJmmACF0YAG-mgAFmoriR435r4ECUEOa1LN4GoRAzA0G2oGGjg_YK4U4mFLAC5liGKWHLoq4d7tAXrzAOFq7yauFa5BZKDF6KE-HKz0jcqO7QEu6d6rYMylqHaACwmokSkcqqqukUflkfMSVpMv0TAIUTWCgl0W3N4W5BZt0IMWobNhoYzFoS6DoRsqWoAEFmgAOgrTGpFzHHLN6LGPFhGj5oprE6566GF_blEGqVH1EWFWH1GPh7EtFOEg5tEn7uGm7bHOQWAZb8JbDZYrgsGQZXDLYl5IH0GqpYFSG4H4G25QBZEWAMFQC95CH8QX7dCYFkHx677xDElaaw7zZ8GQYCEl4Ul0ERrRGABgLoAFnayRJmbO5gxxmcoRGRaBvWU81BnJfWL-uJABEh2-OBX-U-8QQBqA8h08C-TMwpwRFgzhU63Gf4hpmmVRVwxp_c9Rmm48FpQmf448mmdhmm7sVwCp9JUA7AG-uJKpMhapnp_0t67AVwXQE6mmp6-pNYF6mmupqxMZfY7xmmSgL6EMzk7aUwSMKMUwX6ekKkWCLU2wrgaQqs1AgEugIEBgYEoy_AqA3ojISA7A_APwxY1QGQ5oP4ZI9Zw8_ArAGQ-Q1A_AVw_AYUOAI5YUdU6w_A5Q5A_QZBg5jZIAmkm0eEsA0IWA3onZZuZIlAiQuYeQ8Kpoko5ozZfwpYE51Y_A7i85_AxCqs55FgU5Q2uG8IEA8A85WK_Ah5ogDZ_AAAen1BlDgAABw4AZT3k1j8ASTXkgC_lJg4AABMI5fU4FD5ggmolokQ0F_5gFIFYFIAyKraWCLZ3gHw1AkAKQJZqAZZFCoEIAxMIAtAPoWQg5TZpotA5oX55oswMw_A8gCgyCQAA",mdxType:"Playground"},(function(){return Object(s.b)((function(){var e=Object(c.a)((function(){return fetch("https://randomuser.me/api").then((function(e){return e.json()}))}),[],{manual:!0}),n=e.data,A=e.loading,t=(e.cancel,e.run),o=Object(r.useMemo)((function(){return(((n||{}).results||[])[0]||{}).email}),[n]);return Object(s.b)("div",null,Object(s.b)(l.a,{spinning:A,mdxType:"Spin"},"email: ",o),Object(s.b)(i.a,{onClick:t,mdxType:"Button"},"fetch"))}),{mdxType:"Demo"})})),Object(s.b)("h3",{id:"set-a-polling-interval-for-async-function"},"set a polling interval for async function."),Object(s.b)(u.c,{__position:2,__code:"() => {\n  function getEmail() {\n    return fetch(`https://randomuser.me/api`).then(res => res.json())\n  }\n\n  function Demo() {\n    const { data, loading, timer, run } = useAsync(() => getEmail(), [], {\n      manual: true,\n      pollingInterval: 3000,\n    })\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n\n    return (\n      <div>\n        <Spin spinning={loading}>email: {email}</Spin>\n        <Button onClick={run}>start polling</Button>\n        <Button onClick={timer.pause}>pause</Button>\n        <Button onClick={timer.stop}>stop</Button>\n        <Button onClick={timer.resume}>resume</Button>\n      </div>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:u.c,useState:r.useState,useMemo:r.useMemo,Button:i.a,Spin:l.a,useAsync:c.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEE4ESVByAE90ZIEchJAo7TdJM1RsFE9TA0lAzGMVME9OoFFjlOLCSKU-B2G4Vj1iiARnlQK52gABnYJMZiwdo92rGYOxYGdQoAFmi9gADZoti9YwGAgAxb1oESUL-GcQ4EQdTAYKEfglho1BKDgBKERy6s8poZwICwy52AARhSuL5Gc3Q3M0uZfPYCMoPIGwoHQMNUI5XyxCm6MZHYFFvO4YBsK8rF5C3GtgFm6AFuCAAyC7xkSeZKGaU75sW7gXrlMBkMlAZUHadgAH4NjOsMI2Wq5HvO1BhurKQZCrN8zBhdTMDAMIoCmYGVrWqHxuXasLGAdHuFW4AVwsd69O7cxTzPKJoHR4ncZrCwugIPpzDAUdZojYpCFue5HkyDBIgogQcCPSRZggYoORwCY6AjLo7EJid4H_OBqGBt9GYsSGScND6KfYLVqMoOndYsUaCPQaJXCWKBKA7AolhiI8BCWNFzDQvyzJ0vSIwJ1aqZpqBgaWABtABdJZ6a1rWolQUJ4iuVEGTimPGcFBICgaPQBFYRPIrCwvU7T-RNbTi3oSDyaKKomiowZmP_amv2rdI9gAB929Y0vQ3gUJUbsTv2AjjlQ7C8OO674Ae-o1xoGLtPh9b1xI7N9g4YbmtmdZzHF4TGG18ZxgeL45q0FUmcdrth2Z0O2foCuYB76geQpBP1Ajr32t2JuZlqHsKAsRtg7XdodFErh7QZ0ATOKQP9OKfz3owOBf9UAAKATtZ2GQcAJQoodHBRFYEcWoAgxeSCiHmH_oAnYGD-RYJRJQGYYCIgzEIb_D-h8axkLYXsVBVDgHAEwSLBWoQjyHWEUeVh8COHQ1jGvMujNIYx23gIcwjAjY0XYJuFc8hFG1kkNjWGZgvwgDgMZUyRFzJ6UkFZXABAtAUGAvoBgal7RQQovYeIUAPASm2ORIiJEyIaTFGAPxMAzxgHZpKJYRt5jhj0okAAMrYKYdE3SORfCpMwFdGoMKuE3VglAuCTSbtPFSil5jsByTMYpy0lYFK4CpcgcE4B2EsLQo40c-z9DzrQZWNML4pCuPHIggQjh-TCipCw_Y2BZGOPOeCQyRGjMmhM9Y0yendHIB4IZwhqld3jgkSaByoCTK6TM3p4DhSLJGRkFZpz1mzMEfea5yzxmZOrBbNEkohQRi2TshhSxMBwRKpUpZGRlqdIsBMWwvd-kFEmkC-CpyoUEhwIi5Ifl0XIvxDCy5UxMXzMSNi6FcAZbtPvAiwlxLUVbMmls05uj6HVL8iUlcOJBYjA-OSAQbSjz7AjCSslLt7wfhXIKp5OQ3litRV0OFM5JqCqxeseQ9ywhERqRjSFeZVCjC5eKHltD-XivJegUVDNBWyrngM9g5o_JaiyDgRqIx0bmhxaSvFDLTniO6Cy2pRNpW4tIvaO1DqnXA2xeyk4nKmn6t5TAI1qKJVmsZhAZoAqaUeAhbrY1wrJXao5TgIiBA40JphVsp2Mr74DOTTWXRKqzA62dFgMSaBaACGRpVHUMwKZ2E6XHBOUBfpXC8JQckqAlSaMkOwQA9GaADIVQAuEqAGnNQAaMqAHMjQAMhFrNHdAlI2c2150HS8jIE7HjsEAHbxgAj6MACFugAX1MAClpgBr60AEueDbnII3tK2jIHbuhihZiogAavEBkjBLD-urNfJKgz2AjrHacjIQgBBDvYGeAQCHTnLyQ5YU5cQ9Lzn-TML1yF8OnMEY_FcTLiMrm9ZRhm-DepVM9a-_0qAyafWZN7CyjAxT0lRpNJEDZcohSmjgETECUj3BCKgRII8MbQRlNSLjfdUZiGLpgO4VwYl0EwPEpJbk_IR2LgwntVwu09smtPOKHIri_tZoBqAwHuP9wIGB82rkpih3AbQJYRaJ5e38aRWgim_2oDsw5pTzmGxaogwUK4yMoBEQXqsXDUB8OJfdqlsV7SyObwo5U3ZiWmZ9yPBlzedGSsKOLqXbDbnxjtOrkRYJIG6td2QkjNA2QGytZgJAZ0prquoDclQZC-KgndYjGFGtFc0Djj8zAYJAq0QwDNesCi4TIkED9n6_yDMhs0A-H0MMUwADUfk-rYumwQfbqGXR-WTjAbFyjzCss3rty7vRruZhO_1bF9bqxKDmXcZbHyavu3qzADxCRvE7D9iJnAYmJNIhk0rLVp7AB2HoAXflACwcoALHlAAr8YAPbVADVEYANeVAARtlewAy36ABzzFcFd3aOGG3Stoe33uHexUWiMitVrTXYLDuAtt7aQaTotpaQPGaPcNKgCMsP4fyJrDLTYUvl6arXqmqa9Pmf4teq9q7h2s2b0ZhzrnU0oJ88BdbAXN8oNxfVaXGtMddFKNHDvZe2LtZy4sB8aInN4NChVwbzgaaNeM5en5HXrP9D66_kbjGPOzfQlQ0KS3QvDTxFtxye3WtHdawl77gQbuloMsBTAQH7zXMDbHDnA9lj9KzYh14nx9dGb-AssJ0TQU4Bba1eXtywfMxh817r_QBe1cRgAIRGa-qS_tvYh5j4u0PmgUe06uBGHPKY7tpciYjPDyew9w4Z4L9niwo_w8HZu69PvBBl8x0EYvkbzoxhxoEJtjGn7c7xBr1vuHHeORLEn65NgtulnFXr2P4KCjcgIGLmnI8KrmmgvhHpmFdHsN2lPqLO4AOjfmnAgefv3qnvFvdmvGhPOOqt3lrHfogZdt6uGkQbrNnkoCuKHAAQNkAZnDOHuhkAev_qgYATPlAG7MhKvNWNAXTvOILmDvXlDtsE3jWN_rLv7jHGfh9sdqdiPmmswaSlAiAfuvEFgSmmmhPjwSwXwXoVrEyjQQHsfjWO_tXj7OQHIb_kftCAQdtovJvrDjvh3nviPJntrNoolqHO7NwT2qwTuhwR_lAEIRYJNjVjhgiFABIZ4lIa_sjrToPpQewF9mdiuLAQzDHkrHHiJvzgnghkMjAGMChgho-HEfONkK-MnjFvgenjWv9iPP1m5EyokZDo3s9ozEoYdpkaoTkVOoAKB2gAJmmACF0YAG-mgAFmorij4UG4HX6uHkHtL36FrMIWEKLkajic6x6m5FFLB55lEVGJ4v7tBMrzAiR_7sDRbJRNHdB25F774xEV7Kz0hHhdEN7Q69E1inr46ACwmtMXMQzAsWsZQaYYscob3B8TAFsbWsqmHAfu0VMHRl8ckb8a5sNvfoMd9sMewIAEFmgAOgrAnzFppQl64rGMwUnHh0bwl-F5G7HG6FGFpHFnEnHIZnGPh0bXENH3E26PGH6IkvFl4aRrZbAbYrgOHiZXCI4H4KFayj4aGhHaGcG6FUmKmgFQBf6-H8QkHdBKlGHT4YHqlkFMzITf6eHibeEH66lWGnojGABgLoAFnasxusEumJWs_RLoWRBeFg5hdpP2ARypfBwRaBWh7BWpAhqAUR68opEuUWgujRnmf4dxKQiWxxm0AWf4eeiWy8VwKZaKFutO7g8RaWRGKBIRfB7AyBypEZu6Wpf07xIi3QVwXQEGiWpGGp_pzCBWzZR4fZdGiWDBf2Kkja76UwSMKMUwHGekKkxiLU2wrgaQqs1AgEugIEBgYEnS_AqA3ojISA7A_APwxY1QGQ5oP4ZIB5xc_ArAGQ-Q1A_AVw_AYUOAr5YUdU6w_A5Q5A_QRhT5R5IAmkm0eEsA0IWA3oV5AOdsiQuYeQ8Kpoko5oJ5fwpYn51Y_A_SAF_ANiqs6FFg35JeWm8IEA8AAFWq_AiFogh5_AAAen1BlDgAABw4AZT4U1j8ASTYUgC0VJg4AABMr5fU7FBFggmolokQ3F9FjFLFbFIAyqDaxip53gHw1AkAKQq5qA65jioEIAxMIAtAPoWQT5x5potA5oVF5oswMw_A8gCgOiQAA",mdxType:"Playground"},(function(){return Object(s.b)((function(){var e=Object(c.a)((function(){return fetch("https://randomuser.me/api").then((function(e){return e.json()}))}),[],{manual:!0,pollingInterval:3e3}),n=e.data,A=e.loading,t=e.timer,o=e.run,a=Object(r.useMemo)((function(){return(((n||{}).results||[])[0]||{}).email}),[n]);return Object(s.b)("div",null,Object(s.b)(l.a,{spinning:A,mdxType:"Spin"},"email: ",a),Object(s.b)(i.a,{onClick:o,mdxType:"Button"},"start polling"),Object(s.b)(i.a,{onClick:t.pause,mdxType:"Button"},"pause"),Object(s.b)(i.a,{onClick:t.stop,mdxType:"Button"},"stop"),Object(s.b)(i.a,{onClick:t.resume,mdxType:"Button"},"resume"))}),{mdxType:"Demo"})})),Object(s.b)("h3",{id:"demo"},"Demo"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { useAsync } from '@umijs/hooks';\n\nconst Demo = () => {\n  const {data, loading} = useAsync(asyncFunc);\n\n  return loading ? ('loading...') : (<SomeComponent data={data}>)\n};\n")),Object(s.b)("h2",{id:"reference"},"Reference"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"params:{\n  fn: (...args: Args | any) => Promise<Result>,\n  deps: DependencyList = [],\n  options: {\n    initExecute?: boolean; // \u662f\u5426\u521d\u59cb\u5316\u6267\u884c\n    pollingInterval?: number; // \u8f6e\u8be2\u7684\u95f4\u9694\u6beb\u79d2\n  }\n}\n\nconst {\n  loading: boolean;\n  error?: Error;\n  data?: T;\n  cancel: () => void;\n  run: () => void;\n  timer: {\n      stop: () => void;\n      resume: () => void;\n      pause: () => void;\n  };\n} = useAsync(params);\n")))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useAsync/index.mdx"}}),g.isMDXComponent=!0},"./src/useAsync/index.ts":function(e,n,A){"use strict";var t=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),o=A.n(t),a=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),r=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),s=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),u=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=A("react"),c=function(){},m=function e(n,A){var t=this;Object(i.a)(this,e),this.remaining=0,this.delay=0,this.cb=null,this.start=0,this.timerId=0,this.stop=function(){window.clearTimeout(t.timerId),t.timerId=0,t.remaining=t.delay},this.pause=function(){window.clearTimeout(t.timerId),t.remaining-=Date.now()-t.start},this.resume=function(){t.start=Date.now(),window.clearTimeout(t.timerId),t.cb&&(t.timerId=window.setTimeout(t.cb,t.remaining))},this.remaining=A,this.delay=A,this.start=A,this.timerId=A,this.cb=n};function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=Object(l.useState)({loading:!1,cancel:c,run:c,timer:{stop:c,resume:c,pause:c}}),i=Object(u.a)(t,2),g=i[0],d=i[1],B=Object(l.useRef)(void 0),p=Object(l.useRef)(0),j=Object(l.useRef)(!0);Object(l.useEffect)((function(){return p.current+=1,j.current=!0,function(){p.current+=1}}),n);var E=Object(l.useCallback)((function(){var n=p.current;return d((function(e){return Object(s.a)({},e,{loading:!0})})),e.apply(void 0,arguments).then((function(e){return n===p.current&&d((function(n){return Object(s.a)({},n,{data:e,loading:!1})})),e})).catch((function(e){return n===p.current&&d((function(n){return Object(s.a)({},n,{error:e,loading:!1})})),e}))}),n),b=Object(l.useCallback)(Object(r.a)(o.a.mark((function e(){var n,t,r,s,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length,t=new Array(n),r=0;r<n;r++)t[r]=u[r];if(s=p.current,A.manual&&j.current){e.next=5;break}return e.next=5,E.apply(void 0,Object(a.a)(t||[]));case 5:p.current===s&&(B.current=new m((function(){return b.apply(void 0,t)}),A.pollingInterval),j.current&&A.manual?j.current=!1:B.current.resume());case 6:case"end":return e.stop()}}),e)}))),[A.pollingInterval,A.manual,E]),Q=Object(l.useCallback)((function(){p.current+=1;for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];A.pollingInterval?(A.manual||w(),b.apply(void 0,n)):E.apply(void 0,Object(a.a)(n||[]))}),[E,A.pollingInterval]),h=Object(l.useCallback)((function(){p.current+=1,d((function(e){return Object(s.a)({},e,{error:new Error("canceled"),loading:!1})}))}),[]),w=Object(l.useCallback)((function(){p.current+=1,B.current&&B.current.stop(),d((function(e){return Object(s.a)({},e,{error:new Error("stopped"),loading:!1})}))}),[]),C=Object(l.useCallback)((function(){B.current&&B.current.resume()}),[]),I=Object(l.useCallback)((function(){p.current+=1,B.current&&B.current.pause(),d((function(e){return Object(s.a)({},e,{error:new Error("paused"),loading:!1})}))}),[]);return Object(l.useEffect)((function(){if(A.pollingInterval)b();else if(A.manual){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];E.apply(void 0,Object(a.a)(n||[]))}return function(){p.current+=1,w()}}),[A.manual,A.pollingInterval,E]),{loading:g.loading,error:g.error,data:g.data,cancel:h,run:A.manual&&A.pollingInterval?C:Q,timer:{stop:w,resume:C,pause:I}}}"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useAsync/index.ts"}}),"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useAsync/index.ts"}}),n.a=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAsync",filename:"src/useAsync/index.ts"}})}}]);