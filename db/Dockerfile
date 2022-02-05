FROM mcr.microsoft.com/mssql/server:2017-latest

USER root

RUN mkdir -p /opt/mssql-scripts

# Copy initialization scripts
COPY create_db.sql /opt/mssql-scripts

# Set environment variables, not to have to write them with docker run command
# Note: make sure that your password matches what is in the run-initialization script 
ENV SA_PASSWORD Password.
ENV ACCEPT_EULA Y
ENV MSSQL_PID Express

# Expose port 1433 in case accesing from other container
EXPOSE 1433

# Run Microsoft SQl Server and initialization script
RUN ( /opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" \
    && /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Password.' -i /opt/mssql-scripts/create_db.sql \
    && pkill sqlservr 