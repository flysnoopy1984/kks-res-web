@echo off
echo 正在更新依赖...
cd server
call npm install --omit=dev
cd ..

echo 重启应用...
call pm2 restart kksWeb

echo 部署完成!
pause