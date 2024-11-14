import{_ as e,c as r,a0 as i,o}from"./chunks/framework.CGHvQLJz.js";const f=JSON.parse('{"title":"鸿蒙高质量代码静态检测200条三","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙高质量代码静态检测200条三.md","filePath":"鸿蒙高质量代码静态检测200条三.md","lastUpdated":null}'),a={name:"鸿蒙高质量代码静态检测200条三.md"};function t(u,l,n,s,c,p){return o(),r("div",null,l[0]||(l[0]=[i('<h1 id="鸿蒙高质量代码静态检测200条三" tabindex="-1">鸿蒙高质量代码静态检测200条三 <a class="header-anchor" href="#鸿蒙高质量代码静态检测200条三" aria-label="Permalink to &quot;鸿蒙高质量代码静态检测200条三&quot;">​</a></h1><ol start="102"><li>@performance/hp-arkts-no-use-any-export-current</li></ol><ul><li>避免使用export * 导出当前module中定义的类型和数据</li></ul><ol start="103"><li>@performance/hp-arkts-no-use-any-export-other</li></ol><ul><li>避免使用export * 导出其他module中定义的类型和数据</li></ul><ol start="104"><li>@performance/hp-arkui-avoid-empty-callback</li></ol><ul><li>避免设置空的系统回调监听</li></ul><ol start="105"><li>@performance/hp-arkui-avoid-update-auto-state-var-in-aboutToReuse</li></ol><ul><li>避免在aboutToReuse中对自动更新值的状态变量进行更新</li></ul><ol start="106"><li>@performance/hp-arkui-combine-same-arg-animateto</li></ol><ul><li>建议动画参数相同时使用同一个animateTo</li></ul><ol start="107"><li>@performance/hp-arkui-image-async-load</li></ol><ul><li>建议大图片使用异步加载</li></ul><ol start="108"><li>@performance/hp-arkui-load-on-demand</li></ol><ul><li>建议使用按需加载</li></ul><ol start="109"><li>@performance/hp-arkui-no-func-as-arg-for-reusable-component</li></ol><ul><li>避免使用函数作为复用的自定义组件创建时的入参</li></ul><ol start="110"><li>@performance/hp-arkui-no-state-var-access-in-loop</li></ol><ul><li>避免在for、while等循环逻辑中频繁读取状态变量</li></ul><ol start="111"><li>@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator</li></ol><ul><li>在使用LazyForEach进行组件复用的key生成器函数里，不要使用stringify</li></ul><ol start="112"><li>@performance/hp-arkui-reduce-pangesture-distance</li></ol><ul><li>建议设置合理的拖动距离</li></ul><ol start="113"><li>@performance/hp-arkui-remove-container-without-property</li></ol><ul><li>建议尽量减少视图嵌套层次</li></ul><ol start="114"><li>@performance/hp-arkui-remove-redundant-nest-container</li></ol><ul><li>避免冗余的嵌套</li></ul><ol start="115"><li>@performance/hp-arkui-remove-redundant-state-var</li></ol><ul><li>建议移除不关联UI组件的状态变量设置</li></ul><ol start="116"><li>@performance/hp-arkui-remove-unchanged-state-var</li></ol><ul><li>建议移除未改变的状态变量设置</li></ul><ol start="117"><li>@performance/hp-arkui-replace-nested-reusable-component-by-builder</li></ol><ul><li>建议使用@Builder替代嵌套的自定义组件</li></ul><ol start="118"><li>@performance/hp-arkui-set-cache-count-for-lazyforeach-grid</li></ol><ul><li>建议在Grid下使用LazyForEach时设置合理的cacheCount</li></ul><ol start="119"><li>@performance/hp-arkui-suggest-cache-avplayer</li></ol><ul><li>建议缓存AVPlayer实例減少起播时延</li></ul><ol start="120"><li>@performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component</li></ol><ul><li>建议使用reuseId标记不同结构的组件构成</li></ul><ol start="121"><li>@performance/hp-arkui-suggest-use-effectkit-blur</li></ol><ul><li>建议使用effectKit.createEffect实现模糊效果</li></ul><ol start="122"><li>@performance/hp-arkui-suggest-use-get-anonymousid-async</li></ol><ul><li>建议在主线程中通过异步获取IFAA免密认证的匿名化ID</li></ul><ol start="123"><li>@performance/hp-arkui-use-attributeUpdater-control-refresh-scope</li></ol><ul><li>建议使用attributeUpdater精准控制组件属性的刷新</li></ul><ol start="124"><li>@performance/hp-arkui-use-grid-layout-options</li></ol><ul><li>建议在指定位置时使用GridLayoutOptions提升Grid性能</li></ul><ol start="125"><li>@performance/hp-arkui-use-id-in-get-resource-sync-api</li></ol><ul><li>建议在使用API getColorSync和getStringSync时建议使用带id版本</li></ul><ol start="126"><li>@performance/hp-arkui-use-id-in-get-resource-sync-api</li></ol><ul><li>建议在使用API getColorSync和getStringSync时建议使用带id版本</li></ul><ol start="127"><li>@performance/hp-arkui-use-local-var-to-replace-state-var</li></ol><ul><li>建议使用临时变量替换状态变量</li></ul><ol start="128"><li>@performance/hp-arkui-use-object-link-to-replace-prop</li></ol><ul><li>建议使用@ObjectLink代替@Prop减少不必要的深拷贝</li></ul><ol start="129"><li>@performance/hp-arkui-use-onAnimationStart-for-swiper-preload</li></ol><ul><li>建议Swiper预加载机制搭配 OnAnimationStart 接口回调使用</li></ul><ol start="130"><li>@performance/hp-arkui-use-reusable-component</li></ol><ul><li>建议复杂组件的定义，尽量使用组件复用</li></ul><ol start="131"><li>@performance/hp-arkui-use-row-column-to-replace-flex</li></ol><ul><li>建议使用Column/Row替代Flex</li></ul><ol start="132"><li>@performance/hp-arkui-use-scale-to-replace-attr-animateto</li></ol><ul><li>建议组件布局改动时使用图形变换属性动画</li></ul><ol start="133"><li>@performance/hp-arkui-use-taskpool-for-web-request</li></ol><ul><li>建议网络资源的请求和返回使用taskpool线程池异步处理</li></ul><ol start="134"><li>@performance/hp-arkui-use-transition-to-replace-animateto</li></ol><ul><li>建议组件转场动画使用transition</li></ul><ol start="135"><li>@performance/hp-arkui-use-word-break-to-replace-zero-width-space</li></ol><ul><li>建议使用word-break替换零宽空格(\\u200b)</li></ul><ol start="136"><li>@performance/hp-performance-no-closures</li></ol><ul><li>建议函数内部变量尽量使用参数传递</li></ul><ol start="137"><li>@performance/lottie-animation-destroy-check</li></ol><ul><li>该规则检测使用lottie加载的动画是否都正确销毁</li></ul><ol start="138"><li>@performance/no-high-loaded-frame-rate-range</li></ol><ul><li>不允许锁定最高帧率运行</li></ul><ol start="139"><li>@performance/number-init-check</li></ol><ul><li>该规则将检查number是否正确使用</li></ul><ol start="140"><li>@performance/sparse-array-check</li></ol><ul><li>建议避免使用稀疏数组</li></ul><ol start="141"><li>@performance/start-window-icon-check</li></ol><ul><li>启动页图标分辨率建议不超过256 * 256</li></ul><ol start="142"><li>@performance/timezone-interface-check</li></ol><ul><li>在获取非本地时间时，建议使用统一标准的i18n.Calendar接口获取时间时区相关信息</li></ul><ol start="143"><li>@performance/typed-array-check</li></ol><ul><li>数值数组推荐使用TypedArray</li></ul><ol start="144"><li>@performance/waterflow-data-preload-check</li></ol><ul><li>建议对waterflow子组件进行数据预加载</li></ul><ol start="145"><li>@performance/multiple-associations-state-var-check</li></ol><ul><li>多个组件关联同一数据时，建议在组件中使用@Watch装饰器添加更新条件，避免不必要的组件更新</li></ul><ol start="146"><li>@performance/constant-property-referencing-check-in-loops</li></ol><ul><li>在循环如需频繁访问某个常量，且该属性引用常量在循环中不会改变，建议提取到循环外部，减少属性访问的次数</li></ul><ol start="147"><li>@performance/foreach-args-check</li></ol><ul><li>建议在ForEach参数中设置keyGenerator</li></ul><ol start="148"><li>@previewer/mandatory-default-value-for-local-initialization</li></ol><ul><li>如果组件的属性支持本地初始化，需要设置一个合法的不依赖运行时的默认值</li></ul><ol start="149"><li>@previewer/no-page-method-on-preview-component</li></ol><ul><li>禁止在非路由组件上实例化onPageShow、onPageHide、onBackPress等页面级方法</li></ul><ol start="150"><li>@previewer/no-unallowed-decorator-on-root-component</li></ol><ul><li>对于@Entry组件，不允许使用@Consume、@Link、@ObjectLink、@Prop注解；对于@Preview组件，建议使用一个定义了完整的、合法的、不依赖运行时的默认值的父组件作为预览该组件的容器</li></ul><ol start="151"><li>@cross-device-app-dev/color-value</li></ol><ul><li>颜色值应当使用“$r”从color.json中引用，以适配不同的系统颜色模式，禁止使用固定的值</li></ul><ol start="152"><li>@cross-device-app-dev/font-size-unit</li></ol><ul><li>字体大小单位建议使用fp，以适配系统字体设置</li></ul>',103)]))}const d=e(a,[["render",t]]);export{f as __pageData,d as default};
