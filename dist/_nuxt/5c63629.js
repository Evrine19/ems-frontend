(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{253:function(t,e,o){"use strict";var n={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),o("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.inputKeyUp}}),t._v(" "),"outline"!==t.mode?o("span",{staticClass:"sc-input-bar"}):t._e(),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);e.a=component.exports},287:function(t,e,o){var content=o(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("39d3a0ba",content,!0,{sourceMap:!1})},288:function(t,e,o){var content=o(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("778233c6",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("33905c48",content,!0,{sourceMap:!1})},334:function(t,e,o){"use strict";o(287)},335:function(t,e,o){var n=o(8)(!1);n.push([t.i,'.scutum-vgt thead th.sorting{position:relative;padding-right:32px;background:rgba(0,0,0,.08)}.scutum-vgt thead th.sorting:after{content:"";position:absolute;right:6px;top:50%;margin-top:-15px;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem}.scutum-vgt thead th.sorting.sorting-asc:after{content:"\\f143"}.scutum-vgt thead th.sorting.sorting-desc:after{content:"\\f140"}.scutum-vgt th.line-numbers{padding-top:12px;padding-bottom:12px}.scutum-vgt th.line-numbers,.scutum-vgt th.vgt-checkbox-col{width:1%;white-space:nowrap}.vgt-wrap__footer{border:none;background:none;padding:16px 12px}@media (max-width:959px){.vgt-wrap__footer{padding:16px 0 0}}.vgt-wrap__footer .footer__row-count__select{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation,.vgt-wrap__footer .footer__row-count{float:none!important}}.vgt-wrap__footer .footer__navigation{display:flex;align-items:center;margin-top:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation{margin-top:16px;justify-content:center}.vgt-wrap__footer .footer__navigation .footer__navigation__page-btn{margin:0}.vgt-wrap__footer .footer__navigation .footer__navigation__info{display:block;margin:0 8px}}.vgt-wrap__footer .footer__navigation__page-info__current-entry{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:2px}.vgt-wrap__footer .footer__navigation__page-btn{display:inline-flex}.vgt-wrap__footer .footer__navigation__page-btn .disabled,.vgt-wrap__footer .footer__navigation__page-btn .disabled:hover{color:rgba(0,0,0,.87)}.vgt-wrap__footer .footer__navigation__page-btn .chevron{width:20px;height:20px;border-radius:0;margin:0}.vgt-wrap__footer .footer__navigation__page-btn .chevron:after{content:"";position:absolute;top:-5px;left:0;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem;border:none!important;margin:0!important}.vgt-wrap__footer .footer__navigation__page-btn .chevron.left:after{content:"\\f141"}.vgt-wrap__footer .footer__navigation__page-btn .chevron.right:after{content:"\\f142"}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{color:rgba(0,0,0,.4)}.vgt-global-search{background:none;border:none;padding:0 0 12px}.vgt-global-search__input:before{position:absolute;left:0;top:50%;margin-top:-16px;font-family:"Material Design Icons";font-size:24px;font-size:1.5rem;content:"\\f349";color:rgba(0,0,0,.54)}.vgt-global-search__actions,.vgt-global-search__input .input__icon{display:none}.vgt-selection-info-row{background:transparent;border:none;padding:12px 16px;color:rgba(0,0,0,.87)}.vgt-selection-info-row a{color:#0277bd;position:relative;padding-left:20px}.vgt-selection-info-row a:before{position:absolute;left:0;top:-3px;font-family:"Material Design Icons";font-size:18px;font-size:1.125rem;content:"\\f5ad"}',""]),t.exports=n},336:function(t,e,o){"use strict";o(288)},337:function(t,e,o){var n=o(8)(!1);n.push([t.i,"@-webkit-keyframes animate-stripes-data-v-533a3882{0%{background-position:0 0}to{background-position:60px 0}}@keyframes animate-stripes-data-v-533a3882{0%{background-position:0 0}to{background-position:60px 0}}",""]),t.exports=n},338:function(t,e,o){"use strict";o(289)},339:function(t,e,o){var n=o(8)(!1);n.push([t.i,'.scutum-vgt thead th.sorting{position:relative;padding-right:32px;background:rgba(0,0,0,.08)}.scutum-vgt thead th.sorting:after{content:"";position:absolute;right:6px;top:50%;margin-top:-15px;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem}.scutum-vgt thead th.sorting.sorting-asc:after{content:"\\f143"}.scutum-vgt thead th.sorting.sorting-desc:after{content:"\\f140"}.scutum-vgt th.line-numbers{padding-top:12px;padding-bottom:12px}.scutum-vgt th.line-numbers,.scutum-vgt th.vgt-checkbox-col{width:1%;white-space:nowrap}.vgt-wrap__footer{border:none;background:none;padding:16px 12px}@media (max-width:959px){.vgt-wrap__footer{padding:16px 0 0}}.vgt-wrap__footer .footer__row-count__select{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation,.vgt-wrap__footer .footer__row-count{float:none!important}}.vgt-wrap__footer .footer__navigation{display:flex;align-items:center;margin-top:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation{margin-top:16px;justify-content:center}.vgt-wrap__footer .footer__navigation .footer__navigation__page-btn{margin:0}.vgt-wrap__footer .footer__navigation .footer__navigation__info{display:block;margin:0 8px}}.vgt-wrap__footer .footer__navigation__page-info__current-entry{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:2px}.vgt-wrap__footer .footer__navigation__page-btn{display:inline-flex}.vgt-wrap__footer .footer__navigation__page-btn .disabled,.vgt-wrap__footer .footer__navigation__page-btn .disabled:hover{color:rgba(0,0,0,.87)}.vgt-wrap__footer .footer__navigation__page-btn .chevron{width:20px;height:20px;border-radius:0;margin:0}.vgt-wrap__footer .footer__navigation__page-btn .chevron:after{content:"";position:absolute;top:-5px;left:0;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem;border:none!important;margin:0!important}.vgt-wrap__footer .footer__navigation__page-btn .chevron.left:after{content:"\\f141"}.vgt-wrap__footer .footer__navigation__page-btn .chevron.right:after{content:"\\f142"}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{color:rgba(0,0,0,.4)}.vgt-global-search{background:none;border:none;padding:0 0 12px}.vgt-global-search__input:before{position:absolute;left:0;top:50%;margin-top:-16px;font-family:"Material Design Icons";font-size:24px;font-size:1.5rem;content:"\\f349";color:rgba(0,0,0,.54)}.vgt-global-search__actions,.vgt-global-search__input .input__icon{display:none}.vgt-selection-info-row{background:transparent;border:none;padding:12px 16px;color:rgba(0,0,0,.87)}.vgt-selection-info-row a{color:#0277bd;position:relative;padding-left:20px}.vgt-selection-info-row a:before{position:absolute;left:0;top:-3px;font-family:"Material Design Icons";font-size:18px;font-size:1.125rem;content:"\\f5ad"}',""]),t.exports=n},368:function(t,e,o){"use strict";o.r(e);o(254);var n=o(256),r={name:"EmploymentTypesForm",components:{ScInput:o(253).a},props:{buttonText:{type:String,required:!0},submitForm:{type:Function,required:!0},getRecord:{type:Function,required:!1,default:null},hasSubmitButton:{type:Boolean,default:!1}},data:function(){return{employment_details:{employment_type:"",working_hours:""}}},head:function(){return{title:"Employee | Departments"}},methods:{}},l=(o(334),o(336),o(2)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",[o("div",{attrs:{"data-uk-grid":""}},[o("div",{staticClass:"uk-width-1-1"},[o("label",{staticClass:"uk-form-label"},[t._v("\n\t\t\t\t\tEmployment Type\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"uk-form-controls"},[o("ScInput",{attrs:{name:"employment_type",mode:"outline","error-state":!1},model:{value:t.employment_details.employment_type,callback:function(e){t.$set(t.employment_details,"employment_type",e)},expression:"employment_details.employment_type"}})],1)]),t._v(" "),o("div",{staticClass:"uk-width-1-1"},[o("label",{staticClass:"uk-form-label"},[t._v("\n\t\t\t\t\tWorking Hours\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"uk-form-controls"},[o("ScInput",{attrs:{name:"working_hours",mode:"outline","error-state":!1},model:{value:t.employment_details.working_hours,callback:function(e){t.$set(t.employment_details,"working_hours",e)},expression:"employment_details.working_hours"}})],1)])])]),t._v(" "),t.hasSubmitButton?o("div",{staticClass:"uk-modal-footer uk-text-right"},[o("button",{staticClass:"sc-button sc-button-primary",attrs:{"data-uk-tooltip":"Save"},on:{click:function(e){return e.preventDefault(),t.submitForm(t.gender_details)}}},[t._v("\n\t\t\t"+t._s(t.buttonText)+"\n\t\t")])]):t._e()])}),[],!1,null,"533a3882",null).exports,_={components:{VueGoodTable:n.a,EmploymentTypesForm:c},layout:"employee",data:function(){return{EmploymentTypes:[]}},head:function(){return{title:"Employee | EmploymentTypes"}},computed:{columns:function(){return[{label:"#",field:"employment_type_id"},{label:"Employment Type",field:"employment_type"},{label:"Working Hours",field:"working_hours"},{label:"Action",field:"action"}]}},mounted:function(){this.getGenders()},methods:{getGenders:function(){},addType:function(){}}},d=(o(338),Object(l.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"sc-page-wrapper"}},[t._m(0),t._v(" "),o("div",{attrs:{id:"sc-page-content"}},[o("ScCard",[o("ScCardBody",[o("VueGoodTable",{attrs:{columns:t.columns,rows:t.EmploymentTypes,"pagination-options":{enabled:!0},"style-class":"uk-table uk-table-divider scutum-vgt"},scopedSlots:t._u([{key:"table-row",fn:function(e){return["employment_type_id"===e.column.field?o("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.index+1)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"employment_type"===e.column.field?o("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.employment_type)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"working_hours"===e.column.field?o("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.working_hours)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"action"===e.column.field?o("span",[o("button",{staticClass:"sc-button sc-button-mini md-bg-orange-400",attrs:{"data-uk-tooltip":"View"}},[o("fa",{staticClass:"md-color-white",attrs:{icon:["fas","eye"]}})],1),t._v(" "),o("button",{staticClass:"sc-button sc-button-mini md-bg-green-400",attrs:{"data-uk-tooltip":"Edit"}},[o("fa",{staticClass:"md-color-white",attrs:{icon:["fas","edit"]}})],1)]):t._e()]}}])})],1)],1),t._v(" "),o("div",{staticClass:"uk-flex-middle",attrs:{id:"modal-create","uk-modal":"bg-close:false"}},[o("div",{staticClass:"uk-modal-dialog uk-width-1-4@l uk-margin-auto uk-modal-body"},[o("button",{staticClass:"uk-modal-close-default",attrs:{"data-uk-close":""}}),t._v(" "),o("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\tCreate Employment Type\n\t\t\t\t")]),t._v(" "),o("client-only",[o("EmploymentTypesForm",{attrs:{"button-text":"Add","submit-form":t.addType,"has-submit-button":!0}})],1)],1)])],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sc-top-bar",attrs:{id:"sc-page-top-bar","data-uk-sticky":"offset:48; show-on-up: true; animation: uk-animation-slide-top-medium"}},[o("div",{staticClass:"sc-top-bar-content uk-flex uk-flex-1"},[o("h1",{staticClass:"sc-top-bar-title uk-flex-1"},[t._v("\n\t\t\t\tEmployment Types\n\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-actions uk-margin-right uk-margin-small-top"},[o("a",{staticClass:"sc-fab sc-fab-small sc-fab-text sc-fab-primary",attrs:{href:"javascript:void(0)","data-uk-toggle":"target:  #modal-create"}},[o("i",{staticClass:"mdi mdi-plus"}),t._v("Add Type\n\t\t\t")])])])}],!1,null,null,null));e.default=d.exports}}]);