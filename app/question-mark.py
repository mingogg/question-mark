from random import randint
from time import sleep
from datetime import datetime


questions = {
    1: "What does NBA stand for?",
    2: "What is the capital of France?",
    3: "What's the name of the piece that moves in an L in chess?",
    4: "What is the chemical symbol for gold?",
    5: "Which planet is known as the 'Red Planet'?",
    6: "What is the largest organ in the human body?",
    7: "What is the term for a word that reads the same backward as forward?",
    8: "What is the main gas found in Earth's atmosphere?",
    9: "What is the name of the world's largest desert?",
    10: "Who's better? [Jordan] or [LeBron]?",
    11: "What is the freezing point of water in Celsius?",
    12: "What is the smallest prime number?",
    13: "What is the square root of 81?",
    14: "What is the capital of Japan?",
    15: "What is the main currency in Japan?"
}

answers = {
    1: "National Basketball Association",
    2: "Paris",
    3: "Knight",
    4: "Au",
    5: "Mars",
    6: "Skin",
    7: "Palindrome",
    8: "Nitrogen",
    9: "Sahara",
    10: "Jordan",
    11: "Zero",
    12: "Two",
    13: "Nine",
    14: "Tokyo",
    15: "Yen"
}

def exceptions():
    sleepingTime()
    print("\nHA! You're sneaky. Luckily I assisted the class of exception handling.\n")

def sleepingTime():
    sleep(0.3)

def timer():
    format = '%H:%M %p'
    datetime1 = datetime.strptime(horaInicio, format)
    datetime2 = datetime.strptime(horaFinal, format)
    minutes_diff = (datetime2 - datetime1).total_seconds() / 60.0
    return minutes_diff


listQuestions = []
points = 0

print("\nHEY! WELCOME TO QUESTION-MARK")
print("\nI'll ask you some questions and you'll have to answer!")
print("""\nThe rules are simple:
    1. The answers will only be one word, you can use lower or upper cases. I don't really care.
    2. The minimun of questions is 1, the limit is 10 (believe me, you'll bore if more).
    3. The number of questions you choose has to be an integer.""")

try:
    totalQuestions = int(input("\nLet's start! How many questions do you want to answer?: "))
    
    if not (1 <= totalQuestions <= 10):
        exceptions()
        quit()
    
    listQuestions = [x for x in range(1, (totalQuestions + 1))]
    print(f"\nGREAT! Let's do {totalQuestions} questions! GOOD LUCK!")

except ValueError:
    exceptions()
    quit()

horaInicio = datetime.now().strftime("%H:%M %p")

for i in range(1, (totalQuestions + 1)):
    sleepingTime()

    questionNumber = randint(0, (len(listQuestions) - 1))

    print("\n" + questions[listQuestions[questionNumber]])
    answer = input("")

    sleepingTime()

    if answer.lower() == answers[listQuestions[questionNumber]].lower() :
        points = points + 1
        print(f"- NICE! You got one more! - [Points: {points}]")
    else :
        print(f"- Boohoo, you missed - [Points: {points}]")

    listQuestions.pop(questionNumber)

horaFinal = datetime.now().strftime("%H:%M %p")
minutesDiff = timer()

sleepingTime()

if (totalQuestions - points) <= 3:
    print(f"\nYou got: {points}/{totalQuestions} in {minutesDiff} minute(s)! Great job!")
else:
    print(f"\nYou got: {points}/{totalQuestions} in {minutesDiff} minute(s)! You can do better, I bet!")

sleepingTime()

print("Thanks for playing this game, God bless you!\n")
