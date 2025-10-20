Dice Rolling Game
Live demo: https://sounaksarbadhikary.github.io/Dice-rolling-game/

A simple browser-based two-player dice game built with HTML, CSS and JavaScript. Players take turns rolling a die. The first player to reach a score of 20 or more wins. Player 1 starts the game.

Table of contents
About
How to play
Controls
Features
Tech stack
Project structure
Run locally
Customize target score
Contributing
License
Contact
About
This repository contains a lightweight, single-page dice game. It's intended as a small demo project and a starting point for enhancements like animations, sounds, or multiplayer features.

How to play
Player 1 starts.
Click the "Roll" button to roll the die on your turn.
The rolled number is added to the current player's total score.
Players alternate turns.
The first player whose total score is 20 or greater wins.
Click "New Game" (or reload the page) to reset scores and start over.
Controls
Roll — roll the die and add the result to the current player's score.
New Game — reset all scores and start a fresh game.
Features
Two-player turn-based gameplay
Score tracking for both players
Minimal, responsive UI
Hosted as a GitHub Pages demo
Tech stack
HTML
CSS
JavaScript
Project structure
index.html — main page and UI
style.css — styles
script.js — game logic
assets/ — (optional) images and other static assets
Run locally
Clone the repo: git clone https://github.com/sounaksarbadhikary/Dice-rolling-game.git
Open index.html in your browser, OR serve the folder with a local static server:
Python 3: python -m http.server 8000 then open http://localhost:8000
Customize target score
To change the winning threshold (default: 20), open script.js and update the constant or value that represents the target score (search for 20 or a variable named something like TARGET_SCORE).

Contributing
Contributions and suggestions are welcome.

Open an issue for bugs or feature requests.
Fork the repository, create a feature branch, and open a pull request.
Keep changes focused and include a brief description.
Contact
Repository: https://github.com/sounaksarbadhikary/Dice-rolling-game
Owner: sounaksarbadhikary
