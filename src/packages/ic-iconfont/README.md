## ic-iconfont

iconfont for ifchange


通过 font 和 svg 来实现单色或彩色的图标，所有的图标都可以在 **字体** 中找到；单色图标使用时只需复制 `icon-` 后面的字符串，添加到 `Icon` 组件的 `type` 属性上即可；彩色图标使用时必须传入isColor；例子如下：

````js

import IcIcon from 'ic-iconfont'

<IcIcon type="search_normal" size={15}/>       // 单色图标

<IcIcon type="color-stars_full" isColor={true} size={15} />    // 彩色图标

````

*Tips:单色或彩色 icon 的大小均可用 css 的 font-size 来控制，也可以通过设置size属性来控制，单色 icon 的颜色使用 css 的 color 属性控制*

### API

属性|说明|类型|默认值
---|----|---|-----
type|`icon` 的类型，请从 **字体** 下查找，多色图标的type均以 `color-` 开头 | string | -
className|自定义图标的类名|string|-
style|用来接收style定义的行内样式|object|-
isColor|是否是彩色图标|boolean|false
size|Icon大小|number|-
