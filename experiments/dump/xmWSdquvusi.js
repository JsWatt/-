if (self.CavalryLogger) { CavalryLogger.start_js(["G0bdJ"]); }

__d('PageWebsiteLogger',['Banzai','Event'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j,k,l,m){c('Event').listen(j,'click',function(n){this.log({user_id:k,page_id:l,website_url:m});}.bind(this));},log:function i(j){c('Banzai').post('page_website_logger',j);}};f.exports=h;}),null);
__d('ExpandingCtaModern',['Animation','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=150,i=215,j=750,k={show:function l(m,n,o,p,q,r){var s=document.documentElement.clientHeight,t=false;c('Style').set(document.body,'margin-bottom',i+'px');var u=setInterval(v,1000);if(q)setTimeout(w,3000);window.onload=function(){if(!q&&window.pageYOffset<=j)x(m,'height',i+'px');};p.addEventListener('click',function(){if(!r){c('Style').set(o,'display','none');c('Style').set(m,'height','70%');c('Style').set(n,'display','block');c('Style').set(m,'background','none');x(m,'height',i+'px');}else x(m,'height','0px');clearInterval(u);});function v(){if(!t&&window.pageYOffset>j){w();clearInterval(u);}}function w(){if(!t){c('Style').set(n,'display','none');c('Style').set(o,'display','block');x(m,'height',s+'px');x(m,'background','rgba(0,0,0,0.5)');t=true;}}function x(y,z,aa){new (c('Animation'))(y).to(z,aa).duration(h).ease(c('Animation').ease.both).go();}}};f.exports=k;}),null);
__d('PagesPostsByOthersUnit',['DOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;function i(j,k){'use strict';this.$PagesPostsByOthersUnit1=j;this.$PagesPostsByOthersUnit2=k;h=this;}i.prototype.getRoot=function(){'use strict';return this.$PagesPostsByOthersUnit1;};i.prototype.insertPost=function(j){'use strict';var k=this.getRoot();c('DOM').prependContent(k,j);if(k.children.length>this.$PagesPostsByOthersUnit2)c('DOM').remove(k.lastChild);if(this.$PagesPostsByOthersUnit3){c('DOM').remove(this.$PagesPostsByOthersUnit3);this.$PagesPostsByOthersUnit3=null;}};i.insertPostIntoCurrentInstance=function(j){'use strict';this.getInstance().insertPost(j);};i.initPlaceholderElement=function(j){'use strict';this.getInstance().$PagesPostsByOthersUnit3=j;};i.getInstance=function(){'use strict';return h;};f.exports=i;}),null);
__d('PagesTimelineChaining',['csx','Arbiter','CSS','Event','ChatTabViewEvents','PageLikeConstants','Parent','Style','UIPagelet'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={_recentlyLikedPageIDs:{},_recentlyMessagedPageIDs:{},container:null,_subscriptions:[],_chatSubscriptions:[],init:function j(k,l){this.container=k;if(!this._showChainSuggestions(l.pageID)){this._subscriptions=[c('Arbiter').subscribe(c('PageLikeConstants').LIKED,this.onLike.bind(this,l.pageID))];if(l.enableLikeCheckup)this._subscriptions.push(c('Arbiter').subscribe(c('PageLikeConstants').UNLIKED,this.onUnlike.bind(this)));if(l.onMessageEnabled)this._chatSubscriptions.push(c('ChatTabViewEvents').subscribe('chat-send-to-page',this.onMessage.bind(this,l.pageID)));}},onLike:function j(k,l,m){if(m.profile_id===k&&m.target){this._recentlyLikedPageIDs[k]=true;this._showChainSuggestions(k);this._unsubscribe();}},onMessage:function j(k,l,m){if(m&&m.pageID===k){this._recentlyMessagedPageIDs[k]=true;this._showMessageSuggestions(k);this._unsubscribe();}},onUnlike:function j(k,l){c('UIPagelet').loadFromEndpoint('PagesLikeCheckupPagelet',this.container,{},{displayCallback:this.displayCallback.bind(this)});this._unsubscribe();},displayCallback:function j(k){if(k)k();var l=this.container.firstChild;if(l)c('Style').set(this.container,'height',l.offsetHeight+'px');},_showChainSuggestions:function j(k){if(!(k in this._recentlyLikedPageIDs))return false;c('UIPagelet').loadFromEndpoint('PagesTimelineChainingPagelet',this.container,{pageID:k},{displayCallback:this.displayCallback.bind(this)});return true;},_showMessageSuggestions:function j(k){if(!(k in this._recentlyMessagedPageIDs))return false;c('UIPagelet').loadFromEndpoint('PagesMessageChainingPagelet',this.container,{pageID:k},{displayCallback:this.displayCallback.bind(this)});return true;},dismissCallback:function j(k,l){c('CSS').hide(this.container);delete this._recentlyLikedPageIDs[l];this._unsubscribe();},attachDismissCallback:function j(k,l,m){c('Event').listen(k,'click',this.dismissCallback.bind(this,l,m));},_unsubscribe:function j(){if(this._subscriptions.length){this._subscriptions.forEach(function(k){return c('Arbiter').unsubscribe(k);});this._subscriptions=[];}if(this._chatSubscriptions.length){this._chatSubscriptions.forEach(function(k){return c('ChatTabViewEvents').unsubscribe(k);});this._chatSubscriptions=[];}}};f.exports=i;}),null);
__d('PagesTimelineSearchBar.react',['ix','cx','fbt','Arbiter','PagesEventObserver','PagesEventType','React','Image.react','XUIButton.react','XUITextInput.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.state={query:this.props.searchQuery,disabled:false},this.$PagesTimelineSearchBar1='',this.$PagesTimelineSearchBar3=function(event){if(!this.$PagesTimelineSearchBar1){this.setState({query:''});}else if(!this.state.disabled){this.setState({disabled:true,query:''});c('Arbiter').inform('PagesTimelineSearch/search',{query:''});c('PagesEventObserver').notify(c('PagesEventType').SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:''});}}.bind(this),this.$PagesTimelineSearchBar5=function(event){var t=event.target.value;if(t.length<=this.props.maxLength)this.setState({query:t});}.bind(this),this.$PagesTimelineSearchBar4=function(event){if(!this.state.disabled){this.setState({disabled:true});c('Arbiter').inform('PagesTimelineSearch/search',{query:this.state.query});c('PagesEventObserver').notify(c('PagesEventType').SEARCH_TIMELINE_POSTS,this.props.pageID,{searchTerm:this.state.query});}}.bind(this),this.$PagesTimelineSearchBar2=function(t,u){if(u.query===this.state.query){this.setState({disabled:false});this.$PagesTimelineSearchBar1=u.query;}}.bind(this),p;}n.prototype.componentWillMount=function(){c('Arbiter').subscribe('PagesTimelineSearch/searchDone',this.$PagesTimelineSearchBar2);};n.prototype.render=function(){var o=j._("Search for posts on this Page"),p=null;if(!this.state.disabled&&this.state.query)p=c('React').createElement(c('XUIButton.react'),{className:"_5wkw",image:c('React').createElement(c('Image.react'),{src:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/cross_16_bluegray-40.png")}),alt:j._("Clear"),onClick:this.$PagesTimelineSearchBar3});var q=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return c('React').createElement('div',{className:q},c('React').createElement(c('XUIButton.react'),{className:"_3fbq",image:c('React').createElement(c('Image.react'),{src:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/magnifying-glass_16_bluegray-40.png")}),alt:j._("Search"),disabled:this.state.disabled,onClick:this.$PagesTimelineSearchBar4}),c('React').createElement(c('XUITextInput.react'),{className:"_3fbp",onChange:this.$PagesTimelineSearchBar5,placeholder:o,value:this.state.query,onEnter:this.$PagesTimelineSearchBar4,disabled:this.state.disabled}),p);};n.propTypes={pageID:m.string.isRequired,searchQuery:m.string.isRequired,maxLength:m.number.isRequired};f.exports=n;}),null);
__d('PageLiveInsightsStore',['FluxReduceStore','PageLiveInsightsDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=10000;h=babelHelpers.inherits(k,c('FluxReduceStore'));i=h&&h.prototype;k.prototype.getInitialState=function(){return {fadingOut:false,hovering:false,idleTime:j,pageID:null,text:null};};k.prototype.reduce=function(l,m){var n=babelHelpers['extends']({},l);switch(m.type){case 'show_banner':return {fadingOut:false,hovering:false,idleTime:m.data.idle_time,pageID:m.data.page_id,text:m.data.text};case 'fade_out_banner':n.fadingOut=true;return n;case 'hover_banner':n.fadingOut=false;n.hovering=true;return n;case 'mouse_leave_banner':n.hovering=false;return n;}return {fadingOut:false,hovering:false,idleTime:j,pageID:null,text:null};};function k(){h.apply(this,arguments);}f.exports=new k(c('PageLiveInsightsDispatcher'));}),null);
__d('PageLiveInsightsBanner.react',['cx','Animation','DOMContainer.react','FluxContainer','PageLiveInsightsDispatcher','PageLiveInsightsStore','React','ReactDOM','Style','ViewportBounds'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=1500;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$PageLiveInsightsBanner1=null,this.$PageLiveInsightsBanner2=null,n;}l.getStores=function(){return [c('PageLiveInsightsStore')];};l.calculateState=function(m,n){return c('PageLiveInsightsStore').getState();};l.prototype.componentWillMount=function(){c('PageLiveInsightsDispatcher').explicitlyRegisterStore(c('PageLiveInsightsStore'));};l.prototype.componentWillUnmount=function(){if(this.$PageLiveInsightsBanner2){this.$PageLiveInsightsBanner2.stop();this.$PageLiveInsightsBanner2=null;}this.$PageLiveInsightsBanner3();};l.prototype.render=function(){if(!this.state.text)return null;var m=document.getElementById('pagelet_page_above_header');if(m&&m.offsetHeight>0)return null;if(!this.state.fadingOut&&!this.state.hovering)this.$PageLiveInsightsBanner4();this.$PageLiveInsightsBanner5();var n={top:(c('ViewportBounds').getTop()+20).toString()+'px'};return (c('React').createElement('div',{className:"_4p0v",onMouseEnter:function(){return this.$PageLiveInsightsBanner6();}.bind(this),onMouseLeave:function(){return this.$PageLiveInsightsBanner7();}.bind(this),ref:'banner',style:n},c('React').createElement(c('DOMContainer.react'),null,this.state.text)));};l.prototype.$PageLiveInsightsBanner4=function(){if(this.$PageLiveInsightsBanner1===null)this.$PageLiveInsightsBanner1=setTimeout(function(){c('PageLiveInsightsDispatcher').dispatch({type:'fade_out_banner',data:null});},this.state.idleTime);};l.prototype.$PageLiveInsightsBanner5=function(){if(this.state.fadingOut){this.$PageLiveInsightsBanner1=null;if(this.$PageLiveInsightsBanner2===null)this.$PageLiveInsightsBanner2=new (c('Animation'))(c('ReactDOM').findDOMNode(this.refs.banner)).from('opacity','1').to('opacity','0').duration(k).ondone(this.$PageLiveInsightsBanner3).go();}else if(!this.state.fadingOut&&this.$PageLiveInsightsBanner2){this.$PageLiveInsightsBanner2&&this.$PageLiveInsightsBanner2.stop();this.$PageLiveInsightsBanner2=null;c('Style').set(c('ReactDOM').findDOMNode(this.refs.banner),'opacity','1');}};l.prototype.$PageLiveInsightsBanner3=function(){c('PageLiveInsightsDispatcher').dispatch({type:'remove_banner',data:null});};l.prototype.$PageLiveInsightsBanner6=function(){if(this.$PageLiveInsightsBanner1!==null){clearTimeout(this.$PageLiveInsightsBanner1);this.$PageLiveInsightsBanner1=null;}c('PageLiveInsightsDispatcher').dispatch({type:'hover_banner',data:null});};l.prototype.$PageLiveInsightsBanner7=function(){c('PageLiveInsightsDispatcher').dispatch({type:'mouse_leave_banner',data:null});};f.exports=c('FluxContainer').create(l);}),null);
__d('PagesPostsSearch',['cx','Arbiter','CSS','DOM','LoadingIndicator.react','React','ReactDOM','Run','SubscriptionsHandler','UIPagelet'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=100,j={searchPosts:function k(l,m,n){this._pageID=l;this._postsContainer=m;this._searchResultsContainer=n;var o=new (c('SubscriptionsHandler'))();o.addSubscriptions(c('Arbiter').subscribe('PagesTimelineSearch/search',this._handleSearchBarAction.bind(this)));c('Run').onLeave(function(){return o.release();});},_handleSearchBarAction:function k(l,m){this._query=m.query;if(this._query!==''){this._handleSearch();}else this._handleClearField();setTimeout(function(){c('Arbiter').inform('PagesTimelineSearch/searchDone',{query:this._query});}.bind(this),i);},_handleSearch:function k(){c('CSS').hide(this._postsContainer);c('ReactDOM').render(c('React').createElement('div',{className:"_3x9t"},c('React').createElement(c('LoadingIndicator.react'),{color:'white',size:'large'})),this._searchResultsContainer);c('UIPagelet').loadFromEndpoint('PagePostsSearchResultsPagelet',this._searchResultsContainer,{page_id:this._pageID,search_query:this._query});},_handleClearField:function k(){c('DOM').setContent(this._searchResultsContainer,null);c('CSS').show(this._postsContainer);}};f.exports=j;}),null);
__d('TimelineCommentsLoader',['Event','CommentPrelude','CSS','DOM','Parent','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(){h.init=c('emptyFunction');c('Event').listen(document.body,'click',function(j){var k=c('Parent').byClass(j.getTarget(),'fbTimelineFeedbackCommentLoader');if(k){j.kill();c('CommentPrelude').click(k,false,'timeline_comments_loader');var l=c('Parent').byTag(k,'form'),m=c('DOM').scry(l,'li.uiUfiViewAll input');if(!m.length)m=c('DOM').scry(l,'li.fbUfiViewPrevious input');if(!m.length)m=c('DOM').scry(l,'a.UFIPagerLink');m[0].click();c('CSS').show(c('DOM').find(l,'li.uiUfiComments'));c('CSS').removeClass(k,'fbTimelineFeedbackCommentLoader');}});}};f.exports=h;}),null);
__d('MorePagerFetchOnScroll',['AsyncRequest','DOMQuery','Event','Style','Vector','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(j,k,l){'use strict';this._pager=j;this._offset=k||0;this._hasEventHandlers=false;if(l)this.setup();h[j.id]=this;}i.prototype.setup=function(){'use strict';this._scrollParent=c('Style').getScrollParent(this._pager);this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this));if(!this.check()){this._scrollListener=c('Event').listen(this._scrollParent,'scroll',c('throttle')(function(){this.check();}.bind(this),50));this._clickListener=c('Event').listen(this._scrollParent,'click',c('throttle')(function(){this.check();}.bind(this),50));this._hasEventHandlers=true;}};i.prototype.check=function(){'use strict';if(!c('DOMQuery').contains(document.body,this._pager)){this.removeEventListeners();return true;}var j=c('Vector').getElementPosition(this._pager).y,k=this._scrollParent===window?c('Vector').getViewportDimensions().y:c('Vector').getElementDimensions(this._scrollParent).y,l=this._scrollParent===window?c('Vector').getScrollPosition().y+k:c('Vector').getElementPosition(this._scrollParent).y+k;if(j-this._offset<l){this._inViewHandler();this.removeEventListeners();return true;}return false;};i.prototype.removeEventListeners=function(){'use strict';if(this._hasEventHandlers){this._scrollListener&&this._scrollListener.remove();this._clickListener&&this._clickListener.remove();this._hasEventHandlers=false;}};i.prototype.setPagerInViewHandler=function(j){'use strict';this._inViewHandler=j;return this;};i.prototype._defaultPagerInViewHandler=function(){'use strict';var j=c('DOMQuery').scry(this._pager,'a')[0];if(j)c('AsyncRequest').bootstrap(j.getAttribute('ajaxify')||j.href,j);};i.getInstance=function(j){'use strict';return h[j];};f.exports=i;}),null);
__d('CurrentPage',['invariant','Run'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k={init:function l(m){var n=m.pageID,o=m.pageName;this.setID(n);this.setName(o);c('Run').onLeave(this._clear);},getID:function l(){!(i!==null)?h(0):void 0;return i;},setID:function l(m){if(!i)i=m;},getName:function l(){!(j!==null)?h(0):void 0;return j;},setName:function l(m){if(!j)j=m;},_clear:function l(){i=null;j=null;}};f.exports=k;}),null);
__d("HubbleContext",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={get:function j(k){return h[k];},getPageID:function j(){return h.page&&h.page.id;},getEventToShow:function j(){return h.eventToShow;},setContext:function j(k){h=k;},setKey:function j(k,l){h[k]=l;},reset:function j(){h={};}};f.exports=i;}),null);
__d('HubbleLogger',['BanzaiLogger','ErrorUtils','HubbleContext','HubbleSurfaces','arrayContains'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=null,j=null,k=null,l=Object.keys(c('HubbleSurfaces')).map(function(n){return c('HubbleSurfaces')[n];}),m={getStatefulFields:function n(){return {pageid:c('HubbleContext').getPageID(),platform:j,prev_section:k,section:h,surface:i};},logAction:function n(o){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{action:o}));},logMetric:function n(o,p){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{metric:o,metric_value:p}));},logException:function n(o,p){var q=c('ErrorUtils').normalizeError(p);c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{error_message:o,stack_trace:q.stack.split('\n')}));},reset:function n(){h=null;i=null;j=null;k=null;},setActiveSection:function n(o){k=h;h=o;},setActiveSurface:function n(o){if(!c('arrayContains')(l,o)){c('ErrorUtils').reportError('Hubble: Invalid surface value: '+o);return;}i=o;},setPlatform:function n(o){j=o;}};f.exports=m;}),null);