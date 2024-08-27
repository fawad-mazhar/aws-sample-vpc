import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Vpc } from 'aws-cdk-lib/aws-ec2' 

interface VpcStackProps extends StackProps {
  stage: string
  prefix: string
  vpcCidrBlock: string
  maxAzs: number,
  natGateways: number
  subnetConfiguration: any[]
}


export class AwsSampleVpcStack extends Stack {
  constructor(scope: Construct, id: string, props: VpcStackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, `${props.prefix}-vpc-${props.stage}`, {
      cidr: props.vpcCidrBlock,
      natGateways: props.natGateways,
      maxAzs: props.maxAzs,
      subnetConfiguration: props.subnetConfiguration
    })
    
    new CfnOutput(this, `VpcId`, {
      description: "Sample VPC.",
      value: `${vpc.vpcId}`
    })

    new CfnOutput(this, `DefaultSecurityGroup`, {
      description: "Sample VPC Default Security Group.",
      value: `${vpc.vpcDefaultSecurityGroup}`
    })
    
    vpc.privateSubnets.forEach((subnet, idx) => {
      new CfnOutput(this, `PrivateSubnet${idx}`, {
        description: `Sample VPC Private Subnet ${idx}`,
        value: `${subnet.subnetId}`
      })   
    })

    vpc.publicSubnets.forEach((subnet, idx) => {
      new CfnOutput(this, `PublicSubnet${idx}`, {
        description: `Sample VPC Public Subnet ${idx}`,
        value: `${subnet.subnetId}`
      })   
    })

  }
}
