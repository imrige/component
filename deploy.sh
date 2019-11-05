#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist


git init
git add -A
git commit -m 'build'

# 发布到 https://github.com/imrige/component.git
git push -f https://github.com/imrige/component.git master:gh-pages

open https://imrige.github.io/blog/

cd -
