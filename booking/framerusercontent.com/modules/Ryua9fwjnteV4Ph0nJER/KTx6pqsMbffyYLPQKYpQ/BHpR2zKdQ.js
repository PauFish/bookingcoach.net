// Generated by Framer (224f28e)
import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import{addFonts,Container,cx,GeneratedComponentContext,getFonts,Link,PropertyOverrides,removeHiddenBreakpointLayers,RichText,useActiveVariantCallback,useHydratedBreakpointVariants,useOverlayState,withCSS}from"framer";import{AnimatePresence,LayoutGroup,motion}from"framer-motion";import*as React from"react";import*as ReactDOM from"react-dom";import SectionsCTA from"https://framerusercontent.com/modules/BjucgAwJuzXxm4OyiDj2/6hxcbdPzmXaA8tbAOsHy/cqnRwKlCJ.js";import SectionsFooter from"https://framerusercontent.com/modules/NPYYpOnkJqkuy44B3tjx/dhicFHE6UslPPqdAdovQ/eoVvUifLW.js";import HeaderMenuFeatures from"https://framerusercontent.com/modules/sbYTpIZWctUb86msuOHJ/gsRWQ48XcM4slyM4j2FZ/Ers4dkEpO.js";import ComponentsTestimonialCarousel from"https://framerusercontent.com/modules/NaQA53u1Mp4GUzfh0fZc/9wwkOcISHmFKMRw0X908/hL2PF9_U0.js";import HeaderHeader from"https://framerusercontent.com/modules/tRbIisS7SQ6zmhsjyshu/mK6NZMe1OPVJTvmZ93Iw/jgqYvbG21.js";import HeaderMobileMenu from"https://framerusercontent.com/modules/yHXbOPBZTxIZVPoVOjls/91VMzcnh0BpVOykFrBos/lCTXcruKn.js";import HeaderMenuResources from"https://framerusercontent.com/modules/DQd5CzXMUpADotVvWCb4/8ADq74JvBswQVnZSlY4j/o3KEV2QJK.js";import FoundationsPictograms from"https://framerusercontent.com/modules/GSuAHom3xtj2rK8jje8w/6psAKqGZRe3q6XiaGrwW/yTJ1l97JG.js";import*as sharedStyle3 from"https://framerusercontent.com/modules/wXolKUtNqeNYzvU4F8xJ/jTRF6xAdykt3SmTYmOF2/fVxnimdqP.js";import*as sharedStyle4 from"https://framerusercontent.com/modules/jMrex3VtrHDrHbOfG7zX/phTMOegu38jJe4DsPQ9C/ro7OPezbn.js";import*as sharedStyle from"https://framerusercontent.com/modules/1a4mKlhzW5A7ip0YZ9aM/1sFpJKjXQBtYY8IjpFXU/U5H_ycp2h.js";import*as sharedStyle2 from"https://framerusercontent.com/modules/Ws28TBXWvmagkiyejOEv/iXbbEImULeqnwyqNhbnL/uOCvH9w3P.js";import*as sharedStyle1 from"https://framerusercontent.com/modules/pQz6hmBGHhY65NiZJyMr/81s5xtwkygVb4Dwkj8F7/YAP816Y5n.js";import metadataProvider from"https://framerusercontent.com/modules/FdSulMKxwiENRaeh22Lo/1OkLT6Bp3EpqQl9qsuWU/BHpR2zKdQ.js";const HeaderHeaderFonts=getFonts(HeaderHeader);const HeaderMobileMenuFonts=getFonts(HeaderMobileMenu);const HeaderMenuFeaturesFonts=getFonts(HeaderMenuFeatures);const HeaderMenuResourcesFonts=getFonts(HeaderMenuResources);const FoundationsPictogramsFonts=getFonts(FoundationsPictograms);const ComponentsTestimonialCarouselFonts=getFonts(ComponentsTestimonialCarousel);const SectionsCTAFonts=getFonts(SectionsCTA);const SectionsFooterFonts=getFonts(SectionsFooter);const cycleOrder=["wM9OtbINW","THKsg9y7L","gQm1qfN0Q","CokvDSSmY","MgvqthlSP","eTaUTQEHH"];const breakpoints={CokvDSSmY:"(min-width: 768px) and (max-width: 1023px)",eTaUTQEHH:"(max-width: 575px)",gQm1qfN0Q:"(min-width: 1024px) and (max-width: 1279px)",MgvqthlSP:"(min-width: 576px) and (max-width: 767px)",THKsg9y7L:"(min-width: 1280px) and (max-width: 1439px)",wM9OtbINW:"(min-width: 1440px)"};const isBrowser=()=>typeof document!=="undefined";const variantClassNames={CokvDSSmY:"framer-v-1mjs4lh",eTaUTQEHH:"framer-v-jzmaj1",gQm1qfN0Q:"framer-v-iuvvwq",MgvqthlSP:"framer-v-4z5n2e",THKsg9y7L:"framer-v-14bk9tf",wM9OtbINW:"framer-v-3ta0x6"};if(isBrowser()){removeHiddenBreakpointLayers("wM9OtbINW",breakpoints,variantClassNames);}const humanReadableVariantMap={"Extra extra large":"wM9OtbINW","Extra large":"THKsg9y7L","Extra small":"eTaUTQEHH",Large:"gQm1qfN0Q",Medium:"CokvDSSmY",Small:"MgvqthlSP"};const transitions={default:{duration:0}};function Overlay({children}){const[visible,setVisible]=useOverlayState();return children({hide:()=>setVisible(false),show:()=>setVisible(true),toggle:()=>setVisible(!visible),visible});}const transformTemplate=(_,t)=>`translateX(-50%) ${t}`;const transition1={damping:30,delay:0,mass:1,stiffness:400,type:"spring"};const animation={opacity:0,rotate:0,scale:1,transition:transition1,x:0,y:-24};const transformTemplate1=(_,t)=>`perspective(1200px) translateX(-50%) ${t}`;const animation1={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,transition:transition1,x:0,y:0};const animation2={opacity:0,rotate:0,scale:1,x:0,y:-24};const metadata=metadataProvider();const Component=/*#__PURE__*/ React.forwardRef(function({id,style,className,width,height,layoutId,variant:outerVariant="wM9OtbINW",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;React.useLayoutEffect(()=>{const metadata1=metadataProvider();document.title=metadata1.title||"";if(metadata1.viewport){var ref;(ref=document.querySelector('meta[name="viewport"]'))===null||ref===void 0?void 0:ref.setAttribute("content",metadata1.viewport);}if(metadata1.bodyClassName){Array.from(document.body.classList).filter(c=>c.startsWith("framer-body-")).map(c=>document.body.classList.remove(c));document.body.classList.add(metadata1.bodyClassName);}},[]);const[baseVariant,hydratedBaseVariant]=useHydratedBreakpointVariants(variant,breakpoints,false);const gestureVariant=undefined;const transition=transitions.default;const{activeVariantCallback,delay}=useActiveVariantCallback(undefined);const menu42m929=overlay=>activeVariantCallback(async(...args)=>{overlay.toggle();});const features42m929=overlay=>activeVariantCallback(async(...args)=>{overlay.toggle();});const resources42m929=overlay=>activeVariantCallback(async(...args)=>{overlay.toggle();});const closezn6atv=overlay=>activeVariantCallback(async(...args)=>{overlay.hide();});const isDisplayed=()=>{if(["CokvDSSmY","MgvqthlSP","eTaUTQEHH"].includes(baseVariant))return true;return!isBrowser();};const isDisplayed1=()=>{if(["CokvDSSmY","MgvqthlSP","eTaUTQEHH"].includes(baseVariant))return!isBrowser();return true;};const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(GeneratedComponentContext.Provider,{value:{primaryVariantId:"wM9OtbINW",variantClassNames},children:/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsxs(motion.div,{className:cx("framer-XR76u",sharedStyle.className,sharedStyle1.className,sharedStyle2.className,sharedStyle3.className,sharedStyle4.className),style:{display:"contents"},children:[/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-3ta0x6",className),ref:ref,style:{...style},children:[/*#__PURE__*/ _jsx(Overlay,{children:overlay1a9n2z1=>/*#__PURE__*/ _jsx(Overlay,{children:overlay1iadkhf=>/*#__PURE__*/ _jsx(Overlay,{children:overlay1vt3ll6=>/*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ _jsxs(Container,{className:"framer-1sxm1a4-container",layoutScroll:true,transformTemplate:transformTemplate,children:[/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{CokvDSSmY:{variant:"qCDlJ1iu_"},eTaUTQEHH:{variant:"noUBOz9rF"},MgvqthlSP:{variant:"qCDlJ1iu_"}},children:/*#__PURE__*/ _jsx(HeaderHeader,{features:features42m929(overlay1iadkhf),height:"100%",id:"K3G2uhlNd",layoutId:"K3G2uhlNd",menu:menu42m929(overlay1vt3ll6),resources:resources42m929(overlay1a9n2z1),style:{width:"100%"},variant:"w9m5Z3Sla",width:"100%"})}),/*#__PURE__*/ _jsx(AnimatePresence,{children:overlay1vt3ll6.visible&&/*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ ReactDOM.createPortal(/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsx(motion.div,{animate:{opacity:1,transition:{delay:0,duration:0,ease:[.5,0,.88,.77],type:"tween"}},className:"framer-1vt3ll6",exit:{opacity:0,transition:{delay:0,duration:0,ease:[.12,.23,.5,1],type:"tween"}},initial:{opacity:0},onTap:()=>overlay1vt3ll6.hide()},"Yio8WtRxG"),isDisplayed()&&/*#__PURE__*/ _jsx(Container,{className:"framer-6qrpc4-container hidden-3ta0x6 hidden-14bk9tf hidden-iuvvwq",children:/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{eTaUTQEHH:{variant:"K_94JfU6l"}},children:/*#__PURE__*/ _jsx(HeaderMobileMenu,{close:closezn6atv(overlay1vt3ll6),height:"100%",id:"zcxPTxeLO",layoutId:"zcxPTxeLO",style:{height:"100%",width:"100%"},variant:"I5gBirnEK",width:"100%"})})})]}),document.querySelector("#overlay"))})}),/*#__PURE__*/ _jsx(AnimatePresence,{children:overlay1iadkhf.visible&&/*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ ReactDOM.createPortal(/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsx(motion.div,{animate:{opacity:1,transition:{delay:0,duration:.3,ease:[.5,0,.88,.77],type:"tween"}},className:"framer-1iadkhf",exit:{opacity:0,transition:{delay:0,duration:0,ease:[0,0,1,1],type:"tween"}},initial:{opacity:0},onTap:()=>overlay1iadkhf.hide()},"NNzYKQjSi"),isDisplayed1()&&/*#__PURE__*/ _jsx(Container,{animate:animation1,className:"framer-1a0y6wj-container hidden-1mjs4lh hidden-4z5n2e hidden-jzmaj1",exit:animation,initial:animation2,transformTemplate:transformTemplate1,children:/*#__PURE__*/ _jsx(HeaderMenuFeatures,{height:"100%",id:"A8asNG_AH",layoutId:"A8asNG_AH",variant:"TrB2YRHiL",width:"100%"})})]}),document.querySelector("#overlay"))})}),/*#__PURE__*/ _jsx(AnimatePresence,{children:overlay1a9n2z1.visible&&/*#__PURE__*/ _jsx(_Fragment,{children:/*#__PURE__*/ ReactDOM.createPortal(/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsx(motion.div,{animate:{opacity:1,transition:{delay:0,duration:0,ease:[.5,0,.88,.77],type:"tween"}},className:"framer-1a9n2z1",exit:{opacity:0,transition:{delay:0,duration:0,ease:[.12,.23,.5,1],type:"tween"}},initial:{opacity:0},onTap:()=>overlay1a9n2z1.hide()},"I808zSuGA"),isDisplayed1()&&/*#__PURE__*/ _jsx(Container,{animate:animation1,className:"framer-197gyla-container hidden-1mjs4lh hidden-4z5n2e hidden-jzmaj1",exit:animation,initial:animation2,transformTemplate:transformTemplate1,children:/*#__PURE__*/ _jsx(HeaderMenuResources,{height:"100%",id:"Yuu0ob5FK",layoutId:"Yuu0ob5FK",variant:"JRdSjMQ3i",width:"100%"})})]}),document.querySelector("#overlay"))})})]})})})})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-14vxl7q","data-framer-name":"Hero",name:"Hero",children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-13gbt7m","data-framer-name":"Title",name:"Title",children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-tgdpaa","data-framer-name":"Tab ",name:"Tab ",children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("h1",{className:"framer-styles-preset-uqa6f1","data-styles-preset":"U5H_ycp2h",children:"Contact"})}),className:"framer-idzdc9","data-framer-name":"Pricing",name:"Pricing",verticalAlignment:"top",withExternalLayout:true})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("h2",{className:"framer-styles-preset-3nqyhf","data-styles-preset":"YAP816Y5n",style:{"--framer-text-alignment":"center"},children:"Get in touch"})}),className:"framer-nkxc6m","data-framer-name":"Your home for hosting",name:"Your home for hosting",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center"},children:"If you have any questions about features, trials, pricing, or need a walkthrough, our team is ready to answer them all."})}),className:"framer-149btq1","data-framer-name":"Your home for hosting",name:"Your home for hosting",verticalAlignment:"top",withExternalLayout:true})]})}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-qyhb0","data-framer-name":"Section",name:"Section",children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-172ai18","data-framer-name":"Container",name:"Container",children:[/*#__PURE__*/ _jsx(Container,{className:"framer-tqqxxc-container",children:/*#__PURE__*/ _jsx(FoundationsPictograms,{height:"100%",id:"YnRVrIKk_",layoutId:"YnRVrIKk_",style:{height:"100%",width:"100%"},type:"CqdDTnSo_",variant:"KmxUh4Gl6",width:"100%"})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("h2",{className:"framer-styles-preset-1wml6uu","data-styles-preset":"fVxnimdqP",style:{"--framer-text-alignment":"center"},children:"Instant advice"})}),className:"framer-1jgqheo",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsxs("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center"},children:["You can find answers to common questions in our ",/*#__PURE__*/ _jsx(Link,{href:"https://travelnest.freshdesk.com/support/home",openInNewTab:true,smoothScroll:false,children:/*#__PURE__*/ _jsx("a",{className:"framer-styles-preset-1wicq5s","data-styles-preset":"ro7OPezbn",children:"Guides"})})," and ",/*#__PURE__*/ _jsx(Link,{href:{webPageId:"JHgvFAhEt"},openInNewTab:false,smoothScroll:false,children:/*#__PURE__*/ _jsx("a",{className:"framer-styles-preset-1wicq5s","data-styles-preset":"ro7OPezbn",children:"FAQs"})}),"."]})}),className:"framer-1s9bxrn",verticalAlignment:"top",withExternalLayout:true})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-7r945t","data-framer-name":"Container",name:"Container",children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-a463bx",children:[/*#__PURE__*/ _jsx(Container,{className:"framer-1iadcd5-container",children:/*#__PURE__*/ _jsx(FoundationsPictograms,{height:"100%",id:"HMeXvukcE",layoutId:"HMeXvukcE",style:{height:"100%",width:"100%"},type:"EJVPMQ5lO",variant:"KmxUh4Gl6",width:"100%"})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("h2",{className:"framer-styles-preset-1wml6uu","data-styles-preset":"fVxnimdqP",style:{"--framer-text-alignment":"center"},children:"Customer service & technical support"})}),className:"framer-1n26egl",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center"},children:"Our knowledgeable team is available to help with any questions you may have."})}),className:"framer-1ldxvpf",verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{eTaUTQEHH:{children:/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsxs("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center","--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:[/*#__PURE__*/ _jsx("strong",{children:"Phone"})," ",/*#__PURE__*/ _jsx(Link,{href:"tel:+443336666111",openInNewTab:false,smoothScroll:false,children:/*#__PURE__*/ _jsx("a",{className:"framer-styles-preset-1wicq5s","data-styles-preset":"ro7OPezbn",children:"+44 (0)333 666 6111"})})]}),/*#__PURE__*/ _jsx("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center","--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:/*#__PURE__*/ _jsx("strong",{children:"Opening hours"})}),/*#__PURE__*/ _jsxs("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center"},children:[/*#__PURE__*/ _jsxs("span",{style:{"--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:["Monday to Friday: ",/*#__PURE__*/ _jsx("br",{}),"09:30 - 20:00 (GMT/BST)"]}),/*#__PURE__*/ _jsx("br",{}),/*#__PURE__*/ _jsxs("span",{style:{"--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:["Saturday: ",/*#__PURE__*/ _jsx("br",{}),"09:00 - 17:00 (GMT/BST)"]})]})]})}},children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsxs("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center","--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:[/*#__PURE__*/ _jsx("strong",{children:"Phone"})," ",/*#__PURE__*/ _jsx(Link,{href:"tel:+443336666111",openInNewTab:false,smoothScroll:false,children:/*#__PURE__*/ _jsx("a",{className:"framer-styles-preset-1wicq5s","data-styles-preset":"ro7OPezbn",children:"+44 (0)333 666 6111"})})]}),/*#__PURE__*/ _jsx("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center","--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:/*#__PURE__*/ _jsx("strong",{children:"Opening hours"})}),/*#__PURE__*/ _jsxs("p",{className:"framer-styles-preset-6j34yh","data-styles-preset":"uOCvH9w3P",style:{"--framer-text-alignment":"center"},children:[/*#__PURE__*/ _jsx("span",{style:{"--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:"Monday to Friday: 09:30 - 20:00 (GMT/BST)"}),/*#__PURE__*/ _jsx("br",{}),/*#__PURE__*/ _jsx("span",{style:{"--framer-text-color":"var(--token-e7582057-9246-4fef-a4a6-461f0bc5fbd1, rgb(17, 35, 58))"},children:"Saturday: 09:00 - 17:00 (GMT/BST)"})]})]}),className:"framer-15e1tqe",verticalAlignment:"top",withExternalLayout:true})})]})})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1t1dp91","data-framer-name":"Section",name:"Section",children:/*#__PURE__*/ _jsx(motion.div,{className:"framer-16hacdr","data-framer-name":"Container",name:"Container",children:/*#__PURE__*/ _jsx(Container,{className:"framer-ext5n3-container",children:/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{eTaUTQEHH:{style:{height:"100%",width:"100%"}}},children:/*#__PURE__*/ _jsx(ComponentsTestimonialCarousel,{height:"100%",id:"GZKP1iDVc",layoutId:"GZKP1iDVc",style:{width:"100%"},width:"100%"})})})})}),/*#__PURE__*/ _jsx(Container,{className:"framer-wquiad-container",children:/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{eTaUTQEHH:{variant:"JBIpLqj7K"}},children:/*#__PURE__*/ _jsx(SectionsCTA,{height:"100%",id:"HIAbjBHdU",layoutId:"HIAbjBHdU",style:{width:"100%"},variant:"v7PrRTrSc",width:"100%"})})}),/*#__PURE__*/ _jsx(Container,{className:"framer-1g6ciz6-container",children:/*#__PURE__*/ _jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{CokvDSSmY:{variant:"dU_obj9gj"},eTaUTQEHH:{variant:"sJMwunb6y"},MgvqthlSP:{variant:"sJMwunb6y"}},children:/*#__PURE__*/ _jsx(SectionsFooter,{height:"100%",id:"aX4fbaG19",layoutId:"aX4fbaG19",style:{width:"100%"},variant:"fJBRuuAr5",width:"100%"})})})]}),/*#__PURE__*/ _jsx("div",{id:"overlay"})]})})});});const css=['.framer-XR76u [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",`.${metadata.bodyClassName} { background: white; }`,".framer-XR76u .framer-mlq4i8 { display: block; }",".framer-XR76u .framer-3ta0x6 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1440px; }",".framer-XR76u .framer-1sxm1a4-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 9; }",".framer-XR76u .framer-1vt3ll6, .framer-XR76u .framer-1iadkhf, .framer-XR76u .framer-1a9n2z1 { inset: 0px; position: fixed; user-select: none; z-index: 10; }",".framer-XR76u .framer-6qrpc4-container { bottom: 0px; flex: none; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }",".framer-XR76u .framer-1a0y6wj-container { flex: none; height: auto; left: 45%; position: fixed; top: 84px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 10; }",".framer-XR76u .framer-197gyla-container { flex: none; height: auto; left: 50%; position: fixed; top: 84px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 10; }",".framer-XR76u .framer-14vxl7q { align-content: center; align-items: center; background: radial-gradient(72.22610448644689% 89.3% at 50.000003016178% 100.00000449899056%, rgba(0, 144, 255, 0.17) 0%, rgba(0, 148, 255, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 500px; overflow: hidden; padding: 128px 64px 64px 64px; position: relative; width: 100%; }",".framer-XR76u .framer-13gbt7m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-XR76u .framer-tgdpaa { align-content: center; align-items: center; background-color: var(--token-634e2ac3-0ea4-47e8-9806-5cee3edb53b3, rgba(0, 144, 255, 0.13)); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 44px; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: min-content; }",".framer-XR76u .framer-idzdc9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-XR76u .framer-nkxc6m, .framer-XR76u .framer-149btq1, .framer-XR76u .framer-1s9bxrn, .framer-XR76u .framer-15e1tqe { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-XR76u .framer-qyhb0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 64px 64px 64px 64px; position: relative; width: 100%; }",".framer-XR76u .framer-172ai18 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 960px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-XR76u .framer-tqqxxc-container, .framer-XR76u .framer-1iadcd5-container { flex: none; height: 80px; position: relative; width: 80px; }",".framer-XR76u .framer-1jgqheo, .framer-XR76u .framer-1n26egl, .framer-XR76u .framer-1ldxvpf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-XR76u .framer-7r945t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",".framer-XR76u .framer-a463bx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 960px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",".framer-XR76u .framer-1t1dp91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 64px 64px 64px; position: relative; width: 100%; }",".framer-XR76u .framer-16hacdr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1140px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",".framer-XR76u .framer-ext5n3-container, .framer-XR76u .framer-wquiad-container, .framer-XR76u .framer-1g6ciz6-container { flex: none; height: auto; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-XR76u .framer-3ta0x6, .framer-XR76u .framer-14vxl7q, .framer-XR76u .framer-13gbt7m, .framer-XR76u .framer-tgdpaa, .framer-XR76u .framer-qyhb0, .framer-XR76u .framer-172ai18, .framer-XR76u .framer-7r945t, .framer-XR76u .framer-a463bx, .framer-XR76u .framer-1t1dp91, .framer-XR76u .framer-16hacdr { gap: 0px; } .framer-XR76u .framer-3ta0x6 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-XR76u .framer-3ta0x6 > :first-child, .framer-XR76u .framer-14vxl7q > :first-child, .framer-XR76u .framer-13gbt7m > :first-child, .framer-XR76u .framer-qyhb0 > :first-child, .framer-XR76u .framer-172ai18 > :first-child, .framer-XR76u .framer-a463bx > :first-child, .framer-XR76u .framer-16hacdr > :first-child { margin-top: 0px; } .framer-XR76u .framer-3ta0x6 > :last-child, .framer-XR76u .framer-14vxl7q > :last-child, .framer-XR76u .framer-13gbt7m > :last-child, .framer-XR76u .framer-qyhb0 > :last-child, .framer-XR76u .framer-172ai18 > :last-child, .framer-XR76u .framer-a463bx > :last-child, .framer-XR76u .framer-16hacdr > :last-child { margin-bottom: 0px; } .framer-XR76u .framer-14vxl7q > *, .framer-XR76u .framer-16hacdr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-XR76u .framer-13gbt7m > *, .framer-XR76u .framer-172ai18 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-XR76u .framer-tgdpaa > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-XR76u .framer-tgdpaa > :first-child, .framer-XR76u .framer-7r945t > :first-child, .framer-XR76u .framer-1t1dp91 > :first-child { margin-left: 0px; } .framer-XR76u .framer-tgdpaa > :last-child, .framer-XR76u .framer-7r945t > :last-child, .framer-XR76u .framer-1t1dp91 > :last-child { margin-right: 0px; } .framer-XR76u .framer-qyhb0 > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-XR76u .framer-7r945t > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-XR76u .framer-a463bx > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-XR76u .framer-1t1dp91 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }","@media (min-width: 1440px) { .framer-XR76u .hidden-3ta0x6 { display: none !important; } }",`@media (min-width: 1280px) and (max-width: 1439px) { .framer-XR76u .hidden-14bk9tf { display: none !important; } .${metadata.bodyClassName} { background: white; } .framer-XR76u .framer-3ta0x6 { width: 1280px; } .framer-XR76u .framer-14vxl7q { background: radial-gradient(72.22610448644689% 89.3% at 50.000003016178% 100.00000449899056%, var(--token-f6e31e2e-e978-4cff-a8b3-d97fd1ef17e0, rgba(0, 144, 255, 0.17)) /* {"name":"Blue radial"} */ 0%, rgba(0, 148, 255, 0) 100%); } .framer-XR76u .framer-172ai18, .framer-XR76u .framer-7r945t { max-width: 1140px; } .framer-XR76u .framer-16hacdr { max-width: 960px; }}`,`@media (min-width: 1024px) and (max-width: 1279px) { .framer-XR76u .hidden-iuvvwq { display: none !important; } .${metadata.bodyClassName} { background: white; } .framer-XR76u .framer-3ta0x6 { width: 1024px; } .framer-XR76u .framer-16hacdr { max-width: 768px; }}`,`@media (min-width: 768px) and (max-width: 1023px) { .framer-XR76u .hidden-1mjs4lh { display: none !important; } .${metadata.bodyClassName} { background: white; } .framer-XR76u .framer-3ta0x6 { width: 768px; } .framer-XR76u .framer-a463bx { gap: 24px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-XR76u .framer-a463bx { gap: 0px; } .framer-XR76u .framer-a463bx > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-XR76u .framer-a463bx > :first-child { margin-top: 0px; } .framer-XR76u .framer-a463bx > :last-child { margin-bottom: 0px; } }}`,`@media (min-width: 576px) and (max-width: 767px) { .framer-XR76u .hidden-4z5n2e { display: none !important; } .${metadata.bodyClassName} { background: white; } .framer-XR76u .framer-3ta0x6 { width: 576px; } .framer-XR76u .framer-14vxl7q { padding: 128px 32px 64px 32px; } .framer-XR76u .framer-qyhb0 { gap: 48px; padding: 64px 32px 64px 32px; } .framer-XR76u .framer-7r945t { flex-direction: column; gap: 32px; } .framer-XR76u .framer-a463bx { flex: none; gap: 24px; width: 100%; } .framer-XR76u .framer-1t1dp91 { align-content: flex-start; align-items: flex-start; height: 513px; padding: 64px 32px 64px 32px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-XR76u .framer-qyhb0, .framer-XR76u .framer-7r945t, .framer-XR76u .framer-a463bx { gap: 0px; } .framer-XR76u .framer-qyhb0 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-XR76u .framer-qyhb0 > :first-child, .framer-XR76u .framer-7r945t > :first-child, .framer-XR76u .framer-a463bx > :first-child { margin-top: 0px; } .framer-XR76u .framer-qyhb0 > :last-child, .framer-XR76u .framer-7r945t > :last-child, .framer-XR76u .framer-a463bx > :last-child { margin-bottom: 0px; } .framer-XR76u .framer-7r945t > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-XR76u .framer-a463bx > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }}`,`@media (max-width: 575px) { .framer-XR76u .hidden-jzmaj1 { display: none !important; } .${metadata.bodyClassName} { background: white; } .framer-XR76u .framer-3ta0x6 { width: 390px; } .framer-XR76u .framer-14vxl7q { padding: 96px 24px 48px 24px; } .framer-XR76u .framer-13gbt7m, .framer-XR76u .framer-172ai18 { gap: 16px; } .framer-XR76u .framer-qyhb0 { gap: 32px; padding: 48px 24px 48px 24px; } .framer-XR76u .framer-7r945t { flex-direction: column; gap: 24px; } .framer-XR76u .framer-a463bx { flex: none; gap: 16px; width: 100%; } .framer-XR76u .framer-1t1dp91 { padding: 48px 24px 48px 24px; } .framer-XR76u .framer-ext5n3-container { height: 506px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-XR76u .framer-13gbt7m, .framer-XR76u .framer-qyhb0, .framer-XR76u .framer-172ai18, .framer-XR76u .framer-7r945t, .framer-XR76u .framer-a463bx { gap: 0px; } .framer-XR76u .framer-13gbt7m > *, .framer-XR76u .framer-172ai18 > *, .framer-XR76u .framer-a463bx > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-XR76u .framer-13gbt7m > :first-child, .framer-XR76u .framer-qyhb0 > :first-child, .framer-XR76u .framer-172ai18 > :first-child, .framer-XR76u .framer-7r945t > :first-child, .framer-XR76u .framer-a463bx > :first-child { margin-top: 0px; } .framer-XR76u .framer-13gbt7m > :last-child, .framer-XR76u .framer-qyhb0 > :last-child, .framer-XR76u .framer-172ai18 > :last-child, .framer-XR76u .framer-7r945t > :last-child, .framer-XR76u .framer-a463bx > :last-child { margin-bottom: 0px; } .framer-XR76u .framer-qyhb0 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-XR76u .framer-7r945t > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }}`,...sharedStyle.css,...sharedStyle1.css,...sharedStyle2.css,...sharedStyle3.css,...sharedStyle4.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 2628
 * @framerIntrinsicWidth 1440
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"THKsg9y7L":{"layout":["fixed","auto"]},"gQm1qfN0Q":{"layout":["fixed","auto"]},"CokvDSSmY":{"layout":["fixed","auto"]},"MgvqthlSP":{"layout":["fixed","auto"]},"eTaUTQEHH":{"layout":["fixed","auto"]}}}
 * @framerResponsiveScreen
 */ const FramerBHpR2zKdQ=withCSS(Component,css,"framer-XR76u");export default FramerBHpR2zKdQ;FramerBHpR2zKdQ.displayName="Contact";FramerBHpR2zKdQ.defaultProps={height:2628,width:1440};addFonts(FramerBHpR2zKdQ,[...HeaderHeaderFonts,...HeaderMobileMenuFonts,...HeaderMenuFeaturesFonts,...HeaderMenuResourcesFonts,...FoundationsPictogramsFonts,...ComponentsTestimonialCarouselFonts,...SectionsCTAFonts,...SectionsFooterFonts,...sharedStyle.fonts,...sharedStyle1.fonts,...sharedStyle2.fonts,...sharedStyle3.fonts,...sharedStyle4.fonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerBHpR2zKdQ","slots":[],"annotations":{"framerIntrinsicHeight":"2628","framerIntrinsicWidth":"1440","framerResponsiveScreen":"","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]},\"THKsg9y7L\":{\"layout\":[\"fixed\",\"auto\"]},\"gQm1qfN0Q\":{\"layout\":[\"fixed\",\"auto\"]},\"CokvDSSmY\":{\"layout\":[\"fixed\",\"auto\"]},\"MgvqthlSP\":{\"layout\":[\"fixed\",\"auto\"]},\"eTaUTQEHH\":{\"layout\":[\"fixed\",\"auto\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}