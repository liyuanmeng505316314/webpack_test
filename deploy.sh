yarn build &&
git checkout x &&
rm -rf *.html *.js *.css *.jpg *.mp3 &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push 