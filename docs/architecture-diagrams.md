# Architecture diagram slots

Each professional case includes a collapsed diagram area, clearly marked as **To be added / A adicionar**. These assets deliberately contain no architecture topology.

| Case | English SVG | Portuguese SVG |
| --- | --- | --- |
| Multicloud IDP | `assets/diagrams/multicloud-idp-en.svg` | `assets/diagrams/multicloud-idp-pt-BR.svg` |
| IaC automation | `assets/diagrams/iac-automation-en.svg` | `assets/diagrams/iac-automation-pt-BR.svg` |
| Critical operations | `assets/diagrams/reliability-en.svg` | `assets/diagrams/reliability-pt-BR.svg` |

1. Confirm the real components, connections and personal contribution with the portfolio owner.
2. Create an SVG, or export a reviewed Mermaid diagram to SVG. Include an accessible title and meaningful description. Prefer a 960 × 240 viewBox or update the image dimensions in the generator.
3. Replace the matching language assets. The build does not overwrite existing SVG files.
4. In `scripts/build.mjs`, update the diagram status, caption and image alt text in `caseStudy()`. Remove the placeholder text only for completed diagrams; use per-case fields if adding them incrementally.
5. Rebuild, run tests and inspect desktop/mobile layouts with each diagram expanded.

Useful topics, subject to confirmation: IDP request and provisioning workflow; Terraform module / Ansible responsibility boundaries; release and incident response flow. Do not infer cloud services, network boundaries, SLOs, tenancy models, security controls or production scale that have not been provided.
