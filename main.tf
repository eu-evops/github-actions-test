terraform {
  required_providers {
    azurerm = {
      version = "~> 2.9.0"
    }

    google = {
      version = ">= 1"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
    acme = {
      source  = "vancluever/acme"
      version = "~> 2.0"
    }
    null = {
      source  = "hashicorp/null"
      version = "3.1.0"
    }
  }
}
