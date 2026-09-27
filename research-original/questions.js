const QUESTIONS = [
  {
    "id": 1,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 4",
    "question": "What makes research systematic?",
    "options": [
      "It follows an organized investigation of materials and sources.",
      "It relies only on personal intuition.",
      "It collects opinions without analysis.",
      "It starts with a fixed conclusion."
    ],
    "answer": 0,
    "explanation": "Research systematically examines materials and sources to establish facts and reach new conclusions."
  },
  {
    "id": 2,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 3",
    "question": "What transition does undertaking research involve?",
    "options": [
      "Moving from a knowledge consumer to a knowledge producer.",
      "Moving from evidence to unsupported opinion.",
      "Replacing questions with assumptions.",
      "Avoiding responsibility for conclusions."
    ],
    "answer": 0,
    "explanation": "Researchers produce and report knowledge, taking responsibility for the process and its conclusions."
  },
  {
    "id": 3,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 6",
    "question": "Which activity evaluates the success of research-informed change?",
    "options": [
      "Checking whether a problem-solving strategy worked.",
      "Choosing a topic based on preference alone.",
      "Writing recommendations before collecting evidence.",
      "Counting references without examining findings."
    ],
    "answer": 0,
    "explanation": "Evaluation establishes whether a change or problem-solving strategy has been successful."
  },
  {
    "id": 4,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 6",
    "question": "What should robust recommendations extend from?",
    "options": [
      "Research findings.",
      "Personal preferences alone.",
      "The title of the project.",
      "Unverified predictions."
    ],
    "answer": 0,
    "explanation": "The lecture describes recommendations as an extension of findings that can influence practice, programmes and policy."
  },
  {
    "id": 5,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 7",
    "question": "Which question is primarily ontological?",
    "options": [
      "What exists and what is real?",
      "How should references be formatted?",
      "Which questionnaire should I print?",
      "How many papers should I download?"
    ],
    "answer": 0,
    "explanation": "Ontology concerns existence, reality and how existing things are understood."
  },
  {
    "id": 6,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 7",
    "question": "Which question is primarily epistemological?",
    "options": [
      "How do we obtain legitimate knowledge?",
      "Which font should the report use?",
      "What is the project's deadline?",
      "Which room hosts the interview?"
    ],
    "answer": 0,
    "explanation": "Epistemology concerns how we know and what counts as legitimate knowledge."
  },
  {
    "id": 7,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position says the external world exists independently of perception?",
    "options": [
      "Realism.",
      "Relativism.",
      "Subjectivism.",
      "Social constructionism."
    ],
    "answer": 0,
    "explanation": "Realism holds that the external world exists whether or not we perceive or understand it."
  },
  {
    "id": 8,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position limits knowledge to what can be observed through the senses?",
    "options": [
      "Empiricism.",
      "Relativism.",
      "Social constructionism.",
      "Subjectivism."
    ],
    "answer": 0,
    "explanation": "Empiricism grounds knowledge in sensory observation."
  },
  {
    "id": 9,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position treats scientific method as the best route to true knowledge?",
    "options": [
      "Positivism.",
      "Relativism.",
      "Subjectivism.",
      "Social constructionism."
    ],
    "answer": 0,
    "explanation": "The lecture defines positivism in terms of scientific knowledge pursued through scientific method."
  },
  {
    "id": 10,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position emphasizes socio-historical context rather than universal truth?",
    "options": [
      "Relativism.",
      "Realism.",
      "Empiricism.",
      "Positivism."
    ],
    "answer": 0,
    "explanation": "Relativism understands truth, morals and culture in relation to their own socio-historical context."
  },
  {
    "id": 11,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position emphasizes reality constructed through human interaction and interpretation?",
    "options": [
      "Social constructionism.",
      "Realism.",
      "Empiricism.",
      "Positivism."
    ],
    "answer": 0,
    "explanation": "Social constructionism emphasizes how people construct their world through interaction and interpretation."
  },
  {
    "id": 12,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 8",
    "question": "Which position treats personal experiences as a foundation for factual knowledge?",
    "options": [
      "Subjectivism.",
      "Realism.",
      "Positivism.",
      "Empiricism."
    ],
    "answer": 0,
    "explanation": "Subjectivism emphasizes subjective elements of experience and personal experience as a basis of knowledge."
  },
  {
    "id": 13,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 9",
    "question": "Why should researchers articulate their philosophical positioning?",
    "options": [
      "Their conclusions depend on assumptions about knowledge.",
      "It removes the need for data collection.",
      "It guarantees that everyone agrees.",
      "It replaces the research question."
    ],
    "answer": 0,
    "explanation": "Producing knowledge requires researchers to make their assumptions about knowledge explicit."
  },
  {
    "id": 14,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 10",
    "question": "Which set best represents qualitative data?",
    "options": [
      "Words, images and unquantified observations.",
      "Only response times in milliseconds.",
      "Only numerical accuracy scores.",
      "Only coded numerical variables."
    ],
    "answer": 0,
    "explanation": "Qualitative research relies on words, images, experiences and observations that are not quantified."
  },
  {
    "id": 15,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 10",
    "question": "Which set best represents quantitative data?",
    "options": [
      "Numerical measurements and concepts coded with numbers.",
      "Only personal stories without numerical coding.",
      "Only interview narratives.",
      "Only unquantified field notes."
    ],
    "answer": 0,
    "explanation": "Quantitative research relies on quantified data, including concepts represented numerically."
  },
  {
    "id": 16,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 10",
    "question": "What defines a mixed approach?",
    "options": [
      "Using both qualitative and quantitative data.",
      "Using two questionnaires with only numerical answers.",
      "Using two statistical tests on the same numbers.",
      "Changing the topic halfway through a project."
    ],
    "answer": 0,
    "explanation": "A mixed approach uses and values both qualitative and quantitative data."
  },
  {
    "id": 17,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 11",
    "question": "What should primarily determine the research approach?",
    "options": [
      "The research question.",
      "The most fashionable technique.",
      "The easiest software to install.",
      "The researcher's favourite method regardless of fit."
    ],
    "answer": 0,
    "explanation": "There is no universally best approach; procedures should fit the question being investigated."
  },
  {
    "id": 18,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 12",
    "question": "What is methodology?",
    "options": [
      "The overarching framework and strategy for a study.",
      "A single questionnaire item.",
      "Only the physical device used to collect data.",
      "The final list of references."
    ],
    "answer": 0,
    "explanation": "Methodology provides the macro-level reasoning, strategy and grounding for research."
  },
  {
    "id": 19,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 12",
    "question": "What are research methods?",
    "options": [
      "Techniques used to collect and analyse data.",
      "Only philosophical beliefs about reality.",
      "Only the devices used to record answers.",
      "Only the study's title and abstract."
    ],
    "answer": 0,
    "explanation": "Methods are concrete techniques such as interviewing, surveying and analysing data."
  },
  {
    "id": 20,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 12",
    "question": "Which is a research tool in the lecture's terminology?",
    "options": [
      "An observation checklist.",
      "Ethnography as an overall framework.",
      "Interviewing as a technique.",
      "Statistical analysis as a method."
    ],
    "answer": 0,
    "explanation": "Tools are devices used to collect data, including checklists, questionnaires and interview schedules."
  },
  {
    "id": 21,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 12",
    "question": "Which is an example of a methodology in Lecture 1?",
    "options": [
      "Ethnography.",
      "A questionnaire.",
      "An observation checklist.",
      "An interview schedule."
    ],
    "answer": 0,
    "explanation": "The lecture names scientific method, ethnography and action research as methodologies."
  },
  {
    "id": 22,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 12",
    "question": "What is methodological design?",
    "options": [
      "The plan combining methodology, methods and tools.",
      "Only the questionnaire layout.",
      "Only the final conclusion.",
      "A list of papers without a research plan."
    ],
    "answer": 0,
    "explanation": "Methodological design is the plan for conducting the project and includes all three levels."
  },
  {
    "id": 23,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 13",
    "question": "Which assumption is associated with positivist scientific research in the summary?",
    "options": [
      "A knowable and predictable world.",
      "A world that cannot be investigated at all.",
      "Personal preference as the only evidence.",
      "A rejection of all quantitative findings."
    ],
    "answer": 0,
    "explanation": "The summary links positivism with a knowable world, empirical research and hypothesis-driven methods."
  },
  {
    "id": 24,
    "topic": "Research foundations",
    "source": "Lecture 1 · slide 13",
    "question": "Which description fits the post-positivist perspective presented in Lecture 1?",
    "options": [
      "Research can be holistic, exploratory and sensitive to ambiguity.",
      "Every study must ignore context.",
      "All researchers are necessarily free of subjectivity.",
      "Only statistically significant findings can matter."
    ],
    "answer": 0,
    "explanation": "The lecture presents post-positivism as acknowledging ambiguity, subjectivity and exploratory inquiry."
  },
  {
    "id": 25,
    "topic": "Research in practice",
    "source": "RMT1 · page 6",
    "question": "Which combination best describes research in RMT1?",
    "options": [
      "Systematic investigation, evidence, analysis and new conclusions.",
      "Opinion, repetition, confidence and popularity.",
      "A title, a deadline, a slide deck and a grade.",
      "An answer chosen before gathering data."
    ],
    "answer": 0,
    "explanation": "RMT1 connects systematic investigation, evidence and analysis with new conclusions and knowledge."
  },
  {
    "id": 26,
    "topic": "Research in practice",
    "source": "RMT1 · page 8",
    "question": "What is the role of a research problem?",
    "options": [
      "It identifies the core issue needing investigation.",
      "It reports the study's final findings.",
      "It is the list of tools used.",
      "It is the answer already established by the researcher."
    ],
    "answer": 0,
    "explanation": "The problem identifies the issue, while the research question precisely guides inquiry into it."
  },
  {
    "id": 27,
    "topic": "Research in practice",
    "source": "RMT1 · page 8",
    "question": "How does a research question differ from the final answer?",
    "options": [
      "The question guides inquiry; the answer synthesizes the findings.",
      "They are always interchangeable.",
      "The question is written only after the answer.",
      "The answer is the same as the dataset."
    ],
    "answer": 0,
    "explanation": "RMT1 separates problem, research question, evidence and answer as distinct parts of inquiry."
  },
  {
    "id": 28,
    "topic": "Research in practice",
    "source": "RMT1 · page 14",
    "question": "Three researchers study app abandonment using statistics, interviews, or both. Who may be correct?",
    "options": [
      "All three, depending on their research questions.",
      "Only the researcher using statistics.",
      "Only the researcher using interviews.",
      "None, because the topic permits only experiments."
    ],
    "answer": 0,
    "explanation": "The same broad problem can support different approaches when they fit the specific question."
  },
  {
    "id": 29,
    "topic": "Research in practice",
    "source": "RMT1 · page 16",
    "question": "Which activity matches the positivist coding-assistant example?",
    "options": [
      "Measuring and comparing task completion time.",
      "Studying only developers' feelings without measurement.",
      "Selecting a preferred tool without evidence.",
      "Treating every personal story as a numerical experiment."
    ],
    "answer": 0,
    "explanation": "The example uses measurement, experiment and comparison to investigate development time."
  },
  {
    "id": 30,
    "topic": "Research in practice",
    "source": "RMT1 · page 17",
    "question": "Which question best fits the interpretive example?",
    "options": [
      "How do junior developers experience AI coding assistants?",
      "How many milliseconds does a request take?",
      "What percentage of test cases pass?",
      "How many lines of code were generated?"
    ],
    "answer": 0,
    "explanation": "The interpretive example explores experiences through interviews, coding and themes."
  },
  {
    "id": 31,
    "topic": "Research in practice",
    "source": "RMT1 · page 20",
    "question": "Which design illustrates mixed methods?",
    "options": [
      "Combining app-abandonment analytics with user interviews.",
      "Collecting two sets of response-time measurements.",
      "Calculating both a mean and a percentage.",
      "Using two numerical accuracy benchmarks."
    ],
    "answer": 0,
    "explanation": "Analytics show the abandonment pattern, while interviews help explain why users leave."
  },
  {
    "id": 32,
    "topic": "Research in practice",
    "source": "RMT1 · page 22",
    "question": "In RMT1, what role does Google Forms play?",
    "options": [
      "A tool used to conduct research.",
      "A research problem.",
      "A philosophical paradigm.",
      "A finding."
    ],
    "answer": 0,
    "explanation": "RMT1 distinguishes the overall strategy, the method such as a survey, and the tool such as Google Forms."
  },
  {
    "id": 33,
    "topic": "Research in practice",
    "source": "RMT1 · page 23",
    "question": "Which research pipeline follows the order in RMT1?",
    "options": [
      "Question → methodology → methods → tools → data → analysis → answer.",
      "Answer → tools → question → data → methodology → analysis → methods.",
      "Data → answer → question → tools → methods → analysis → methodology.",
      "Tools → answer → methodology → question → analysis → data → methods."
    ],
    "answer": 0,
    "explanation": "The research pipeline begins with the question and proceeds through design, data and analysis to an answer."
  },
  {
    "id": 34,
    "topic": "Research in practice",
    "source": "RMT1 · page 24",
    "question": "What makes a suitable initial research question?",
    "options": [
      "It is focused and answerable.",
      "It includes every possible technology topic.",
      "It states the desired result as a certainty.",
      "It avoids identifying any problem."
    ],
    "answer": 0,
    "explanation": "The challenge asks students to move from an area and a real problem to a focused, answerable question."
  },
  {
    "id": 35,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 2",
    "question": "How do a research area and a topic differ?",
    "options": [
      "An area is a broad domain; a topic is a focused subject.",
      "An area is a final result; a topic is a citation.",
      "They are always identical.",
      "A topic is always broader than an area."
    ],
    "answer": 0,
    "explanation": "The session distinguishes a broad research area from a narrower topic and a specific problem."
  },
  {
    "id": 36,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 5",
    "question": "What turns an initial claim into a research argument?",
    "options": [
      "Verified academic evidence supporting or complicating it.",
      "Repeating it confidently.",
      "A personal opinion from a classmate.",
      "An attractive presentation."
    ],
    "answer": 0,
    "explanation": "The session combines a claim with academic evidence and asks researchers to find what prior work actually says."
  },
  {
    "id": 37,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 6",
    "question": "How should you prepare a research problem for searching?",
    "options": [
      "Break it into three core concepts and generate synonyms.",
      "Paste the entire problem unchanged as the only query.",
      "Search only the broadest word.",
      "Avoid alternative terminology."
    ],
    "answer": 0,
    "explanation": "The activity asks for three concepts and at least two synonym alternatives for each."
  },
  {
    "id": 38,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 7",
    "question": "What does AND do in a search query?",
    "options": [
      "Requires both concepts and narrows results.",
      "Accepts either concept and broadens results.",
      "Finds only an exact phrase.",
      "Removes all results containing either term."
    ],
    "answer": 0,
    "explanation": "AND connects required concepts so matching results contain both."
  },
  {
    "id": 39,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 7",
    "question": "What does OR do in a search query?",
    "options": [
      "Accepts either alternative and broadens results.",
      "Requires both terms in every result.",
      "Searches only the first term.",
      "Forces an exact phrase match."
    ],
    "answer": 0,
    "explanation": "OR connects alternatives or synonyms, allowing either one to match."
  },
  {
    "id": 40,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 7",
    "question": "What do quotation marks do in a search query?",
    "options": [
      "Search for an exact phrase.",
      "Automatically translate the words.",
      "Exclude all words inside the quotation marks.",
      "Sort results by citation count."
    ],
    "answer": 0,
    "explanation": "Quotation marks preserve the phrase as a unit, such as “large language model”."
  },
  {
    "id": 41,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 7",
    "question": "Which query accepts either LLM or its full name and also requires hallucination?",
    "options": [
      " (LLM OR \"large language model\") AND hallucination.",
      "LLM AND \"large language model\" AND hallucination.",
      "LLM OR \"large language model\" OR hallucination.",
      "\"LLM hallucination large language model\"."
    ],
    "answer": 0,
    "explanation": "OR groups the alternative names, while AND requires the additional concept."
  },
  {
    "id": 42,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 9",
    "question": "Which resource is described as a free, broad starting point for academic searches?",
    "options": [
      "Google Scholar.",
      "A personal social-media feed.",
      "A general shopping search.",
      "An unverified forum thread."
    ],
    "answer": 0,
    "explanation": "The session recommends Google Scholar for broad coverage, citations and finding PDFs."
  },
  {
    "id": 43,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 9",
    "question": "Which pair is highlighted for Computer Science and Software Engineering?",
    "options": [
      "IEEE Xplore and ACM Digital Library.",
      "A dictionary and a thesaurus.",
      "A news feed and a discussion forum.",
      "A shopping catalogue and a blog directory."
    ],
    "answer": 0,
    "explanation": "The session highlights IEEE Xplore and ACM DL for conference and journal papers in these fields."
  },
  {
    "id": 44,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 10",
    "question": "What should be recorded for each candidate paper?",
    "options": [
      "Title, year, authors, venue, and DOI or link.",
      "Only the title.",
      "Only how interesting it looks.",
      "Only a screenshot of the search results."
    ],
    "answer": 0,
    "explanation": "These bibliographic details let you identify and reference the paper accurately."
  },
  {
    "id": 45,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 11",
    "question": "Which screening sequence does the session recommend?",
    "options": [
      "Title → abstract → keywords → conclusion → relevant full paper.",
      "Full paper → references → title → keywords → abstract.",
      "Keywords → full paper → title → references → conclusion.",
      "Conclusion → full paper → title → abstract → keywords."
    ],
    "answer": 0,
    "explanation": "The five-step protocol screens relevance before investing in a full reading."
  },
  {
    "id": 46,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 11",
    "question": "What should you learn from the abstract during screening?",
    "options": [
      "What was studied, how it was studied and what was found.",
      "Only the authors' institutional addresses.",
      "Only the number of references.",
      "Only the layout of the figures."
    ],
    "answer": 0,
    "explanation": "The abstract helps identify the study's focus, approach and findings."
  },
  {
    "id": 47,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 11",
    "question": "When should you proceed to a full reading?",
    "options": [
      "When initial screening confirms relevance.",
      "Whenever the title contains one familiar word.",
      "Before looking at any abstract.",
      "Only after writing your own final conclusion."
    ],
    "answer": 0,
    "explanation": "The protocol recommends a full reading after title, abstract, keywords and conclusion establish relevance."
  },
  {
    "id": 48,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 13",
    "question": "Which question helps locate research-gap signals in a paper?",
    "options": [
      "What is still missing?",
      "Which font was used?",
      "How many colours appear in the figures?",
      "Is the title short enough to memorize?"
    ],
    "answer": 0,
    "explanation": "Limitations, unanswered questions and future work point toward issues that may remain unresolved."
  },
  {
    "id": 49,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 14",
    "question": "What is the main purpose of an evidence matrix?",
    "options": [
      "To compare studies and reveal patterns and omissions.",
      "To replace reading the papers.",
      "To rank papers by title length.",
      "To count downloads without examining findings."
    ],
    "answer": 0,
    "explanation": "The matrix organizes purpose, methods, data, findings, limitations and missing work for comparison."
  },
  {
    "id": 50,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 15",
    "question": "What should you do if you cannot fill an evidence-matrix field?",
    "options": [
      "Re-read the paper more carefully.",
      "Invent a plausible answer.",
      "Delete the field from every paper.",
      "Ask AI to fabricate the missing finding."
    ],
    "answer": 0,
    "explanation": "An unanswered field signals that further reading is needed; the matrix should be completed honestly."
  },
  {
    "id": 51,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 16",
    "question": "What distinguishes synthesis from a list of summaries?",
    "options": [
      "Comparing agreement, disagreement and unstudied issues across papers.",
      "Restating every abstract separately.",
      "Sorting references alphabetically.",
      "Copying the conclusion of each paper."
    ],
    "answer": 0,
    "explanation": "Synthesis connects findings across studies and identifies patterns, contradictions and gaps."
  },
  {
    "id": 52,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 18",
    "question": "What is a research gap?",
    "options": [
      "An important issue prior research has not adequately addressed in a specific context.",
      "Any topic missing from a quick Google search.",
      "Any opinion a researcher strongly holds.",
      "Any sentence in a paper's title."
    ],
    "answer": 0,
    "explanation": "A gap emerges from examining what existing research has and has not adequately answered."
  },
  {
    "id": 53,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 19",
    "question": "Research exists in English but evidence for Kazakh is limited. Which gap is illustrated?",
    "options": [
      "Context gap.",
      "Population gap.",
      "Method gap.",
      "Contradiction gap."
    ],
    "answer": 0,
    "explanation": "A missing language or setting is the session's example of a context gap."
  },
  {
    "id": 54,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 19",
    "question": "Studies examine professionals but not undergraduate programmers. Which gap is illustrated?",
    "options": [
      "Population gap.",
      "Context gap based on language.",
      "Contradiction gap.",
      "Evaluation gap based on metrics."
    ],
    "answer": 0,
    "explanation": "A population gap concerns people or groups who have not been adequately studied."
  },
  {
    "id": 55,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 19",
    "question": "Most studies use surveys and few use experiments. Which gap is illustrated?",
    "options": [
      "Method gap.",
      "Population gap.",
      "Language-context gap.",
      "Contradiction gap."
    ],
    "answer": 0,
    "explanation": "A method gap concerns approaches that have received limited use in investigating the problem."
  },
  {
    "id": 56,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 19",
    "question": "Relevant studies disagree about whether AI improves novice performance. Which gap is illustrated?",
    "options": [
      "Contradiction gap.",
      "Population gap.",
      "A formatting gap.",
      "A missing keyword."
    ],
    "answer": 0,
    "explanation": "Inconsistent findings across relevant studies can motivate investigation of a contradiction gap."
  },
  {
    "id": 57,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 19",
    "question": "Studies use very limited datasets or metrics. Which gap may this suggest?",
    "options": [
      "Evaluation or data gap.",
      "A citation-style gap.",
      "A title-length gap.",
      "A gap proven by opinion alone."
    ],
    "answer": 0,
    "explanation": "Limited datasets, tasks or metrics can leave broader applicability uncertain."
  },
  {
    "id": 58,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 20",
    "question": "A student finds no results after a brief general web search. What can they conclude?",
    "options": [
      "There is not enough evidence to establish a research gap.",
      "The topic has never been researched.",
      "The research question has already been answered.",
      "A publishable gap is proven."
    ],
    "answer": 0,
    "explanation": "Search failure alone is not evidence that the literature contains a gap."
  },
  {
    "id": 59,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 21",
    "question": "How should phrases such as “few studies” and “future work” be treated?",
    "options": [
      "As clues that require verification across the literature.",
      "As automatic proof of a new gap.",
      "As results that need no citation.",
      "As a reason to stop searching immediately."
    ],
    "answer": 0,
    "explanation": "Gap signals guide further checking; they do not establish a gap by themselves."
  },
  {
    "id": 60,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 23",
    "question": "Before adopting an author's future-work suggestion, what should you check?",
    "options": [
      "Later studies, relevance to your project and feasibility.",
      "Only whether the suggestion sounds exciting.",
      "Only whether the original paper has a long title.",
      "Whether the wording can be copied unchanged."
    ],
    "answer": 0,
    "explanation": "The session requires checking whether it has already been done, fits the project and is realistically investigable."
  },
  {
    "id": 61,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 25",
    "question": "How should literature affect your research question?",
    "options": [
      "It should inform and refine the question.",
      "It should always be ignored once a question is written.",
      "It should replace the question with a citation list.",
      "It should guarantee your original assumption is correct."
    ],
    "answer": 0,
    "explanation": "The session moves from a problem through evidence and a possible gap to a more specific question."
  },
  {
    "id": 62,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 29",
    "question": "What is the minimum number of relevant papers required for the session's Evidence Sheet?",
    "options": [
      "Five.",
      "One.",
      "Two.",
      "Twenty."
    ],
    "answer": 0,
    "explanation": "Practical Session 2 requires at least five relevant academic papers and a completed evidence matrix."
  },
  {
    "id": 63,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 30",
    "question": "Which use of AI is acceptable according to the session?",
    "options": [
      "Suggesting synonyms for search queries.",
      "Inventing authors and DOIs.",
      "Replacing verified evidence with generated findings.",
      "Declaring an unverified gap to be established."
    ],
    "answer": 0,
    "explanation": "AI may help generate keywords, explain terminology and organize notes, while evidence and citations must be verified."
  },
  {
    "id": 64,
    "topic": "Literature & research gaps",
    "source": "Practical Session 2 · slide 31",
    "question": "How should you maintain the Research Logbook?",
    "options": [
      "Extend the same living document each week.",
      "Start an unrelated document every session.",
      "Keep only the final title.",
      "Delete earlier work whenever the question changes."
    ],
    "answer": 0,
    "explanation": "The logbook grows across the course, preserving the development of the research project."
  }
];
