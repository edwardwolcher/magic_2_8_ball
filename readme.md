# Magic 2^8 Ball

> [**Video Documentation**](https://vimeo.com/575452060)

This code runs the **Magic 2^8 Ball**, an arduino-powered art object designed to serve as an enigmatic fortune teller and creative prompt generator. Inspired by the classic ["Magic 8 Ball" children's toy](https://en.wikipedia.org/wiki/Magic_8-Ball), it repurposes the orginal's kitsch aesthetic with a generative-art twist.

Shaking the art activates a tilt-ball sensor in the device which generates a new fortune. Fortunes are composed of randomly selected noun and verb phrases from two lists of 128 strings. These are meant to provide thought-provoking and creative prompts to the viewer to aid in decision making or art. The strings are displayed on a 16x2 LCD display on the exterior of the device which resembles the murky blue window of original Magic 8 Balls. The combination of the two 128-long lists is 256 total strings (the 2^8 of the title) and a total of 16384 possible combinations. 

In addition to the displayed generative text, the device plays a simple melody on a passive buzzer inside the object. The melody is generated by an original algorithm contained in the MagicBall.ino code, selecting a random key, timings, and duration to create short 8-12 note motifs. These tinny buzzer melodies resemble the sound effects of primitive children's electronic toys from the same era as the Magic 8 Ball. The generative music algorithm is complex enough that no two melodies should ever be the same, adding an additional layer of uniqueness to each encounter with the **Magic 2^8 Ball**.

The effect is intended to surprise the viewer with the oddly poignent poetic language generated by the device and the specificty of the text/music moment it creates. It shows the power of even very simple generative art to dislocate our consciousness and inspire our unconscious mind to construct new meaning in collaboration with machines. 

A text-only demo showing the generative text is available at [https://edwardwolcher.github.io/magic_2_8_ball/demo/](https://edwardwolcher.github.io/magic_2_8_ball/demo/)


This project was created for DXARTS 470 at the University of Washington, Summer 2021

## Code explanation
The raw text used for nouns and verbs are kept in "nouns.txt" and "verbs.txt" in the root of the directory.
To speed up development a small python script "build_text.py" converts these strings into the C++ header file used in the MagicBall.ino code. The arduino code is in the "magicBall" directory. There is also a slightly tweaked code in the "liveDemo" directory that will cause the ball to generate fortunes automatically in a loop.

## Images

![Magic Ball Front](media/frontface.jpg)
![Magic Ball Back](media/backface.jpg)
