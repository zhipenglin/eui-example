## ic-tag

tag component for ifchange


标签选择器分为两类，一类是关键词标签：标签的颜色（color：必须是16进制）；第二类是筛选标签：关闭属性boolean值（closable：false or true）；例子如下：

````
import IcTag from 'ic-tag'

<IcTag color = "#ccc">关键词标签</IcTag>       // 关键词标签

<IcTag color = "#11AABB">我是超过七个字的标签</IcTag>       // 关键词标签

<IcTag closable={true} onClose={()=>{}}>我是筛选标签</IcTag>    // 筛选标签


````

*Tips:筛选标签**不需要**传入color，关键词标签的的颜色必须使用**16进制**色值*

### API

属性|说明|类型|默认值
---|----|---|-----
color|标签的颜色（16进制） | string | #FFA000
className|自定义标签的class|string|-
closable|标签是否可关闭|boolean|false
style|用来接收style定义的行内样式|object|-
onClose|筛选标签的关闭回调函数|function|-
