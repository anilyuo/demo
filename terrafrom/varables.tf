variable "region" {
  description = "Main region for all resources"
  type        = string
}

variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the main VPC"
}

variable "public_subnet_1" {
  type        = string
  description = "CIDR block for public subnet 1"
}

variable "public_subnet_2" {
  type        = string
  description = "CIDR block for public subnet 2"
}


variable "availibilty_zone_1" {
  type        = string
  description = "First availibility zone"
}

variable "availibilty_zone_2" {
  type        = string
  description = "First availibility zone"
}
  
variable "default_tags" {
  type = map
  default = {
    test = "Demo"
  
  }
}

variable "container_port" {
  description = "Port that needs to be exposed for the application"
}

  
