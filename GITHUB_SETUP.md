# GitHub Pages setup — step by step

This site is intentionally built as plain HTML/CSS/JavaScript. It does not need Node, a database, or a paid hosting service.

## A. Create the repository

1. Sign in to GitHub.
2. Click **+** in the top-right corner → **New repository**.
3. Repository name: **emotions-2027**.
4. A public repository is simplest for GitHub Pages on a standard account.
5. Leave **Add a README**, **.gitignore**, and **license** unchecked because this folder already contains the project files.
6. Click **Create repository**.

## B. Put the website on GitHub — easiest method

1. Open the new `emotions-2027` repository.
2. Click **uploading an existing file** (or **Add file → Upload files**).
3. Unzip `emotions-2027-website.zip` on your computer.
4. Open the unzipped `emotions-2027` folder.
5. Drag **the contents of the folder** into GitHub — not the containing folder itself.
6. Confirm that `index.html` appears at the top level of the repository.
7. In the commit box, enter: `Initial Emotions 2027 website`.
8. Click **Commit changes**.

## C. Turn on GitHub Pages

1. In the repository, click **Settings**.
2. In the left menu, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/(root)**.
5. Click **Save**.
6. Wait roughly one or two minutes, then refresh the Pages settings page.
7. GitHub will show the public URL, normally:
   `https://YOUR-USERNAME.github.io/emotions-2027/`

## D. Change text later

1. Open the relevant file in GitHub, for example `speakers.html`.
2. Click the pencil icon (**Edit this file**).
3. Change only the text between the HTML tags unless you intentionally want to change the layout.
4. Click **Commit changes**.
5. GitHub Pages redeploys automatically.

Main content files:

- `index.html` — homepage
- `speakers.html`
- `program.html`
- `submissions.html`
- `registration.html`
- `venue-accommodation.html`
- `contact.html`

## E. Replace the homepage photograph

The draft uses an openly licensed Tilburg University campus image from Wikimedia Commons. To replace it with an approved Tilburg University photograph:

1. Add your image to `assets/img/`, for example `campus-hero.jpg`.
2. Open `index.html`.
3. Find the `<img class="hero-media" ...>` line.
4. Change the `src` value to `assets/img/campus-hero.jpg`.
5. Replace the `alt` text with an accurate description.
6. Update/remove the photo credit directly below the hero image and update `CREDITS.md`.

## F. Add the official Tilburg University logo later

This draft uses an Emotions 2027 text identity rather than bundling an unofficial copy of Tilburg University's corporate logo or proprietary font. If the organizing team has an approved digital logo asset, add it to `assets/img/` and replace the `E27` brand mark in the page headers. Keep the approved clear space and color rules from Tilburg University's corporate identity guidance.

## G. Optional custom domain

If you later buy or receive a domain such as `emotions2027.org`:

1. Repository **Settings → Pages → Custom domain**.
2. Enter the domain.
3. GitHub will tell you which DNS records to create with the domain provider.
4. After DNS verification, turn on **Enforce HTTPS**.

Do not configure a custom domain until you control the domain's DNS settings.

## H. Recommended pre-launch checklist

- Replace temporary speaker/program text when confirmed.
- Update the Call for Abstracts dates and submission portal URL.
- Add registration fees and registration URL when available.
- Add conference hotels and booking links.
- Replace/approve campus photography and institutional branding.
- Confirm the conference email account is active.
- Test the website on phone and desktop.
- Ask at least one colleague to check all dates, names and links.
