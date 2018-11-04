This is the source code for spacekitcat.com, along with various prototypes and experiments relating to it. The site runs on the AWS Elastic Bean Stalk environment and the deployments are handled by AWS Code Pipeline, which monitors this repository for changes. The root folder contains the build and configuration files required by Code Pipeline to produce the Docker image for the code to run on and the instructions for building, running and exposing the spacekitcat web app. Elastic Bean Stalk runs an autoscaling load balancer that deploys new releases gradually and adds capacity to match the traffic.

Main site: http://spacekitcat.com . 
Component library Storybook: https://spacekitcat.github.io/spacekitcatblog-v2/?selectedKind=Atoms&selectedStory=Logo%20text&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs . 


![Build status](https://s3-eu-west-2.amazonaws.com/codefactory-eu-west-2-prod-default-build-badges/passing.svg)

(c) 2018

