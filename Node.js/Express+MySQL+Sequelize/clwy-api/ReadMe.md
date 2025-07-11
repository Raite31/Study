##### Class Link

https://www.bilibili.com/video/BV1HE42157zV/?spm_id_from=333.1387.favlist.content.click&vd_source=f9b20f9a121f791c01b315ce2611829f
乐哥-长乐未央

##### Node.js后端开发框架

1. Express (使用的人最多)
2. Koa
3. Egg.js
4. Nest.js

##### 脚手架

Express-generator
安装：npm i -g express-generator@4
项目创建：express --no-view clwy-api && cd clwy-api
-- no-view 不创建视图文件，因为是后端开发，不需要前端视图文件

##### 所需插件

1.  nodemon // 热更新

##### Express项目结构

--bin/www 项目启动文件
--public 放静态资源
--routes 路由
--app.js 配置路由、配置跨域

##### 数据库

用docker运行数据库，Navicat连接数据库，密码clwy1234
新建数据库：clwy_api_development，字符集：utf8mb4，排序规则：utf8mb4_general_ci（不区分大小写，不区分重音符号）
数据库常用字段类型1. 整数：INT/INTEGER 2. 字符串：CHAR（固定长度，更快）、VARCHAR（最大长度）、TEXT 3. 时间：DATETIME（能存具体的日期时间）

##### SQL语句

插入语句
``INSERT INTO `Articles` (`title`, `content`) VALUES ('你好1', '你好2');``
修改语句
``UPDATE `Articles` SET `title`='黄鹤楼送孟浩然之广陵', `content`='故人西辞黄鹤楼，烟花三月下扬州' WHERE `id`=2;``
删除语句
``DELETE FROM `Articles` WHERE `id`=5;``
查询语句
``SELECT * FROM `Articles`;``
``SELECT `id`, `title` FROM `Articles`;``
``SELECT * FROM `Articles` WHERE `id`=2;``
排序语句
``SELECT * FROM `Articles` WHERE `id`>2 ORDER BY `id` DESC``

聚合查询、分组查询、连接查询

##### Sequelize ORM

安装：

1.  npm i -g sequelize-cli
2.  npm i sequelize mysql2
    初始化项目：sequelize init
    会新增config、migrations、models、seeders这几个目录 - config放的是sequelize需要的连接到数据库的配置文件 - migrations是假如你需要对数据库做新增表、修改字段、删除表等等操作，就需要在这里添加迁移文件 - models存放的是模型文件，当使用sequelize进行增删改查时，就要用这里的模型文件，每个模型文件对应数据库里的一张表 - seeders存放的是种子文件，把需要添加到数据表的测试数据存放在这，只要运行一个命令，数据表就会把这些测试数据自动填充

##### 日常开发项目的固定步骤

1. 建立模型和迁移文件
2. 根据需求调整迁移文件
3. 运行迁移，生成数据表

4. 新建种子文件
   - sequelize seed:generate --name course
5. 到seeders里将种子文件修改为自己想填充的数据
6. 运行种子文件，将数据填入数据表中
   - sequelize db:seed -seed 20250618030539-course
7. 到models里添加规则
8. 到routes里添加路由
9. 到app.js里添加路由的引用
9. 到Apifox里添加接口文档

##### 业务功能

1. 查询文章列表

   - 配置路由
   - 查询数据库
   - 对查到的数据进行排序
   - 处理异常

   注意点：
   a. 后台接口，就要在routes文件夹里加多一层admin文件夹，这是一个习惯
   b. 务必加上try catch，防止错误导致程序崩溃

2. 查询文章详情
   - 在路由中添加id参数
   - 如何查询文章详情
   - 查询不存在的数据，应该怎么办？报404
3. 新建文章
   - 使用post方法
   - apifox中的参数记得选择body->x-www-form-urlencoded
