# Sample VPC Configuration
---

Fawad Mazhar <fawadmazhar@hotmail.com> 2024

---

## Overview
This stack contains a sample VPC configuration.

This vpc configuration is laid down with the following assumptions:
 - There will be upto 5 regional deployments
 - Per region we will have approximately 6 subnets, 3 private and 3 public.
 - The network address space would start from `10.16.0.0/16` onwards and upwards till `10.127.255.255/16` leaving behind enough address space for spare subnets and possibly emerging new availability zones.


## 🐒 Pre-requisites
  - 🔧 AWS CLI Installed & Configured 👉 [Get help here](https://aws.amazon.com/cli/)
  - 🔧 Node.js 18.x+
  - 🔧 AWS CDK 👉 [Get help here](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) 


## ⚙ Configuring AWS CLI
```bash
  ~/.aws/credentials

  [profile_name]
  aws_access_key_id = XXXXX
  aws_secret_access_key = XXXXX
```

```bash
  ~/.aws/config

  [profile profile_name]
  region = eu-west-1
```


## Installation
Run command:
```bash
  npm install
  npm run bootstrap:dev
```


## Deploying to dev (eu-west-1)
Run command:
```bash
  npm run deploy:dev
```

## Checking differences between local and deployed version
Run command:
```bash
  npm run diff:dev
```

## Checking synthesized CloudFormation template
Run command:
```bash
  npm run synth:dev
```

## Note
This deployment incurs cost.