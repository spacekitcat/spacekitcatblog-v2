#!/bin/bash

PARENT_HOSTED_ZONE=Z1X5PTHOFU6RMF # The top level zone, i.e. the id for spacekitcat.com when the api lives at api.spacekitcat.com
INSTRUCTION_FILE=file://./route53-apigateway-records.json

echo "Creating DNS records on $PARENT_HOSTED_ZONE for $INSTRUCTION_FILE.."
aws route53 change-resource-record-sets --hosted-zone-id $PARENT_HOSTED_ZONE --change-batch $INSTRUCTION_FILE
echo "Created DNS records."

