# 使用官方的Nginx镜像作为基础镜像
FROM nginx:alpine

# 将Nginx默认配置文件替换为我们自定义的配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将当前目录下的所有文件复制到Nginx的html目录
COPY . /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]