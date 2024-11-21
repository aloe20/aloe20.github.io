import{_ as i,c as r,a0 as a,o as g}from"./chunks/framework.CGHvQLJz.js";const c=JSON.parse('{"title":"鸿蒙hvigor构建任务依赖与生命周期简介","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙hvigor构建任务依赖与生命周期简介.md","filePath":"鸿蒙hvigor构建任务依赖与生命周期简介.md","lastUpdated":null}'),h={name:"鸿蒙hvigor构建任务依赖与生命周期简介.md"};function e(l,o,t,n,s,v){return g(),r("div",null,o[0]||(o[0]=[a('<h1 id="鸿蒙hvigor构建任务依赖与生命周期简介" tabindex="-1">鸿蒙hvigor构建任务依赖与生命周期简介 <a class="header-anchor" href="#鸿蒙hvigor构建任务依赖与生命周期简介" aria-label="Permalink to &quot;鸿蒙hvigor构建任务依赖与生命周期简介&quot;">​</a></h1><h2 id="hivgor脚本文件" tabindex="-1">Hivgor脚本文件 <a class="header-anchor" href="#hivgor脚本文件" aria-label="Permalink to &quot;Hivgor脚本文件&quot;">​</a></h2><p>在构建的生命周期中Hvigor使用两个脚本文件来完成插件、任务以及生命周期hook的注册：</p><ul><li><strong>hvigorconfig.ts</strong>：此文件在整个项目中只有根目录下存在一份，不是构建必须的文件并且默认不存在，如有需要可自行创建，此文件被解析执行的时间较早，可用于在Hvigor生命周期刚开始时操作某些数据。</li><li><strong>hvigorfile.ts</strong>：此文件在每个node下都有一份，是构建的必须文件，在此文件中可以注册插件、任务以及生命周期hook等操作。</li></ul><h2 id="任务与任务依赖图" tabindex="-1">任务与任务依赖图 <a class="header-anchor" href="#任务与任务依赖图" aria-label="Permalink to &quot;任务与任务依赖图&quot;">​</a></h2><p>Hvigor是基于任务对您的项目进行自动化构建的，任务（Task）是Hvigor构建过程中的基本工作单元，它定义了构建项目时需要执行的具体工作。任务可以完成多种操作，比如源码编译任务，打包任务或签名任务等。每一种任务的执行逻辑由插件（plugin）提供，插件可以是由hvigor-ohos-plugin提供的默认任务逻辑，也可由您个性化定制。</p><p>需要注意的一点是，任务是存在依赖关系的，Hvigor在执行任何任务之前会构建任务依赖图，所有任务会形成一个有向无环图（DAG），如下示例图，任务之间的依赖关系用箭头进行表示： <img src="https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241112100851.38124425535012701198022576256983:50001231000000:2800:C33F0DCEC61CAE32975491521F5823EF23645B19268607EDFF86135AC7E9F1CA.png" alt="img1"> hvigor插件（hvigor-ohos-plugin）和hvigorfile.ts文件中的构建脚本都将通过任务依赖机制对任务依赖图做出影响。</p><h2 id="hvigor-ohos-plugin" tabindex="-1">hvigor-ohos-plugin <a class="header-anchor" href="#hvigor-ohos-plugin" aria-label="Permalink to &quot;hvigor-ohos-plugin&quot;">​</a></h2><p>hvigor-ohos-plugin是默认的构建插件，为任务（Task）的完成提供业务逻辑支持，比如为Hvigor提供Hap、Har和Hsp打包服务等任务，每一种任务的具体执行逻辑由本模块中不同的插件来提供。</p><h3 id="hvigor与hvigor-ohos-plugin的关系" tabindex="-1">Hvigor与hvigor-ohos-plugin的关系 <a class="header-anchor" href="#hvigor与hvigor-ohos-plugin的关系" aria-label="Permalink to &quot;Hvigor与hvigor-ohos-plugin的关系&quot;">​</a></h3><p>概述部分提到了Hvigor提供任务注册编排以及配置管理等任务管理机制，它负责控制任务的执行流程，但是并不包含每一个任务的具体业务逻辑，具体逻辑是由hvigor-ohos-plugin提供的。</p><p>Hvigor和hvigor-ohos-plugin的关系可以通过下图来说明，Hvigor接受任务的注册并编排任务执行顺序，并按照顺序依次调用hvigor-ohos-plugin中的插件来执行任务。如果您定制了自己的任务逻辑插件并将其注册，hvigor-ohos-plugin也会调用您的个性化插件来完成编译构建流程。</p><p>在Hvigor执行构建的过程中，hvigor-ohos-plugin会向Hvigor进行任务的注册，Hvigor会根据构建的任务执行有向图依次调用对应的插件来执行相应任务，在完成编译、打包、签名等一系列任务后，Hvigor也就正式完成了构建。 <img src="https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241112100851.10988819222781338628002929076436:50001231000000:2800:85411C33DB0D1A68DFE2BCD3311DB19921D3D0455437E990B64EBC1669F1AE2A.png" alt="img2"></p><h2 id="hvigor生命周期" tabindex="-1">Hvigor生命周期 <a class="header-anchor" href="#hvigor生命周期" aria-label="Permalink to &quot;Hvigor生命周期&quot;">​</a></h2><p>生命周期展示了Hvigor编译构建系统如何进行一次完整的编译构建流程。Hvigor的编译构建过程有三个不同的阶段，分为初始化、配置和执行，Hvigor会按顺序运行这些阶段。</p><ul><li><strong>初始化</strong>：此阶段主要目的为初始化项目的编译参数，构造出项目结构的树形数据模型，每个node为一个HvigorNode对象。</li><li><strong>配置</strong>：此阶段开始时，所有的node都已经加载完毕，但每个node中还没有加载插件（plugin）、任务（task）和DAG图，此阶段的主要目的就是加载出这些内容。</li><li><strong>执行</strong>：任务之间的依赖关系决定了任务执行顺序，任务可以并行执行</li></ul><h2 id="生命周期及hook点" tabindex="-1">生命周期及hook点 <a class="header-anchor" href="#生命周期及hook点" aria-label="Permalink to &quot;生命周期及hook点&quot;">​</a></h2><p>在Hvigor的生命周期中，以下多个hook点可供您使用，便于您在对应的时机调用某些逻辑。在下图中所有绿色标记的线框为可以使用的hook点 <img src="https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241112100851.71964225958550603302604258566335:50001231000000:2800:9AB44158466352782A946A30ED4F6F81B432402092C8BE7BEE6826CB65F1912E.png" alt="img3"></p>',18)]))}const d=i(h,[["render",e]]);export{c as __pageData,d as default};
