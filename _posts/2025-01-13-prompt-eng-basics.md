---
title: 'Prompt Engineering Part I'
date: 2025-01-10
permalink: /posts/2025/01/blog-post-6/
tags:
  - family tutorials
  - LLMs
  - prompt engineering
---

# LLM Usage – Rules of Thumb

**1. LLMs Predict, They Don’t “Understand”**
   - LLMs generate outputs based on patterns in data they were trained on, not true understanding.
  - They excel at mimicking human-like responses, not reasoning or decision-making.
  - **LLMs make mistakes**, “hallucinate” facts, and provide outdated information. **Always fact-check critical outputs.**

**2. Quality of Input Affects Output**
   - Clear and specific prompts lead to better results (this is prompt engineering).
   - Vague prompts often result in generic or irrelevant responses.

**3. Avoid Sensitive or Confidential Data**
   - Do not share personal or sensitive information. Models are constantly retrained, so anything you put in may pop out again on someone else’s end.

**4. Know Their Strengths & Weaknesses**
   - **Strengths**: Simple, text-based tasks (e.g., brainstorming, drafting emails, outlining/editing, or summarizing content).
   - **Weaknesses**: Complex or overly specific tasks (e.g., complex math, writing a full presentation/document from scratch, answering niche questions).

**5. Model Matters**
   - Every LLM is different & has unique strengths and weaknesses.
   - Even within a specific LLM (e.g., ChatGPT), you should take notice of which model you are using. (GPT-3 is significantly worse than GPT-4 and much more prone to error.)


# Prompt Engineering: The Basics
Each of these 4-5 steps should already improve your results.

| **Instruction**                          | **Example** |
|------------------------------------------|-------------|
| **1. Give the LLM a Persona**: “You are a [LLM Persona]” | You are an **NLP Research Scientist** |
| **2. Target the User/Recipient’s Persona**: “…with extensive experience [2-3 word task information] to [User’s Persona]” | with *extensive experience communicating complex concepts* to **non-CS professionals**. |
| **3. Specify the Task**: “Your task is to [Task]” | Your task is to **generate a high-level prompt-engineering cheat-sheet for beginners**. |
| **4. Define your Output Format**: “Return your answer as [Output Format]” | Return your answer as **a table with two columns. The first column should include an ordered list explaining how to structure each segment of an ideal prompt. The second column should include a relevant example.** |
| **5. (Optional) Define the Mode/Tonality/Style of the desired response**: “Your response should be [Style]” | Your response should be **clear, concise, and straightforward**. |
---

### Final Template
```
You are an [LLM Persona] with extensive experience [2-3 word task information] to [User’s Persona]. Your task is to [Task]. Return your answer as [Output Format]. Your response should be [Style].
```

### Final Prompt
“You are an NLP Research Scientist with extensive experience communicating complex concepts to non-CS professionals. Your task is to generate a high-level prompt-engineering cheat-sheet for beginners. Return your answer as a table with two columns. The first column should include an ordered list explaining how to structure each segment of an ideal prompt. The second column should include a relevant example. Your response should be clear, concise, and straightforward.”

# Thoughts

Needless to say, there are a lot of theories, “frameworks,” and acronyms/mnemonic devices I’m sure some very important people were paid too much money to come up with, but this is what I’ve found works best.

### If You’re Ever Stuck, Use This Trick:
1. Copy the below prompt into ChatGPT.
```
You are a senior prompt engineer with extensive experience helping non-experts elicit optimal responses from LLMs. Your task is to assist the user in optimizing their drafted prompt. Once you understand your task, carefully follow these instructions:
   1. Ask the user to summarize their goals.  
   2. Analyze their response and ask them to provide you their prompt draft.
   3. In <thinking> tags:
      a. Write a 1-2 sentence summary of the user’s objectives.
      b. Indicate the areas in which the provided prompt draft could be improved.
   4. Using <outline> tags, outline an optimized version of the user’s prompt.
   5. Generate the complete, optimized prompt.
      a. This prompt should be returned in a copyable markdown cell.
Request additional information as you need it.
```
2. When it asks you, write a brief 3-5 sentence summary of what you’re trying to accomplish.
3. When it asks you, provide it with your prompt draft.

