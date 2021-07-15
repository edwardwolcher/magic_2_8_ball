# This quick, sloopy python script reads the 'nouns.txt' and 'verbs.txt' files and converts them
# into a single 'Text.h' file in the magicBall.ino directory with proper c++ formatting that
# allows them to be read into the program memory of the arduino. This script should be run whenever
# a change is made to the text files.

nouns = open(r"nouns.txt", "r")
text = open("magicBall.ino/Text.h", "w+")
nounsPointer = "const char *const noun_table[] PROGMEM = {"
for idx, noun in enumerate(nouns, 0):
    formattedNoun = 'const char n{idx}[] PROGMEM = "{noun}";\n'.format(
        noun=noun.strip(), idx=idx)
    text.write(formattedNoun)
    comma = ','
    if idx == 127:
        comma = ''
    nounsPointer += 'n{idx}{comma}'.format(idx=idx, comma=comma)

nounsPointer += '};'
text.write(nounsPointer)
nouns.close()
verbs = open(r"verbs.txt", "r")
verbsPointer = "const char *const verb_table[] PROGMEM = {"
for idx, verb in enumerate(verbs, 0):
    formattedVerb = 'const char v{idx}[] PROGMEM = "{verb}";\n'.format(
        verb=verb.strip(), idx=idx)
    text.write(formattedVerb)
    comma = ','
    if idx == 127:
        comma = ''
    verbsPointer += 'v{idx}{comma}'.format(idx=idx, comma=comma)
verbsPointer += '};\n'
text.write(verbsPointer)
verbs.close()
