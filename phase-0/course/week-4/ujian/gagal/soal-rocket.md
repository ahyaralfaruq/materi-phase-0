(Rocket) Is the King in check ?

source : https://www.codewars.com/kata/5e28ae347036fa001a504bbe/train/javascript


You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

The array will include 64 squares which can contain the following characters :

'♔' for the black King;
'♛' for a white Queen;
'♝' for a white Bishop;
'♞' for a white Knight;
'♜' for a white Rook;
'♟' for a white Pawn;

' ' (a space) if there is no piece on that square.
Note : these are actually inverted-color chess Unicode characters because the codewars dark theme makes the white appear black and vice versa. Use the characters shown above.

There will always be exactly one king, which is the black king, whereas all the other pieces are white.
The board is oriented from Black's perspective.
Remember that pawns can only move and take forward.
Also be careful with the pieces' lines of sight ;-) .

The input will always be valid, no need to validate it. To help you visualize the position, tests will print a chessboard to show you the problematic cases. Looking like this :

|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♜ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♔ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
