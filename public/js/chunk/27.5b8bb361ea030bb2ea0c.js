(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{563:function(t,s,e){"use strict";e.r(s);var r={props:["product","addToCartUrl","currency","productPageUrl","addToWishlist","removeFromWishlist","userWishlists"],data:function(){return{token:null}},mounted:function(){this.token=document.head.querySelector('meta[name="csrf-token"]').content},methods:{getWishlistUrl:function(){var t=this,s=this.userWishlists.find((function(s){return s.product_id===t.product.id}));return 0===this.userWishlists.length?this.addToWishlist:s?this.removeFromWishlist:this.addToWishlist},getWishlistLabel:function(){var t=this,s=this.userWishlists.find((function(s){return s.product_id===t.product.id}));return 0===this.userWishlists.length?"Add":s?"Remove":"Add"}}},i=e(13),o=Object(i.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a-card",{staticClass:"product-card",attrs:{hoverable:""}},[e("a",{attrs:{slot:"cover",href:t.productPageUrl},slot:"cover"},[e("img",{staticClass:"main-image",attrs:{alt:t.product.name,src:t.product.main_image_url}})]),t._v(" "),e("template",{staticClass:"ant-card-actions",slot:"actions"},[e("form",{attrs:{slot:"title",method:"post",action:t.addToCartUrl},slot:"title"},[e("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.token}}),t._v(" "),e("a-button",{attrs:{"html-type":"submit",type:"primary",icon:"shopping-cart"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"slug"},domProps:{value:t.product.slug}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"qty",value:"1"}})],1),t._v(" "),e("form",{attrs:{slot:"title",method:"post",action:t.getWishlistUrl()},slot:"title"},[e("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.token}}),t._v(" "),e("a-button",{attrs:{"html-type":"submit",type:"default",icon:"heart"}},[t._v("\n                "+t._s(t.getWishlistLabel())+"\n            ")]),t._v(" "),e("input",{attrs:{type:"hidden",name:"slug"},domProps:{value:t.product.slug}})],1)]),t._v(" "),e("a",{attrs:{href:t.productPageUrl}},[e("h3",[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"price"},[t._v("\n            "+t._s(t.currency)+t._s(parseFloat(t.product.price).toFixed(2))+"\n        ")])])],2)}),[],!1,null,null,null);s.default=o.exports}}]);