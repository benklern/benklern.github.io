---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Education
======
**Tufts University** — Medford, MA  
*July 2023 - Expected December 2024*  
M.Sc. in Data Science (GPA: 4.0)

**Carleton College** — Northfield, MN  
*September 2016 - June 2020*  
B.A. in Economics with an Emphasis in Statistics and Computer Science   -->

Education
======
  <ul>{% for post in site.education reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Work experience
======

### Smart Information Flow Technologies (SIFT)
**Research Scientist (April 2023 - Present)**

Co-lead for company effort under DARPA HABITUS program.  
  - Developed ML pipeline to project cultural text assets onto a “cultural values-space” and detect latent belief clusters using unsupervised learning techniques.  
Lead ML developer under DARPA VANESSA program.  
  - Developing transformer-based system for modeling team dynamics using physiomarker signal processing techniques.
Lead ML developer under DARPA OBLONGATA program.  
  - Collaborated with subcontractors and neurobehavioral experts to develop Collective Allostatic Load estimation techniques.
Led publications on:
  - Measuring moral value biases in LLMs @ the MP2 workshop - NeurIPS 2023.
  - Recognizing Value Resonance @ LREC-Coling 2024.
Contributed to winning proposals for:
  - DARPA VANESSA  

**Associate Researcher (July 2020 - April 2023)**

Directed research under DARPA HABITUS on the recognition of complex belief resonance in textual assets.  
  - Modeled a novel task in NLP: Recognizing Value Resonance.
Lead developer for ARMY CONCORDIA.  
  - Engineered an ML pipeline for predicting strategic dissent during collaborative activities using wearable physiological data.  
  - Revamped legacy UI system for dynamic operation.
Led opposition team for DARPA SCHNEIDER.  
  - Utilized ML techniques to predict user performance on cognitive and physical tasks.
ML Developer under DARPA SCORE
  - Developed the DeepClaim model for assigning confidence scores to claims in academic papers.  
  - Designed the SCAN system for predicting academic paper validity using hierarchical “claim-cluster” graphs.
Led publication:
  - Recognizing Value Resonance @ SBP-BRiMS 2022. 
Contributed to winning proposals for:
  - ARMY CONCORDIA
  - DARPA OBLONGATA  
  
Skills
======
**Programming Languages**: Python, R, SQL, C++, Lisp, Java, Javascript, HTML  
**Libraries & Packages**: PyTorch, TensorFlow, RayTune, UMAP, scikit, SciPy, Poetry, Flask, Docker, Dash, Matplotlib, Pandas, NumPy  
**Statistics & ML Skills**: Deep Learning, Unsupervised Learning, Reinforcement Learning, Explainable AI, Regression & Classification, Feature Engineering, Model Tuning & Optimization, Pipeline Engineering, UI Overlay  
**Technical Proficiencies**: Git, CUDA, LaTeX, Jupyter, Qualtrics, Microsoft Office  
**Natural Languages**: Native: English, Hebrew | Conversational: Spanish

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

<!--   
Service and leadership
======
* Currently signed in to 43 different slack teams -->


Awards & Honors
======
- Technical Achievement Award, Smart Information Flow Technologies, 2024
- Individual Performance Award, Smart Information Flow Technologies, 2022
- Team Performance Award, Smart Information Flow Technologies, 2022
- Team Performance Award, Smart Information Flow Technologies, 2021
- 1st Place Senior Thesis, Minnesota Economic Association, 2020
- Academic Distinction on Senior Thesis, Carleton College, 2020