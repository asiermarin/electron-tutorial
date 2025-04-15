$cert = New-SelfSignedCertificate `
    -DnsName "example.com" `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -KeyExportPolicy Exportable `
    -NotAfter (Get-Date).AddYears(1)

$password = ConvertTo-SecureString -String "P@ssw0rd!" -Force -AsPlainText

Export-PfxCertificate `
    -Cert $cert `
    -FilePath "C:\Users\a.marin\source\repos\electron-tutorial\electron-tutorial\cert.pfx" `
    -Password $password
