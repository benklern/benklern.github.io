---
title: 'Prompt Engineering Part I'
date: 2025-01-13
permalink: /posts/2025/01/blog-post-1/
tags:
  - family tutorials
  - LLMs
  - prompt engineering
---

<script>
    function copyToClipboard() {
        // Copy the text content to clipboard
        const text = document.getElementById('template-code').innerText;
        navigator.clipboard.writeText(text).then(() => {
            // Change the button text to "✔ Copied"
            const button = document.getElementById('copy-button');
            button.innerHTML = '✔ Copied';
            
            // Revert the button text after 3 seconds
            setTimeout(() => {
                button.innerHTML = 'Copy code';
            }, 3000);
        });
    }
</script>


<!-- # Prompt Engineering: The Basics -->
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
<!-- ```
You are an [LLM Persona] with extensive experience [2-3 word task information] to [User’s Persona]. Your task is to [Task]. Return your answer as [Output Format]. Your response should be [Style].
``` -->

<!-- <div>
    <button onclick="navigator.clipboard.writeText(document.getElementById('template-prompt').innerText)">Copy</button>
</div>
<pre id="template-prompt">You are an [LLM Persona] with extensive experience [2-3 word task information] to [User’s Persona]. Your task is to [Task]. Return your answer as [Output Format]. Your response should be [Style].</pre> -->

<!-- <div style="position: relative; display: block; width: 100%;">
    <button onclick="navigator.clipboard.writeText(document.getElementById('template-prompt').innerText)" 
            style="position: absolute; top: 5px; right: 10px; background: #f3f3f3; border: none; padding: 5px; cursor: pointer; border-radius: 3px; font-size: 12px;">
        Copy
    </button>
    <pre id="template-prompt" style="padding: 15px; background-color: #f6f8fa; border: 1px solid #d1d5da; border-radius: 6px; white-space: pre-wrap; word-wrap: break-word; overflow: hidden; font-size: 14px;">
You are an [LLM Persona] with extensive experience [2-3 word task information] to [User’s Persona]. Your task is to [Task]. Return your answer as [Output Format]. Your response should be [Style].
    </pre>
</div> -->

<div style="position: relative; display: block; width: 100%;">
    <button id="copy-button" 
            onclick="copyToClipboard()" 
            style="position: absolute; top: 5px; right: 10px; background: #f3f3f3; border: none; padding: 5px; cursor: pointer; border-radius: 3px; font-size: 12px;">
        Copy
    </button>
    <pre id="template-code" style="padding: 15px; background-color: #f6f8fa; border: 1px solid #d1d5da; border-radius: 6px; white-space: pre-wrap; word-wrap: break-word; overflow: hidden; font-size: 14px;">
You are an [LLM Persona] with extensive experience [2-3 word task information] to [User’s Persona]. Your task is to [Task]. Return your answer as [Output Format]. Your response should be [Style].
    </pre>
</div>


### Final Prompt
“You are an NLP Research Scientist with extensive experience communicating complex concepts to non-CS professionals. Your task is to generate a high-level prompt-engineering cheat-sheet for beginners. Return your answer as a table with two columns. The first column should include an ordered list explaining how to structure each segment of an ideal prompt. The second column should include a relevant example. Your response should be clear, concise, and straightforward.”

### If You’re Ever Stuck, Use This Trick:
1. Copy the below prompt into ChatGPT.
<div style="position: relative; display: block; width: 100%;">
    <button onclick="navigator.clipboard.writeText(document.getElementById('help-prompt').innerText)" 
            style="position: absolute; top: 5px; right: 10px; background: #f3f3f3; border: none; padding: 5px; cursor: pointer; border-radius: 3px; font-size: 12px;">
        Copy
    </button>
    <pre id="help-prompt" style="padding: 15px; background-color: #f6f8fa; border: 1px solid #d1d5da; border-radius: 6px; white-space: pre-wrap; word-wrap: break-word; overflow: hidden; font-size: 14px;">
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
    </pre>
</div>

2. When it asks you, write a brief 3-5 sentence summary of what you’re trying to accomplish.
3. When it asks you, provide it with your prompt draft.

