!function(e){var t={};function a(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=11)}({11:function(e,t,a){e.exports=a("ADpY")},ADpY:function(module,exports){!function(){tinymce.create("tinymce.plugins.glossary",{init:function init(ed,url){var glossaryTermValues=jQuery.parseJSON(PB_GlossaryToken.listbox_values);function termValue(e){for(var t in glossaryTermValues)if(glossaryTermValues.hasOwnProperty(t)&&glossaryTermValues[t].text.toLowerCase().trim()===e.toLowerCase().trim())return glossaryTermValues[t].value;return""}function termName(e){for(var t in glossaryTermValues)if(glossaryTermValues.hasOwnProperty(t)&&glossaryTermValues[t].value===e)return glossaryTermValues[t].text;return""}ed.addButton("glossary",{title:PB_GlossaryToken.glossary_button_title,text:"GL",icon:!1,onclick:function onclick(){var mySelection=ed.selection.getContent(),listValue=termValue(mySelection),termExistsMessage="",termExists=""!==listValue,termAutofillValue=termExists?"":mySelection,myActiveTab=void 0;if(listValue)myActiveTab=1;else if(myActiveTab=0,mySelection){var templateString1=mySelection.trim();termExistsMessage=eval("`"+PB_GlossaryToken.not_found.replace(/`/g,"")+"`")}var myWindow=tinymce.activeEditor.windowManager.open({title:PB_GlossaryToken.window_title,bodyType:"tabpanel",body:[{title:PB_GlossaryToken.tab0_title,type:"form",items:[{type:"container",name:"container",html:termExistsMessage},{name:"title",type:"textbox",label:PB_GlossaryToken.term_title,value:termAutofillValue},{name:"body",type:"textbox",label:PB_GlossaryToken.description,multiline:!0,minHeight:100}]},{title:PB_GlossaryToken.tab1_title,type:"form",items:[{type:"listbox",name:"term",label:PB_GlossaryToken.select_a_term,values:glossaryTermValues,value:listValue}]}],buttons:[{text:PB_GlossaryToken.cancel,onclick:"close"},{text:PB_GlossaryToken.insert,subtype:"primary",onclick:"submit"}],onsubmit:function(e){if("t0"===this.find("tabpanel")[0].activeTabId){if(!e.data.title||0===e.data.title.length)return alert(PB_GlossaryToken.term_is_empty),!1;if(termValue(e.data.title))return alert(PB_GlossaryToken.term_already_exists),!1;wp.api.loadPromise.done(function(){var t=new wp.api.models.Glossary({title:e.data.title,content:e.data.body,status:"publish"});t.save().done(function(){mySelection?ed.selection.setContent('[pb_glossary id="'+t.id+'"]'+mySelection+"[/pb_glossary]"):ed.selection.setContent('[pb_glossary id="'+t.id+'"]'+e.data.title+"[/pb_glossary]"),glossaryTermValues.push({text:e.data.title,value:t.id})})})}else{if(!e.data.term||0===e.data.term.length)return alert(PB_GlossaryToken.term_not_selected),!1;mySelection?ed.selection.setContent('[pb_glossary id="'+e.data.term+'"]'+mySelection+"[/pb_glossary]"):ed.selection.setContent('[pb_glossary id="'+e.data.term+'"]'+termName(e.data.term)+"[/pb_glossary]")}}});myWindow.find("tabpanel")[0].activateTab(myActiveTab)}})},createControl:function(e,t){return null}}),tinymce.PluginManager.add("glossary",tinymce.plugins.glossary)}()}});