## 前言：

这个项目是基于i40west/netlify-cms-cloudflare-pages，为Edgeone Pages适配的版本。再次感谢了d3v1an7/netlify-cms-oauth-cloudflare项目与i40west/netlify-cms-cloudflare-pages项目，因为有了他们的努力我才能轻松的完成对Edgeone pages的适配工作。

## 安装方式：

### 1. 在 GitHub 创建 OAuth 应用程序
前往 Settings → Developer Settings，选择 OAuth Apps 并创建新应用。应用名称可自定义，主页 URL 应设为您的站点地址（例如 [https://example.com](https://example.com/)）。其中 **授权回调 URL（Authorization callback URL）** 至关重要——您亦可将其设为**主页URL**+**backend.auth_endpoint**。例如我的`auth_endpoint`为`auth`，那最后的URL应该为[https://example.com/auth](https://example.com/auth)。
创建完成后，GitHub 将提供 Client ID，此时您可同时生成 Client Secret。后续步骤将同时需要这两项信息。
2.将 Client ID 与 Secret 添加至 Cloudflare 项目
在Edgeone pages项目中，进入 Settings → Environment variables，添加两个环境变量：
    GITHUB_CLIENT_ID：填入上文获取的 Client ID
    GITHUB_CLIENT_SECRET：填入生成的 Client Secret