4. 模糊搜索
   - SQL语句中的like与%
     - %的意思是允许有其他内容
   - req.query获取搜索参数值
     - &符号实现多个查询条件
   - Node.js中实现模糊搜索
5. 数据分页
   - SQL语句中LIMIT
     - SELECT \* FROM `Article` LIMIT 0, 10; (从0开始，往后10个)
   - 三个参数
     - 当前页数 currentPage
     - 从哪开始 offset
     - 每页多少条 pageSize
     - offset = (currentPage - 1) \* pageSize
6. 白名单过滤表单数据
   - 用req.body接收数据，会接收用户所有的数据，不管该数据对不对，需不需要
7. 验证表单数据
   - 如何在模型中验证数据？
     文档链接：https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
8. 终极版：增删改查（封装响应，优化代码）
   - 何为DRY原则？
   - 如何自定义异常？
   - 如何将重复的代码封装成函数？

##### 中场大复习

1. Node.js项目常用命令

   - 安装express脚手架
   - 安装sequelize

   - 初始化项目->删除public/index->安装nodemon->安装sequelize mysql2->初始化sequelize->修改config/config.json文件的数据库连接配置->启动服务
   - 创建数据库->创建模型->创建种子文件->运行指定种子文件->运行所有种子

2. Express的路由配置
   - 在根目录app.js中引用后台文章的路由文件，再use一下，use中写路径
   - 在articles.js文件中每个方法路径配置
3. RESTful风格路由
   - 同样路由名字，不同请求方法，达成不同接口效果
4. 如何获取请求中的数据？
   - req.params
   - req.query
   - req.body
5. 操作数据库的常用方法
   常用的增删改查方法
   - findAll
   - findAndCountAll
   - findByPk
   - create
   - update
   - delete

##### 实战数据库设计

一对多：hasMany
多对一：belongsTo
多对多：必须有一张中间表

普通索引：index
唯一索引：unique

Categories: 分类表
id（编号）：integer，主键，不为null，无符号，自增
name（名称）：varchar, 不为null
rank（排序）：integer，无符号，不为null，默认值：1

Courses：课程表
id（编号）：integer，主键，不为null，无符号，自增
categoryId（分类ID）：integer，无符号，不为null，index索引
userId（用户Id）：integer，无符号，不为null，index索引
name（名称）：varchar，不为null
image（课程图片）：varchar
recommended（是否推荐课程）：boolean，无符号，不为null，默认false，index索引
introductory（是否入门课程）：boolean，无符号，不为null，默认false，index索引
content（课程内容）：text
likesCount（课程的点赞数量）：integer，无符号，不为null，默认0
chaptersCount（课程的章节数量）：integer，无符号，不为null，默认0

Chapters：章节表

Users：用户表

Likes：点赞表

Settings：设置表

##### MySQL Workbench的使用

关联的表如何绘制
MySQL Workbench

##### 一口气建完所有表

回滚迁移（适合数据少或者不重要的时候）
sequelize db:migrate:undo （回滚）
sequelize db:migrate
sequelize db:seed --seed 20250603143053-article

##### 用户管理接口

1. 如何通过迁移文件，修改数据表
2. 后台接口开发定式
   - 种子填充数据
   - 修改模型（增加验证、增加关联）
   - 复制其他路由文件，进行查找替换
   - 修改报名单和搜索
   - app.js中添加路由
   - Apifox测试
3. 数据唯一的验证
   自定义验证
4. 后台用户管理接口的实现

##### 使用bcryptjs加密数据

1. 使用bcryptjs
2. 模型里的set方法

##### 课程接口

1. 关联模型的使用
2. 如何防止出现孤儿记录？（没有对应父表记录的数据）
   - 在数据库设置外键约束，确保数据完整性（一般不让用，数据库会产生额外的性能开销）
   - 在代码层面处理，例如，删除分类时，把对应分类关联的所有课程全部删掉（也是不可行的）
   - 在删除分类时，查询一下有没有关联的课程，有的话就提示用户不能删除
