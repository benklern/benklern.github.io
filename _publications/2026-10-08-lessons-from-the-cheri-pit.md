---
title: "Agentic Software Porting: Lessons from the CHERI-PIT"
category: workshops
permalink: /publication/lessons-from-the-cheri-pit
excerpt: 'Eight lessons from six months of building CHERI-PIT, an LLM-agent pipeline that ports C/C++ projects to memory-safe CHERI hardware.'
date: 2026-10-08
venue: "Proceedings of the 2nd International Workshop on AI for Software Modernization (AISM '26), co-located with ASE 2026, Munich"
venue_short: "AISM '26 (ASE Workshop)"
paperurl: "https://dl.acm.org/doi/10.1145/3843775.3844551"
citation: 'Benkler, Noam, Johnston, Steven, Lide, David, Randal, Allison, Valovage, Mark, Thomsen, Dan, Li, Jason, Watson, Robert N. M. and Musliner, David J. (2026). &quot;Agentic Software Porting: Lessons from the CHERI-PIT.&quot; <i>Proceedings of the 2nd International Workshop on AI for Software Modernization (AISM &#39;26)</i>. ACM. 69-72. doi:10.1145/3843775.3844551'
authors: "Benkler, N., Johnston, S., Lide, D., Randal, A., Valovage, M., Thomsen, D., Li, J., Watson, R.N.M., Musliner, D.J."
featured: true
summary: "A multi-agent system that ports real-world C/C++ to memory-safe CHERI hardware with minimal human intervention: 29 upstream projects so far, including a working PostgreSQL server and a complete CRuby interpreter."
# Figure 1 from the paper (CC BY 4.0).
image: "/images/pubs/cheri-pit-pipeline.png"
image_alt: "Figure 1 of the paper: the CHERI-PIT pipeline. A supervisor that only orchestrates dispatches sub-agents through setup, scouting, planning, build and test fixing, finalize, validate and guide-update steps. Tool-call hooks enforce the roles, verifier scripts decide whether to continue, re-plan or escalate to the user, an anti-pattern knowledge base carries lessons between ports, and a Morello hardware CI gate alone marks a port as ported."
---

Porting C/C++ software to new hardware is an agent-shaped problem. The source changes stay small, but each one requires scarce expert diagnosis of compiler warnings and hardware faults. This experience paper reports eight lessons from six months of developing CHERI-PIT. CHERI-PIT is an LLM-agent pipeline that ports C/C++ projects to the memory-safe pure-capability (purecap) ABI of CHERI hardware on Arm Morello. The pipeline has carried 29 upstream projects to reproducible port recipes recording zero CHERI faults at their test baselines (independent hardware-CI validation in progress). They include a working PostgreSQL server and a complete CRuby interpreter. The lessons fall into three themes: *dividing the labor* so one pipeline survives project scale, *verifying progress mechanically* so no claim of success rests on the agent's own report, and *persisting knowledge across ports* so the tool grows more capable with each port. Each lesson unfolds as an evolution: what CHERI-PIT initially did, what we observed, and what we changed. The lessons together trace a path toward a porting tool that emits reproducible and auditable port recipes.
