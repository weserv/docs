# weserv/docs

Documentation for [wsrv.nl](https://wsrv.nl/).

## Built with

- [Node.js](https://nodejs.org/)
- [VitePress](https://github.com/vuejs/vitepress)

## Getting started

```shell
git clone https://github.com/weserv/docs.git
cd docs
yarn # OR npm install
```

### As easy as 1, 2, 3

```shell
# Create a markdown file and write something
echo '# Hello World' > docs/Hello.md

# Start writing
yarn run dev # OR npm run dev

# Build to static files
yarn run build # OR npm run build

# Serve dist/
docker run -d -p 8080:80 -v "$(pwd)/dist:/var/www/imagesweserv/public" --shm-size=1gb --name=weserv ghcr.io/weserv/images:5.x
# Visit http://localhost:8080/
```
