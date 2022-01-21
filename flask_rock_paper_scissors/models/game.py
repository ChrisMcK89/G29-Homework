class Game():
    
    def __init__(self, player_1, player_2):
        self.player_1 = player_1
        self.player_2 = player_2
    
    def play(self):
        if self.player_1 == "rock" and self.player_2 == "scissors":
            return "Player 1 wins with Rock!"
        elif self.player_1 == "rock" and self.player_2 == "paper":
            return "Player 2 wins with paper!"
        elif self.player_1 == "paper" and self.player_2 == "rock":
            return "Player 1 wins with paper!"
        elif self.player_1 == "paper" and self.player_2 == "scissors":
            return "Player 2 wins with scissors!"
        elif self.player_1 == "scissors" and self.player_2 == "rock":
            return "Player 2 wins with rock"
        elif self.player_1 == "scissors" and self.player_2 == "paper":
            return "Player 1 wins with scissors"
        elif self.player_1 == self.player_2:
            return "DRAW!"


