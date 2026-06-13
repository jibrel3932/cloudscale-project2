output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "vm_name" {
  value = azurerm_linux_virtual_machine.vm.name
}

output "app_url" {
  value = "http://${azurerm_public_ip.pip.ip_address}"
}

output "public_ip" {
  value = azurerm_public_ip.pip.ip_address
}

output "ssh_private_key" {
  value     = tls_private_key.ssh.private_key_pem
  sensitive = true
}
