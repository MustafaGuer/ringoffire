git add .
set /p commit=Enter your commit:
git commit -m "%commit%"
git push
@REM ng build --prod --base-href="//"
@REM firebase deploy
