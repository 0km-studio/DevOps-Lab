Self-Signed Certificate

```bash
openssl genrsa -out registry.key 4096
openssl req -new -key registry.key -out registry.csr -subj "/CN=192.168.1.39"
echo "subjectAltName = IP:192.168.1.39" > extfile.cnf
openssl x509 -req -in registry.csr -CA ca.crt -CAkey ca.key -CAcreateserial \
  -out registry.crt -days 365 -sha256 -extfile extfile.cnf
```

```yml
registry_nginx['ssl_certificate'] = "/etc/gitlab/ssl/registry.crt"
registry_nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/registry.key"
registry_nginx['listen_port'] = 5001
registry_nginx['listen_https'] = true
```

in runner
volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/etc/docker/certs.d:/etc/docker/certs.d"]
