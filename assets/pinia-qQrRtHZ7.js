import{n as r,r as l,q as p}from"./@vue-Dd7PfzIL.js";var u=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const f=Symbol();var s;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(s||(s={}));function _(){const t=r(!0),i=t.run(()=>l({}));let c=[],n=[];const a=p({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,n.forEach(o=>c.push(o)),n=[]},use(e){return!this._a&&!u?n.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:i});return a}export{_ as c};
