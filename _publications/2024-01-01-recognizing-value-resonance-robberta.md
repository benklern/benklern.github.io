---
title: "Recognizing Value Resonance with Resonance-Tuned RoBERTa"
collection: publications
category: conferences
permalink: /publication/2024-01-01-recognizing-value-resonance-robberta
excerpt: 'This paper explores recognizing value resonance using resonance-tuned RoBERTa models.'
date: 2024-01-01
venue: 'Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)'
# slidesurl: 'http://academicpages.github.io/files/slides_recognizing_value_resonance.pdf'
paperurl: 'https://aclanthology.org/2024.lrec-main.1195/'
citation: 'Benkler, Noam et al. (2024). &quot;Recognizing Value Resonance with Resonance-Tuned RoBERTa Task Definition, Experimental Validation, and Robust Modeling.&quot; <i>Proceedings of LREC-COLING 2024</i>. 13688-13698.'
---

Understanding the implicit values and beliefs of diverse groups and cultures using qualitative texts – such as long-form narratives – and domain-expert interviews is a fundamental goal of social anthropology. This paper builds upon a 2022 study that introduced the NLP task of Recognizing Value Resonance (RVR) for gauging perspective – positive, negative, or neutral – on implicit values and beliefs in textual pairs. This study included a novel hand-annotated dataset, the World Values Corpus (WVC), designed to simulate the task of RVR, and a transformer-based model, Resonance-Tuned RoBERTa, designed to model the task. We extend existing work by refining the task definition and releasing the World Values Corpus (WVC) dataset. We further conduct several validation experiments designed to robustly evaluate the need for task specific modeling, even in the world of LLMs. Finally, we present two additional Resonance-Tuned models trained over extended RVR datasets, designed to improve RVR model versatility and robustness. Our results demonstrate that the Resonance-Tuned models outperform top-performing Recognizing Textual Entailment (RTE) models in recognizing value resonance as well as zero-shot GPT-3.5 under several different prompt structures, emphasizing its practical applicability. Our findings highlight the potential of RVR in capturing cultural values within texts and the importance of task-specific modeling.