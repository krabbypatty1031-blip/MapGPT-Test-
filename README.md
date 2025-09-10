# Web Map Application

这是一个基于OpenLayers的简单Web地图应用，使用Docker容器化部署。

## 功能特性
- 使用OpenLayers 7显示交互式地图
- 以OpenStreetMap作为基础地图图层
- 尝试添加来自GeoServer的WMS图层（如国界图层）
- 容器化部署，便于在任何环境中运行

## 快速开始

### 使用Docker运行

1. 确保已安装Docker

2. 构建Docker镜像：
```bash
docker build -t web-map-app .
```

3. 运行Docker容器（如果8080端口已被GeoServer或其他服务占用，可以使用其他端口，如8888）：
```bash
# 当8080端口未被占用时
docker run -p 8080:80 web-map-app

# 当8080端口已被占用时（例如被GeoServer占用），可以使用其他端口如8888
docker run -p 8888:80 web-map-app
```

4. 打开浏览器访问应用：
   - 如果使用8080端口：http://localhost:8080
   - 如果使用8888端口：http://localhost:8888

### 直接在本地运行

你也可以不使用Docker，直接通过浏览器打开index.html文件来运行应用。但请注意，如果要加载GeoServer图层，需要确保本地有运行中的GeoServer服务。

## 项目结构
- `index.html` - 主HTML文件
- `style.css` - 样式表
- `web-map.js` - 地图逻辑实现
- `Dockerfile` - Docker构建文件
- `nginx.conf` - Nginx服务器配置
- `.dockerignore` - Docker构建排除文件
- `.gitignore` - Git提交排除文件

## 注意事项
- 该应用尝试从本地GeoServer服务加载WMS图层，如果GeoServer未运行或配置不正确，将只显示基础地图图层
- 默认地图中心点设置为[114.314521, 22.543061]（大约是深圳市中心），缩放级别为10
- 由于GeoServer默认也使用8080端口，运行Docker容器时可能会发生端口冲突，建议使用其他端口如8888来映射Docker容器的80端口
- 如果修改了GeoServer的端口，请确保同时更新web-map.js文件中的GeoServer URL

## 许可证
MIT