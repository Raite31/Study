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
 1. nodemon // 热更新

 ##### Express项目结构
 --bin/www 项目启动文件
 --public 放静态资源
 --routes 路由
 --app.js 配置路由、配置跨域

 ##### 数据库
 用docker运行数据库，Navicat连接数据库，密码clwy1234
 新建数据库：clwy_api_development，字符集：utf8mb4，排序规则：utf8mb4_general_ci（不区分大小写，不区分重音符号）
 数据库常用字段类型
    1. 整数：INT/INTEGER
    2. 字符串：CHAR（固定长度，更快）、VARCHAR（最大长度）、TEXT
    3. 时间：DATETIME（能存具体的日期时间）

##### SQL语句
插入语句
   ```INSERT INTO `Articles` (`title`, `content`) VALUES ('你好1', '你好2');```
修改语句
   ```UPDATE `Articles` SET `title`='黄鹤楼送孟浩然之广陵', `content`='故人西辞黄鹤楼，烟花三月下扬州' WHERE `id`=2;```
删除语句
   ```DELETE FROM `Articles` WHERE `id`=5;```
查询语句
   ```SELECT * FROM `Articles`;```
   ```SELECT `id`, `title` FROM `Articles`;```
   ```SELECT * FROM `Articles` WHERE `id`=2;```
排序语句
   ```SELECT * FROM `Articles` WHERE `id`>2 ORDER BY `id` DESC```

聚合查询、分组查询、连接查询

##### Sequelize ORM
安装：
   1. npm i -g sequelize-cli
   2. npm i sequelize mysql2
初始化项目：sequelize init
      会新增config、migrations、models、seeders这几个目录
         - config放的是sequelize需要的连接到数据库的配置文件
         - migrations是假如你需要对数据库做新增表、修改字段、删除表等等操作，就需要在这里添加迁移文件
         - models存放的是模型文件，当使用sequelize进行增删改查时，就要用这里的模型文件，每个模型文件对应数据库里的一张表
         - seeders存放的是种子文件，把需要添加到数据表的测试数据存放在这，只要运行一个命令，数据表就会把这些测试数据自动填充

##### 日常开发项目的固定步骤
1. 建立模型和迁移文件
2. 根据需求调整迁移文件
3. 运行迁移，生成数据表
4. 新建种子文件
5. 将种子文件修改为自己想填充的数据
6. 运行种子文件，将数据填入数据表中

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
     - SELECT * FROM `Article` LIMIT 0, 10;   (从0开始，往后10个)
   - 三个参数
     - 当前页数 currentPage
     - 从哪开始 offset
     - 每页多少条 pageSize
     - offset = (currentPage - 1) * pageSize
6. 白名单过滤表单数据
   - 用req.body接收数据，会接收用户所有的数据，不管该数据对不对，需不需要
7. 验证表单数据
   - 如何在模型中验证数据？
      文档链接：https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
8. 终极版：增删改查（封装响应，优化代码）
   - 何为DRY原则？
   - 如何自定义异常？
   - 如何将重复的代码封装成函数？