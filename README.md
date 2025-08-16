# n8n-one-click
🚀 n8n-one-click — Self-Hosted n8n in One Command
Install n8n on any Linux server with one script. Includes automatic monitoring, backup, updates, and Telegram alerts.

Perfect for non-developers, freelancers, and DevOps engineers who want a fully automated, self-healing n8n setup — in just a few minutes.

✅ What It Does
This script automates everything:

✅ Installs Docker, Nginx, and n8n
✅ Secures your domain with free SSL (Let’s Encrypt)
✅ Sets up automatic daily backups
✅ Enables auto-update every Sunday
✅ Installs self-healing monitor with Telegram notifications
✅ Sends success/failure alerts to Telegram
✅ Protects against crashes with auto-restart and rollback
No more manual setup. No more downtime. Just n8n that works — and stays working.

🎯 Who Is This For?
🔹 Non-technical users who want n8n but don’t know Docker or Linux
🔹 Freelancers deploying n8n for clients
🔹 DevOps engineers who want a reliable, repeatable setup
🔹 Businesses running mission-critical automations

⚙️ How It Works
Fill in your details in .env (domain, Telegram bot, login, etc.)
Run the install script
Go to sleep — wake up to a working n8n instance
Get a Telegram message: ✅ "Installation successful!" or ❌ "Error + fix instructions"

📦 Features
FEATURE INCLUDED
One-click install

✅  SSL (HTTPS) via Let’s Encrypt
✅  Auto-backup (daily)
✅  Auto-update (weekly)
✅  Telegram notifications
✅  Crash detection & auto-restart
✅  Rollback on failed update
✅  Easy configuration via .env

🚀 Quick Start
# 1. Clone the repo
git clone https://github.com/JohnKlad/n8n-one-click.git
cd n8n-one-click

# 2. Configure your settings
cp install/.env.example .env
nano .env  # Edit your domain, Telegram, credentials

# 3. Run the installer
sudo bash install/install-n8n.sh

➡️ Done. Access your n8n at https://yourdomain.com

📄 Documentation
See README.ru.md for Russian instructions.

💬 Feedback & Support
Open an issue or contact me at: your-email@example.com

🌟 Like It? Star It!
If this saved you hours of work — please give it a ⭐!

"n8n should be powerful — not painful to install." 
