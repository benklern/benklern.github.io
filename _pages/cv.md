---
title: "Curriculum Vitae"
permalink: /cv/
redirect_from:
  - /resume
---


## Education
{% for e in site.data.education %}
- **{{ e.degree }}**, {{ e.school }}, {{ e.year }}
{% endfor %}

## Work experience

### Smart Information Flow Technologies (SIFT)
**Research Scientist (July 2023 - Present)**

- Designed and built CHERI-PIT, a multi-agent system that ports real-world C/C++ projects to the memory-safe CHERI pure-capability ABI on Arm Morello with minimal human intervention. It has ported 29 upstream projects, including PostgreSQL, CPython, CRuby and nginx. Presented at AISM '26 (ASE 2026 workshop) and demonstrated at CHERI Blossoms 2026.
- Rebuilt an LLM-in-the-loop code-porting workflow into a fully agentic architecture in two weeks. Built an agentic vulnerability-reconnaissance tool in 12 hours that surfaced 40 potential vulnerabilities in an open-source codebase.
- Developed transformer models that identify cognitive and physical stress in six-person crews on month-long analogue missions. The encoder was pretrained with self-supervised learning on wearable physiological time series, then fine-tuned across missions.
- Built a crew-monitoring dashboard that combines wearable stress models with LLM-scored crew communications into a live team-state view with intervention recommendations.
- Led technical integration for a six-person team across two institutions, unifying independently built subsystems behind a shared data-server API.
- Developed ML pipelines that map cultural text onto a multidimensional value framework and uncover latent belief clusters, using surrogate models to explain the clustering.
- Designed one of the earliest evaluations of moral value pluralism in LLMs (MP2 Workshop, NeurIPS 2023).
- Led engineering teams of 2-6 across five federally funded programs. Mentored graduate students, briefed DARPA program managers, and contributed technical material to 6 winning proposals (key personnel on 3).

**Associate Researcher (July 2020 - July 2023)**

- Directed research on recognizing belief systems and value patterns in text, defining Recognizing Value Resonance as a new NLP task and fine-tuning RoBERTa to solve it (SBP-BRiMS 2022, LREC-COLING 2024).
- Ran two annotation studies and built the web annotation tool used to collect the labels.
- Developed a machine learning system that predicts individual and team dissent in collaborative games from wearable physiological data.
- Overhauled a legacy C++/Qt operator interface to display live streamed data and built its PySpark streaming backend.
- Led a team using machine learning to predict performance on cognitive and physical tasks and recommend team composition.
- Developed a deep-learning model that scores confidence in academic claims and a system that evaluates a paper's validity through claim clustering.

### Lazer Lab, Northeastern University
**Lab Assistant (June 2019 - August 2019)**

- Analyzed large-scale Twitter data in PySpark, used BERT to classify engagement with news articles, and refined a model predicting websites' risk of spreading fake news.

## Skills
**Languages**: Python (advanced); SQL, Bash; C/C++, R, Java, JavaScript, TypeScript, Common Lisp  
**ML**: PyTorch, Hugging Face (Transformers, PEFT), TensorFlow, scikit-learn, XGBoost, Ray Tune, UMAP  
**Training**: self-supervised pretraining of time-series transformers, LoRA/QLoRA, multi-GPU data-parallel training  
**LLMs & agents**: multi-agent orchestration, supervisor/worker architectures, Claude Code, LangGraph, DSPy, MCP, RAG  
**Signals**: EDA, BVP/HR/HRV, accelerometry, skin temperature (Empatica E4, Oura); NeuroKit2, FLIRT  
**Data & deployment**: PySpark, PostgreSQL, MongoDB, Neo4j, Docker, FastAPI, GitLab CI, Weights & Biases  
**Spoken**: English, Hebrew (native); Spanish (conversational)

## Publications
{% assign pubs = site.publications | sort: "date" | reverse %}{% for pub in pubs %}
- [{{ pub.title }}]({{ pub.url | relative_url }}). {{ pub.authors }} *{{ pub.venue_short | default: pub.venue }}*, {{ pub.date | date: "%Y" }}.
{% endfor %}
  



## Awards & Honors
- Technical Hat Trick, Smart Information Flow Technologies, 2026 (award created after peer nominations for three or more major technical contributions in one year)
- Team Achievement Award, Smart Information Flow Technologies, 2026, 2022, 2021
- Individual Contribution Award, Smart Information Flow Technologies, 2025, 2022
- Technical Achievement Award, Smart Information Flow Technologies, 2024
- 1st Place Senior Thesis, Minnesota Economic Association, 2020
- Academic Distinction on Senior Thesis, Carleton College, 2020
