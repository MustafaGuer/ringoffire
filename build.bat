git add .
git commit -m "New Version"
git push
ng build --prod --base-href="/"
firebase deploy
