Creating an Azure Webapp:


portal.azure.com

Create Web App + Database:

Project Details:
    - Subscription: Playground
    - Resource Group: (New) applepie
    - Region: East US

Web App Details:
    - Name: applepie
    - Runtime stackL Node 18 LTS

Database:
    - Engine: SQLAzure
    - Server Name: applepie-server
    - Database Name: applepie-database

Azure Cache for Redis:
    - Add Azure Cache for Redis? -> No

Hosting:
    - Hosting plan -> Basic


Review + Create:

Details
Subscription: 9ee113fe-877c-4f9d-8c54-3ed33e233e7e
Resource Group: applepie
Name: applepie
Publish: Code
Runtime stack: Node 18 LTS

App Service Plan (New)
Name: ASP-applepie-a95c
Operating System: Linux
Region: East US
SKU: Basic
Size: Small
ACU: 100 total ACU
Memory: 1.75 GB memory


Database (New)
Username and password of the new database are generated automatically. To retrieve these values after the deployment, go to the App Settings of your app.
Server name: applepie-server
Engine: SQLAzure
Compute tier and size: GeneralPurpose GP_S_Gen5_1
Database name: applepie-database
Region: East US
Username: applepie-server-admin
Password: 87R31282FT1OVUW7$

Networking
Virtual Network: (New) applepieVnet (10.0.0.0/16)
Private endpoint (Database): applepieDbEndpoint
Inbound subnet: (New) applepieSubnet (10.0.0.0/24)
DNS: Azure Private DNS Zone
Outbound subnet (Web App): (New) applepieAppSubnet (10.0.1.0/24)