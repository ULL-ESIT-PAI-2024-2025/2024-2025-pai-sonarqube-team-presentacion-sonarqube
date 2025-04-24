---

# 🚀 Tutorial: Installation and Code Analysis with SonarQube Cloud from the Ubuntu Terminal

This tutorial will guide you step by step on how to install and analyze a project using **SonarQube Cloud** via the terminal and the SonarScanner.

---

## 📦 Step 1: Install SonarScanner

### On Linux (Ubuntu/WSL):

```bash
cd ~
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
unzip sonar-scanner-cli-5.0.1.3006-linux.zip
mv sonar-scanner-5.0.1.3006-linux sonar-scanner
echo 'export PATH="$HOME/sonar-scanner/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Verify the installation:

```bash
sonar-scanner -v
```

---

## 📄 Step 2: Create the `sonar-project.properties` file

Go to the root of your project and create the file:

```bash
vim sonar-project.properties
```

Example content for a TypeScript project (IMPORTANT: replace values with your actual project details):

```ini
sonar.projectKey=my-org_my-project
sonar.organization=my-org
sonar.host.url=https://sonarcloud.io
sonar.token=my_generated_token

sonar.sources=src/
sonar.exclusions=**/docs/**, **/www/img/**, **/*.html, **/*.css, **/*.png
sonar.test.exclusions=**/tests/**, **/*.spec.ts, **/*.test.ts
sonar.language=ts
sonar.sourceEncoding=UTF-8
```

---

## 🚀 Step 3: Run the analysis

From the root of your project, run:

```bash
sonar-scanner
```

Once finished, a new project will appear in SonarQube Cloud with the results.

---

## ✅ Additional Tips

- Use `sonar.exclusions` to avoid analyzing irrelevant folders (HTML, images, documentation, etc.).

---

🎉 That’s it! You’ve successfully configured and run your first analysis with SonarQube Cloud.

---
