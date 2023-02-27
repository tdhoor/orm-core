#wait for the SQL Server to come up
sleep 30s

echo "Running set up script"
#run the setup script to create the DB and the schema in the DB
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P a1?%fkARF!24x -d master -i db-init.sql