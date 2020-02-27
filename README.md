# 项目说明 
# sudo mongod --dbpath=/data/db
# http://mongoosejs.net/docs/cnhome.html mongoose.js 官方文档
# https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API 


# 运行 mongod 启动mongo服务器,如果出现‘Data directory /data/db not found ... ’字样，

# 运行 sudo mkdir -p /data/db ，再运行mongod

# 如果出现： mkdir: /data/db: Read-only file system

# 就 mkdir ~/data

# 再 mongod --dbpath ~/data