#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { AwsSampleVpcStack } from '../lib/aws-sample-vpc-stack'
import { SubnetType } from 'aws-cdk-lib/aws-ec2'

const app = new cdk.App();


new AwsSampleVpcStack(app, 'sample-vpc-dev', {
  env: {
    account: 'XXXXXXXXXXXX',
    region: 'eu-west-1',
  },
  stage: 'dev',
  prefix: 'sample',
  vpcCidrBlock: '10.16.0.0/16',
  maxAzs: 3,
  natGateways: 3,
  subnetConfiguration: [{
    name: 'private-subnet-1',
    subnetType: SubnetType.PRIVATE_WITH_EGRESS,
    cidrMask: 24,
  }, {
    name: 'public-subnet-1',
    subnetType: SubnetType.PUBLIC,
    cidrMask: 24,
  }],
})
