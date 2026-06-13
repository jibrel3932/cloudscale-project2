variable "resource_group_location" {
  type    = string
  default = "uaenorth"
}

variable "student_name" {
  type    = string
  default = "JibrelAbubakrJibrel"
}

variable "docker_image" {
  type    = string
  default = "jibreel3932/cloudscale-app:latest"
}

variable "container_cpu" {
  type    = number
  default = 1
}

variable "container_memory" {
  type    = number
  default = 1.5
}
