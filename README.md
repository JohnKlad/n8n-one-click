# n8n One-Click Installer

The fastest way to deploy a production-ready n8n instance on your local Windows machine or a fresh cloud VPS. Our simple `.exe` installers handle everything for you, from initial setup to automatic SSL certificate generation.

![n8n Logo](https://raw.githubusercontent.com/n8n-io/n8n-docs/main/.vuepress/public/images/n8n-logo-symbol-rgb.png)

## ✨ Features

-   ✅ **One-Click Setup**: Go from zero to a running n8n instance in minutes.
-   ✅ **Flexible Deployment**: Choose between a local Windows install or a full production setup on any cloud VPS.
-   ✅ **Production-Ready (VPS)**: Includes a PostgreSQL database, a reverse proxy, and automatic SSL certificate generation and renewal with Let's Encrypt.
-   ✅ **User-Friendly**: Simple executable files. No command-line experience needed.
-   ✅ **Secure**: Installs n8n in an isolated environment using Docker.

---

## 🔑 Step 1: Get Your License Key

Our installers require a license key to operate. Getting one is simple:

1.  **[➡️ Purchase Your License Key Here](https://your-payment-provider.com/link-to-product)**
2.  After completing the purchase, your unique license key will be sent to the email address you provided.
3.  Copy the key and keep it ready for the installation step.

---

## 🚀 Step 2: Choose Your Installation Method

Download the required installer from the **[Releases](https://github.com/JohnKlad/n8n-one-click/releases)** page of this repository.

### Option A: Local Windows Installation

Perfect for testing, development, and running workflows on your own machine.

**Prerequisites:**
-   A modern Windows 10 or Windows 11 PC.
-   Docker Desktop installed. You can download it from the [official Docker website](https://www.docker.com/products/docker-desktop/).

**Instructions:**
1.  Download `install_n8n_windows.exe`.
2.  Double-click the file to run it.
3.  The installer will set up and launch n8n using Docker Desktop.
4.  Once complete, your n8n instance will be available at `http://localhost:5678`.

### Option B: VPS Installation (Production)

Ideal for a production-ready, publicly accessible n8n instance with your own domain and SSL.

**Prerequisites:**
-   A **fresh VPS** running **Ubuntu 22.04** or newer.
-   A **domain or subdomain** pointed to your VPS's public IP address (via an A-record).

**Instructions:**
1.  Download `install_n8n_vps.exe`.
2.  Double-click the file to run it.
3.  The installer will ask for the following information:
    -   Your VPS IP Address or Domain.
    -   Your SSH Username (usually `root`).
    -   Your SSH Password.
    -   The domain/subdomain you want to use for n8n.
    -   Your email address (for the Let's Encrypt SSL certificate).
    -   Your **License Key**.
4.  The script will connect to your VPS and perform the entire installation automatically.
5.  Once complete, you can access your secure n8n instance at the domain you provided (e.g., `https://n8n.yourdomain.com`).

---

## ⚠️ Troubleshooting: "VPS Connection Failed" Error

This is the most common issue and is almost always caused by the default security settings of your new VPS. If you see the `[ERROR] VPS connection failed` message, don't worry! Here’s how to solve it.

### The Problem
Most hosting providers disable password-based login for the main `root` user by default for security reasons. Our installer cannot bypass this protection.

### The Solution
You need to explicitly enable password authentication for `root`. The easiest way is to ask your hosting provider's support team to do it for you.

**Step 1: Log in to your hosting provider's website.**

**Step 2: Find your server's IP address.**

**Step 3: Copy and send the following message to their support team:**

> **Subject: Urgent - Enable Root SSH Login with Password**
>
> Hello,
>
> I am trying to run an automated setup script on my new VPS (IP: `[your-server-ip-here]`), but it cannot connect via SSH. My script needs to log in as the `root` user with a password.
>
> Could you please edit the SSH configuration file (`/etc/ssh/sshd_config`) on my server and ensure the following two parameters are set?
>
> 1.  `PermitRootLogin yes`
> 2.  `PasswordAuthentication yes`
>
> After saving the changes, please restart the SSH service with the command: `sudo systemctl restart sshd`.
>
> Thank you for your help!

The support team will handle this standard request quickly. Once they confirm the changes have been made, run the `install_n8n_vps.exe` installer again. It should now connect successfully.

---

## 💬 Support

If you have followed the troubleshooting steps and still face issues, please open an [Issue](https://github.com/JohnKlad/n8n-one-click/issues) on this GitHub repository, and we will be happy to help.

💬 Feedback & Support

Open an issue or contact me at: johnkladua@gmail.com

🌟 Like It? Star It!

If this saved you hours of work — please give it a ⭐!

"n8n should be powerful — not painful to install."

📜 License & Pricing

Installation Package: $10 (one-time)

Full Package: $25 (one-time) + $1/month (updates + support)

License is valid for one (1) server only.

❌ You may NOT:

Resell, share, or redistribute the script

Use it for SaaS or managed services without permission

Circumvent license key validation

⚠️ Commercial SaaS/hosting use requires written approval from the Author.
⚠️ License violation = key revoked, no refunds.

By purchasing and using this software, you agree to these terms.

📑 License Files

📄 License (English)

📄 Лицензия (Русский)
