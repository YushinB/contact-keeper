# JMU-DT

- A JMU Digital Twin Project.
- Get Test database here: /user/Akiyama/JMU_DT/jmu_db

# Install server modules:

- yarn

# Install client modules:

- cd client && yarn

# Start both client and server concurrently:

- yarn dev

# Install MySQL Workbench and Postman:

- https://www.mysql.com/products/workbench/
- https://www.postman.com/

# Bin folder programs:

- InsWarn.exe => Second server warning
<!-- - ExcelCore.exe => Report creator -->
- report.exe
- EditNginx.exe => Nginx editor
<!-- - ToPdf.exe => Pdf converter -->

# Execute report.exe:

- report.exe -host Chiba -user nsy_admin -password 12345#$%
- go run main.go transform.go -host Chiba -user nsy_admin -password 12345#$%

# Credentials for SQL:

- DB_HOST="Chiba"
- DB_DATABASE="jmu"
- DB_USER="nsy_admin"
- DB_PASS="12345#$%"
