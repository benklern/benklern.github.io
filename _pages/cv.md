---
layout: archive
title: "Curriculum Vitae"
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

## Smart Information Flow Technologies (SIFT)
**Research Scientist (April 2023 - Present)**

- Developed machine learning pipelines to map cultural text data onto a multidimensional value framework and uncover latent belief clusters using unsupervised methods.
- Led the design and implementation of a system using transformer models to analyze team dynamics through physiological signal processing.
- Worked with subcontractors and neurobehavioral specialists to develop techniques for estimating collective stress levels through multi-signal integration.
- Authored publications on:
  - Measuring moral value biases in LLMs @ the MP2 workshop - NeurIPS 2023.
  - Recognizing Value Resonance @ LREC-Coling 2024.
- Contributed to winning proposals.

**Associate Researcher (July 2020 - April 2023)**

- Directed research efforts focused on recognizing complex belief systems and value patterns within textual data.
- Developed a machine learning system for predicting dissent in collaborative environments, using physiological data collected from wearable devices.
- Overhauled a legacy user interface system to support dynamic and real-time operations.
- Led a team tasked with using machine learning to predict performance in cognitive and physical tasks based on user data.
- Developed a model for assigning confidence scores to academic claims and a system for evaluating the validity of research papers through claim clustering.
- Led publication on Recognizing Value Resonance @ SBP-BRiMS 2022. 
- Contributed to multiple winning project proposals.
  
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