Self-Signed Certificate

```bash
openssl req -newkey rsa:2048 -nodes -keyout registry.key -x509 -days 365 -out registry.crt
```

```yml
registry_nginx['ssl_certificate'] = "/etc/gitlab/ssl/registry.crt"
registry_nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/registry.key"
registry_nginx['listen_port'] = 5001
registry_nginx['listen_https'] = true
```