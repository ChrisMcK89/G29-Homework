class Game():
    
    def __init__(self, player_1, player_2):
        self.player_1 = player_1
        self.player_2 = player_2
    
    def play(self):
        if self.player_1 == "rock" and self.player_2 == "scissors":
            return True
        elif self.player_1 == "rock" and self.player_2 == "paper":
            return False
        elif self.player_1 == "paper" and self.player_2 == "rock":
            return True
        elif self.player_1 == "paper" and self.player_2 == "scissors":
            return False
        elif self.player_1 == "scissors" and self.player_2 == "rock":
            return False
        elif self.player_1 == "scissors" and self.player_2 == "paper":
            return True
        elif self.player_1 == self.player_2:
            return None


