# n8n-one-click
🚀 n8n-one-click — Self-Hosted n8n in One Command  
Install n8n on any Linux server with one click. Includes automatic monitoring, backup, updates, and Telegram alerts.

Perfect for non-developers, freelancers, and DevOps engineers who want a fully automated, self-healing n8n setup — in just a few minutes.

---

## ✅ What It Does?
This script automates everything:

- ✅ Installs Docker, Nginx, and n8n  
- ✅ Secures your domain with free SSL (Let’s Encrypt)  
- ✅ Sets up automatic daily backups  
- ✅ Enables auto-update every Sunday  
- ✅ Installs self-healing monitor with Telegram notifications  
- ✅ Sends success/failure alerts to Telegram  
- ✅ Protects against crashes with auto-restart and rollback  

No more manual setup. No more downtime. Just n8n that works — and stays working.

---

## 🎯 Who Is This For?
- 🔹 Non-technical users who want n8n but don’t know Docker or Linux  
- 🔹 Freelancers deploying n8n for clients  
- 🔹 DevOps engineers who want a reliable, repeatable setup  
- 🔹 Businesses running mission-critical automations  

---

## ⚙️ How It Works
1. Fill in your details in `.env` (domain, Telegram bot, login, etc.)  
2. Run the install script from the **private repo**  
3. Go to sleep — wake up to a working n8n instance  
4. Get a Telegram message: ✅ "Installation successful!" or ❌ "Error + fix instructions"  

---

## 📦 Features
| Feature | Included |
|---------|----------|
| One-click install | ✅ |
| SSL (HTTPS) via Let’s Encrypt | ✅ |
| Auto-backup (daily) | ✅ |
| Auto-update (weekly) | ✅ |
| Telegram notifications | ✅ |
| Crash detection & auto-restart | ✅ |
| Rollback on failed update | ✅ |
| Easy configuration via `.env` | ✅ |

---

## 🚀 Quick Start
> ⚠️ Executable code is in the **private repository**: `n8n-one-click-privat`.  
> You will receive access after purchasing a license.

```bash
# 1. Clone the private repo (after license activation)
git clone https://github.com/JohnKlad/n8n-one-click-privat.git
cd n8n-one-click-privat

# 2. Configure your settings
cp install/.env.example .env
nano .env  # Edit your domain, Telegram, credentials

# 3. Run the installer
sudo bash install/install-n8n.sh



Circumvent license key validation

⚠️ Commercial SaaS/hosting use requires written approval from the Author.
⚠️ License violation = key revoked, no refunds.

By purchasing and using this software, you agree to these terms.

```

➡️ Done. Access your n8n at:
👉 https://yourdomain.com

📄 Documentation

See README.ru.md for Russian instructions.

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
