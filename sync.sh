
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn install
yarn build

# 必应认证
cp utils/BingSiteAuth.xml docs/.vuepress/dist
cp utils/436d5778d83e4fdb99facd48b571b90d.txt docs/.vuepress/dist

