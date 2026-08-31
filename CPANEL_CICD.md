# cPanel CI/CD

The repository deploys the static Next.js export to cPanel automatically with GitHub Actions.

## Workflows

- **CI** runs a clean install, ESLint, and a production static build for pull requests and non-production branches.
- **Deploy to cPanel** runs the same checks for `main`, stores the exact build artifact, backs up the current public site, synchronizes the new build over encrypted SFTP, and verifies the deployed files byte-for-byte.

The cPanel account does not provide shell access, so deployment intentionally uses SFTP instead of SSH commands or `rsync`.

## Required GitHub secrets

The workflow reads these encrypted repository secrets:

| Secret | Purpose |
| --- | --- |
| `CPANEL_SFTP_HOST` | cPanel server hostname or IP address |
| `CPANEL_SFTP_PORT` | SFTP port |
| `CPANEL_SFTP_USER` | cPanel/SFTP username |
| `CPANEL_SFTP_PASSWORD` | cPanel/SFTP password |
| `CPANEL_SFTP_KNOWN_HOSTS` | Verified SSH host-key line |

Secrets must never be committed to the repository.

## Release process

1. Create a branch and open a pull request.
2. Merge only after CI succeeds.
3. A push to `main` automatically starts the production deployment.
4. The workflow stores both the new build and a pre-deployment backup for 14 days.
5. Deployment succeeds only when the remote homepage and Romania page exactly match the generated files.

The synchronization preserves cPanel-managed `.well-known/` and `cgi-bin/` directories. Files removed from the generated site are removed from the rest of `public_html`, preventing stale pages and assets.

An authorized maintainer can redeploy the current `main` commit from **GitHub → Actions → Deploy to cPanel → Run workflow**.
