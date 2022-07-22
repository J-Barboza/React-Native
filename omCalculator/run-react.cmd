IF "%~1"=="" GOTO run-android
call npm i glob@7.2.0
GOTO run-android

:run-android
npx react-native run-android

GOTO completed

:completed
echo Executado...