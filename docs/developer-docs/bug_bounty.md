---
sidebar_position: 6
---

# Bug Bounty Program

We take security very seriously at eSync Network and The People's SCE, and we understand that a strong security posture requires constant effort and vigilance. To help ensure the security of our platform, we are launching a public bug bounty program, inviting security researchers and enthusiasts to report any security vulnerabilities they may find in our systems.

## Responsible Disclosure

Our tech team has up to three months to implement a fix based on the severity of the report. Please allow for this process to fully complete before you publicly disclose the vulnerability.

## Eligibility

Our bug bounty program is open to anyone interested in helping us improve the security of our platform. This includes security researchers, developers, and enthusiasts. However, the following individuals and groups are not eligible to participate in our bug bounty program:

- Employees and contractors of The People's SCE
- Anyone who has previously breached our terms of service or engaged in malicious activity on our platform

## Scope

The following domains and services are included in the scope of our bug bounty program:

<table>
<thead>
<tr><th>Application</th><th>Link</th></tr>
</thead>
<tbody>
<tr><td>eCredits Wallet App for smartphones</td><td><a href="https://link.ecredits.com/app/install">https://link.ecredits.com/app/install</a></td></tr>
<tr><td>Web Portal</td><td><a href="https://portal.ecredits.com/">https://portal.ecredits.com/</a></td></tr>
<tr><td>Auth Service</td><td><a href="https://auth.ecredits.com/">https://auth.ecredits.com/</a></td></tr>
<tr><td>APIs</td><td><a href="https://api.ecredits.com/">https://api.ecredits.com/</a></td></tr>
<tr><td>RPC Endpoints</td><td><a href="https://rpc.ecredits.com">https://rpc.ecredits.com</a></td></tr>
</tbody>
</table>

**Examples of in-scope vulnerabilities**:

- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Server-side request forgery (SSRF)
- Remote code execution (RCE)
- SQL injection (SQLi)
- Authentication or authorization vulnerabilities
- Privilege escalation
- Insecure direct object references
- Information disclosure
- Denial-of-service (DoS) attacks

**Out-of-scope vulnerabilities:**

- Any bug that does not pose a substantial or demonstrable security risk
- Automated vulnerability scanners or tools
- Any vulnerability in a dependent component that is already discovered (e.g. a vulnerability in log4j)
- Clickjacking, open redirects, or lack of security headers
- Denial of service (DOS)
- Social engineering attacks (e.g. phishing)
- Physical exploits of our servers or network
- Local network-based exploits such as DNS poisoning or ARP spoofing

## Rules

- For employees and service providers, participation in the bug bounty program must not interfere with job responsibilities and should be conducted outside of work hours.
- Any involvement you have with an in-scope domain that could create a conflict of interest renders that domain out-of-scope for you.
- Do not publicly disclose any vulnerabilities without explicit written permission from The People's SCE.
- Do not perform any tests that will disrupt services or impair others' ability to use them.
- Do not use automated scanners.
- To be eligible for bounty, all testing must be performed within the scope described above. Out-of-scope submissions will be accepted and acted upon, but are not eligible for bounty.
- If you become aware of a vulnerability involving an out-of-scope domain, it is still appropriate to report the vulnerability via this program.

## Rewards

We will reward the following amounts for qualifying security vulnerabilities based on their severity:

| Severity     | Reward                         |
| ------------ | ------------------------------ |
| **Critical** | 500€ - 2500€ in eCredits (ECS) |
| **High**     | 100€ - 500€ in eCredits (ECS)  |
| **Medium**   | 20€ - 100€ in eCredits (ECS)   |

## Reporting a Vulnerability

To report a vulnerability, please send an email to support@ecredits.com with the following information:

- A detailed description of the vulnerability and how to reproduce it
- The potential impact of the vulnerability
- Steps to mitigate the vulnerability
- Any relevant screenshots or proof-of-concept code
- Your name (or handle) and contact information (email address or social media handle)
- Please do not publicly disclose the vulnerability until we've had a chance to investigate and address it.

## Legal

We will not take legal action against security researchers who report security vulnerabilities in accordance with this bug bounty program.
However, we do require that you do not engage in any malicious activity or exploit any vulnerabilities beyond what is necessary to demonstrate the existence of the vulnerability.
We reserve the right to update or terminate this bug bounty program at any time.
