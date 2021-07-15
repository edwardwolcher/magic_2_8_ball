#include <LiquidCrystal.h> // LCD library
#include <avr/pgmspace.h>  // For reading the strings from program memory into Ram
#include "Text.h"          // The string arrays

// Declaring the Arduino pins in use
const int CONTRAST_PIN = 6;
const int TILT_PIN = 2;
const int TONE_PIN = 4;

// These numbers represent the 12 notes between A3 and middle C.
const int scale[] = {220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415};
// This timing array is used to generate musical timings in the playTune function
const int timings[] = {250, 250, 250, 500, 500, 1000};

LiquidCrystal lcd(7, 8, 9, 10, 11, 12); // Initialize the LCD object
int contrast = 110;                     // Used to set LCD contrast. Currently doesn't change but could be used for a dynamic contrast effect

// These variables store the state of the ball to test if its shaken
bool shaken = false;
int tiltStatus = 0;
int shakeChanges = 0;
int shake_amount = 2;

// These buffers are used to read the strings from Program Memory into
char nounBuffer[17];
char verbBuffer[17];

void setup()
{
  randomSeed(analogRead(0)); // new randomSeed so that initial predictions are randomized
  // initialize hardware
  lcd.begin(16, 2);
  pinMode(CONTRAST_PIN, OUTPUT);
  pinMode(TILT_PIN, INPUT);
  analogWrite(CONTRAST_PIN, contrast);
  digitalWrite(TILT_PIN, HIGH);
  // Generate a new fortune on startup
  handleShake();
}

void checkShake()
{
  // This function counts the number of times the tilt pin has changed since it was last reset and
  // It calls handleShake when it reaches the shake_amount (set at 2 by default)
  int currentStatus = digitalRead(TILT_PIN);
  if (currentStatus != tiltStatus)
  {
    shakeChanges++;
    tiltStatus = currentStatus;
  }
  if (shakeChanges >= shake_amount)
  {
    handleShake();
  }
}

void handleShake()
{
  // Reset the shake counter, display a new fortune, play a tune
  shakeChanges = 0;
  displayText();
  playTune();
  delay(4000);
  lcd.clear();
}

void displayText()
{
  // this function pulls a random noun and verb from program memory and reads them
  // into the string buffers to display.
  lcd.clear();
  int noun = int(random(128));
  int verb = int(random(128));
  lcd.setCursor(0, 0);
  strcpy_P(nounBuffer, (char *)pgm_read_word(&(noun_table[noun])));
  strcpy_P(verbBuffer, (char *)pgm_read_word(&(verb_table[noun])));
  lcd.print(nounBuffer);
  lcd.setCursor(0, 1);
  lcd.print(verbBuffer);
}

void playTune()
{
  // each tune selects five random notes from the scale as its "key"
  int key[] = {int(random(12)), int(random(12)), int(random(12)), int(random(12)), int(random(12))};
  // the number of notes to use in the random tune
  int notes = int(random(8, 15));
  // The probability that any note is a rest
  int restChance = int(random(3, 6));
  // The probability that any note is transposed up one or two octaves
  int octaveChance = int(random(3, 7));

  for (int note = 0; note < notes; note++) // iterate based on the value of "notes"
  {
    int timing = timings[random(6)]; // for each note, pick a random timing
    if (random(restChance) == 0)     // check if this note should be a rest
    {
      delay(timing);
    }
    else
    {
      // select a random note value from the "key"
      int noteIdx = random(5);
      int pitch = scale[key[noteIdx]];
      // Check three times whether to transpose up one octave (can be cumulative to reach as high as c7)
      if (random(octaveChance) == 0)
      {
        pitch *= 2;
      }
      if (random(octaveChance) == 0)
      {
        pitch *= 2;
      }
      if (random(octaveChance) == 0)
      {
        pitch *= 2;
      }
      // Play the tone
      tone(TONE_PIN, pitch, timing);
    }
    // Pause between notes based on the random timing
    int pause = timings[random(6)];
    delay(pause);
  }
}

void loop()
{
  checkShake();
  delay(10); // Small delay to prevent false positives
}
