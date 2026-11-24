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
  
## Skills
**Programming Languages**: Python, R, SQL, C++, Lisp, Java, Javascript, HTML  
**Libraries & Packages**: PyTorch, TensorFlow, RayTune, UMAP, scikit, SciPy, Poetry, Flask, Docker, Dash, Matplotlib, Pandas, NumPy  
**Statistics & ML Skills**: Deep Learning, Unsupervised Learning, Reinforcement Learning, Explainable AI, Regression & Classification, Feature Engineering, Model Tuning & Optimization, Pipeline Engineering, UI Overlay  
**Technical Proficiencies**: Git, CUDA, LaTeX, Jupyter, Qualtrics, Microsoft Office  
**Natural Languages**: Native: English, Hebrew | Conversational: Spanish

## Publications
{% assign pubs = site.publications | sort: "date" | reverse %}{% for pub in pubs %}
- [{{ pub.title }}]({{ pub.url | relative_url }}). {{ pub.authors }} *{{ pub.venue_short | default: pub.venue }}*, {{ pub.date | date: "%Y" }}.
{% endfor %}
  



## Awards & Honors
- Technical Achievement Award, Smart Information Flow Technologies, 2024
- Individual Performance Award, Smart Information Flow Technologies, 2022
- Team Performance Award, Smart Information Flow Technologies, 2022
- Team Performance Award, Smart Information Flow Technologies, 2021
- 1st Place Senior Thesis, Minnesota Economic Association, 2020
- Academic Distinction on Senior Thesis, Carleton College, 2020