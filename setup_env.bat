npm install
npx playwright install
npm install -D allure-playwright
npm install -g allure-commandline --force
allure generate ./allure-results --clean -o ./allure-report
npm run "%script%"