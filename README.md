# Sample VPC Configuration
---

Fawad Mazhar <fawadmazhar@hotmail.com> 2024

---

## Overview
This repository contains a sample VPC configuration.

This vpc configuration is laid down with the following assumptions:
 - There will be upto 5 regional deployments
 - Per region we will have approximately 6 subnets, 3 private and 3 public.
 - The network address space would start from `10.16.0.0/16` onwards and upwards till `10.127.255.255/16` leaving behind enough address space for spare subnets and possibly emerging new availability zones.


#### Important Note
This deployment incurs cost.


## Deployment
<details>
  <summary>Pre-requisites</summary>

  - 🔧 AWS CLI Installed & Configured 👉 [Get help here](https://aws.amazon.com/cli/)
  - 🔧 Node.js 18.x+
  - 🔧 AWS CDK 👉 [Get help here](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) 
</details>

<details>
  <summary>Installation</summary>
  Run command:

  ```bash
  npm install
  npm run bootstrap:dev
  ```
</details>
  
<details>
  <summary>Deploying (eu-west-1)</summary>
  Run command:

  ```bash
  npm run deploy:dev
  ```
</details>


## License

This project is licensed under the MIT License. See the LICENSE file for more details.