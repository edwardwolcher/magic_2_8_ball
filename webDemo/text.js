const nouns = ["The weather", "Your love life", "Your health", "Your wealth", "A stranger", "A friend", "An ex", "This week", "Today", "This moment", "The next thought", "The future", "The past", "The present", "Your family", "Your art", "Politics", "This culture", "Another culture", "Your town", "The world", "The universe", "India", "Latin America", "Europe", "Africa", "Fire", "Ice", "The USA", "China", "A child", "An elder", "Your job", "Your task", "Your career", "Your parent", "An animal", "Your body", "Your heart", "Your brain", "Your sexuality", "Nothing", "Everything", "The outdoors", "Your room", "Your navel", "A lover", "Your enemy", "Your ambition", "Your fear", "A favorite", "The truth", "A lie", "Your life", "COVID-19", "A small thing", "A big thing", "A tiny thing", "A huge thing", "Your memory", "Your sadness", "Your joy", "Morality", "God", "A magician", "A scientist", "An engineer", "A chef", "Your next meal", "The next sip", "The next bite", "A better way", "A false choice", "The right choice", "The left path", "The right path", "A straight road", "A winding road", "A thought", "A prayer", "A song", "A monster", "A teacher", "A priest", "A business", "A foreigner", "Your sleep", "Your dream", "Your best friend", "A book", "Your last poem", "Your next poem", "This story", "Your eye", "Your ear", "Your mouth", "Your stomach", "Your liver", "The question", "The answer", "A cat", "A dog", "A fish", "A bird", "A dragon", "The mountain", "The forest", "The ocean", "The river", "The lake", "The hill", "The field", "The farm", "The city", "The road", "A vehicle", "The right word", "The wrong word", "Your wallet", "A doctor", "Your strength", "An old shoe", "This mystery", "Something", "My program", "My music", "My maker", "Death"];
const verbs = ["is stable", "is unstable", "needs attention", "looks bright", "looks dim", "is in crisis", "is flourishing", "is unclear", "will prevail", "will falter", "is unknown", "cannot be said", "has the answer", "is the answer", "needs you", "loves you", "hates you", "is indifferent", "is chaotic", "wants you", "deserves more", "asks why", "asks when", "asks how", "laughs at you", "laughs with you", "says yes", "says no", "says stop", "says go", "burns", "is silent", "screams", "whispers", "grumbles", "laughs", "sings", "is everything", "is nothing", "mourns", "makes sense", "could work", "can't work", "won't work", "will work", "needs something", "needs nothing", "can wait", "can't wait", "is next", "is ready", "isn't ready", "will win", "will lose", "finds a way", "finds a purpose", "will get lost", "will be found", "will wish for...", "forgives you", "forgot you", "is the question", "don't you think?", "will die", "should die", "won't die", "will be reborn", "is all you need", "isn't there", "is with us", "needs work", "can frustrate", "can inspire", "can hinder", "can help", "can block", "can confuse", "is needed", "must come first", "is not important", "is imporant", "does little", "does much", "doesn't lie", "is lying", "will lie", "won't lie", "will betray you", "will be alright", "will go wrong", "may disappoint", "won't disappoint", "will disappoint", "is critical", "is unimportant", "will help", "won't help", "is your downfall", "is key", "torments you", "turns out right", "may rise", "will rise", "may fall", "will fall", "falls", "rises", "has to work", "has to relax", "must focus", "must loosen up", "may be important", "is useless", "is useful", "will be useful", "will come back", "won't come back", "is a crime", "is the law", "must make way", "must go faster", "must go slower", "must go harder", "must go softer", "must wait", "may be too late", "may be too soon", "triumphs"];